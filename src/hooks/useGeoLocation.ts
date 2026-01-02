'use client';

import { useState, useEffect } from 'react';

// Map country codes to dial codes
const countryToDialCode: Record<string, string> = {
    'IN': '+91',
    'US': '+1',
    'GB': '+44',
    'AE': '+971',
    'AU': '+61',
    'CA': '+1',
    'DE': '+49',
    'FR': '+33',
    'SG': '+65',
    'NL': '+31',
    'SA': '+966',
    'QA': '+974',
    'KW': '+965',
    'OM': '+968',
    'BH': '+973',
    'ZA': '+27',
    'NG': '+234',
    'KE': '+254',
    'EG': '+20',
    'JP': '+81',
    'KR': '+82',
    'CN': '+86',
    'HK': '+852',
    'MY': '+60',
    'ID': '+62',
    'TH': '+66',
    'PH': '+63',
    'VN': '+84',
    'BD': '+880',
    'PK': '+92',
    'LK': '+94',
    'NP': '+977',
    'IT': '+39',
    'ES': '+34',
    'PT': '+351',
    'CH': '+41',
    'AT': '+43',
    'BE': '+32',
    'SE': '+46',
    'NO': '+47',
    'DK': '+45',
    'FI': '+358',
    'IE': '+353',
    'NZ': '+64',
    'BR': '+55',
    'MX': '+52',
    'AR': '+54',
    'CL': '+56',
    'CO': '+57',
    'PE': '+51',
    'IL': '+972',
    'TR': '+90',
    'RU': '+7',
    'PL': '+48',
    'CZ': '+420',
    'HU': '+36',
    'RO': '+40',
    'GR': '+30',
    'UA': '+380',
};

const COOKIE_LOC_KEY = 'loc';
const COOKIE_DIAL_KEY = 'country_code';

interface GeoLocation {
    countryCode: string | null;
    dialCode: string;
    loading: boolean;
    error: string | null;
}

/**
 * Custom hook to detect user's country based on Cloudflare trace
 * Fast and reliable - only runs once, then caches in Cookies
 */
// Helper to get cookie
const getCookie = (name: string): string | null => {
    if (typeof document === 'undefined') return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
};

// Helper to set cookie (expires in 30 days)
const setCookie = (name: string, value: string) => {
    if (typeof document === 'undefined') return;
    const date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
};

export function useGeoLocation(defaultDialCode: string = '+91'): GeoLocation {
    const [location, setLocation] = useState<GeoLocation>(() => {
        // Check Cookies on initialization
        if (typeof window !== 'undefined') {
            try {
                const cachedDialCode = getCookie(COOKIE_DIAL_KEY);
                const cachedCountry = getCookie(COOKIE_LOC_KEY);

                if (cachedDialCode) {
                    return {
                        countryCode: cachedCountry,
                        dialCode: cachedDialCode,
                        loading: false,
                        error: null,
                    };
                }
            } catch (e) {
                // ignore
            }
        }
        return {
            countryCode: null,
            dialCode: defaultDialCode,
            loading: true,
            error: null,
        };
    });

    useEffect(() => {
        // If already cached, don't fetch again
        if (typeof window !== 'undefined') {
            const cachedDialCode = getCookie(COOKIE_DIAL_KEY);
            if (cachedDialCode) {
                return;
            }
        }

        const detectCountry = async () => {
            // Try multiple endpoints in order
            const endpoints = [
                `https://cloudflare.com/cdn-cgi/trace?v=${Date.now()}`,
                `https://www.cloudflare.com/cdn-cgi/trace?v=${Date.now()}`,
                `https://ipapi.co/country/` // Simple fallback
            ];

            for (const endpoint of endpoints) {
                try {
                    const response = await fetch(endpoint, {
                        signal: AbortSignal.timeout(3000) // 3s per attempt
                    });

                    if (!response.ok) continue;

                    const text = (await response.text()).trim();

                    // Parse the response
                    let countryCode = null;
                    if (endpoint.includes('cloudflare')) {
                        const lines = text.split('\n');
                        const locLine = lines.find(line => line.trim().startsWith('loc='));
                        countryCode = locLine ? locLine.split('=')[1].trim() : null;
                    } else {
                        // For ipapi.co return is direct country code (e.g. "IN")
                        countryCode = text;
                    }

                    if (countryCode && /^[A-Z]{2}$/.test(countryCode)) {
                        const dialCode = countryToDialCode[countryCode] || defaultDialCode;

                        // Save to Cookies
                        try {
                            setCookie(COOKIE_LOC_KEY, countryCode);
                            setCookie(COOKIE_DIAL_KEY, dialCode);
                        } catch (e) {
                            // ignore
                        }

                        setLocation({
                            countryCode,
                            dialCode,
                            loading: false,
                            error: null,
                        });
                        return; // Success!
                    }
                } catch (e) {
                    console.warn(`Failed to fetch from ${endpoint}:`, e);
                }
            }

            // If we reach here, all endpoints failed
            setLocation({
                countryCode: null,
                dialCode: defaultDialCode,
                loading: false,
                error: 'All geolocation endpoints failed',
            });
        };

        detectCountry();
    }, [defaultDialCode]);

    return location;
}

export default useGeoLocation;

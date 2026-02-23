'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';

import List from '@/components/sections/list';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { CheckCircle, Shield, Zap, LayoutTemplate } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
    return (
        <>
            <HeroSection
                headline="Seamless ERPNext v16 Migration Services"
                highlightWords={["Seamless", "Migration", "Services"]}
                description="Upgrade your business to ERPNext v16 with confidence. Our expert team ensures a secure, zero-downtime migration from v15 or earlier versions, unlocking 2x performance gains and new features."
                primaryButton={{
                    text: 'Get Migration Quote',
                    action: "#contact-section"
                }}
                secondaryButton={{
                    text: 'Explore v16 Features',
                    action: () => {
                        window.open('/erpnext/insights/whats-new-erpnext-version-16', '_blank');
                    },
                }}
                heroImage={{
                    alt: 'ERPNext Migration Services',
                    src: '/images/erpnext v16.jpeg',
                }}
            />

            {/* Why Upgrade Section */}
            <Section>
                <div className="container-custom py-8">
                    <h2 className="text-3xl font-bold mb-8 text-center text-[#1A5276]">Why Upgrade to ERPNext Version 16?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Zap className="w-10 h-10 text-primary mb-2" />
                                <CardTitle>2x Performance Boost</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Experience lightning-fast page loads and report generation with the new Frappe Caffeine caching architecture.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <LayoutTemplate className="w-10 h-10 text-primary mb-2" />
                                <CardTitle>Modern UI/UX</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Enjoy a completely redesigned, intuitive interface that improves user adoption and productivity across your organization.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Shield className="w-10 h-10 text-primary mb-2" />
                                <CardTitle>Long-Term Security</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Stay protected with the latest security patches, Python 3.12 support, and updated dependencies for peace of mind.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* Migration Methodology */}
            <Section useGradient>
                <div className="container-custom py-8">
                    <h2 className="text-3xl font-bold mb-8 text-center text-[#1A5276]">Our 6-Step Migration Methodology</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                                <div>
                                    <h3 className="font-semibold text-lg">System Audit & Assessment</h3>
                                    <p className="text-muted-foreground">Comprehensive review of your current setup, database size, and custom apps.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                                <div>
                                    <h3 className="font-semibold text-lg">Environment Preparation</h3>
                                    <p className="text-muted-foreground">Setting up a v16-ready server with Node 18, Python 3.12, and MariaDB 10.6+.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                                <div>
                                    <h3 className="font-semibold text-lg">Staging Migration</h3>
                                    <p className="text-muted-foreground">Executing a trial migration on a clone of your data to identify issues safely.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                                <div>
                                    <h3 className="font-semibold text-lg">Custom App Compatibility</h3>
                                    <p className="text-muted-foreground">Refactoring custom code and scripts to match v16 API and structure changes.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">5</div>
                                <div>
                                    <h3 className="font-semibold text-lg">UAT & Validation</h3>
                                    <p className="text-muted-foreground">User Acceptance Testing to ensure all critical workflows function correctly.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">6</div>
                                <div>
                                    <h3 className="font-semibold text-lg">Production Golive</h3>
                                    <p className="text-muted-foreground">Final data sync and switchover during a scheduled maintenance window.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img src="/images/erp_migration_flow.jpeg" alt="Migration Process" className="w-full max-w-md rounded-lg shadow-xl" />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Technical Prerequisites */}
            <Section>
                <div className="container-custom py-8">
                    <List
                        title="Technical Requirements for ERPNext v16"
                        items={[
                            "Operating System: Ubuntu 22.04 LTS or Debian 12 is recommended for production environments.",
                            "Python Version: Must be upgraded to Python 3.12. Older versions (3.10/3.11) are deprecated.",
                            "Node.js: Requires Node.js version 18 or 20 (LTS) for frontend assets build.",
                            "Database: MariaDB 10.6+ or PostgreSQL 14+ is required for optimal performance.",
                            "Caching: Redis 7.0+ is essential to support the new Frappe Caffeine caching layer."
                        ]}
                    />
                </div>
            </Section>

            {/* Service Packages */}
            <Section useGradient>
                <div className="container-custom py-8">
                    <h2 className="text-3xl font-bold mb-10 text-center text-[#1A5276]">Migration Service Packages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Package 1 */}
                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="text-xl">Standard Migration</CardTitle>
                                <p className="text-sm text-muted-foreground">For vanilla instances</p>
                            </CardHeader>
                            <CardContent className="flex-grow space-y-2">
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                    <span className="text-sm">Upgrade specific to standard modules</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                    <span className="text-sm">Data integrity verification</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                    <span className="text-sm">server environment setup</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                    <span className="text-sm">1-week post-go-live support</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Link href="#contact-section" className="w-full bg-primary/10 text-primary hover:bg-primary/20 p-2 rounded text-center transition-colors font-medium">Inquire Now</Link>
                            </CardFooter>
                        </Card>

                        {/* Package 2 */}
                        <Card className="flex flex-col border-primary border-2 relative">
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-bl">Popular</div>
                            <CardHeader>
                                <CardTitle className="text-xl">Custom App Migration</CardTitle>
                                <p className="text-sm text-muted-foreground">For customized instances</p>
                            </CardHeader>
                            <CardContent className="flex-grow space-y-2">
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                    <span className="text-sm">All features of Standard Migration</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                    <span className="text-sm">Code refactoring for v16 API</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                    <span className="text-sm">Custom script & print format updates</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                    <span className="text-sm">2-weeks post-go-live support</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Link href="#contact-section" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 p-2 rounded text-center transition-colors font-medium">Request Audit</Link>
                            </CardFooter>
                        </Card>

                        {/* Package 3 */}
                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="text-xl">Enterprise Transformation</CardTitle>
                                <p className="text-sm text-muted-foreground">Complex, high-volume data</p>
                            </CardHeader>
                            <CardContent className="flex-grow space-y-2">
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                    <span className="text-sm">Multi-server architecture setup</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                    <span className="text-sm">Performance tuning & load testing</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                    <span className="text-sm">Dedicated project manager</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                    <span className="text-sm">1-month priority support</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Link href="#contact-section" className="w-full bg-primary/10 text-primary hover:bg-primary/20 p-2 rounded text-center transition-colors font-medium">Contact Sales</Link>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* Trust & CTA */}
            <Section id="contact-section">
                <div className="container-custom py-8">
                </div>
            </Section>
        </>
    );
}

'use client';

import { useEffect } from 'react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Specifically target ChunkLoadErrors
    // These happen when a user's local manifest is out of sync with the server
    if (
      error.name === 'ChunkLoadError' ||
      error.message.includes('Loading chunk')
    ) {
      console.warn('New version detected, refreshing page...');
      window.location.reload();
    }

    // Log the error to your monitoring service (Sentry, LogRocket, etc.)
    console.error('Captured Error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-xl font-bold">Something went wrong</h2>
      <p className="text-gray-600 mb-4">We encountered a loading error.</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}
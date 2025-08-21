'use client';

type Fbq = (
  event: 'track' | 'trackCustom',
  eventName: 'Lead' | 'PageView' | 'chamounozap',
  options?: Record<string, unknown>
) => void;

export const fbq: Fbq = (...args) => {
  if (window.fbq) {
    window.fbq(...args);
  }
};

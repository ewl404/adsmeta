'use client';

type Fbq = (
  event: 'track',
  eventName: 'Lead' | 'PageView',
  options?: Record<string, unknown>
) => void;

export const fbq: Fbq = (...args) => {
  if (window.fbq) {
    window.fbq(...args);
  }
};

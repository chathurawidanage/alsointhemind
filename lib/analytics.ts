/**
 * Umami Analytics helper functions and types.
 */

declare global {
  interface Window {
    umami?: {
      track: {
        (eventName: string, eventData?: Record<string, string | number | boolean>): void;
        (customFunction: (props: Record<string, unknown>) => Record<string, unknown>): void;
      };
    };
  }
}

export function trackEvent(
  eventName: string,
  eventData?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && window.umami?.track) {
    try {
      window.umami.track(eventName, eventData);
    } catch {
      // Ignore tracking errors if analytics is blocked by adblockers or privacy extensions
    }
  }
}

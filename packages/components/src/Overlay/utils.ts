import { useEffect } from 'react';

export function useListener(node, eventName: string, callback, condition) {
  useEffect(() => {
    if (condition) {
      window.addEventListener(eventName, callback, false);

      return () => {
        window.removeEventListener(eventName, callback, false);
      }
    }
  }, [condition]);
}
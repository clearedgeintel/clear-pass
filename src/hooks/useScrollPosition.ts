import { useEffect, useRef } from 'react';
import { storage } from '@/lib/storage/storage';

export function useScrollPosition(key: string) {
  const restored = useRef(false);

  // Restore scroll position on mount
  useEffect(() => {
    if (restored.current) return;
    restored.current = true;

    storage.getScrollPosition(key).then((pos) => {
      if (pos > 0) {
        window.scrollTo({ top: pos, behavior: 'instant' as ScrollBehavior });
      }
    });
  }, [key]);

  // Save scroll position on scroll (debounced)
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        storage.saveScrollPosition(key, window.scrollY);
      }, 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [key]);
}

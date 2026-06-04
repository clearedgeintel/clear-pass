import { useState, useMemo, useCallback } from 'react';
import { allModules } from '@/content/modules';
import { searchContent, type SearchResult } from '@/lib/search';

export function useSearch() {
  const [query, setQuery] = useState('');

  const results: SearchResult[] = useMemo(() => {
    if (query.trim().length < 2) return [];
    return searchContent(allModules, query);
  }, [query]);

  const clearSearch = useCallback(() => setQuery(''), []);

  return { query, setQuery, results, clearSearch };
}

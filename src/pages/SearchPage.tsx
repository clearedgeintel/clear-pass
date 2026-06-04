import { useNavigate } from 'react-router-dom';
import { Search, BookOpen, FileText, Layers } from 'lucide-react';
import { useSearch } from '@/hooks/useSearch';
import { Card } from '@/components/ui/Card';

const TYPE_ICON = {
  lesson: BookOpen,
  term: FileText,
  flashcard: Layers,
};

const TYPE_LABEL = {
  lesson: 'Lesson',
  term: 'Key Term',
  flashcard: 'Flashcard',
};

export function SearchPage() {
  const { query, setQuery, results } = useSearch();
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in">
      <div className="relative mb-4">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search lessons, terms, flashcards..."
          autoFocus
          className="w-full pl-10 pr-4 py-3 rounded-card border border-border bg-surface text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary text-sm"
        />
      </div>

      {query.length > 0 && query.length < 2 && (
        <p className="text-sm text-text-muted text-center py-4">Type at least 2 characters.</p>
      )}

      {query.length >= 2 && results.length === 0 && (
        <p className="text-sm text-text-muted text-center py-4">No results found for "{query}".</p>
      )}

      <div className="flex flex-col gap-2">
        {results.map((r, i) => {
          const Icon = TYPE_ICON[r.type];
          return (
            <Card
              key={`${r.type}-${r.moduleId}-${i}`}
              className="cursor-pointer hover:border-primary/30 transition-colors"
              onClick={() => {
                if (r.type === 'flashcard') {
                  navigate(`/flashcards/${r.moduleId}`);
                } else {
                  navigate(`/modules/${r.moduleId}`);
                }
              }}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <Icon size={16} className="text-text-muted" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-muted">{TYPE_LABEL[r.type]}</span>
                    <span className="text-xs text-text-muted">in {r.moduleTitle}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary truncate">{r.title}</h3>
                  <p className="text-xs text-text-secondary line-clamp-2 mt-0.5">{r.snippet}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

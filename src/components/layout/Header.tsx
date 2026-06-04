import { useNavigate, useLocation } from 'react-router-dom';
import { Search, ArrowLeft, Flame } from 'lucide-react';
import { APP_NAME } from '@/config';
import { useProgress } from '@/contexts/ProgressContext';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { progress } = useProgress();
  const isHome = location.pathname === '/';

  return (
    <header className="sticky top-0 z-30 bg-surface/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between h-14 px-4 max-w-3xl mx-auto">
        <div className="flex items-center gap-2">
          {!isHome && (
            <button
              onClick={() => navigate(-1)}
              className="text-text-secondary hover:text-text-primary p-1 -ml-1"
              aria-label="Go back"
            >
              <ArrowLeft size={22} />
            </button>
          )}
          {isHome && (
            <h1 className="text-lg font-bold text-text-primary">{APP_NAME}</h1>
          )}
        </div>

        <div className="flex items-center gap-3">
          {progress.currentStreak > 0 && (
            <div className="flex items-center gap-1 text-warning" title={`${progress.currentStreak}-day streak`}>
              <Flame size={18} />
              <span className="text-sm font-bold">{progress.currentStreak}</span>
            </div>
          )}
          <button
            onClick={() => navigate('/search')}
            className="text-text-secondary hover:text-text-primary p-1"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}

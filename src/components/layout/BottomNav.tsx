import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Layers, Brain, Settings } from 'lucide-react';
import { clsx } from 'clsx';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/modules', icon: BookOpen, label: 'Learn' },
  { to: '/flashcards', icon: Layers, label: 'Cards' },
  { to: '/quiz', icon: Brain, label: 'Quiz' },
  { to: '/settings', icon: Settings, label: 'Settings' },
];

export function BottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-surface border-t border-border safe-area-bottom"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-around max-w-lg mx-auto h-16 px-2">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              clsx(
                'flex flex-col items-center justify-center gap-0.5 py-1 px-3 rounded-lg transition-colors min-w-[4rem]',
                isActive
                  ? 'text-primary'
                  : 'text-text-muted hover:text-text-secondary'
              )
            }
          >
            <Icon size={22} />
            <span className="text-[10px] font-medium">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

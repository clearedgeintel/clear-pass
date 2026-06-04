import type { ReactNode } from 'react';
import { Header } from './Header';
import { BottomNav } from './BottomNav';

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1 pb-20 max-w-3xl mx-auto w-full px-4 py-4">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}

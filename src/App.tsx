import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SettingsProvider } from '@/contexts/SettingsContext';
import { ProgressProvider } from '@/contexts/ProgressContext';
import { AuthProvider } from '@/contexts/AuthContext';
import { AppShell } from '@/components/layout/AppShell';
import { DashboardPage } from '@/pages/DashboardPage';
import { ModulesPage } from '@/pages/ModulesPage';
import { ModuleDetailPage } from '@/pages/ModuleDetailPage';
import { ReaderPage } from '@/pages/ReaderPage';
import { FlashcardsPage } from '@/pages/FlashcardsPage';
import { QuizPage } from '@/pages/QuizPage';
import { MockExamPage } from '@/pages/MockExamPage';
import { SearchPage } from '@/pages/SearchPage';
import { SettingsPage } from '@/pages/SettingsPage';

export default function App() {
  return (
    <BrowserRouter>
      <SettingsProvider>
        <ProgressProvider>
          <AuthProvider>
            <AppShell>
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/modules" element={<ModulesPage />} />
                <Route path="/modules/:moduleId" element={<ModuleDetailPage />} />
                <Route path="/reader/:moduleId" element={<ReaderPage />} />
                <Route path="/flashcards" element={<FlashcardsPage />} />
                <Route path="/flashcards/:moduleId" element={<FlashcardsPage />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/quiz/mock" element={<MockExamPage />} />
                <Route path="/quiz/:moduleId" element={<QuizPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="*" element={
                  <div className="text-center py-12">
                    <h1 className="text-xl font-bold text-text-primary mb-2">Page Not Found</h1>
                    <p className="text-text-muted">The page you're looking for doesn't exist.</p>
                  </div>
                } />
              </Routes>
            </AppShell>
          </AuthProvider>
        </ProgressProvider>
      </SettingsProvider>
    </BrowserRouter>
  );
}

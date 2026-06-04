import { useParams, useNavigate } from 'react-router-dom';
import { moduleMap, allModules, getAllFlashcards } from '@/content/modules';
import { DOMAIN_INFO } from '@/content/course';
import { FlashcardDeck } from '@/components/flashcard/FlashcardDeck';
import { Card } from '@/components/ui/Card';
import { useProgress } from '@/contexts/ProgressContext';
import { getDueCount } from '@/lib/sm2';
import { Layers, ChevronRight } from 'lucide-react';

export function FlashcardsPage() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { progress } = useProgress();

  // Due Today smart deck
  if (moduleId === 'due') {
    const allCards = getAllFlashcards();
    return (
      <div className="animate-fade-in">
        <FlashcardDeck cards={allCards} title="Due Today" />
      </div>
    );
  }

  // Specific module deck
  if (moduleId) {
    const mod = moduleMap[moduleId];
    if (!mod) {
      return <p className="text-text-muted text-center py-12">Module not found.</p>;
    }
    return (
      <div className="animate-fade-in">
        <FlashcardDeck cards={mod.flashcards} title={mod.title} />
      </div>
    );
  }

  // Deck picker (no moduleId)
  const totalDue = getDueCount(progress.flashcardStates);

  return (
    <div className="animate-fade-in">
      <h1 className="text-xl font-bold text-text-primary mb-4">Flashcards</h1>

      {/* Due Today card */}
      <Card
        className="mb-4 cursor-pointer hover:border-primary/30 transition-colors"
        onClick={() => navigate('/flashcards/due')}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Layers size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-text-primary">Due Today</h3>
              <p className="text-sm text-text-muted">{totalDue} cards due across all modules</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-text-muted" />
        </div>
      </Card>

      {/* Per-module decks */}
      <h2 className="text-sm font-semibold text-text-secondary mb-3 mt-6">By Module</h2>
      <div className="flex flex-col gap-2">
        {allModules
          .filter((m) => m.flashcards.length > 0)
          .map((mod) => {
            const domainInfo = DOMAIN_INFO[mod.domain];
            return (
              <Card
                key={mod.id}
                className="cursor-pointer hover:border-primary/30 transition-colors"
                onClick={() => navigate(`/flashcards/${mod.id}`)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className={`text-xs font-medium ${domainInfo.color}`}>
                      {domainInfo.label}
                    </span>
                    <h3 className="text-sm font-semibold text-text-primary">{mod.title}</h3>
                    <p className="text-xs text-text-muted">{mod.flashcards.length} cards</p>
                  </div>
                  <ChevronRight size={18} className="text-text-muted" />
                </div>
              </Card>
            );
          })}
      </div>
    </div>
  );
}

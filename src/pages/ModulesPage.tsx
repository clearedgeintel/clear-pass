import { allModules } from '@/content/modules';
import { DOMAIN_INFO } from '@/content/course';
import { ModuleCard } from '@/components/module/ModuleCard';
import type { Domain } from '@/types/content';

const DOMAINS: Domain[] = ['general', 'life', 'health', 'mn_law'];

export function ModulesPage() {
  return (
    <div className="animate-fade-in">
      <h1 className="text-xl font-bold text-text-primary mb-4">Study Modules</h1>

      {DOMAINS.map((domain) => {
        const modules = allModules.filter((m) => m.domain === domain);
        const info = DOMAIN_INFO[domain];
        return (
          <div key={domain} className="mb-6">
            <h2 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${info.color}`}>
              {info.label}
            </h2>
            <div className="flex flex-col gap-3">
              {modules.map((mod) => (
                <ModuleCard key={mod.id} module={mod} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

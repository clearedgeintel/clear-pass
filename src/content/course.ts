import type { Domain } from '@/types/content';

export const DOMAIN_INFO: Record<Domain, { label: string; description: string; color: string }> = {
  general: {
    label: 'General',
    description: 'Core insurance concepts shared by Life & Health',
    color: 'text-blue-600',
  },
  life: {
    label: 'Life Insurance',
    description: 'Life insurance policies, annuities, riders, and taxation',
    color: 'text-emerald-600',
  },
  health: {
    label: 'Health Insurance',
    description: 'Health, disability, Medicare, managed care, and group health',
    color: 'text-amber-600',
  },
  mn_law: {
    label: 'Minnesota Law',
    description: 'MN-specific regulations, licensing, and provisions',
    color: 'text-violet-600',
  },
};

import { MapPin } from 'lucide-react';

export function MNCallout({ text }: { text: string }) {
  return (
    <div className="bg-mn-callout-bg border-l-4 border-mn-callout rounded-r-card p-4 my-4">
      <div className="flex items-start gap-2">
        <MapPin size={18} className="text-mn-callout flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-bold text-mn-callout uppercase tracking-wider">
            Minnesota Note
          </span>
          <p className="text-sm text-text-primary mt-1">{text}</p>
        </div>
      </div>
    </div>
  );
}

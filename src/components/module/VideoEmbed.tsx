import type { VideoEmbed as VideoEmbedType } from '@/types/content';

export function VideoEmbed({ video }: { video: VideoEmbedType }) {
  return (
    <div className="my-4">
      <h4 className="text-sm font-medium text-text-secondary mb-2">{video.title}</h4>
      <div className="relative w-full pt-[56.25%] rounded-card overflow-hidden bg-surface-alt">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}

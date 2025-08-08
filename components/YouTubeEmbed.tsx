import { asset } from '@/utils/asset';

export default function YouTubeEmbed({ id, title, poster }: { id?: string; title: string; poster?: string }) {
  if (!id) {
    return (
      <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
        {poster ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={asset(poster)} alt={title} className="w-full h-full object-cover opacity-60" />
        ) : null}
        <div className="absolute text-gray-700">Video coming soon</div>
      </div>
    );
  }
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${encodeURIComponent(id)}?rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

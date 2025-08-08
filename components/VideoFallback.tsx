import { asset } from '@/utils/asset';

export default function VideoFallback({ src, poster, title }: { src?: string; poster?: string; title?: string }) {
  if (!src) return null;
  const videoSrc = asset(src);
  const posterSrc = poster ? asset(poster) : undefined;
  return (
    <video className="w-full rounded-lg" controls poster={posterSrc} aria-label={title}>
      <source src={videoSrc} />
      Your browser does not support the video tag.
    </video>
  );
}

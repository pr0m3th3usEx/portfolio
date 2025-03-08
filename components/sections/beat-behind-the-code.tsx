import Tag from '../ui/tag';

export default function BeatBehindTheCode() {
  return (
    <div className="flex flex-col gap-2">
      <Tag variant="outline" className="text-xs uppercase">
        The beat behind the code
      </Tag>

      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/20fG3BVTlZ0JJRlZFP5TQu?utm_source=generator"
        width="100%"
        height="152"
        allowFullScreen={false}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

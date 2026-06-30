interface ImageCardProps {
  image: string;
  title: string;
  liveUrl?: string;
}

const ImageCard = ({ image, title, liveUrl }: ImageCardProps) => {
  const content = (
    <>
      <img
        src={image}
        alt={title}
        className="w-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
      />

      {liveUrl && (
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md">
            View Live →
          </span>
        </div>
      )}
    </>
  );

  if (liveUrl) {
    return (
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-2xl shadow-xl"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-xl">
      {content}
    </div>
  );
};

export default ImageCard;
interface BrowserMockupProps {
  image: string;
  title: string;
  liveUrl?: string;
}

const BrowserMockup = ({ image, title, liveUrl }: BrowserMockupProps) => {
  const content = (
    <>
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />
      </div>

      <img
        src={image}
        alt={title}
        className="w-full transition-transform duration-500 group-hover:scale-105"
      />

      {liveUrl && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
        className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-xl"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-xl">
      {content}
    </div>
  );
};

export default BrowserMockup;
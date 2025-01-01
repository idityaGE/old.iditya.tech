interface VideoPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  const getYouTubeId = (url: string): string | null => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    return match ? match[1] : null;
  };

  const isYouTubeUrl = url.includes('youtube.com') || url.includes('youtu.be');
  const youtubeId = isYouTubeUrl ? getYouTubeId(url) : null;

  if (youtubeId) {
    return (
      <div className="relative w-full pt-[56.25%] mb-4">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <video
      className="w-full max-h-[70vh] mb-4 rounded-lg"
      controls
      src={url}
      muted
      autoPlay
    >
      Your browser does not support the video tag.
    </video>
  );
};

export { VideoPlayer };
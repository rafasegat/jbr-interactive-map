import './VideoWrapper.scss';

const VideoWrapper = ({ src }: { src: string }) => {
  // Check if src is a YouTube URL
  const isYouTubeUrl = (url: string): boolean => {
    return /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)/.test(
      url
    );
  };

  // Extract video ID from YouTube URL
  const getYouTubeVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  };

  // Convert YouTube URL to embed URL
  const getYouTubeEmbedUrl = (url: string): string => {
    const videoId = getYouTubeVideoId(url);
    if (!videoId) return url;
    return `https://www.youtube.com/embed/${videoId}`;
  };

  if (isYouTubeUrl(src)) {
    const embedUrl = getYouTubeEmbedUrl(src);
    return (
      <div className="wrapper">
        <iframe
          className="videoInsert youtube-iframe"
          src={embedUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <video
        className="videoInsert"
        autoPlay={true}
        muted={true}
        loop={true}
        controls={true}
      >
        <source src={src} type="video/mp4" />
        {/* <source src="movie.ogg" type="video/ogg" /> */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoWrapper;

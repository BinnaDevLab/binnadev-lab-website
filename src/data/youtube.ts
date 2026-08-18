export interface YouTubeVideo {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  youtubeUrl: string;
}

// Replace with the real YouTube video ID for the channel intro/overview video.
export const channelIntroVideoId = "placeholder_video_id";

export const youtubeVideos: YouTubeVideo[] = [
  {
    id: "yt-1",
    title: "Deconstructing AMM Vulnerabilities",
    duration: "45:20",
    thumbnail:
      "/images/shared/shared-asset-5.jpeg",
    youtubeUrl: "https://youtube.com/@BinnaDev",
  },
  {
    id: "yt-2",
    title: "Formal Verification in Practice",
    duration: "32:15",
    thumbnail:
      "/images/shared/shared-asset-3.jpeg",
    youtubeUrl: "https://youtube.com/@BinnaDev",
  },
  {
    id: "yt-3",
    title: "Stateful Fuzzing with Echidna",
    duration: "1:05:10",
    thumbnail:
      "/images/shared/shared-asset-1.jpeg",
    youtubeUrl: "https://youtube.com/@BinnaDev",
  },
];


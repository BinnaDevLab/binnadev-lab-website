export interface YouTubeVideo {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  youtubeUrl: string;
}

export const channelIntroVideoId = "UJ01Y8fNR6U";

export const youtubeVideos: YouTubeVideo[] = [
  {
    id: "yt-1",
    title:
      "The Future in Tech: A Beginner's Guide to Transitioning into Web3 | WN2.0",
    duration: "1:45:00",
    thumbnail: "/images/shared/shared-asset-20.jpeg",
    youtubeUrl: "https://youtu.be/EwM8dV_oYgQ",
  },
  {
    id: "yt-2",
    title: "The Future in Tech: Design and Branding | WN2.0",
    duration: "1:46:00",
    thumbnail: "/images/shared/shared-asset-8.jpeg",
    youtubeUrl: "https://youtu.be/e26si5CX02U",
  },
  {
    id: "yt-3",
    title: "The Future in Tech: Community and Networking Engagement | WN2.0",
    duration: "1:30:00",
    thumbnail: "/images/shared/shared-asset-2.jpeg",
    youtubeUrl: "https://youtu.be/UJ01Y8fNR6U",
  },
];

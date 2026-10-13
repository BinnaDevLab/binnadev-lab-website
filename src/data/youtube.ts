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
    title: "Why Trust the Code? Immutability, Hacks & Trade-offs",
    duration: "42:05",
    thumbnail: "/images/youtube/thumbnail_3.jpeg",
    youtubeUrl: "https://youtu.be/UWpmbW5uU0w",
  },
  {
    id: "yt-2",
    title: "What Is Blockchain? History, Trust & Ethereum",
    duration: "1:03:00",
    thumbnail: "/images/youtube/thumbnail_1.jpeg",
    youtubeUrl: "https://youtu.be/MTpR9-JL1ig",
  },
  {
    id: "yt-3",
    title:
      "The DAO, Parity & Ronin: What $965M in Losses Teaches About Smart Contracts",
    duration: "08:26",
    thumbnail: "/images/youtube/thumbnail_2.jpeg",
    youtubeUrl: "https://youtu.be/_4kpPPTEQbk",
  },
];

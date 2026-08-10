export interface YouTubeVideo {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
}

export const youtubeVideos: YouTubeVideo[] = [
  {
    id: "yt-1",
    title: "Deconstructing AMM Vulnerabilities",
    duration: "45:20",
    thumbnail:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=2",
  },
  {
    id: "yt-2",
    title: "Formal Verification in Practice",
    duration: "32:15",
    thumbnail:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=2",
  },
  {
    id: "yt-3",
    title: "Stateful Fuzzing with Echidna",
    duration: "1:05:10",
    thumbnail:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=2",
  },
];

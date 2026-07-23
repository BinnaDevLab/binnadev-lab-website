export interface GalleryItem {
  id: string;
  title: string;
  category: "Workshop" | "Whiteboarding" | "Hackathon" | "Conference" | "Deep Work" | "Architecture";
  imageUrl: string;
}

export const galleryPool: GalleryItem[] = [
  { id: "g1", title: "Architecture Whiteboarding", category: "Whiteboarding", imageUrl: "https://images.pexels.com/photos/7516361/pexels-photo-7516361.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },
  { id: "g2", title: "Threat Modeling Session", category: "Workshop", imageUrl: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },
  { id: "g3", title: "ETHGlobal Collaboration", category: "Hackathon", imageUrl: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },
  { id: "g4", title: "Web3 Security Summit", category: "Conference", imageUrl: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },
  { id: "g5", title: "Zero Knowledge Proofs", category: "Architecture", imageUrl: "https://images.pexels.com/photos/17489155/pexels-photo-17489155/free-photo-of-geometric-shapes.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },
  { id: "g6", title: "State Transition Audit", category: "Deep Work", imageUrl: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },
  { id: "g7", title: "Late Night Optimization", category: "Deep Work", imageUrl: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },
  { id: "g8", title: "Cross-Chain Protocol Design", category: "Whiteboarding", imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },
  { id: "g9", title: "Live Exploitation Demo", category: "Workshop", imageUrl: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },
  { id: "g10", title: "Mentorship Session", category: "Workshop", imageUrl: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },
  { id: "g11", title: "Data Flow Analysis", category: "Architecture", imageUrl: "https://images.pexels.com/photos/1624895/pexels-photo-1624895.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },
  { id: "g12", title: "Security Keynote", category: "Conference", imageUrl: "https://images.pexels.com/photos/2774566/pexels-photo-2774566.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },
];

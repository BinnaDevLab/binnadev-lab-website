export interface GalleryItem {
  id: string;
  title: string;
  category: "Research" | "Engineering" | "Collaboration" | "Building" | "The Lab" | "Impact";
  imageUrl: string;
}

export const galleryPool: GalleryItem[] = [
  // 1. Research & Analysis
  { id: "g1", title: "Threat Modeling Analysis", category: "Research", imageUrl: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },
  { id: "g2", title: "Cryptoeconomic Research", category: "Research", imageUrl: "https://images.pexels.com/photos/7516361/pexels-photo-7516361.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },
  
  // 2. Engineering & Architecture
  { id: "g3", title: "Protocol Architecture", category: "Engineering", imageUrl: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },
  { id: "g4", title: "Invariant Testing", category: "Engineering", imageUrl: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },
  
  // 3. Collaboration & Whiteboarding
  { id: "g5", title: "System State Whiteboarding", category: "Collaboration", imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },
  { id: "g6", title: "Security Review Session", category: "Collaboration", imageUrl: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },
  
  // 4. Building & Execution
  { id: "g7", title: "Smart Contract Implementation", category: "Building", imageUrl: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },
  { id: "g8", title: "EVM Optimization", category: "Building", imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },
  
  // 5. The Lab Environment
  { id: "g9", title: "BinnaDev Headquarters", category: "The Lab", imageUrl: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },
  { id: "g10", title: "Late Night Operations", category: "The Lab", imageUrl: "https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },

  // 6. Output & Impact
  { id: "g11", title: "Global Deployment", category: "Impact", imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },
  { id: "g12", title: "Community Education", category: "Impact", imageUrl: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=2" },
];

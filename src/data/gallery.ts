export interface GalleryItem {
  id: string;
  title: string;
  category: "Research" | "Engineering" | "Collaboration" | "Building" | "The Lab" | "Impact";
  imageUrl: string;
}

export const galleryPool: GalleryItem[] = [
  // 1. Research & Analysis
  { id: "g1", title: "Threat Modeling Analysis", category: "Research", imageUrl: "/images/shared/shared-asset-3.jpeg" },
  { id: "g2", title: "Cryptoeconomic Research", category: "Research", imageUrl: "/images/gallery/gallery-asset-1.jpeg" },
  
  // 2. Engineering & Architecture
  { id: "g3", title: "Protocol Architecture", category: "Engineering", imageUrl: "/images/shared/shared-asset-5.jpeg" },
  { id: "g4", title: "Invariant Testing", category: "Engineering", imageUrl: "/images/gallery/gallery-asset-2.jpeg" },
  
  // 3. Collaboration & Whiteboarding
  { id: "g5", title: "System State Whiteboarding", category: "Collaboration", imageUrl: "/images/shared/shared-asset-1.jpeg" },
  { id: "g6", title: "Security Review Session", category: "Collaboration", imageUrl: "/images/gallery/gallery-asset-3.jpeg" },
  
  // 4. Building & Execution
  { id: "g7", title: "Smart Contract Implementation", category: "Building", imageUrl: "/images/shared/shared-asset-4.jpeg" },
  { id: "g8", title: "EVM Optimization", category: "Building", imageUrl: "/images/shared/shared-asset-2.jpeg" },
  
  // 5. The Lab Environment
  { id: "g9", title: "BinnaDev Headquarters", category: "The Lab", imageUrl: "/images/gallery/gallery-asset-4.jpeg" },
  { id: "g10", title: "Late Night Operations", category: "The Lab", imageUrl: "/images/gallery/gallery-asset-5.jpeg" },

  // 6. Output & Impact
  { id: "g11", title: "Global Deployment", category: "Impact", imageUrl: "/images/shared/shared-asset-1.jpeg" },
  { id: "g12", title: "Community Education", category: "Impact", imageUrl: "/images/gallery/gallery-asset-2.jpeg" },
];

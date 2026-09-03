export interface GalleryItem {
  id: string;
  title: string;
  category:
    | "Learning"
    | "Community"
    | "Collaboration"
    | "Building"
    | "The Lab"
    | "Impact";
  imageUrl: string;
}

export const galleryPool: GalleryItem[] = [
  // 1. Learning & Growth
  {
    id: "g1",
    title: "Learning Together",
    category: "Learning",
    imageUrl: "/images/gallery/gallery-asset-2.jpeg",
  },
  {
    id: "g2",
    title: "Growing Through Practice",
    category: "Learning",
    imageUrl: "/images/shared/shared-asset-1.jpeg",
  },

  // 2. Community
  {
    id: "g3",
    title: "The BinnaDev Community",
    category: "Community",
    imageUrl: "/images/shared/shared-asset-2.jpeg",
  },
  {
    id: "g4",
    title: "Community in Action",
    category: "Community",
    imageUrl: "/images/shared/shared-asset-22.jpeg",
  },

  // 3. Collaboration
  {
    id: "g5",
    title: "Building Together",
    category: "Collaboration",
    imageUrl: "/images/shared/shared-asset-21.jpeg",
  },
  {
    id: "g6",
    title: "Ideas in the Room",
    category: "Collaboration",
    imageUrl: "/images/shared/shared-asset-23.jpeg",
  },

  // 4. Building & Creating
  {
    id: "g7",
    title: "Turning Ideas Into Reality",
    category: "Building",
    imageUrl: "/images/shared/shared-asset-13.jpeg",
  },
  {
    id: "g8",
    title: "Builders at Work",
    category: "Building",
    imageUrl: "/images/shared/shared-asset-14.jpeg",
  },

  // 5. Life at the Lab
  {
    id: "g9",
    title: "Inside the Lab",
    category: "The Lab",
    imageUrl: "/images/gallery/gallery-asset-4.jpeg",
  },
  {
    id: "g10",
    title: "Moments at the Lab",
    category: "The Lab",
    imageUrl: "/images/gallery/gallery-asset-2.jpeg",
  },

  // 6. Impact & Community Growth
  {
    id: "g11",
    title: "Growing Together",
    category: "Impact",
    imageUrl: "/images/gallery/gallery-asset-5.jpeg",
  },
  {
    id: "g12",
    title: "Sharing What We Learn",
    category: "Impact",
    imageUrl: "/images/gallery/gallery-asset-1.jpeg",
  },
];

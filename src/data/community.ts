export interface CommunityStats {
  discordMembers: { value: number; suffix: string };
  githubCommits: { value: number; suffix: string };
  studyGroups: { value: number; suffix: string };
  openSourceContributors: { value: number; suffix: string };
}

export const communityStats: CommunityStats = {
  discordMembers: { value: 2400, suffix: "+" },
  githubCommits: { value: 15000, suffix: "+" },
  studyGroups: { value: 12, suffix: "" },
  openSourceContributors: { value: 340, suffix: "" },
};

export const communityHighlights = [
  {
    id: "high-1",
    title: "Quarterly Audit Competition",
    description: "Lab members identified 4 zero-days in a mock AMM protocol, winning the internal bounty pool.",
    date: "November 2024",
    imageUrl: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "high-2",
    title: "Echidna Study Group Concluded",
    description: "Cohort 4 successfully completed their 6-week deep dive into stateful fuzzing.",
    date: "October 2024",
    imageUrl: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "high-3",
    title: "ZK Cryptography Workshop",
    description: "An intensive weekend exploring PLONK and SNARK verifiers with leading researchers.",
    date: "September 2024",
    imageUrl: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "high-4",
    title: "Mainnet Shadow Fork Test",
    description: "Successfully executed a complex cross-chain state transition in a shadowed environment.",
    date: "August 2024",
    imageUrl: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "high-5",
    title: "DeFi Builder's Fellowship",
    description: "Graduated 20 talented developers who built innovative modular DeFi primitives.",
    date: "July 2024",
    imageUrl: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "high-6",
    title: "Ethereum Core Devs Contribution",
    description: "BinnaDev Lab researchers contributed heavily to the testing of EIP-4844.",
    date: "May 2024",
    imageUrl: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "high-7",
    title: "Advanced Yul Optimization Course",
    description: "Completed our highly-rated advanced series on EVM assembly and gas golfing.",
    date: "March 2024",
    imageUrl: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "high-8",
    title: "Consensus Layer Research Paper",
    description: "Published a widely cited paper on the game theory of decentralized sequencers.",
    date: "January 2024",
    imageUrl: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

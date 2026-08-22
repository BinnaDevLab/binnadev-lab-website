export interface Publication {
  id: string;
  title: string;
  type: "Lab Note" | "Field Report" | "Research Paper" | "RFC";
  summary: string;
  date: string;
  readTime: string;
  link: string;
  isExternal: boolean;
  tags?: string[];
}

export const publications: Publication[] = [
  {
    id: "pub-1",
    title:
      "Thinking Like an Attacker: The Airbags and Seatbelts of Smart Contract Security",
    type: "Lab Note",
    summary:
      "Explores why smart contract security requires both logical safeguards such as Checks-Effects-Interactions and mechanical defenses such as nonReentrant, particularly against malicious fallback behavior.",
    date: "2026",
    readTime: "7 min read",
    link: "https://dev.to/binnadev/thinking-like-an-attacker-the-airbags-and-seatbelts-of-smart-contract-security-4g4a",
    isExternal: true,
    tags: ["security", "smartcontract", "solidity"],
  },
  {
    id: "pub-2",
    title: "Immutability by Default, Upgradeability by Necessity",
    type: "Research Paper",
    summary:
      "Examines the architectural trade-offs introduced by UUPS proxies, storage collisions, and upgradeable contracts, arguing that upgradeability should be treated as a deliberate risk-management decision rather than a convenience.",
    date: "2026",
    readTime: "6 min read",
    link: "https://dev.to/binnadev/immutability-by-default-upgradeability-by-necessity-lessons-from-a-crowdfunding-protocol-3jm7",
    isExternal: true,
    tags: ["blockchain", "solidity", "web3"],
  },
  {
    id: "pub-3",
    title:
      "Stop Guessing, Start Proving: A Guide to Stateful Fuzzing in Foundry",
    type: "Lab Note",
    summary:
      "Explores the shift from isolated unit tests toward property-based testing and stateful invariant fuzzing, using escrow systems to demonstrate how protocol assumptions can be continuously challenged.",
    date: "2026",
    readTime: "7 min read",
    link: "https://dev.to/binnadev/stop-guessing-start-proving-a-guide-to-stateful-fuzzing-in-foundry-57l4",
    isExternal: true,
    tags: ["foundry", "testing", "solidity"],
  },
  {
    id: "pub-4",
    title: "Demystifying DevRel: What It Actually Is",
    type: "Field Report",
    summary:
      "Examines Developer Relations as more than community marketing: a human bridge between protocol infrastructure and the developers attempting to understand, use, extend, and build upon it.",
    date: "2026",
    readTime: "5 min read",
    link: "https://dev.to/binnadev/demystifying-devrel-what-it-actually-is-and-why-should-you-become-one-26oe",
    isExternal: true,
    tags: ["devrel", "community", "beginners"],
  },
  {
    id: "pub-5",
    title: "ERC20 Edge Cases Every Smart Contract Engineer Should Know",
    type: "Lab Note",
    summary:
      "Investigates behavioral inconsistencies and non-standard implementations across the ERC20 ecosystem and why protocol engineers must design for the reality of deployed contracts rather than the idealized specification alone.",
    date: "2026",
    readTime: "9 min read",
    link: "https://dev.to/binnadev/erc20-edge-cases-every-smart-contract-engineer-should-know-3dhb",
    isExternal: true,
    tags: ["ethereum", "code", "smartcontract"],
  },
  {
    id: "pub-6",
    title:
      "Monad is Fast. Your Code Should Be Reliable. (A New Foundry Starter Kit)",
    type: "Field Report",
    summary:
      "Monad is changing the conversation. With 10,000 TPS, 1-second finality, and parallel execution, it isn't just another EVM chain, it is a high-performance engine for the next generation of onchain applications.",
    date: "2024",
    readTime: "3 min read",
    link: "https://dev.to/binnadev/monad-is-fast-your-code-should-be-reliable-a-new-foundry-starter-kit-28h1",
    isExternal: true,
    tags: ["monad", "web3", "smartcontract"],
  },
];

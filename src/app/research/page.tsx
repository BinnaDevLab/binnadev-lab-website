import { Container } from "@/components/ui/Container";
import { H1, H2, Body } from "@/components/ui/Typography";
import { ResearchList } from "@/components/research/ResearchList";
import { PublicationList } from "@/components/research/PublicationList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Projects",
  description: "Architectural case studies, smart contract experiments, and protocol analysis from the BinnaDev Lab.",
};

export default function ResearchPage() {
  return (
    <div className="pt-32 pb-20 relative overflow-hidden">
      {/* Background visual */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-royal/5 to-transparent opacity-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-royal/10 blur-[200px] rounded-full mix-blend-screen" />
      
      <Container className="relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mb-24">
          <H1 className="mb-6">Research & Projects</H1>
          <Body className="text-lg text-muted">
            The BinnaDev Lab actively builds, audits, and open-sources tools that push the boundaries of Ethereum security. Explore our public experiments, protocol case studies, and internal tooling.
          </Body>
        </div>

        {/* Applied Research & Tooling */}
        <section className="mb-32">
          <div className="mb-12">
            <H2>Applied Research & Tooling</H2>
            <Body className="text-muted mt-2">Open source repositories and protocol experiments.</Body>
          </div>
          <ResearchList />
        </section>

        {/* Publications & Notes */}
        <section>
          <div className="mb-12">
            <H2>Publications</H2>
            <Body className="text-muted mt-2">Whitepapers, tactical field reports, and RFCs.</Body>
          </div>
          <PublicationList />
        </section>
      </Container>
    </div>
  );
}

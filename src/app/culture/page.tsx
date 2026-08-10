import { Container } from "@/components/ui/Container";
import { H1, H2, H3, Body, Mono } from "@/components/ui/Typography";
import { communityStats, communityHighlights, team } from "@/data";
import { Users, Code, MessagesSquare, Users2, Quote, Play, GitBranch, Briefcase, MessageCircle } from "lucide-react";
import { CaseFileReview } from "@/components/culture/TestimonialMarquee";
import { CinematicGallery } from "@/components/culture/CinematicGallery";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { YouTubeShowcase } from "@/components/culture/YouTubeShowcase";
import { CommunityHighlightsList } from "@/components/culture/CommunityHighlightsList";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Lab Culture",
  description: "Step inside the BinnaDev collective. Whiteboarding sessions, hackathons, and intensive research groups.",
};

export default function CulturePage() {
  return (
    <div className="min-h-screen pt-32 pb-32 bg-obsidian relative overflow-hidden">
      {/* Background visual */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-royal/5 to-transparent opacity-50" />
      
      <Container className="relative z-10">
        
        {/* Header Section */}
        <div className="mb-24 max-w-3xl border-b border-white/5 pb-12">
          <Mono className="text-gold mb-4 block tracking-widest uppercase flex items-center gap-2">
            <Users className="w-4 h-4" /> Lab Culture
          </Mono>
          <H1 className="mb-6">The Collective</H1>
          <Body className="text-xl text-muted leading-relaxed">
            We are an active engineering collective. Step inside our whiteboarding sessions, hackathons, and intensive research groups.
          </Body>
        </div>

        {/* Meet the Lab (Roster) */}
        <section id="team" className="mb-32">
          <div className="mb-12">
            <H2>Meet the Lab</H2>
            <Body className="text-muted mt-2">The architects, researchers, and engineers driving the academy.</Body>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="group relative overflow-hidden rounded-xl border border-white/5 bg-carbon/50 transition-colors hover:border-royal/50 hover:bg-carbon">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-obsidian opacity-20 z-10 group-hover:opacity-0 transition-opacity duration-500" />
                  <Image 
                    src={member.avatarUrl} 
                    alt={member.name} 
                    fill
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-obsidian/80 backdrop-blur border border-white/10 rounded-full text-[10px] font-mono tracking-widest uppercase text-gold">
                      {member.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 relative z-20">
                  <H3 className="text-xl font-medium text-white group-hover:text-gold transition-colors">{member.name}</H3>
                  <Mono className="text-xs text-muted mb-4 block mt-1">{member.role}</Mono>
                  <p className="text-sm text-white/70 leading-relaxed mb-6">{member.bio}</p>
                  
                  {member.socialLinks && (
                    <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                      {member.socialLinks.twitter && (
                        <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                          <MessageCircle className="w-4 h-4" />
                        </a>
                      )}
                      {member.socialLinks.linkedin && (
                        <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                          <Briefcase className="w-4 h-4" />
                        </a>
                      )}
                      {member.socialLinks.github && (
                        <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                          <GitBranch className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Lab Gallery */}
        <section id="gallery" className="mb-32">
          <div className="mb-12">
            <H2>Lab Gallery</H2>
            <Body className="text-muted mt-2">A living window into our whiteboarding sessions, hackathons, and research groups.</Body>
          </div>
          
          <CinematicGallery />
        </section>

        {/* Community Dashboard */}
        <section id="community" className="mb-32">
          <div className="mb-12">
            <H2>Community Hub</H2>
            <Body className="text-muted mt-2">The metrics behind our global engineering collective.</Body>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="p-6 bg-carbon/30 border border-white/5 rounded-lg flex flex-col items-center justify-center text-center">
              <MessagesSquare className="w-6 h-6 text-royal mb-4" />
              <div className="text-3xl font-display font-bold text-white mb-1">
                <AnimatedCounter value={communityStats.discordMembers.value} suffix={communityStats.discordMembers.suffix} />
              </div>
              <Mono className="text-xs text-muted uppercase tracking-wider mt-1">Discord Engineers</Mono>
            </div>
            <div className="p-6 bg-carbon/30 border border-white/5 rounded-lg flex flex-col items-center justify-center text-center">
              <Code className="w-6 h-6 text-gold mb-4" />
              <div className="text-3xl font-display font-bold text-white mb-1">
                <AnimatedCounter value={communityStats.githubCommits.value} suffix={communityStats.githubCommits.suffix} />
              </div>
              <Mono className="text-xs text-muted uppercase tracking-wider mt-1">Code Commits</Mono>
            </div>
            <div className="p-6 bg-carbon/30 border border-white/5 rounded-lg flex flex-col items-center justify-center text-center">
              <Users2 className="w-6 h-6 text-royal mb-4" />
              <div className="text-3xl font-display font-bold text-white mb-1">
                <AnimatedCounter value={communityStats.studyGroups.value} suffix={communityStats.studyGroups.suffix} />
              </div>
              <Mono className="text-xs text-muted uppercase tracking-wider mt-1">Active Study Groups</Mono>
            </div>
            <div className="p-6 bg-carbon/30 border border-white/5 rounded-lg flex flex-col items-center justify-center text-center">
              <GitBranch className="w-6 h-6 text-gold mb-4" />
              <div className="text-3xl font-display font-bold text-white mb-1">
                <AnimatedCounter value={communityStats.openSourceContributors.value} suffix={communityStats.openSourceContributors.suffix} />
              </div>
              <Mono className="text-xs text-muted uppercase tracking-wider mt-1">OS Contributors</Mono>
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-12">
            <H3 className="mb-6">Lab Achievements</H3>
            <CommunityHighlightsList />
          </div>
        </section>

        {/* Official YouTube Channel */}
        <YouTubeShowcase />

      </Container>
      
      {/* 4. Testimonials (Field Notes) */}
      <section className="py-24 bg-obsidian border-t border-white/5">
        <Container>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <H2 className="mb-4 text-3xl">Field Notes</H2>
            <Body className="text-muted">
              What founders, engineers, and researchers say about their time in the Lab.
            </Body>
          </div>
        </Container>
        <CaseFileReview />
      </section>

    </div>
  );
}

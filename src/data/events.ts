export type EventType = "Workshop" | "Cohort" | "Community Call" | "Hackathon" | "Live Session";

export interface LabEvent {
  id: string;
  title: string;
  date: string;
  type: EventType;
  description: string;
  registrationUrl?: string;
  isFree: boolean;
}

// Upcoming and past community events.
// Replace with real event data as they are scheduled.
export const upcomingEvents: LabEvent[] = [];

export const pastEvents: LabEvent[] = [];

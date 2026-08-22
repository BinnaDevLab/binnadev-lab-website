"use client";
import { useState, useEffect } from "react";
import { Mono } from "@/components/ui/Typography";

interface CohortCountdownProps {
  startDate: string;
}

export function CohortCountdown({ startDate }: CohortCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isLive, setIsLive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
    const target = new Date(startDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setIsLive(true);
      } else {
        setIsLive(false);
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [startDate]);

  if (!mounted) return <div className="h-20" />;

  if (isLive) {
    return (
      <div className="flex items-center gap-4 bg-obsidian border border-gold/30 px-6 py-4 rounded-sm inline-flex">
        <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
        <Mono className="text-gold tracking-widest uppercase">Cohort is Live</Mono>
      </div>
    );
  }

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className="inline-flex flex-wrap gap-4 md:gap-8 p-6 bg-obsidian border border-white/10 rounded-sm shadow-2xl">
      {timeUnits.map((unit, idx) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight tabular-nums">
            {String(unit.value).padStart(2, "0")}
          </div>
          <Mono className="text-[10px] text-white/40 tracking-widest mt-1 uppercase">{unit.label}</Mono>
        </div>
      ))}
    </div>
  );
}

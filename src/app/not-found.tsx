"use client";

import { Container } from "@/components/ui/Container";
import { H1, Body } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-[90vh] items-center justify-center">
      <Container className="text-center flex flex-col items-center">
        <H1 className="mb-6 text-gold">404</H1>
        <Body className="mb-10 text-xl max-w-lg mx-auto">
          The node you are looking for does not exist in this architecture.
        </Body>
        <Link href="/">
          <Button variant="outline">Return to the Lab</Button>
        </Link>
      </Container>
    </div>
  );
}

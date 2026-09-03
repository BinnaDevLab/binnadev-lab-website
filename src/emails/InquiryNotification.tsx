import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Tailwind
} from "@react-email/components";
import * as React from 'react';

export function InquiryNotification({
  name,
  email,
  organization,
  details,
}: {
  name: string;
  email: string;
  organization: string;
  details: string;
}) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white font-sans text-gray-900">
          <Container className="mx-auto py-10 px-4 max-w-[600px]">
            <Heading className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
              New BinnaDev Lab Inquiry
            </Heading>
            
            <Section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <Text className="m-0 mb-2"><strong>Name:</strong> {name}</Text>
              <Text className="m-0 mb-2"><strong>Email:</strong> {email}</Text>
              <Text className="m-0"><strong>Organization:</strong> {organization}</Text>
            </Section>

            <Hr className="border border-gray-200 my-6" />

            <Heading className="text-xl font-bold text-gray-900 mb-4">Project Details</Heading>
            <Text className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {details}
            </Text>

            <Hr className="border border-gray-200 my-6" />
            
            <Text className="text-sm text-gray-500">
              This email was generated from the binnadev.com collaboration form.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

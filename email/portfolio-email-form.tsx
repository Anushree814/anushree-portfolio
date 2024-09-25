import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";
type EmailFormProps = {
  text: string;
  senderEmail: string;
};

export default function PortfolioEmailForm({
  text,
  senderEmail,
}: EmailFormProps) {
  return (
    <Html>
      <Head></Head>
      <Preview>New message from portfolio website</Preview>
      <Tailwind>
        <Body className="bg-slate-200 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading as='h2' className="leading-tight">New message on Portfolio from {senderEmail}</Heading>
              <Text>{text}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

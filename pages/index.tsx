import { Container, Text } from '@mantine/core';

import { Action } from '../components/Action';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';

export default function HomePage() {
  return (
    <>
    <Container size={1200} pb={144}>
      <Hero
        title={
          <>
            <div>Your Life</div>
            <div>Your{' '}
            <Text component="span" variant="gradient" inherit>
              Story
            </Text>
            </div>
          </>
        }
        description="We write your biography. Let us bring your story to life. You’ve done the hard part - we make the rest easy."
      />
      <Section title="Contact" supTitle="01" description="" />
      <Section title="Match" supTitle="02" description="" />
      <Section title="Write" supTitle="03" description="" />
      <Section title="Review" supTitle="04" description="" />
      <Section title="Publish" supTitle="05" description="" />
      <Footer />
    </Container>
    <Action />
    </>
  );
}

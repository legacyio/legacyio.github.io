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
              <div>
                Your{' '}
                <Text component="span" variant="gradient" inherit>
                  Story
                </Text>
              </div>
            </>
          }
          description="We write your biography. Let us bring your story to life. You’ve done the hard part - we make the rest easy."
        />
        <Section
          title="Consultation"
          supTitle="01"
          description="Initial consultations are always free."
        />
        <Section
          title="Match"
          supTitle="02"
          description="Your biographer will meet with you to spend a week learning about you and your stories."
        />
        <Section
          title="Write"
          supTitle="03"
          description="The biographer with write an initial draft."
        />
        <Section
          title="Review"
          supTitle="04"
          description="You will receive a draft for review. We’ll apply any changes, and then send you a complete draft for sign off."
        />
        <Section
          title="Publish"
          supTitle="05"
          description="Our publisher will print of your new biography and ship copies to you and your loved ones."
        />
        <Footer />
      </Container>
      <Action />
    </>
  );
}

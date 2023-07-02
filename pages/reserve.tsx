import { useState } from 'react';
import {
  Alert,
  Button,
  Container,
  Group,
  Input,
  SimpleGrid,
  Title,
  Text,
  TextInput,
  createStyles,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import Email from '@emailjs/browser';
import { IMaskInput } from 'react-imask';
import { IconAlertCircle } from '@tabler/icons-react';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  title: {
    lineHeight: 1,
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: '0.1em',

    [theme.fn.smallerThan('md')]: {
      fontSize: theme.headings.sizes.h3.fontSize,
    },
  },
}));

const EMAILJS_TEMPLATE_ID = 'template_p88w64p' as const;
const EMAILJS_SERVICE_ID = 'service_t2oc63w' as const;
const EMAILJS_PUBLIC_API_KEY = 'cAm4_BslKf4HuNSII' as const;

export default function Reserve() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  const [completed, setCompleted] = useState(false);
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    },
    validate: {
      firstName: (value) => value.trim().length < 2,
      lastName: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
    },
  });

  if (completed) {
    return (
      <Container pt={60}>
        <Title size="h2" align="center" className={classes.title}>
          Thank you!
        </Title>
        <Text mt="xl" align="center">
          We will get back to you as soon as we can.
        </Text>
        <Group position="center">
          <Link href="/">
            <Button type="submit" size="lg" mt="xl">
              Back
            </Button>
          </Link>
        </Group>
      </Container>
    );
  }

  return (
    <Container pt={60}>
      <Title size="h2" align="center" className={classes.title}>
        Reserve your consultation
      </Title>
      <Text mt="xl" align="center">
        We appreciate your patience while we process high demand. You’ll receive your invitation as
        soon as possible.
      </Text>
      {error ? (
        <Alert icon={<IconAlertCircle size="1rem" />} title="Error" color="red">
          Failed to save reservation. Please try again!
        </Alert>
      ) : null}
      <form
        onSubmit={form.onSubmit(async (values) => {
          try {
            setLoading(true);
            setError(undefined);
            await Email.send(
              EMAILJS_SERVICE_ID,
              EMAILJS_TEMPLATE_ID,
              {
                form_name: `${values.firstName} ${values.lastName}`,
                form_email: values.email,
                form_phone: values.phoneNumber,
              },
              EMAILJS_PUBLIC_API_KEY
            );
            setCompleted(true);
          } catch (err) {
            setError(err);
          } finally {
            setLoading(false);
          }
        })}
      >
        <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <TextInput
            label="First Name"
            name="firstName"
            size="xl"
            required
            {...form.getInputProps('firstName')}
            error={form.errors.firstName && 'First name too short'}
          />
          <TextInput
            label="Last Name"
            name="lastName"
            size="xl"
            required
            {...form.getInputProps('lastName')}
            error={form.errors.lastName && 'Last name too short'}
          />
        </SimpleGrid>
        <SimpleGrid cols={2} mt="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <TextInput
            label="Email"
            name="email"
            size="xl"
            required
            {...form.getInputProps('email')}
            error={form.errors.email && 'Invalid email'}
          />
          <Input.Wrapper size="xl" label="Phone Number">
            <Input
              name="phoneNumber"
              size="xl"
              component={IMaskInput}
              mask="+1 (000) 000-0000"
              {...form.getInputProps('phoneNumber')}
            />
          </Input.Wrapper>
        </SimpleGrid>
        <Group position="center">
          <Button type="submit" size="xl" mt="xl" disabled={loading}>
            Reserve
          </Button>
        </Group>
      </form>
    </Container>
  );
}

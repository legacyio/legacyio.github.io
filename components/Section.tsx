import {Container, Text, Title, createStyles} from '@mantine/core';

interface Props {
  supTitle: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: 60,
    paddingBottom: 60,
    borderBottom: '1px solid lightgrey',
  },

  supTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 800,
    fontSize: theme.fontSizes.md,
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    letterSpacing: 0.5,
  },

  title: {
    lineHeight: 1,
    textAlign: 'center',
    marginTop: theme.spacing.xl,
  },

  description: {
    textAlign: 'center',
    marginTop: theme.spacing.xl,
    fontSize: theme.fontSizes.lg,
  },
}));

export function Section(props: Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> & Props) {
  const { classes } = useStyles();
  return (
    <Container className={classes.wrapper}>
      <Text className={classes.supTitle}>{props.supTitle}</Text>
      <Title className={classes.title} order={2}>
        {props.title}
      </Title>
      <Text className={classes.description}>
        {props.description}
      </Text>
    </Container>
  );
}
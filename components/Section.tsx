import {Container, Grid, Text, Title, createStyles} from '@mantine/core';

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
    marginTop: theme.spacing.xs,
    fontSize: theme.fontSizes.lg,
  },

  highlight: {
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    padding: 5,
    paddingTop: 0,
    borderRadius: theme.radius.sm,
    display: 'inline-block',
    color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
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
      <Grid>
        <Grid.Col span={4} />
        <Grid.Col span={8}>
          <Text color="dimmed" className={classes.description}>
            {props.description}
          </Text>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
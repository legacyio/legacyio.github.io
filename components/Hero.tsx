import { createStyles, Grid, Text, Title } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  content: {
    paddingTop: '144px',
    paddingBottom: '72px',
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
      paddingBottom: '36px',
    },
  },

  title: {
    fontSize: 90,
    lineHeight: '90px',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.lg,

    '@media (max-width: 520px)': {
      fontSize: 60,
      lineHeight: '60px',
      textAlign: 'left',
    },
  },

  grid: {
    marginTop: '72px',
  },

  description: {
    fontSize: 24,

    '@media (max-width: 520px)': {
      textAlign: 'left',
      fontSize: theme.fontSizes.xl,
    },
  },
}));

interface Props {
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Hero({ title, description }: Props) {
  const { classes } = useStyles();

  return (
    <div className={classes.content}>
      <Title className={classes.title}>{title}</Title>
      <Grid className={classes.grid}>
        <Grid.Col md={4} sm={0} />
        <Grid.Col md={8} sm={12}>
          <Text className={classes.description}>{description}</Text>
        </Grid.Col>
      </Grid>
    </div>
  );
}

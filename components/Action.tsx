import Link from 'next/link';
import { Button, createStyles } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons';

export const useStyles = createStyles((theme) => ({
  controls: {
    position: 'fixed',
    top: 'calc(100vh - 100px)',
    left: 'calc((100vw - 300px) / 2)',
    display: 'flex',
    justifyContent: 'center',
  },

  control: {
    textDecoration: 'none',
    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    '@media (max-width: 520px)': {
      height: 42,
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  button: {
    position: 'absolute',
    width: '300px',
  },
}));

export function Action() {
  const { classes } = useStyles();

  return (
    <div className={classes.controls}>
      <Link
        href="https://forms.gle/awvK3ycTYaEnKNTX6"
        target="_blank"
        className={classes.control}
      >
        <Button
          radius="xl"
          size="xl"
          rightIcon={<IconArrowRight size={16} stroke={2.5} />}
          fullWidth
          className={classes.button}
        >
          Start Free Consultation
        </Button>
      </Link>
    </div>
  );
}

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { csrfToken } from 'rails-ujs';

function MadeWithLove() {
  return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Built with love by the '}
        <Link color="inherit" href="https://material-ui.com/">
          Material-UI
        </Link>
        {' team.'}
      </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  return (

      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            新規登録
          </Typography>
          <form className={classes.form}  method="post" action='/users' noValidate>
            <input type='hidden' name='_method' value='POST' />
            <input type='hidden' name='utf8' value='✓' />
            <input type='hidden' name='authenticity_token' value={csrfToken()} />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                    autoComplete="username"
                    name="user[username]"
                    variant="outlined"
                    required
                    fullWidth
                    id="userName"
                    label="ユーザ名(Crowdworksと同じ名前）"
                    autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="メールアドレス"
                    name="user[email]"
                    autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="user[password]"
                    label="パスワード"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="user[password_confirmation]"
                    label="パスワード（再入力）"
                    type="password"
                    id="password_confirmation"
                    autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
              登録
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/users/sign_in" variant="body2">
                  アカウントを持っている人はログインしてください
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
  );
}

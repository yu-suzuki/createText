import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
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
import {csrfToken} from "rails-ujs";


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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ログイン
          </Typography>
          <form className={classes.form} action="/users/sign_in" method="post" noValidate>
            <input type='hidden' name='_method' value='post' />
            <input type='hidden' name='utf8' value='✓' />
            <input type='hidden' name='authenticity_token' value={csrfToken()} />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="login"
                label="ユーザ名かメールアドレス"
                name="user[login]"
                autoComplete="username"
                autoFocus
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="user[password]"
                label="パスワード"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="ログイン情報をブラウザに記憶"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
              登録
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/users/password/new" variant="body2">
                  パスワードを忘れました
                </Link>
              </Grid>
              <Grid item>
                <Link href="/users/sign_up" variant="body2">
                  新規登録
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
  );
}
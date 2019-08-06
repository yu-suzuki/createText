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

export default function ResetPassword() {
  const classes = useStyles();

  return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            パスワードを忘れた
          </Typography>
          <form className={classes.form} action="/users/password" method="post" noValidate>
            <input type='hidden' name='_method' value='post' />
            <input type='hidden' name='utf8' value='✓' />
            <input type='hidden' name='authenticity_token' value={csrfToken()} />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="メールアドレス"
                name="user[email]"
                autoComplete="email"
                autoFocus
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
              送信
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/users/confirmation/new" variant="body2">
                  パスワード確認メール再送信
                </Link>
              </Grid>
              <Grid item>
                <Link href="/users/unlock/new" variant="body2">
                  ロック解除申請
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
  );
}
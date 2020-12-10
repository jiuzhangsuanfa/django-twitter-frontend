import { Button, Link, TextField, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { signUpAction } from '../../actions';
import { ParamsSignUp } from '../../services/apis';
import styles from './index.module.css';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    fontSize: 'small',
    color: 'gray',
  },
}));

export default function SignUpPage({ history }: { history: any }) {

  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { register, handleSubmit, watch, errors, setValue } = useForm<ParamsSignUp>();

  const setEmail = (email: string) => setValue('email', email);
  const setUsername = (username: string) => setValue('username', username);
  const setPassword = (password: string) => setValue('password', password);
  const setConfirmPassword = (confirmPassword: string) => setValue('confirmPassword', confirmPassword);

  const getErrorMessageFromEmail = () => {
    if (!errors.email) { return ''; }
    switch (errors.email.type) {
      case 'required':
        return '请输入邮箱';
      case 'pattern':
        return '邮箱格式有误';
      default:
        return '邮箱格式有误';
    }
  }

  const getErrorMessageFromUsername = () => {
    if (!errors.username) { return ''; }
    switch (errors.username.type) {
      case 'required':
        return '用户名是必填项';
      case 'minLength':
        return '用户名不得短于 6 位';
      case 'maxLength':
        return '用户名不得长于 32 位';
      default:
        return '用户名格式有误';
    }
  }

  const getErrorMessageFromPassword = () => {
    if (!errors.password) { return ''; }
    switch (errors.password.type) {
      case 'required':
        return '密码是必填项';
      case 'minLength':
        return '密码不得短于 6 位';
      case 'maxLength':
        return '密码不得长于 32 位';
      default:
        return '密码格式有误';
    }
  }

  const getErrorMessageFromConfirmPassword = () => {
    if (!errors.confirmPassword) { return ''; }
    switch (errors.confirmPassword.type) {
      case 'required':
        return '请确认密码';
      case 'notMatch':
        return '两次输入的密码不匹配';
      default:
        return '密码格式有误';
    }
  }

  const handleSignUp = async (data: ParamsSignUp) => {
    try {
      await dispatch(signUpAction(data));
      history.push('/');
    } catch (error) {
      console.log(error)
      let message = '';
      switch (error.response.status) {
        case 400:
          message = '用户名或邮箱已被占用';
          break;
        default:
          message = '注册失败，请稍后重试';
      }
      enqueueSnackbar(message, { variant: 'error', autoHideDuration: 5000 });
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <svg viewBox="0 0 24 24" className={styles.logo}><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
        <Typography className={styles.title} variant="h2" gutterBottom>加入到 Twitter 大家庭</Typography>
        <Typography className={styles.subtitle}>注册您的 Twitter 账号</Typography>
        <form onSubmit={handleSubmit(data => handleSignUp(data))}>
          <TextField
            className={styles.input}
            label="邮箱"
            placeholder="请输入邮箱"
            variant="outlined"
            style={{ marginTop: '1rem', marginBottom: '1rem' }}
            autoComplete="email"
            onChange={event => setEmail(event.currentTarget.value)}
            name="email"
            inputRef={register({ required: true, pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ })}
            error={!!errors.email}
            helperText={getErrorMessageFromEmail()}
          />
          <TextField
            className={styles.input}
            label="用户名"
            placeholder="请输入用户名"
            variant="outlined"
            style={{ marginBottom: '1rem' }}
            autoComplete="username"
            onChange={event => setUsername(event.currentTarget.value)}
            name="username"
            inputRef={register({ required: true, minLength: 6, maxLength: 32 })}
            error={!!errors.username}
            helperText={getErrorMessageFromUsername()}
          />
          <TextField
            className={styles.input}
            label="密码"
            placeholder="请输入密码"
            type="password"
            variant="outlined"
            style={{ marginBottom: '1rem' }}
            autoComplete="current-password"
            onChange={event => setPassword(event.currentTarget.value)}
            name="password"
            inputRef={register({ required: true, minLength: 6, maxLength: 32 })}
            error={!!errors.password}
            helperText={getErrorMessageFromPassword()}
          />
          <TextField
            className={styles.input}
            label="确认密码"
            placeholder="请确认密码"
            type="password"
            variant="outlined"
            style={{ marginBottom: '1rem' }}
            autoComplete="current-password"
            onChange={event => setConfirmPassword(event.currentTarget.value)}
            name="confirmPassword"
            inputRef={register({
              required: true,
              validate: {
                notMatch: value => value === watch('password') || 'not match error message here'
              }
            })}
            error={!!errors.confirmPassword}
            helperText={getErrorMessageFromConfirmPassword()}
          />
          <div className={styles.buttons}>
            <Button
              className={styles.button}
              variant="contained"
              color="primary"
              disableElevation
              type="submit"
            >
              立即注册
            </Button>
          </div>
          <div className={styles.links}>
            <Button color="primary" component={RouterLink} to="/login">前往登录</Button>
          </div>
        </form>
      </div>
      <footer className={styles.footer}>
        <Button className={classes.root} component={Link} href="https://jiuzhang.com">版权所有 © 九章算法</Button>
        <div>
          <Button className={classes.root} component={RouterLink} to="/">使用条款</Button>
          <Button className={classes.root} component={RouterLink} to="/">帮助文档</Button>
        </div>
      </footer>
    </div>
  );

}

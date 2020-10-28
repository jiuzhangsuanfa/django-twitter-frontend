import { Button, Link, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { login } from '../../services/apis';
import styles from './index.module.css';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    fontSize: 'small',
    color: 'gray',
  },
}));

export default function LoginPage() {

  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <svg viewBox="0 0 24 24" className={styles.logo}><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
        <Typography className={styles.title} variant="h2" gutterBottom>登录 Twitter</Typography>
        <Typography className={styles.subtitle}>使用您的 Twitter 账号</Typography>
        <form>
          <TextField
            className={styles.input}
            label="用户名"
            placeholder="请输入用户名"
            variant="outlined"
            style={{ marginTop: '1rem', marginBottom: '1rem' }}
            autoComplete="username"
            value={username}
            onChange={event => setUsername(event.currentTarget.value)}
          />
          <TextField
            className={styles.input}
            label="密码"
            placeholder="请输入密码"
            type="password"
            variant="outlined"
            style={{ marginBottom: '1rem' }}
            autoComplete="current-password"
            value={password}
            onChange={event => setPassword(event.currentTarget.value)}
          />
          <div className={styles.buttons}>
            <Button
              className={styles.button}
              variant="contained"
              color="primary"
              disableElevation
              onClick={() => login({ username, password })}
            >
              登录
            </Button>
          </div>
          <div className={styles.links}>
            <Button color="primary" component={RouterLink} to="/signup">前往注册</Button>
          </div>
        </form>
      </div>
      <footer className={styles.footer}>
        <Button component={Link} href="https://jiuzhang.com">版权所有 © 九章算法</Button>
        <div>
          <Button className={classes.root} component={RouterLink} to="/signup">使用条款</Button>
          <Button className={classes.root} component={RouterLink} to="/signup">帮助文档</Button>
        </div>
      </footer>
    </div>
  );

}

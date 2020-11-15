import { Avatar, Button, Typography } from '@material-ui/core';
import { ChatBubbleOutlineOutlined, FavoriteBorderRounded, MoreHorizOutlined } from '@material-ui/icons';
import React from 'react';
import { TweetModel } from '../../services/apis/tweets';
import styles from './index.module.scss';

interface Props {
  tweet: TweetModel;
}

export default function TweetComponent({ tweet }: Props) {

  return <>
    <div className={styles.user}>
      <Avatar className={styles.avatar}>R</Avatar>
      <div className={styles.info}>
        <Typography className={styles.nickname}>{tweet.user.nickname}</Typography>
        <Typography className={styles.username}>@{tweet.user.username}</Typography>
      </div>
      <Typography className={styles.time}>{new Date(tweet.date).toLocaleString()}</Typography>
    </div>
    <div className={styles.content}>
      <Typography className={styles.text}>{tweet.content}</Typography>
      {/* <img src="" alt="" className={styles.image} /> */}
    </div>
    <div className={styles.action}>
      <Button
        // variant="outlined"
        color="default"
        className={styles.button}
        startIcon={<FavoriteBorderRounded />}
        disableElevation
      >
        456
      </Button>
      <Button
        // variant="outlined"
        color="default"
        className={styles.button}
        startIcon={<ChatBubbleOutlineOutlined />}
        disableElevation
      >
        123
      </Button>
      {/* <div className={styles.grow}></div> */}
      <Button
        // variant="outlined"
        color="default"
        className={styles.button}
        // startIcon={<MoreHorizOutlined />}
        disableElevation
      >
        <MoreHorizOutlined />
      </Button>
    </div>
    <hr className={styles.split} />
  </>;

}

import React from 'react';
import TweetComponent from '../../components/Tweet';
import { TweetModel } from '../../services/apis/tweets';

export default function HomePage() {

  const tweets: TweetModel[] = [
    {
      user: {
        nickname: "Nick Name",
        username: "username",
        avatar: "https://avatar.com/username"
      },
      id: 1,
      date: "2020-10-24T00:43:06.829Z",
      content: "参考 0.1 Tweet Model，下划线命名法，这里是推文正文内容",
      like_count: 987,
      comment_count: 654
    },
    {
      user: {
        nickname: "Nick Name",
        username: "username",
        avatar: "https://avatar.com/username"
      },
      id: 2,
      date: "2020-10-24T00:43:06.829Z",
      content: "参考 0.1 Tweet Model，下划线命名法，这里是推文正文内容",
      like_count: 987,
      comment_count: 654
    },
    {
      user: {
        nickname: "Nick Name",
        username: "username",
        avatar: "https://avatar.com/username"
      },
      id: 3,
      date: "2020-10-24T00:43:06.829Z",
      content: "参考 0.1 Tweet Model，下划线命名法，这里是推文正文内容",
      like_count: 987,
      comment_count: 654
    },
    {
      user: {
        nickname: "Nick Name",
        username: "username",
        avatar: "https://avatar.com/username"
      },
      id: 4,
      date: "2020-10-24T00:43:06.829Z",
      content: "参考 0.1 Tweet Model，下划线命名法，这里是推文正文内容",
      like_count: 987,
      comment_count: 654
    },
    {
      user: {
        nickname: "Nick Name",
        username: "username",
        avatar: "https://avatar.com/username"
      },
      id: 5,
      date: "2020-10-24T00:43:06.829Z",
      content: "参考 0.1 Tweet Model，下划线命名法，这里是推文正文内容",
      like_count: 987,
      comment_count: 654
    },
    {
      user: {
        nickname: "Nick Name",
        username: "username",
        avatar: "https://avatar.com/username"
      },
      id: 6,
      date: "2020-10-24T00:43:06.829Z",
      content: "参考 0.1 Tweet Model，下划线命名法，这里是推文正文内容",
      like_count: 987,
      comment_count: 654
    }
  ];

  return <>
    {
      tweets.length
        ? tweets.map(tweet => <TweetComponent key={tweet.id} tweet={tweet}></TweetComponent>)
        : <div>空的</div>
    }
  </>;

}

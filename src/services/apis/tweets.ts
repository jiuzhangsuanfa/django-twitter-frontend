import { SERVER } from '../../constants';
import { axios } from './interceptors';

export interface TweetModel {
  user: {
    nickname: string;
    username: string;
    avatar: string;
  }
  id: number;
  date: string;
  content: string;
  like_count: number;
  comment_count: number;
}

export async function getNewsfeed(): Promise<TweetModel[]> {

  return axios.get<any, any>(SERVER + 'newsfeed');

}

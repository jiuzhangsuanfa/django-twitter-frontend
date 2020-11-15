# Home Page

## 1. 添加 Tweet API(Newsfeed)

创建 API

```typescript
// services/apis/tweets
export async function getNewsfeed(): Promise<Tweet[]> {

  return axios.get<any, any>(SERVER + 'newsfeed');

}
```

## 2. 创建 Action

## 3. 创建 Reducer

## 4. 使用 Dispatch

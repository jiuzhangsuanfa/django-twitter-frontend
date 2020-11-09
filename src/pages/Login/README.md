# 使用 React Hook Form 来实现输入验证功能

## 一、安装

```shello
npm i -S react-hook-form
```

## 二、使用

> 对 Material UI 的 TextField 组件进行配置

### 2.1 定义类型

```ts
interface FormFields {
  username: string;
  password: string;
}
```

### 2.2 引入 `useForm`

```tsx
import { useForm } from 'react-hook-form';

const { register, handleSubmit, watch, errors } = useForm<FormFields>();
```

### 2.3 填写 `name` 选项名字段

```tsx
<TextField name={username} />
```

### 2.4 填入 `inputRef` 验证器

```tsx
<TextField name={username} inputRef={register} />
```

或自定义验证规则

```tsx
<TextField name={username} inputRef={register({ required: true })} />
```

### 2.5 填入 `error` 错误标记字段

```tsx
<TextField name={username} inputRef={register({ required: true })} error={!!errors.username} />
```

### 2.6 插入 `helperText` 错误文本

```tsx
<TextField
  name={username}
  inputRef={register({ required: true })}
  error={!!errors.username}
  helperText={errors.username && '用户名输入有误'}
/>
```

#### 2.6.1 根据错误类型显示错误信息

```tsx
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
};

<TextField
  name={username}
  inputRef={register({ required: true })}
  error={!!errors.username}
  helperText={getErrorMessageFromUsername()}
/>
```

## 三、升级

使用 Yup 进行数据格式校验。

### 3.1 安装

```shell
npm i -S @hookform/resolvers yup

npm i -D @types/yup
```

### 3.2 定义 Schema

```tsx
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
});
```

### 3.3 使用 yup

```tsx
const { register, handleSubmit, errors } = useForm({
  resolver: yupResolver(schema)
});

<form onSubmit={handleSubmit(onSubmit)}>
  <input type="text" name="username" ref={register} />
  <p>{errors.username?.message}</p>

  <input type="text" name="password" ref={register} />
  <p>{errors.password?.message}</p>

  <input type="submit" />
</form>
```

## 4. 使用 Redux 完成 API 调用与状态管理

### 4.1 安装依赖

```shell
npm i -S react-redux redux-thunk
```

### 4.2 创建 API

```typescript
// services/apis/account.ts
export async function login({ username, password }: ParamsLogin): Promise<ReturnLogin> {

  return axios
    .post<any, any>(SERVER + 'login', { username, password });

}
```

### 4.3 创建 Action

```typescript
// actions/account.ts
export function loginAction(data: ParamsLogin) {
  return async (dispatch: any) => {
    const result = await login(data);
    console.log({ result })
    dispatch({ type: AccountType.Login, payload: result });
  }
}
```

### 4.4 创建 Reducer

```typescript
// reducer/account.ts
export const accountReducer = (state: any, action: ActionType<AccountType>) => {
  console.log(action);
  const { token, user } = action.payload || {};
  switch (action.type) {
    case AccountType.Login:
      return { token, user };
  }
};
```

### 4.5 创建 Store

```typescript
// index.tsx
const store = createStore(
  rootReducers,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
```

### 4.6 调用 Dispatch

```tsx
// pages/Login/index.tsx
import { useDispatch } from 'react-redux';

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleLogin = async (data: ParamsLogin) => {
    const result = await dispatch(loginAction(data));
  }
}
```

### 4.7 新增错误提示

安装依赖

```shell
npm i -S notistack
```

调用 SnackBar

```tsx
// pages/Login/index.tsx
import { useSnackbar } from 'notistack';

export default function LoginPage() {
  const { enqueueSnackbar } = useSnackbar();

  const handleLogin = async (data: ParamsLogin) => {
    try {
      const result = await dispatch(loginAction(data));
      console.log({ result });
      history.push('/');
    } catch (error) {
      let message = '';
      switch (error.message) {
        case 'Network Error':
          message = '网络异常，请检查网络';
          break;
        default:
          message = '登录失败，请稍后重试';
      }
      enqueueSnackbar(message, { variant: 'error' });
    }
  }
}
```

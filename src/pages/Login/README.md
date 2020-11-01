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

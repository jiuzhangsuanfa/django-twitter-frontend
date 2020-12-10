# 实现 SignUp 的密码确认功能

## 1. 从 `useForm` 中获取 `setValue`

```tsx
const { setValue } = useForm<ParamsSignUp>();

const setUsername = (username: string) => setValue('username', username);
```

## 2. 定义自定义验证器

```tsx
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
```

## 3. 定义自定义错误展示

```tsx
const getErrorMessageFromConfirmPassword = () => {
  console.debug(errors.confirmPassword?.type);
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
```

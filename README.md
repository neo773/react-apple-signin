# Intro
`apple-signin-react` is a fuly type safe library which supports all options on the Apple docs for integrating Sign In With Apple in your React app

## Install
```bash
npm install apple-signin-react

pnpm add apple-signin-react

yarn add apple-signin-react

bun add apple-signin-react
```

## Usage
```tsx
import SignInWithApple from "react-apple-signin"

<SignInWithApple
  clientId="com.app.indentifier"
  redirectURI="https://domain.com/callback"
  scope={"email"}
  buttonStyle={{
    type: "continue",
    color: "white",
  }}
/>

```

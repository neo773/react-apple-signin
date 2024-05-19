# Introduction

`apple-signin-react` is a fully Typesafe library designed for integrating Apple's Sign In with your React applications.

This library adheres to all the specifications detailed in the [official Apple documentation](https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_js).

<img width="405" alt="Screenshot 2023-07-24 at 12 21 27 AM" src="https://github.com/neo773/react-apple-signin/assets/62795688/7a1278cf-9cd8-404a-ad8b-c7a2b517a8c3">

## Installation

To install the library, you can use any of the following package managers:

```bash
npm install apple-signin-react

pnpm add apple-signin-react

yarn add apple-signin-react

bun add apple-signin-react
```

## Usage

```tsx
import SignInWithApple from "apple-signin-react";

<SignInWithApple
  clientId="com.app.indentifier"
  redirectURI="https://domain.com/callback"
  scope="email"
  buttonStyle={{
    type: "continue",
    color: "white",
  }}
/>
```

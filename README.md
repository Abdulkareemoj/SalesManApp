# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [React + TypeScript + Vite](#react--typescript--vite)
  - [Expanding the ESLint configuration](#expanding-the-eslint-configuration)
- [📗 Table of Contents](#-table-of-contents)
- [📖 Blog-App ](#-blog-app-)
  - [🛠 Built With ](#-built-with-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
    - [Deployment](#deployment)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [📝 License ](#-license-)
<!-- - [❓ FAQ (OPTIONAL)](#faq) -->
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 Blog-App <a name="about-project"></a>

**simple-t3blog** is an app that allows users to view and comment on posts and perform actions such as liking and commenting on these blog posts.

## 🛠 Built With <a name="built-with"></a>

[React](https://create.t3.gg/) project bootstrapped with `vite`.
[PocketBase](https://graphql.org/).
[Typescript](https://graphql.org/).
[TailwindCSS](https://graphql.org/).
[shadcn](https://graphql.org/).
<!-- Features -->

### Key Features <a name="key-features"></a>

- [ ] **Added validations For the User model**
- [ ] **Added validations For the post model**
- [ ] **Add unit specs for all of your models' methods and validations.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

Not Deployed Yet.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:
- Know how to navigate directories or folders at the CLI.
- Know how to get the URL(https/ssh) of a repository on GitHub.
- You should have a code editor installed, VSCode or a Terminal editor like vim is fine.


### Setup
 In order to run this project you need:
 
Clone this repository to your desired folder:

```sh
  git clone git@github.com
```

### Install

Install this project with:

```sh
  cd simple-t3blog
  npm install
```

### Usage

To run the project, execute the following command:

```sh
  npm run dev
```

### Run tests

To run tests, run the following command:

```sh
 rspec spec
```

### Deployment

You can deploy this project using:

<!--
Example:

```sh

```
 -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Abdulkareem Ojerinde**

- GitHub: [@Abdulkareemoj](https://github.com/Abdulkareemoj)
- Twitter: [@abdulkareemoj](https://twitter.com/abdulkareemoj)
- LinkedIn: [Abdulkareem Ojerinde](https://linkedin.com/in/abdulkareem-ojerinde)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

You can suggest some by creating an [issue](../../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are always welcome!


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project give me ⭐

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
# 🦖 🗺️ ✍️ 🌐 Thesaurus-ish

This is a simple app that lets you submit a word prompt, and returns a set of synonyms, antonyms, or rhymes, depending on the user's choice.

- It takes advantage of the [Data Muse API](https://www.datamuse.com)📖 📚, which is a 🔍 lexical search service for developers.

## 🍔 Tech Stack

- [React.js](https://reactjs.org/) - A free and open-source front-end JavaScript library for building user interfaces based on components.
- [Typescript](https://www.typescriptlang.org/) - A strongly typed programming language that builds on JavaScript
- [Vite](https://vitejs.dev/) - A modern, blazing-fast tool for scaffolding and bundling projects—quickly
- [pNPM](https://pnpm.io/) - Fast, disk space efficient package manager

## ✅ Concepts learnt/covered

This was also fun because I enjoyed working with the API.
Querying is straightforward, and all that you have to stress about is how to present that data.

- State management increased a bit, and one point found myself falling into an infinite loop, but used useEffect to correct.
- Other concepts used are the basics:
  - React
    - The useEffect Hook
    - Custom Hooks
    - State management (Trying to push myself to try and use a more complex one 🥲)
    - Conditional rendering

## 💡 Want to try it out?

### Installation

1. 🌀 Clone the repo

   ```sh
   git clone https://github.com/shyakadavis/react-challenges/2.thesaurus yourDirName
   ```

   or

   ```sh
   git clone https://github.com/shyakadavis/react-challenges/2.thesaurus .
   ```

   ⚠️ The `.` will clone it to the current directory so make sure you are inside your project folder first.

2. 📦 Install packages.

   ```sh
   pnpm install
   ```

3. 🐕 🏃Start your local development server

   ```sh
   pnpm dev
   ```

## ✔️ To Do

- [ ] Use reactQuery for fetching the data and caching e.t.c.
- [ ] Add more options like search for
  - [ ] related words
  - [ ] compound params like `words that rhyme with grape that are related to breakfast`
- [ ] Only render the 'No Results Found' message only if the user has began interacting with the app. It should display a blank page on initial render and not that message
- [ ] make it truly responsive across most devices
- [ ] Add an animation to the loader and/or move to its own component

## 🗂️ Acknowledgments

- [Data Muse](https://www.datamuse.com) is awesome. 💯
- Thanks to [Cody](https://www.youtube.com/@WebDevCody) from whom I learnt of its existence.

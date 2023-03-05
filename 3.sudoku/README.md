# 🦕 🏯 🎲 Sudoku

Not going to lie, this had my head spinning.
It started off a simple app in which you would insert values in a grid, and use an API to solve the Sudoku for you.

- It takes advantage of this [API](https://github.com/navshaikh/sudoku-api) 🐍, which exposes a sudoku solver as a REST API, and based on Flask.

## 🍔 Tech Stack

- [React.js](https://reactjs.org/) - A free and open-source front-end JavaScript library for building user interfaces based on components.
- [Typescript](https://www.typescriptlang.org/) - A strongly typed programming language that builds on JavaScript
- [Vite](https://vitejs.dev/) - A modern, blazing-fast tool for scaffolding and bundling projects—quickly
- [pNPM](https://pnpm.io/) - Fast, disk space efficient package manager
- [Docker](https://www.docker.com/) - a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.

## ✅ Concepts learnt/covered

This was less fun, but more "What is going on", because this was a first for me.
Nonetheless, I enjoyed learning, specifically setting up a reverse proxy, and using Docker, which for some reason, I keep shying away from using.

- State management increased a bit as well.
- Using a reverse proxy server to communicate with the API (because of CORS policies)
- Using a Docker image

## 💡 Want to try it out?

### Prerequisites

- Docker
- A cors reverse proxy server (I don't know a good one to recommend, sorry 🥲)
- Clone this [repo](https://github.com/navshaikh/sudoku-api) and follow the instructions, and should have it set up ready to play with.

### Installation

1. 🌀 Clone the repo

   ```sh
   git clone https://github.com/shyakadavis/react-challenges/3.sudoku yourDirName
   ```

   or

   ```sh
   git clone https://github.com/shyakadavis/react-challenges/3.sudoku .
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

- [ ] Complete the project.
- [ ] add the feature to reset the grid
- [ ] add the ft to solve the grid, and not just solve per just a few lines of input, but actual interaction with the API

## 🗂️ Acknowledgments

- [navshaikh](https://github.com/navshaikh/sudoku-api)
- [Cody](https://www.youtube.com/@WebDevCody)

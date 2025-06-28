# React FACEBOOK Clone

## Overview

A modern, responsive web application replicating the core functionality and design of Facebook, built using React and Material UI.

---

## Key Features

- Developed using React for efficient and modular UI components.
- Leveraged Material UI for modern design elements and clean icons.
- Includes responsive design and a user-friendly interface.

---

### Watch Demo Video on [Youtube](https://youtu.be/zVffu5_T7UE)

<a href="https://youtu.be/zVffu5_T7UE">
  <img src="demo.png" alt="Watch the video" height="200"/>
</a>

### Technologies Used

- `React:` For building the dynamic user interface.
- `Material UI:` For icons and UI consistency.

## Steps to run this app on your Computer / Machine

To run this project on your computer, you need docker. If you haven't installed one you can download it first [Windows](https://docs.docker.com/desktop/setup/install/windows-install/) [linux](https://docs.docker.com/engine/install/) [MacOs](https://docs.docker.com/desktop/setup/install/mac-install/).

Here are the steps:

1. Clone this repo :

   ```
   git clone https://github.com/betkh/react-fb-clone.git
   ```

2. CD to the project directory

   ```
   CD react-fb-clone
   ```

3. Build docker image with imageName :

   ```
   docker build -t react-fb-clone .
   ```

4. Run it with port forwarding to 3000

   ```
   docker run -p 3000:3000 react-fb-clone

   ```

5. opne in local host in your browser

   ```
   http://localhost:3000/
   ```

### Icons

I used clean icons from Material UI [https://mui.com/material-ui/getting-started/installation/](https://mui.com/material-ui/getting-started/installation/)

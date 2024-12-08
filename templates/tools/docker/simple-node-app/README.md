# Simple Node.js App with Docker

This project demonstrates how to containerize a simple Node.js application using Docker. The app is a lightweight HTTP server that responds with a plain-text message.

---

## Features
- A lightweight Node.js application running inside a Docker container.
- Exposes port `3000` to serve HTTP requests.
- Quick and easy setup with minimal dependencies.

---

## Prerequisites
Ensure the following are installed on your machine:
1. [Docker](https://www.docker.com/get-started) (Required)
2. [Node.js](https://nodejs.org/) (Optional, for local testing)

---

## Project Structure

The project is organized as follows:

- **`app/`**: Contains the Node.js application code.
  - **`index.js`**: Main application file.
  - **`package.json`**: Node.js dependencies and scripts.
  - **`package-lock.json`**: Locked versions of dependencies.

- **`Dockerfile`**: Defines the Docker image configuration for the app.

## How to Use

1. docker build -t simple-node-app .
2. docker run 3000:3000 simple-node-app
3. You should now be able to access your container at localhost:3000
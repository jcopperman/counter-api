# Counter API

This is a simple Node.js API that provides endpoints for managing counters identified by namespaces and keys.

## Overview

The Counter API is designed to manage counters in memory, allowing you to increment and retrieve counter values within specific namespaces and keys. It also provides a reset functionality to reset a counter to 0.

## Endpoints

- `GET /hit/:namespace/:key`: Increment a counter by 1 within the specified namespace and key.
- `GET /get/:namespace/:key`: Retrieve the value and timestamp of a counter within the specified namespace and key.
- `GET /reset/:namespace/:key`: Reset a counter to 0 within the specified namespace and key.

## Usage

To use the Counter API, make HTTP requests to the provided endpoints, specifying the namespace and key in the URL as needed.

## Installation

1. Clone this repository to your local machine.
2. Install Node.js if you haven't already.
3. Navigate to the project directory and run `npm install` to install the required dependencies.

## Running the Server

After installing the dependencies, you can start the server by running:

```bash
npm start

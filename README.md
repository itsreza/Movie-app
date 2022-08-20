# Movie App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technical Stack And Packages

- HTML
- SCSS (Sass Module)
- React JS
- Typescript
- Docker
- ESLint And Some Another Configuration
- Lazy Loading

### Packages

- Axios Using for HTTP Request is Much Better Than Fetch Api
- uuid for Generating Unique Key
- React-lazy-loading for LazyLoading Images

**_ I Tried to Do not Use Any Packages Or Any Libraries For Showing Hand Write _**

### `ENV File`

set Environment Variable Before Do any thing on Project.
Create File with `.env` Extension in Root Of Project

And Copy Inner Variable in `.env.sample` File Into Your Created `.env` File

## Scripts ( Usage ) (after set .env file)

There are 2 Way for Run Project

### `Using NPM`

Clone The Project Follow up Commands

```terminal
npm install
```

After Package Installation

```terminal
npm start
```

### `Using Docker`

Use docker Commands :

`docker-compose up -d`

Docker Exposed On port `3000` FreeUp it.

> http://localhost:3000/

LIVE DEMO ON CodeSandbox Available.

### [Live DEMO](https://codesandbox.io/s/mystifying-bardeen-wx0n1e)

### Project bonuses has been Done :

Clean code and following best practices

Dockerize your application by creating an efficient Dockerfile

Store the filters in the URL query strings and sync it with the component filter object

Make sure the ratio for the posters is 2:3 or any other ratio you find suitable

Add lazy loading for posters

Using TypeScript

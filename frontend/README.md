# Frontend App

This is a Webapp built using [NextJS](https://nextjs.org/docs)

## Installation

To install run:
```bash
npm i
```

## Running Locally
Once you have installed simply run:
```bash
npm run dev
```
Then this project will run on port `3000`


## Tests
For unit tests this project uses [jest](https://jestjs.io/) simply run:
```bash
npm run test:jest
```

All jest tests are located in the `test` directory at the root of this project.


## About

There is a API end point that requires a simple session cookie

Only a user with a valid session is able to hit the API endpoint


This projects makes use of [material-ui](https://mui.com/), Over the years I have used, css, less, sass, jquery-ui, bootstrap 3,4,5.

My current personal choice at the moment is Material-ui, I find simple and there treeshaking/optimisation is excellent.

### Routes/Pages

| Route             | File Path                  | Usage                            |
|-------------------|----------------------------|----------------------------------|
| /            | pages/index.tsx             | Landing page for the app |

### API Calls

| Route                     | File Path                         | Usage                              | Method   | Protected     |
|---------------------------|-----------------------------------|------------------------------------|----------|---------------|
| /api/bookings/            | pages/api/bookings.ts             | Get booking data from API          | GET      | simple cookie |



## Environment Variables
The file `.env.local` is for local development, for more see [NextJS Enviroment Variables](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables)

Inside `.env.local` is the following:

| Name                  | Default Value                                                               | Usage                                                                       | Serverside |
|-----------------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|------------|
| NODE_ENV              | dev                                                                         | Setting the env for `next.config.js`                                        | N/A        |
| NEXT_PUBLIC_LOCALE    | en-gb                                                                       | Locale for internationalization                                             | No         |
| NEXT_API_URL          | http://localhost:3001/api/1/                                                | Address for the API in docker                                               | Yes        |
| COOKIE_NAME           | frontEndUser                                                                | Unique ID for a given user, can be used to track and trace faults for users | Yes        |


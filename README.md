# Food Delivery

This project that is written in React and generated using Vite with HMR and some ESLint rules.

## Description

This is a Food List page sample that lists food from different restaurants. The page can be searched via `Restaurant name` or filtered by `Category`. The app connects to 2 mock APIs for Food List and Category List.

### Project structure

Under `src` are the main files used

- components - includes feature components as well as ui components
- lib - different libraries to be used for the app (types, mocks, utils)
- pages - page components

### Libraries

These are the main libraries used for this project:

- @primer/octicons-react - icons by github
- vite - an alternative to create-react-app with minimal app templating
- prettier - code formatter
- jest - testing framework

## How to Use the Project

- open terminal
- insall dependencies

```bash
	npm install
```

- run application

```bash
	npm run dev
```

### To run test

- open termianl
- run test script

```bash
	npm run test
```

## Future upgrades

- Better API structure
  - Currently the API we're using doesn't have pagination. For better user experience and loading, pagination will help lessen the loading time.
- UI/UX
  - Skeleton loading for each cards while the API is still fetching data
- Integration testing
  - Test the `FoodListPage` to simulate the interaction of the different components
- Routing
  - Using React DOM to navigate to pages

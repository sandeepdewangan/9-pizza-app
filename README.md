# React

Create Project
`npm create vite@latest`

Install Packages
`npm i`

Run App
`npm run dev`

### Planning App:

**Pages:**

1. Home Page `/`
2. Pizza Menu Page `/menu`
3. Cart Page `/cart`
4. Placing new order page `/order/new`
5. Lookup for order `/order/:orderID`

**Features:**

1. User
2. Menu
3. Cart
4. Order

**Technology:**

1. Routing: ReactRouter
2. Styling: Tailwind
3. Remote State Management: ReactRouter (not a state management as data is not persisted)
4. UI State Management: Redux

### File Structure

Feature based approach fits well for mid sized to large sized projects.

`features` -> contains features components.
`ui` -> contains shared ui related components.
`service` -> interacting with API.
`util` -> helper functions which are re-usable.

### React Router

Package:
`npm i react-router-dom@6`

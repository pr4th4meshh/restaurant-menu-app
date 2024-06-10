# Restaurant Menu App

A mobile-only restaurant menu app built with React, TypeScript, TailwindCSS, and AntDesign. The app uses Redux and RTK Query for state management of the cart, allowing users to add items, remove them from the global cart state, and proceed further through the steps.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Features

- Displays restaurant information including name, ratings, number of ratings, minimum amount to spend, and cuisine.
- Menu items are categorized, with a dynamic display of items under each category.
- Users can add or remove items from a global cart state.
- Real-time cart updates and a fixed cart button for easy access.
- Smooth scrolling navigation for category selection.
- Loading spinner for better user experience during data fetch.

## Technologies Used

- **Frontend:**
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [TailwindCSS](https://tailwindcss.com/)
  - [Ant Design](https://ant.design/)

- **State Management:**
  - [Redux](https://redux.js.org/)
  - [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)

- **Icons:**
  - [Ant Design Icons](https://ant.design/components/icon/)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   git clone https://github.com/your-username/restaurant-menu-app.git
   cd restaurant-menu-app

2. **Install dependencies:**
npm install

3. **Start the development server:**
npm start

## Usage
- Navigate through the categories using the bottom navigation bar.
- Add items to the cart by clicking on the add button next to each item.
- View cart details and proceed with further actions using the cart button.
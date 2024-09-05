# Star Wars Rebels Alliance Search System

## Mission Briefing

In order to thwart the Empire's plans. Our mission is to create an interface that allows the Rebel Alliance to search through the Empire's database.

The Empire's database can be accessed at [SWAPI](https://swapi.dev/api/).

## Project Overview

This project consists of two main components:

1. **Backend**: Built with Node.js and TypeScript.
2. **Frontend**: Built with Vite, React, TypeScript and Tailwind CSS.

## Objectives

### Step 1: Backend

**Required:**

- ✅ Create a Node.js backend to retrieve data from SWAPI.
- ✅ Implement an endpoint to search through all types of data from the SWAPI.

**Optional:**

- ✅ Implement authentication with the following credentials:
  - Username: Luke
  - Password: DadSucks
- ✅ Use HAPI for the backend as preferred by the Rebel developers.

### Step 2: Frontend

**Required:**

- ✅ Create a ReactJS frontend that interacts with the backend.
- ✅ Implement a search field.
- ✅ Display search results in a list with names.
- ✅ Create a detailed view for each result showing basic information.

**Optional:**

- ✅ Create detailed views with more information.
- ✅ Implement routing for accessing detailed views and search results.
- ✅ Add a filter system by data type (e.g., character, ship).
- ✅ Integrate authentication with the backend.
- ❌ Use Redux for state management.
- ✅ Implement functional programming and immutability principles.
- ✅ Add debounce functionality for search.
- ❌ Use CSS Modules for styling.

**Bonus:**

- ❌ Add functionality to translate results into Wookiee language.

## Installation and Setup

### Backend

1. Navigate to the `back` directory:

   ```bash
   cd back
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn dev
   ```

   The backend will run on [http://localhost:3000](http://localhost:3000).

4. To test some endpoints, you can use the following routes:

    - [`http://localhost:3000/search/people/?search=r2`](http://localhost:3000/search/people/?search=r2): Search for people with the term "r2".
    - [`http://localhost:3000/search/vehicles/?search=l&page=2`](http://localhost:3000/search/vehicles/?search=l&page=2): Search for vehicles with the term "l" on the second page.
    - [`http://localhost:3000/search/planets`](http://localhost:3000/search/planets): Search for all planets.
    - [`http://localhost:3000/search/starships/2`](http://localhost:3000/search/starships/2): Search for the starship with the ID 2.
    - [`http://localhost:3000/search/?search=sand`](http://localhost:3000/search/?search=sand): Search for all types of data with the term "sand".

### Frontend

1. Navigate to the `front` directory:

   ```bash
   cd front
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn dev
   ```

   The frontend will run on [http://localhost:5173](http://localhost:5173)

4. You can directly access to search results by **COPY/PASTING** the following routes after logging in:

    - [`http://localhost:5173/search/people/?search=r2`](http://localhost:5173/search/people/?search=r2): Search for people with the term "r2".
    - [`http://localhost:5173/search/vehicles/?search=l&page=2`](http://localhost:5173/search/vehicles/?search=l&page=2): Search for vehicles with the term "l" on the second page.
    - [`http://localhost:5173/search/planets`](http://localhost:5173/search/planets): Search for all planets.
    - [`http://localhost:5173/search/starships/2`](http://localhost:5173/search/starships/2): Search for the starship with the ID 2.
    - [`http://localhost:5173/search/?search=sand`](http://localhost:5173/search/?search=sand): Search for all types of data with the term "sand".

## Conclusion

Mission accomplished! The Rebel Alliance now has a search system to access the Empire's database. May the Force be with you!

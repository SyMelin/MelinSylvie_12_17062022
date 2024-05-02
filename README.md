# Sportsee - Frontend Project

Welcome to the SportSee project, a frontend project for the OpenClassrooms training program. This is a sports analytics dashboard designed for desktop use, with a minimum resolution of 1024x780 pixels. The project focuses on creating a React-based dashboard with various components for visualizing sports data.

## 1. Project Overview

The goal of this project is to build a modern, responsive React application based on mockups and user stories. The project involves building charts and integrating other features while ensuring responsive design, based on mockups and user stories.

### 1.1 Frontend

- **Recharts**: For integrating graphs.
- **PropTypes**: For component type-checking.
- **Axios**: For making HTTP calls.

### 1.2 Backend

- **Local Micro API**: The backend is a micro API that must be launched locally.

### 1.3 Documentation:

Documentation for this project is provided in English and includes:

- This README file, which includes the installation steps and prerequisites for the project.
- JsDoc for detailed documentation.
- PropTypes for each component to ensure type safety.

## 2. Prerequisites

- **NodeJS v20.12.0**. Ensure Node.js is installed. Check with `node --version`.
- **Yarn**: for dependency management.
- **Vite**: This project was initially set up with Create React App but has since been migrated to Vite.

## 3. Installation and Setup

To install and run the project locally, follow these steps:

### 3.1 Clone the repository.
```bash
git clone https://github.com/SyMelin/MelinSylvie_11_30052022.git
```

### 3.2 Navigate to the Project Directory :
```bash
cd sportsee-project
```

### 3.3 Sportsee backend

#### 3.3.1 Go to the project directory :
```
cd sportsee-backend
```

### 3.3.2 Install project dependancies :
```
yarn install
```

#### 3.3.3 Run the micro API locally :
```
yarn dev
```

#### 3.3.4 Access to the micro API :

The API is locally available on port `3000`, go to `http://localhost:3000`

### 3.4 Sportsee frontend

#### 3.4.1 Go to the project directory :
```
cd sportsee-frontend
```

### 3.4.2 Install project dependancies :
```
yarn install
```

#### 3.4.3 Launch the application :
```
yarn start
```

#### 3.4.4 Access to the application :

The app is locally available on port `3001`, go to `http://localhost:3001`

## Important Note on Dependencies

While updating or installing the dependencies for this project, please be aware of the following:

The `recharts` library, which is used for rendering charts in this project, has a known issue in recent versions that can affect the width of the `ActivitySessionsBarChart` component. It is recommended to use version `2.1.10` or below of `recharts` to avoid this issue.

When installing the project dependencies with yarn, you can specify the version of `recharts` like so:

```bash
yarn add recharts@2.1.10
```

Please keep this in mind when working with the project.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
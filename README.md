# Weather App

<h1>🌐 Live Demo</h1>

Click: [Here](https://weather-app-nblv-ashutoshs-projects-b91f7c39.vercel.app/)

A sleek and modern Weather App built with the following technologies:

- **Next.js**: For server-side rendering and building a highly performant React application.
- **React**: The core library for building user interfaces.
- **TanStack Query**: For efficient data fetching, caching, and state management of API data.
- **ShadCN UI**: For aesthetically pleasing and reusable UI components.
- **Recharts**: For interactive and dynamic data visualizations.
- **Tailwind CSS**: For utility-first and customizable styling.
- **TypeScript**: For type safety and improved developer experience.

## Features

- **Real-time Weather Data**: Get accurate and up-to-date weather information for any location.
- **Dynamic Charts**: Visualize weather data trends such as temperature, humidity, and precipitation with Recharts.
- **Responsive Design**: Optimized for both mobile and desktop screens.
- **Dark Mode**: Seamless dark mode integration for better accessibility.
- **Search Functionality**: Find weather details for any city worldwide.
- **Caching**: Efficient data caching and background updates using TanStack Query.

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn package manager

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Ashutosh9110/Weather-App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Weather-App
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```
   Get your free API from here: https://openweathermap.org/api

   Replace `your_api_key_here` with your actual API key from the weather data provider.

5. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Folder Structure

```plaintext

Weather-App/
├── public/                 # Public assets (e.g., images, icons)
├── src/                    # Source code
│   ├── components/         # React components
│   ├── assets/             # Static assets like images or styles
│   ├── hooks/              # Custom React hooks
│   ├── contexts/           # React context providers
│   ├── services/           # API service functions
│   ├── utils/              # Utility functions
│   ├── App.tsx/             # Main App component
│   └── main.tsx/            # Entry point for the application
├── .gitignore              # Git ignore file
├── README.md               # Project documentation
├── package.json            # NPM package configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── eslint.config.js        # ESLint configuration
```

## Available Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run start`: Start the production server.
- `npm run lint`: Run ESLint to lint the codebase.

## Technologies Used

### Frontend

- **Next.js**: Server-side rendering and static site generation.
- **React**: Component-based architecture.
- **Tailwind CSS**: For styling and responsive design.
- **ShadCN UI**: For pre-built, customizable UI components.
- **Recharts**: Data visualization library for creating interactive charts.

### State Management

- **TanStack Query**: For managing and caching server-side data.

### TypeScript

- Strongly-typed language for improved reliability and developer experience.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add your message here"
   ```

4. Push to your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Enjoy building with the Weather App! 🌤️

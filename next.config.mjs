/** @type {import('next').NextConfig} */
// Import necessary modules
import { config } from "dotenv";
import { resolve } from "path";
import { readFileSync } from "fs";

// Load environment variables from the specified .env file
const envFilePath = resolve("~/Desktop/.safe/.hidden/example-repo/.env");
config({ path: envFilePath }); // Load variables into process.env

// Function to iterate over process.env and return only custom vars
const loadEnvVariables = () => {
    const envVariables = {};

    for (const [key, value] of Object.entries(process.env)) {
        // You can add any filtering logic here if needed
        if (key.startsWith("CUSTOM_")) {
            // Example: filter based on prefix
            envVariables[key] = value;
        }
    }

    return envVariables;
};

// Define Next.js configuration
const nextConfig = {
    env: {
        ...loadEnvVariables(), // Spread the loaded environment variables
    },
};

// Export the Next.js configuration
export default nextConfig;

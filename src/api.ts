import axios, { AxiosError, AxiosResponse } from 'axios';

// Base URL for the OtakuGifs API
const BASE_URL = 'https://api.otakugifs.xyz/gif';

/**
 * Fetches a specific anime GIF based on the given reaction.
 * This function constructs a URL using the base URL and the provided reaction and format.
 * It makes an HTTP GET request to the OtakuGifs API and retrieves the URL of the GIF.
 * 
 * @param reaction - The reaction type to search for the GIF. This should be a valid reaction string as defined by the API.
 * @param format - The format of the GIF to retrieve. Defaults to 'GIF'. The API may support other formats.
 * @returns A promise that resolves to the URL of the GIF if the request is successful.
 * 
 * @throws {Error} Throws an error if the request fails or if the reaction parameter is invalid.
 */
export async function fetchGif(reaction: string, format: string = 'GIF'): Promise<string> {
    // Validate reaction parameter
    if (!reaction || typeof reaction !== 'string') {
        throw new Error('Invalid reaction parameter. It must be a non-empty string.');
    }

    // Construct the URL for the API request
    const url = `${BASE_URL}?reaction=${reaction}&format=${format}`;

    try {
        // Make the API request to fetch the GIF
        const response: AxiosResponse = await axios.get(url);

        // Check if the response contains the expected data
        if (response.data && response.data.url) {
            return response.data.url;
        } else {
            throw new Error('Unexpected response format from OtakuGifs API');
        }
    } catch (error) {
        // Handle and log errors
        if (axios.isAxiosError(error)) {
            // Specific error handling for Axios errors
            const axiosError = error as AxiosError;
            console.error('Axios error fetching gif:', axiosError.message);
            throw new Error(`Axios error fetching gif: ${axiosError.message}`);
        } else {
            // Handle other types of errors
            console.error('Error fetching gif:', (error as Error).message);
            throw new Error('Error fetching gif from OtakuGifs API');
        }
    }
}

/**
 * Fetches a list of all available reactions from the OtakuGifs API.
 * This function makes an HTTP GET request to the API to retrieve all reaction types that are supported.
 * 
 * @returns A promise that resolves to an array of reaction strings if the request is successful.
 * 
 * @throws {Error} Throws an error if the request fails or if the response format is unexpected.
 */
export async function fetchAllReactions(): Promise<string[]> {
    try {
        // Make the API request to fetch all reactions
        const response: AxiosResponse = await axios.get('https://api.otakugifs.xyz/gif/allreactions');

        // Check if the response contains the expected data
        if (response.data && Array.isArray(response.data.reactions)) {
            return response.data.reactions;
        } else {
            throw new Error('Unexpected response format from OtakuGifs API');
        }
    } catch (error) {
        // Handle and log errors
        if (axios.isAxiosError(error)) {
            // Specific error handling for Axios errors
            const axiosError = error as AxiosError;
            console.error('Axios error fetching reactions:', axiosError.message);
            throw new Error(`Axios error fetching reactions: ${axiosError.message}`);
        } else {
            // Handle other types of errors
            console.error('Error fetching reactions:', (error as Error).message);
            throw new Error('Error fetching reactions from OtakuGifs API');
        }
    }
}

/**
 * Utility function to validate URL format.
 * Checks if the provided URL string is a valid URL.
 * 
 * @param url - The URL string to validate.
 * @returns True if the URL is valid, false otherwise.
 */
function isValidUrl(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

/**
 * Utility function to log API request details.
 * Logs details of the API request such as the URL and parameters.
 * 
 * @param url - The URL of the API request.
 * @param params - The parameters used in the request.
 */
function logApiRequest(url: string, params: any): void {
    console.log(`API Request: ${url}`);
    console.log(`Parameters:`, params);
}

/**
 * Utility function to handle and format API errors.
 * Provides a standardized error message format for API errors.
 * 
 * @param error - The error object from the API request.
 * @returns A formatted error message string.
 */
function formatApiError(error: unknown): string {
    if (axios.isAxiosError(error)) {
        return `API Error: ${error.message}`;
    } else if (error instanceof Error) {
        return `Unexpected Error: ${error.message}`;
    } else {
        return 'An unknown error occurred';
    }
}

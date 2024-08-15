import { fetchGif, fetchAllReactions } from './api';

/**
 * Retrieves an anime GIF based on the given reaction.
 * @param reaction - The reaction to search for the GIF.
 * @param format - The format of the GIF (default is 'GIF').
 * @returns The URL of the GIF.
 */
export async function getAnimeGif(reaction: string, format: string = 'GIF'): Promise<string> {
    if (!reaction) {
        throw new Error('Reaction is required');
    }
    return fetchGif(reaction, format);
}

/**
 * Lists all available reactions.
 * @returns A list of reactions.
 */
export async function listReactions(): Promise<string[]> {
    return fetchAllReactions();
}

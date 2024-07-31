import { fetchGif, fetchAllReactions } from './api';

export async function getAnimeGif(reaction: string, format: string = 'GIF'): Promise<string> {
    if (!reaction) {
        throw new Error('Reaction is required');
    }
    return fetchGif(reaction, format);
}

export async function listReactions(): Promise<string[]> {
    return fetchAllReactions();
}

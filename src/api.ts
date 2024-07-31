import axios from 'axios';

const BASE_URL = 'https://api.otakugifs.xyz/gif';

export async function fetchGif(reaction: string, format: string = 'GIF'): Promise<string> {
    try {
        const response = await axios.get(`${BASE_URL}?reaction=${reaction}&format=${format}`);
        return response.data.url;
    } catch (error) {
        console.error('Error fetching gif:', error);
        throw error;
    }
}

export async function fetchAllReactions(): Promise<string[]> {
    try {
        const response = await axios.get('https://api.otakugifs.xyz/gif/allreactions');
        return response.data.reactions;
    } catch (error) {
        console.error('Error fetching reactions:', error);
        throw error;
    }
}

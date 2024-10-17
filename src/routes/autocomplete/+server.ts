import type { RequestHandler } from '@sveltejs/kit';
import { GOOGLE_PLACES_API_KEY } from '$env/static/private';

export const GET: RequestHandler = async ({ url }) => {
    const input = url.searchParams.get('input');

    if (!input || input.length < 3) {
        return {
            status: 400,
            body: {
                message: 'Zadejte alespoň 3 znaky pro hledání.'
            }
        };
    }
    const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&components=country:cz&key=${GOOGLE_PLACES_API_KEY}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    return new Response(JSON.stringify(data));
};

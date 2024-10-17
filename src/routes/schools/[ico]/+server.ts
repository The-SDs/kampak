import type { RequestHandler } from '@sveltejs/kit';
import { School } from '$lib/server/models/school';

export const GET: RequestHandler = async ({ params }) => {
    // Extract the 'ico' parameter from the request params
    const { ico } = params;

    // Fetch the school based on the 'ico'
    const school = await School.findOne({ ico }).select("-id");

    if (!school) {
        return new Response(JSON.stringify({ error: 'School not found' }), { status: 404 });
    }

    return new Response(JSON.stringify(school.toObject()), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        }
    });
};

import { supabase } from '@/app/utils/supabase';

export async function GET() {
    try {
        // Fetch data to prevent Supabase project from pausing
        const { data, error } = await supabase.from('downloads').select();
        if (error) throw new Error(error.message);
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        const message = error.message || 'An error occurred.';
        return new Response(JSON.stringify({ error: message }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

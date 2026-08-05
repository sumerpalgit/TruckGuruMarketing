import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const apiKey = req.headers.get('x-api-key');
    if (apiKey !== process.env.REVALIDATION_SECRET) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { slug, event, tag } = await req.json();

    if (slug) revalidateTag(`cms-page-${slug}`);
    if (tag) revalidateTag(tag);
    revalidateTag('cms-slugs');
    revalidateTag('cms-headers');

    return NextResponse.json({ revalidated: true, slug, event, tag });
}

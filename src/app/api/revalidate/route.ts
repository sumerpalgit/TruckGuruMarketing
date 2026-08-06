import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const apiKey = req.headers.get('x-api-key');
    if (apiKey !== process.env.REVALIDATION_SECRET) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { slug, event, tag } = await req.json();

    if (tag) {
        revalidateTag(tag);
        // When a CMS page changes, also revalidate the slug list
        // so new/deleted pages appear immediately in generateStaticParams()
        if (tag !== 'cms-headers') {
            revalidateTag('cms-slugs');
        }
    }

    return NextResponse.json({ revalidated: true, slug, event, tag });
}

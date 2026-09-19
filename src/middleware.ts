import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const accept = request.headers.get('accept') || '';
  
  if (accept.includes('text/markdown')) {
    // If it's the homepage, return llms.txt content as text/markdown
    if (request.nextUrl.pathname === '/') {
      const url = request.nextUrl.clone();
      url.pathname = '/llms.txt';
      const fileResponse = await fetch(url);
      const content = await fileResponse.text();
      
      return new NextResponse(content, {
        headers: {
          'Content-Type': 'text/markdown',
          'x-markdown-tokens': '1000'
        }
      });
    }
  }

  // Handle ARD manifest CORS
  if (request.nextUrl.pathname === '/.well-known/ai-catalog.json') {
    const response = NextResponse.next();
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Content-Type', 'application/json');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/.well-known/ai-catalog.json'
  ],
};

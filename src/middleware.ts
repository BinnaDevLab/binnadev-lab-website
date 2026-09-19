import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const accept = request.headers.get('accept') || '';
  
  if (accept.includes('text/markdown')) {
    // If it's the homepage, rewrite to llms.txt (assuming it has markdown content)
    if (request.nextUrl.pathname === '/') {
      const url = request.nextUrl.clone();
      url.pathname = '/llms.txt';
      const response = NextResponse.rewrite(url);
      response.headers.set('Content-Type', 'text/markdown');
      response.headers.set('x-markdown-tokens', 'true');
      return response;
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

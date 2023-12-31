import { EnumTokens } from '@services/auth/auth.service';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
	const cookies = req.cookies.get(EnumTokens.REFRESH_TOKEN);

	const isAuth = await fetch('http://localhost:7777/auth/is-auth-next-mw', {
		headers: {
			Cookie: `${cookies?.name}=${cookies?.value}`,
		},
	});
	console.log(isAuth.status);

	if (isAuth.status === 401) {
		return NextResponse.redirect(new URL('/auth/sign-in', req.url));
	}

	const res = NextResponse.next();
	return res;
}

export const config = {
	matcher: ['/'],
};

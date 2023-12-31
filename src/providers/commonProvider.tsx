'use client';

import { ShortUserInfoProvider } from '@context/shortUserInfo.context';
import { ReactQueryProvider } from './react-query.provider';
import ReduxProvider from './redux.provider';

export default function CommonProvider({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ShortUserInfoProvider>
				<ReactQueryProvider>
					<ReduxProvider>{children}</ReduxProvider>
				</ReactQueryProvider>
			</ShortUserInfoProvider>
		</>
	);
}

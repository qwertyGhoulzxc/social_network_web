import { userService } from '@services/user-service/user.service';
import { createContext, useContext, useEffect, useState } from 'react';

export interface IShortUser {
	id: string;
	username: string;
	isActivated: boolean;
	profile: {
		avatarPath: string;
	};
}

interface IShortUserContext {
	shortUserInfo: IShortUser | null;
	setShortUserInfo: React.Dispatch<React.SetStateAction<IShortUser | null>>;
}

const ShortUserContext = createContext<IShortUserContext | null>(null);

export function ShortUserInfoProvider({ children }: { children: React.ReactNode }) {
	const [shortUserInfo, setShortUserInfo] = useState<IShortUser | null>(null);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await userService.getShortInfo();
				setShortUserInfo(data);
			} catch (error) {
				// Обработка ошибок, если нужно
			}
		};

		if (shortUserInfo === null) {
			fetchData();
		}
	}, [shortUserInfo]);

	console.log(shortUserInfo);
	const value: IShortUserContext = {
		shortUserInfo,
		setShortUserInfo,
	};

	return <ShortUserContext.Provider value={value}>{children}</ShortUserContext.Provider>;
}

export const useShortUserContext = (): IShortUserContext | null => useContext(ShortUserContext);

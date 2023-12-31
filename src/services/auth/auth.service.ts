import { axiosClassic } from '@api/interceptor';
import { AxiosError } from 'axios';
import { removeFromStorage, saveTokenStorage } from './auth.helper';
import { type IAuthLogin } from './interfaces';

export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshtoken',
}

export const authService = {
	async signIn(data: IAuthLogin) {
		try {
			const response = await axiosClassic.post('auth/login', data);
			if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

			return response;
		} catch (err: AxiosError) {
			if (err.response.data) throw err.response.data;
		}
	},

	async updateTokens() {
		try {
			const response = await axiosClassic.get('auth/refresh-tokens');
			if (response.data.accessToken) saveTokenStorage(response.data.accessToken);
			return response;
		} catch (err: AxiosError) {
			if (err.response?.data) throw err.response.data;
		}
	},

	async logout() {
		const response = await axiosClassic.get('auth/logout');
		if (response.data) removeFromStorage();

		return response;
	},
};

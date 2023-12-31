import { axiosWithAuth } from '@api/interceptor';
import { AxiosError } from 'axios';
import { IProfile } from './interfaces';

export const profileService = {
	async getProfileById(id: string) {
		try {
			const response = await axiosWithAuth.get<IProfile>(`account/profile/${id}`);
			return response;
		} catch (err: AxiosError) {
			if (err.response?.data) throw err.response.data;
		}
	},
};

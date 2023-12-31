import { axiosWithAuth } from '@api/interceptor';

export const userService = {
	async getShortInfo() {
		try {
			const response = await axiosWithAuth.get('user/short-me');

			return response;
		} catch (err: AxiosError) {
			if (err.response?.data) throw err.response.data;
		}
	},
};

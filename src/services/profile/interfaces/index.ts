export interface IProfile {
	user: User;
	posts: Posts;
}
//type change
export interface Posts {
	previewImages: any[];
	pagination: Pagination;
}

export interface Pagination {
	limit: number;
	page: number;
	total: string;
}

export interface IProfileUser {
	id: string;
	username: string;
	roles: string[];
	profile: IProfileInfo;
	followers: number;
	following: number;
	postsCount: number;
}

export interface IProfileInfo {
	name: string;
	description: string;
	avatarPath: string;
}

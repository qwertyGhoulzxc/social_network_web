import { PASSWORD_REGEX } from './regex';

export const NO_INDEX_PAGE = { robots: { index: false, follow: false } };

export const PASSWORD_PARAMS = {
	regex: PASSWORD_REGEX,
	minLength: 8,
	maxLength: 40,
};

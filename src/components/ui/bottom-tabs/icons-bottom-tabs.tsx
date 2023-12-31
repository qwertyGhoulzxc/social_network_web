import { GoHome, GoHomeFill } from 'react-icons/go';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { IoAddCircle, IoSearchOutline, IoSearchSharp } from 'react-icons/io5';

export const Icons = [
	{
		path: '/',
		icon: function (currPath: string) {
			return currPath === this.path ? <GoHomeFill /> : <GoHome />;
		},
	},
	{
		path: '/search',
		icon: function (currPath: string) {
			return currPath === this.path ? <IoSearchSharp /> : <IoSearchOutline />;
		},
	},
	{
		path: '/add-post',
		icon: function (currPath: string) {
			return currPath === this.path ? <IoAddCircle /> : <IoMdAddCircleOutline />;
		},
	},
];

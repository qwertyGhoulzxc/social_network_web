'use client';
import { useShortUserContext } from '@context/shortUserInfo.context';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import styles from './bottom-tabs.module.scss';
import { Icons } from './icons-bottom-tabs';
export function BottomTabs() {
	const path = usePathname();
	const { push } = useRouter();
	const user = useShortUserContext();
	console.log(user?.shortUserInfo?.username);
	return (
		<div className={styles.bottomTabsContainer}>
			{Icons.map(val => (
				<button onClick={() => push(val.path)} key={val.path}>
					{val.icon(path)}
				</button>
			))}
			<button
				onClick={() => {
					push(`/profile/${user?.shortUserInfo?.username}`);
				}}
				className={`/profile/${user?.shortUserInfo?.username}` === path ? styles.active : styles.defButAv}
			>
				<Image
					src={user?.shortUserInfo?.profile.avatarPath || '/images/defaultAvatar.jpg'}
					width={20}
					height={20}
					className='rounded-full h-5 w-5'
					alt=''
				/>
			</button>
		</div>
	);
}

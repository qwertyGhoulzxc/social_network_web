import { BottomTabs } from '@components/ui/bottom-tabs/bottom-tabs';

export default function Profile({ params }) {
	return (
		<main className='flex h-screen w-full'>
			profile {params.username}
			<BottomTabs></BottomTabs>
		</main>
	);
}

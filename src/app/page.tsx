import { BottomTabs } from '@components/ui/bottom-tabs/bottom-tabs';
import styles from './page.module.scss';

export default function Home() {
	return (
		<main className={styles.main}>
			main page
			<BottomTabs></BottomTabs>
		</main>
	);
}

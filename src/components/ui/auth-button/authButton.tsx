import cn from 'classnames';
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import styles from './authButton.module.scss';

interface IAuthButton extends ButtonHTMLAttributes<HTMLButtonElement> {}
const AuthButton: FC<PropsWithChildren<IAuthButton>> = ({ children, className, ...rest }) => {
	return (
		<button className={cn(styles.authBtn, className)} {...rest}>
			{children}
		</button>
	);
};

export default AuthButton;

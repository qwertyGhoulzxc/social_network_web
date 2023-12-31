'use client';
import { PASSWORD_PARAMS } from '@constants/app.constants';
import cn from 'classnames';
import { FC, InputHTMLAttributes, useState } from 'react';
import type { UseFormRegister } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import styles from './password-input.module.scss';

interface IPasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
	register: UseFormRegister<any>;
}

const PasswordInput: FC<IPasswordInputProps> = ({ register, className, ...rest }) => {
	const [isHidden, setIsHidden] = useState<boolean>(true);
	const handleHide = () => {
		setIsHidden(prev => !prev);
	};
	return (
		<div className={cn(styles.passwordInput, className)}>
			<input
				autoComplete='off'
				type={isHidden ? 'password' : 'text'}
				{...register('password', {
					required: 'required field',
					minLength: {
						value: PASSWORD_PARAMS.minLength,
						message: 'password less than 8 characters',
					},
					maxLength: {
						value: PASSWORD_PARAMS.maxLength,
						message: 'password more than 40 characters',
					},
					pattern: {
						value: PASSWORD_PARAMS.regex,
						message: 'invalid password format',
					},
				})}
				{...rest}
			/>
			{isHidden ? <IoMdEyeOff onClick={handleHide} /> : <IoMdEye onClick={handleHide} />}
		</div>
	);
};

export default PasswordInput;

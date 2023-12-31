'use client';

import { type IApiError } from '@api/interfaces';
import AuthButton from '@components/ui/auth-button/authButton';
import PasswordInput from '@components/ui/input/password-input';
import Logo from '@components/ui/logo/logo';
import { NavigationPaths } from '@config/paths';
import { authService } from '@services/auth/auth.service';
import InputStyle from '@styles/forms/auth-form.module.scss';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import type { IFormFields } from './sign-in.interface';
import styles from './sign-in.module.scss';

export function SignIn() {
	const [isApiError, setIsApiError] = useState<IApiError | null>(null);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormFields>({ mode: 'onChange' });

	const { mutate, error } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IFormFields) => authService.signIn(data),
		onError: (data: IApiError) => {
			setIsApiError(data);
		},
		onSuccess: () => {
			router.replace(NavigationPaths.main);
		},
	});

	const onSubmit: SubmitHandler<IFormFields> = dataForm => {
		mutate(dataForm);
	};

	return (
		<div className={styles.singInContainer}>
			<div className={styles.logoContainer}>
				<Logo size={70} />
				<h2>sign in to ucherry</h2>
			</div>
			<form className={styles.signInForm} onSubmit={handleSubmit(onSubmit)}>
				<div>
					<p>username, email or phone</p>
					<input
						className={InputStyle.defInput}
						type='text'
						{...register('login', {
							required: 'required field',
						})}
					/>
					{errors.login ? (
						<span className='mb-1 '>{errors.login?.message}</span>
					) : (
						<span className='text-transparent mb-1'>u genius</span>
					)}
				</div>
				<div className='mb-4'>
					<p>password</p>
					<PasswordInput register={register} />
					{errors.password ? (
						<span>{errors.password?.message}</span>
					) : (
						<span className='text-transparent'>u genius</span>
					)}
				</div>
				<AuthButton className='mb-2'>sign in</AuthButton>
				{isApiError ? <span>{isApiError?.message}</span> : <span className='text-transparent'>u genius</span>}
			</form>
		</div>
	);
}

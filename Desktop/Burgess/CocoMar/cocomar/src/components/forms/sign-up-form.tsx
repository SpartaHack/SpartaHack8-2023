'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
	email: z.string().email({ message: 'Invalid email address' }),
});

type FormData = z.infer<typeof schema>;

function SignUpForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
		null
	);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const onSubmit = async (data: FormData) => {
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			const response = await fetch('/api/save-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				setSubmitStatus('success');
				reset();
			} else {
				setSubmitStatus('error');
			}
		} catch (error) {
			console.error('Error submitting form:', error);
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
			setTimeout(() => {
				setSubmitStatus(null);
			}, 3000);
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="max-w-lg ">
			<div className="flex gap-2 items-center rounded-2xl bg-white border border-neutral-300 overflow-hidden p-2 sm:-ml-1">
				<input
					id="email"
					{...register('email')}
					className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-coco-violet-medium"
					placeholder="Enter your email"
				/>
				<button
					type="submit"
					disabled={isSubmitting}
					className="py-2 px-4 whitespace-nowrap rounded-lg text-white bg-coco-orange-light hover:bg-coco-orange-light/80 focus:outline-none focus:ring-2 focus:ring-coco-violet-dark focus:ring-opacity-80 disabled:opacity-50">
					{isSubmitting ? 'Submitting...' : 'Sign Up'}
				</button>
			</div>
			<div className="h-8 -mb-8">
				{errors.email && (
					<p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
				)}
				{submitStatus === 'success' && (
					<p className="mt-1 text-coco-green-light">
						Thank you for signing up!
					</p>
				)}
				{submitStatus === 'error' && (
					<p className="mt-1 text-red-500">
						An error occurred. Please try again.
					</p>
				)}
			</div>
		</form>
	);
}

export default SignUpForm;

import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';

type TextLogoProps = {
	className?: string;
	small?: boolean;
};

const TextLogo = forwardRef<HTMLSpanElement, TextLogoProps>(function TextLogo(
	{ className, small = false, ...props },
	ref
) {
	return (
		<>
			<span
				id="text-logo"
				ref={ref}
				className={cn('font-grotesk uppercase', className)}
				{...props}>
				<span
					className={cn('font-light inline-block', {
						'font-normal': small,
					})}>
					S
				</span>
				<span
					className={cn('font-light inline-block -mr-[0.1ch]', {
						'font-normal': small,
					})}>
					p
				</span>
				<span
					className={cn('font-light inline-block', {
						'font-normal': small,
					})}>
					a
				</span>
				<span
					className={cn('font-light inline-block', {
						'font-normal': small,
					})}>
					r
				</span>
				<span
					className={cn('font-light inline-block -mr-[0.1ch]', {
						'font-normal': small,
					})}>
					t
				</span>
				<span
					className={cn('font-light inline-block', {
						'font-normal': small,
					})}>
					a
				</span>
				<span className="inline-block font-bold">H</span>
				<span className="inline-block font-bold">a</span>
				<span className="inline-block font-bold">c</span>
				<span className="inline-block font-bold mr-[0.4ch]">k</span>
				<span className="inline-block font-bold">X</span>
			</span>
		</>
	);
});

TextLogo.displayName = 'TextLogo';

export default TextLogo;

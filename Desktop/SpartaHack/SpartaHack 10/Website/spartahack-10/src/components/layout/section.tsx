import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';

type SectionProps = {
	className?: string;
	children?: React.ReactNode | React.ReactNode[];
};

const Section = forwardRef<HTMLDivElement, SectionProps>(function Section(
	{ className, children }: SectionProps,
	ref
) {
	return (
		<section
			ref={ref}
			className={cn(
				'w-full h-screen flex justify-center items-center flex-col',
				className
			)}>
			{children}
		</section>
	);
});

export default Section;

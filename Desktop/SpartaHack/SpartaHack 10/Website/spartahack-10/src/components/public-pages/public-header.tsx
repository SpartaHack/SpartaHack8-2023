'use client';

import React, { useRef } from 'react';
import TextLogo from '../ui/text-logo';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(useGSAP);
}

function PublicHeader() {
	const header = useRef<HTMLElement | null>(null);
	const tl = useRef<GSAPTimeline>();

	useGSAP(
		() => {
			if (header.current) {
				tl.current = gsap.timeline();
				const letters = gsap.utils.toArray('#text-logo span');

				tl.current
					.delay(0.5)
					.to(header.current, { opacity: 1 })
					.from(letters, {
						y: 30,
						x: 10,
						rotate: '5deg',
						stagger: {
							amount: 0.2,
							from: 'start',
							ease: 'sine.in',
						},
					});
			}
		},
		{ scope: header }
	);

	return (
		<header
			ref={header}
			className="w-full px-10 py-8 fixed top-0 opacity-0">
			<nav className="w-full flex items-center justify-center text-base">
				<div className="uppercase overflow-hidden">
					<TextLogo small />
				</div>
				{/* <div className="flex items-center gap-20 font-mono">
						<button className="uppercase">About</button>
						<button className="uppercase">Gallery</button>
						<button className="uppercase">Sponsor</button>
						<button className="uppercase font-bold">Apply</button>
					</div> */}
			</nav>
		</header>
	);
}

export default PublicHeader;

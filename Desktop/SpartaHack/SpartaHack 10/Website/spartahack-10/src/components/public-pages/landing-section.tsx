'use client';

import React, { useEffect, useRef } from 'react';
import Section from '../layout/section';
import TextLogo from '../ui/text-logo';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(useGSAP);
}

function LandingSection() {
	const container = useRef<HTMLDivElement | null>(null);
	const titleRef = useRef<HTMLDivElement | null>(null);
	const infoRef = useRef<HTMLDivElement | null>(null);
	const introRef = useRef<HTMLDivElement | null>(null);
	const openSoonRef = useRef<HTMLDivElement | null>(null);
	// const formTitleRef = useRef<HTMLDivElement | null>(null);
	// const formRef = useRef<HTMLFormElement | null>(null);
	const tl = useRef<GSAPTimeline>();

	useGSAP(() => {
		if (
			infoRef.current &&
			introRef.current &&
			openSoonRef.current &&
			// formTitleRef.current &&
			// formRef.current &&
			titleRef.current
		) {
			tl.current = gsap.timeline();

			const titleElements = gsap.utils.toArray(
				titleRef.current.querySelectorAll('span')
			);

			const infoElements = gsap.utils.toArray(
				infoRef.current.querySelectorAll('span')
			);

			const introElements = gsap.utils.toArray(
				introRef.current.querySelectorAll('span')
			);

			const openSoonElements = gsap.utils.toArray(
				openSoonRef.current.querySelectorAll('span')
			);

			const formTitleElements = gsap.utils.toArray(
				document.querySelectorAll('.notification-form-title span')
			);

			const formChildren = gsap.utils.toArray('.notification-form > *');

			tl.current
				.delay(0.5)
				.addLabel('start')
				.to(container.current, {
					opacity: 1,
				})
				.from(
					titleElements,
					{
						y: '-150%',
						// x: 20,
						duration: 0.5,
						rotate: '-5deg',
						ease: 'power2.out',
						stagger: {
							amount: 0.3,
							from: 'start',
							ease: 'sine.in',
						},
					},
					'start'
				)
				.from(
					infoElements,
					{
						y: 30,
						// opacity: 0,
						rotate: '5deg',
						duration: 0.5,
						ease: 'power2.out',
						stagger: {
							amount: 0.2,
							from: 'start',
						},
					},
					'<25%'
				)
				.addLabel('openSoon')
				.from(
					openSoonElements,
					{
						opacity: 0,
						y: -45,
						rotate: '-5deg',
						stagger: {
							amount: 0.3,
							from: 'start',
							ease: 'sine.in',
						},
					},
					'start+=50%'
				)
				.from(
					introElements,
					{
						y: 20,
						opacity: 0,
						rotate: '5deg',
						duration: 0.5,
						stagger: {
							amount: 0.5,
							from: 'start',
							ease: 'sine.in',
						},
						ease: 'power2.out',
					},
					'<50%'
				)
				.from(
					formTitleElements,
					{
						y: -40,
						rotate: '-5deg',
						stagger: {
							amount: 0.2,
							from: 'start',
							ease: 'power2.in',
						},
						// ease: 'sine.out',
					},
					'start+=50%'
				)
				.from(
					'.notification-form',
					{
						opacity: 0,
						duration: 0.1,
					},
					'<50%'
				)
				.from(
					'.notification-form',
					{
						scaleX: 0,
						transformOrigin: 'left center',
						duration: 1,
						ease: 'power4.out',
					},
					'<'
				)
				// .from(
				// 	formRef.current,
				// 	{
				// 		height: 0,
				// 		duration: 0.7,
				// 		ease: 'power2.out',
				// 	},
				// 	'>'
				// )
				.from(
					formChildren,
					{
						y: 30,
						duration: 0.5,
						stagger: {
							amount: 0.2,
							from: 'start',
						},
						ease: 'power2.out',
					},
					'>'
				);
		}
	});

	return (
		<Section
			ref={container}
			className="pt-8 gap-8 opacity-0">
			<div className="w-min font-grotesk font-light flex flex-col gap-16">
				<div className="flex flex-col gap-12">
					<h1
						ref={titleRef}
						className="lg:text-9xl md:text-8xl sm:text-7xl text-5xl uppercase overflow-hidden text-nowrap w-min">
						<TextLogo />
					</h1>
					<div
						ref={infoRef}
						className="flex justify-between overflow-hidden uppercase max-sm:text-sm">
						<span className="inline-block">Michigan State University</span>
						<span className="inline-block">February 2025</span>
					</div>
				</div>
				<div className="flex flex-col gap-4 sm:w-min">
					<h2
						ref={openSoonRef}
						className="uppercase font-grotesk md:text-4xl text-3xl font-light sm:text-nowrap text-pretty overflow-hidden">
						{`Applications will open soon`.split(' ').map((word, index) => (
							<span
								key={index}
								className="inline-block mr-2.5">
								{word}
							</span>
						))}
					</h2>
					<p
						ref={introRef}
						className="w-full uppercase leading-loose text-sm">
						{`Be a part of Michigan State University’s annual hackathon tailored
						for those who see opportunity in a challenge and seek to widen their
						horizons.`
							.split(' ')
							.map((word, index) => (
								<span
									key={index}
									className="inline-block mr-1">
									{word}
								</span>
							))}
					</p>
				</div>
				<div className="w-full flex flex-col gap-2 overflow-hidden">
					<h3
						// ref={formTitleRef}
						className="notification-form-title uppercase">
						{'Get notified when applications open'
							.split(' ')
							.map((word, index) => (
								<span
									key={index}
									className="inline-block mr-1">
									{word}
								</span>
							))}
					</h3>
					<form className="max-w-full notification-form border-[0.5px] flex backdrop-blur-sm overflow-hidden p-0.5">
						<input
							type="text"
							className="bg-transparent font-grotesk uppercase py-2.5 px-3.5 flex-1"
							placeholder="Your email"
						/>
						<button className="uppercase px-4 font-bold hover:bg-white hover:text-black">
							Submit
						</button>
					</form>
				</div>
			</div>
		</Section>
	);
}

export default LandingSection;

'use client';

import React, { useRef, useState, useEffect } from 'react';

interface CircularWaveProps {
	className?: string;
	children?: React.ReactNode;
	width?: number;
	minSize?: number;
	maxSize?: number;
	waveCount?: number;
	waveHeightPercentage?: number;
	color?: string;
}

const CircularWave: React.FC<CircularWaveProps> = ({
	className = '',
	children,
	width,
	minSize = 400,
	maxSize = 2000,
	waveCount = 20,
	waveHeightPercentage = 1,
	color = 'currentColor',
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const childrenRef = useRef<HTMLDivElement>(null);
	const [size, setSize] = useState(width || minSize);

	useEffect(() => {
		if (width) {
			setSize(width);
			return;
		}

		const updateSize = () => {
			if (childrenRef.current) {
				const childWidth = childrenRef.current.offsetWidth;
				const childHeight = childrenRef.current.offsetHeight;
				const newSize = Math.max(childWidth, childHeight);
				console.log(childWidth);
				setSize(Math.min(Math.max(newSize, minSize), maxSize));
			}
		};

		updateSize();
		window.addEventListener('resize', updateSize);
		return () => window.removeEventListener('resize', updateSize);
	}, [children, width, minSize, maxSize]);

	const center = size / 2;
	const waveHeight = (size * waveHeightPercentage) / 100;
	const baseRadius = size / 2 - waveHeight;

	const generatePath = () => {
		let path = '';
		const angleStep = (Math.PI * 2) / (waveCount * 20);

		for (let i = 0; i <= waveCount * 20; i++) {
			const angle = i * angleStep;
			const waveRadius = baseRadius + waveHeight * Math.sin(waveCount * angle);
			const x = center + waveRadius * Math.cos(angle);
			const y = center + waveRadius * Math.sin(angle);

			if (i === 0) {
				path += `M ${x},${y} `;
			} else {
				path += `L ${x},${y} `;
			}
		}

		path += 'Z';
		return path;
	};

	return (
		<div
			ref={containerRef}
			className={`relative inline-block rotate-0 hover:-rotate-6 transition duration-200 ease-in-out ${className}`}
			style={{ width: size, height: size }}>
			<svg
				width={size}
				height={size}
				viewBox={`0 0 ${size} ${size}`}
				fill="inherit"
				className="overflow-visible"
				xmlns="http://www.w3.org/2000/svg">
				<path d={generatePath()} />
			</svg>
			<div
				ref={childrenRef}
				className="absolute inset-0 w-full flex items-center justify-center">
				{children}
			</div>
		</div>
	);
};

export default CircularWave;

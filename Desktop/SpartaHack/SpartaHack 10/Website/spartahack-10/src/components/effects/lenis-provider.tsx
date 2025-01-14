'use client';

import Lenis from '@studio-freight/lenis';
import { useEffect, useRef } from 'react';

interface LenisProviderProps {
	children: React.ReactNode;
	smoothness?: number;
}

export function LenisProvider({
	children,
	smoothness = 0.5, // Default smoothness value
}: LenisProviderProps) {
	const lenisRef = useRef<Lenis | null>(null);

	useEffect(() => {
		lenisRef.current = new Lenis({
			duration: 1.2,
			// easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
			orientation: 'vertical', // vertical, horizontal
			gestureOrientation: 'vertical', // vertical, horizontal, both
			touchMultiplier: 2,
			infinite: false,
			smoothWheel: true,
			wheelMultiplier: smoothness, // This is where we apply the smoothness
		});

		function raf(time: number) {
			lenisRef.current?.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenisRef.current?.destroy();
		};
	}, [smoothness]);

	return children;
}

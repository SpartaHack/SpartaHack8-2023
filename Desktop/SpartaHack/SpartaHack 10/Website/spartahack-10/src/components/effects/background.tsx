'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Constants for particle counts and sizes
const PARTICLE_COUNT_SMALL = 2500;
const PARTICLE_COUNT_LARGE = 1500;
const PARTICLE_SIZE_SMALL = 0.001;
const PARTICLE_SIZE_LARGE = 0.025;

// New constants for the distant star layer
const PARTICLE_COUNT_DISTANT = 2000;
const PARTICLE_SIZE_DISTANT = 0.01;
const DISTANT_SPREAD_X = 20;
const DISTANT_SPREAD_Y = 50;
const DISTANT_Z = -10;

// Constants for camera settings
const CAMERA_FOV = 75;
const CAMERA_NEAR = 1.5;
const CAMERA_FAR = 20;

// Constants for mouse and scroll sensitivity
const MOUSE_SENSITIVITY = 0.0001;
const SCROLL_SENSITIVITY = 0.007;

// Constants for particle distribution
const HORIZONTAL_SPREAD = 30;
const VERTICAL_SPREAD = 40;

// Constants for inertia
const INERTIA_FACTOR = 0.05;

// Constants for fade-in effect
const FADE_IN_DURATION = 500; // Duration for each layer to fade in (in milliseconds)
const FADE_IN_DELAY = 100; // Delay between each layer starting to fade in (in milliseconds)

// Constants for camera animation
const CAMERA_ANIMATION_DURATION = 2500; // Duration of camera animation in milliseconds
const CAMERA_START_Z = 7; // Starting Z position of camera (farther away)
const CAMERA_END_Z = 2; // Ending Z position of camera (normal position)

function Background() {
	const containerRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const getRandomParticlePos = (
			particleCount: number,
			spreadX?: number,
			spreadY?: number,
			spreadZ?: number
		): Float32Array => {
			const arr = new Float32Array(particleCount * 3);
			for (let i = 0; i < particleCount; i++) {
				arr[i * 3] =
					(Math.random() - 0.5) * (!!spreadX ? spreadX : HORIZONTAL_SPREAD);
				arr[i * 3 + 1] =
					(Math.random() - 0.5) * (!!spreadY ? spreadY : VERTICAL_SPREAD);
				arr[i * 3 + 2] =
					(Math.random() - 0.5) *
					(!!spreadZ ? spreadZ : HORIZONTAL_SPREAD * 0.5);
			}

			return arr;
		};

		let mouseX = 0;
		let mouseY = 0;
		let scrollY = 0;
		let targetMouseX = 0;
		let targetMouseY = 0;
		let targetScrollY = 0;

		const main = (): void => {
			const canvas = containerRef.current;

			if (!canvas) {
				console.error('Canvas element not found');
				return;
			}

			const renderer = new THREE.WebGLRenderer({ canvas });
			renderer.setClearColor(new THREE.Color('#0a0a0a'));
			const scene = new THREE.Scene();

			const light = new THREE.DirectionalLight(0xffffff, 0.1);
			light.position.set(-1, 2, 4);
			scene.add(light);

			const camera = new THREE.PerspectiveCamera(
				CAMERA_FOV,
				1,
				CAMERA_NEAR,
				CAMERA_FAR
			);
			camera.position.z = CAMERA_START_Z; // Start camera farther away
			camera.position.y = 5000;

			// console.log(document.querySelector('body')?.clientHeight);

			const geometries = [
				new THREE.BufferGeometry(),
				new THREE.BufferGeometry(),
				new THREE.BufferGeometry(),
			];

			geometries[0].setAttribute(
				'position',
				new THREE.BufferAttribute(getRandomParticlePos(PARTICLE_COUNT_SMALL), 3)
			);
			geometries[1].setAttribute(
				'position',
				new THREE.BufferAttribute(getRandomParticlePos(PARTICLE_COUNT_LARGE), 3)
			);
			geometries[2].setAttribute(
				'position',
				new THREE.BufferAttribute(
					getRandomParticlePos(
						PARTICLE_COUNT_DISTANT,
						DISTANT_SPREAD_X,
						DISTANT_SPREAD_Y,
						2
					),
					3
				)
			);

			const loader = new THREE.TextureLoader();

			const materials = [
				new THREE.PointsMaterial({
					size: PARTICLE_SIZE_SMALL,
					map: loader.load(
						'https://raw.githubusercontent.com/Kuntal-Das/textures/main/sp1.png'
					),
					transparent: true,
					color: new THREE.Color(0xffffff),
					opacity: 0.8,
				}),
				new THREE.PointsMaterial({
					size: PARTICLE_SIZE_LARGE,
					map: loader.load(
						'https://raw.githubusercontent.com/Kuntal-Das/textures/main/sp2.png'
					),
					transparent: true,
					color: new THREE.Color(0xffffff),
					opacity: 1,
				}),
				new THREE.PointsMaterial({
					size: PARTICLE_SIZE_DISTANT,
					map: loader.load(
						'https://raw.githubusercontent.com/Kuntal-Das/textures/main/sp1.png'
					),
					transparent: true,
					color: new THREE.Color(0xffffff),
					opacity: 0.5,
				}),
			];

			const starsT1 = new THREE.Points(geometries[0], materials[0]);
			const starsT2 = new THREE.Points(geometries[1], materials[1]);
			const distantStars = new THREE.Points(geometries[2], materials[2]);

			scene.add(starsT1);
			scene.add(starsT2);
			scene.add(distantStars);

			const resizeRendererToDisplaySize = (
				renderer: THREE.WebGLRenderer
			): boolean => {
				const canvas = renderer.domElement;
				const width = canvas.clientWidth;
				const height = canvas.clientHeight;
				const needResize = canvas.width !== width || canvas.height !== height;
				if (needResize) {
					renderer.setSize(width, height, false);
				}
				return needResize;
			};

			// Position the distant stars far back
			distantStars.position.z = DISTANT_Z;

			// Variables for fade-in effect
			let startTime: number | null = null;

			const render = (time: number): void => {
				if (startTime === null) startTime = time;
				const elapsedTime = time - startTime;

				if (resizeRendererToDisplaySize(renderer)) {
					const canvas = renderer.domElement;
					camera.aspect = canvas.clientWidth / canvas.clientHeight;
					camera.updateProjectionMatrix();
				}

				// Camera animation
				if (elapsedTime < CAMERA_ANIMATION_DURATION) {
					const animationProgress = elapsedTime / CAMERA_ANIMATION_DURATION;
					camera.position.z = THREE.MathUtils.lerp(
						CAMERA_START_Z,
						CAMERA_END_Z,
						easeOutCubic(animationProgress)
					);
				} else {
					camera.position.z = CAMERA_END_Z;
				}

				// Fade-in logic
				const fadeInDistant = Math.min(0.5, elapsedTime / FADE_IN_DURATION);
				const fadeInSmall = Math.max(
					0,
					Math.min(0.8, (elapsedTime - FADE_IN_DELAY) / FADE_IN_DURATION)
				);
				const fadeInLarge = Math.max(
					0,
					Math.min(0.8, (elapsedTime - FADE_IN_DELAY * 2) / FADE_IN_DURATION)
				);

				materials[2].opacity = fadeInDistant;
				materials[0].opacity = fadeInSmall;
				materials[1].opacity = fadeInLarge;

				// Apply inertia to mouse movement
				mouseX += (targetMouseX - mouseX) * INERTIA_FACTOR;
				mouseY += (targetMouseY - mouseY) * INERTIA_FACTOR;

				// Apply inertia to scroll movement
				scrollY += (targetScrollY - scrollY) * INERTIA_FACTOR;

				starsT1.position.x = mouseX * MOUSE_SENSITIVITY;
				starsT1.position.y = -mouseY * MOUSE_SENSITIVITY + camera.position.y;

				starsT2.position.x = mouseX * MOUSE_SENSITIVITY * 0.5;
				starsT2.position.y =
					-mouseY * MOUSE_SENSITIVITY * 0.5 + camera.position.y;

				// Move distant stars very slowly for parallax effect
				distantStars.position.x = mouseX * MOUSE_SENSITIVITY * 0.1;
				distantStars.position.y =
					-mouseY * MOUSE_SENSITIVITY * 0.1 + camera.position.y;

				camera.position.y = -scrollY * SCROLL_SENSITIVITY + camera.position.y;

				renderer.render(scene, camera);
				requestAnimationFrame(render);
			};

			requestAnimationFrame(render);
		};

		const easeOutCubic = (t: number): number => {
			return 1 - Math.pow(1 - t, 2);
		};

		const handleMouseMove = (e: MouseEvent) => {
			targetMouseX = e.clientX - window.innerWidth / 2;
			targetMouseY = e.clientY - window.innerHeight / 2;
		};

		const handleScroll = () => {
			targetScrollY = window.scrollY;
		};

		const handleResize = () => {
			if (containerRef.current) {
				containerRef.current.width = window.innerWidth;
				containerRef.current.height = window.innerHeight;
			}
		};

		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);

		// Initial size set
		handleResize();

		main();

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
			if (containerRef.current && containerRef.current.firstChild) {
				containerRef.current.removeChild(containerRef.current.firstChild);
			}
		};
	}, []);

	return (
		<div className="fixed top-0 left-0 w-full h-full -z-10">
			<canvas
				ref={containerRef}
				className="w-full h-full bg-[#0a0a0a]"
				id="c"
			/>
		</div>
	);
}

export default Background;

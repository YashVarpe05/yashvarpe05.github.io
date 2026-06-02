"use client";

import { useEffect, useState } from "react";

const HELLOS = [
	"Hello", // English
	"नमस्ते", // Hindi
	"नमस्कार", // Marathi
	
];

export default function MacOSHelloLoader() {
	const [index, setIndex] = useState(0);
	const [isDone, setIsDone] = useState(false);
	const [shouldUnmount, setShouldUnmount] = useState(false);

	useEffect(() => {
		// Prevent scrolling while loader is active
		document.body.style.overflow = "hidden";

		const interval = setInterval(() => {
			setIndex((prevIndex) => {
				if (prevIndex === HELLOS.length - 1) {
					clearInterval(interval);
					setTimeout(() => {
						setIsDone(true);
						setTimeout(() => {
							setShouldUnmount(true);
							document.body.style.overflow = "unset"; // Restore scrolling
						}, 1000);
					}, 850);
					return prevIndex;
				}
				return prevIndex + 1;
			});
		}, 850);

		return () => {
			clearInterval(interval);
			document.body.style.overflow = "unset";
		};
	}, []);

	if (shouldUnmount) return null;

	return (
		<div
			className={`fixed inset-0 flex items-center justify-center z-[100]
                    transition-transform duration-1000 cubic-bezier(0.22, 1, 0.36, 1)
                    ${isDone ? "-translate-y-full" : "translate-y-0"}
                    bg-white/40 dark:bg-zinc-950/40 backdrop-blur-3xl`}
		>
			{/* Noise / Grain Overlay */}
			<div
				className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
				}}
			/>

			<span
				key={index}
				className="macos-hello text-black dark:text-white relative z-10 drop-shadow-sm"
				style={{
					fontFamily:
						'-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", Inter, system-ui, sans-serif',
				}}
			>
				{HELLOS[index]}
			</span>

			<style jsx>{`
				.macos-hello {
					font-size: clamp(3rem, 6vw, 4.5rem);
					font-weight: 600;
					animation: macosHello 0.87s cubic-bezier(0.22, 0.9, 0.31, 1.15) both;
					will-change: opacity, transform;
				}

				@keyframes macosHello {
					0% {
						opacity: 0;
						transform: translateY(6px) scale(0.98);
					}
					15% {
						opacity: 1;
						transform: translateY(0) scale(1);
					}
					85% {
						opacity: 1;
						transform: translateY(0) scale(1);
					}
					100% {
						opacity: 0;
						transform: translateY(-4px) scale(0.99);
					}
				}
			`}</style>
		</div>
	);
}

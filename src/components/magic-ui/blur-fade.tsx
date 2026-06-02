"use client";

import { useRef } from "react";
import { AnimatePresence, motion, useInView, Variants } from "framer-motion";

interface BlurFadeProps {
	children: React.ReactNode;
	className?: string;
	variant?: {
		hidden: { y: number };
		visible: { y: number };
	};
	duration?: number;
	delay?: number;
	yOffset?: number;
	inView?: boolean;
	inViewMargin?: string;
	blur?: string;
}

export default function BlurFade({
	children,
	className,
	variant,
	duration = 0.4,
	delay = 0,
	yOffset = 80,
	inView = false,
	inViewMargin = "40px",
	blur = "16px",
}: BlurFadeProps) {
	const ref = useRef(null);
	const inViewResult = useInView(ref, {
		once: true,
		margin: inViewMargin, // Use margin with the correct type for your version
	} as any);
	const isInView = !inView || inViewResult;
	const defaultVariants: Variants = {
		hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})`, height: "100%" },
		visible: { y: 0, opacity: 1, filter: `blur(0px)`, height: "100%" },
	};
	const combinedVariants = variant || defaultVariants;
	return (
		<AnimatePresence>
			<motion.div
				ref={ref}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				exit="hidden"
				variants={combinedVariants}
				transition={{
					delay: 0.04 + delay,
					duration,
					ease: "easeOut",
					opacity: { duration: 1, ease: "easeOut", delay: 0.14 + delay },
				}}
				className={className}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}

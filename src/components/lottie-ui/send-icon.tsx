"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import EyeAnimation from "../../lottie/eye/Eye.json";
import EyeLightAnimation from "../../lottie/eye/EyeLight.json";

const SendIcon = () => {
	const { resolvedTheme } = useTheme();
	const isLightMode = resolvedTheme === "light";
	const sendIconContainer = useRef<HTMLDivElement | null>(null);

	async function getLottie() {
		const lot = await import("lottie-web");

		if (!sendIconContainer.current) return;
		lot.default.loadAnimation({
			name: "SendIcon",
			renderer: "svg",
			loop: false,
			autoplay: false,
			animationData: isLightMode ? EyeLightAnimation : EyeAnimation,
			container: sendIconContainer.current,
			rendererSettings: {
				preserveAspectRatio: "xMinYMin slice",
			},
		});
	}

	async function destroyLottie() {
		const lot = await import("lottie-web");
		lot.default.destroy("SendIcon");
	}

	useEffect(() => {
		getLottie();

		return () => {
			destroyLottie();
		};
	}, [isLightMode, resolvedTheme]);

	const lottieHover = async () => {
		const lot = await import("lottie-web");
		lot.default.play("SendIcon");
	};

	const lottieLeave = async () => {
		const lot = await import("lottie-web");
		lot.default.stop("SendIcon");
	};

	return (
		<a
			href="/yashresumenew.pdf"
			target="_blank"
			rel="noreferrer noopener"
			className="relative z-10"
		>
			<div
				ref={sendIconContainer}
				onMouseEnter={lottieHover}
				onMouseLeave={lottieLeave}
				className="h-10 w-10 opacity-50 hover:opacity-100 transition-opacity"
			/>
		</a>
	);
};

export default SendIcon;

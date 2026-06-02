"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import InboxDownAnimation from "../../lottie/inbox-down/InboxDown.json";
import InboxDownLightAnimation from "../../lottie/inbox-down/InboxDownLight.json";

const Download = () => {
	const { resolvedTheme } = useTheme();
	const isLightMode = resolvedTheme === "light";
	const downloadContainer = useRef<HTMLDivElement | null>(null);

	async function getLottie() {
		const lot = await import("lottie-web");

		if (!downloadContainer.current) return;
		lot.default.loadAnimation({
			name: "DownloadIcon",
			renderer: "svg",
			loop: false,
			autoplay: false,
			animationData: isLightMode ? InboxDownAnimation : InboxDownLightAnimation,
			container: downloadContainer.current,
			rendererSettings: {
				preserveAspectRatio: "xMinYMin slice",
			},
		});
	}

	async function destroyLottie() {
		const lot = await import("lottie-web");
		lot.default.destroy("DownloadIcon");
	}

	useEffect(() => {
		getLottie();

		return () => {
			destroyLottie();
		};
	}, [isLightMode]);

	const lottieHover = async () => {
		const lot = await import("lottie-web");
		lot.default.play("DownloadIcon");
	};

	const lottieLeave = async () => {
		const lot = await import("lottie-web");
		lot.default.stop("DownloadIcon");
	};

	return (
		<a href="/yashresumenew.pdf" download className="relative z-10">
			<div
				ref={downloadContainer}
				onMouseEnter={lottieHover}
				onMouseLeave={lottieLeave}
				className="h-10 w-10 opacity-50 hover:opacity-100 transition-opacity"
			/>
		</a>
	);
};

export default Download;

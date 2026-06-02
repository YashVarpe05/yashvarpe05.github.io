import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.scss";
import { silka } from "@/fonts";
import { ThemeProvider } from "next-themes";
import Particles from "@/components/backgrounds/Particles";

export const metadata: Metadata = {
	title: "Yash Varpe - Portfolio",
	description:
		"A portfolio of Yash Varpe, a Full-Stack Software Engineer skilled in React, Next.js, Node.js, and MongoDB.",
	authors: [{ name: "Yash Varpe", url: "https://yashvarpe.vercel.app" }],
	openGraph: {
		title: "Yash Varpe - Portfolio",
		description:
			"A portfolio of Yash Varpe, a Full-Stack Software Engineer skilled in React, Next.js, Node.js, and MongoDB.",
		url: "https://yashvarpe.vercel.app",
		siteName: "Yash Varpe - Portfolio",
		type: "website",
		images: [
			{
				url: "https://github.com/YashVarpe05/Portfoli0/blob/main/public/Screenshot.png",
				width: 3410,
				height: 2072,
				alt: "Yash Varpe - Portfolio",
			},
		],
	},
	icons: {
		icon: "/Memoji_Big_Smile.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${silka.className}`}>
				<ThemeProvider attribute="class">
					<div
						style={{
							flex: "none",
							height: "100%",
							left: "calc(50.00000000000002% - 100% / 2)",
							pointerEvents: "none",
							position: "fixed",
							top: "0",
							width: "100%",
							zIndex: "4",
						}}
					>
						<div
							style={{
								width: "100%",
								height: "100%",
								backgroundSize: "64px",
								backgroundRepeat: "repeat",
								backgroundImage: "url(/Static.png)",
								opacity: "0.06",
								borderRadius: "0px",
							}}
						/>
					</div>
					<div
						style={{
							width: "100%",
							height: "100%",
							position: "fixed",
							top: "0",
							left: "0",
							zIndex: "-1",
						}}
					>
						<Particles
							particleColors={["#ffffff", "#ffffff"]}
							particleCount={200}
							particleSpread={10}
							speed={0.1}
							particleBaseSize={100}
							moveParticlesOnHover={true}
							alphaParticles={false}
							disableRotation={false}
						/>
					</div>
					{children}
				</ThemeProvider>
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}

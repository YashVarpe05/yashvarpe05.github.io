import Image from "next/image";
import { useTheme } from "next-themes";
import CardWrapper from "./card-wrapper";

const IconCard = ({ title, link }: { title: string; link: string }) => {
	const { resolvedTheme } = useTheme();

	const icons = {
		Linkedin: {
			src:
				resolvedTheme === "dark"
					? "/social-icons/linkedin.svg"
					: "/social-icons/linkedin-dark.svg",
			classNames: "aspect-square",
		},
		Github: {
			src:
				resolvedTheme === "dark"
					? "/social-icons/github.svg"
					: "/social-icons/github-dark.svg",
			classNames: "aspect-[49/48]",
		},
		Twitter: {
			src:
				resolvedTheme === "dark"
					? "/social-icons/logo-white.png"
					: "/social-icons/logo-black.png",
			classNames: "aspect-square",
		},
		Email: {
			src:
				resolvedTheme === "dark"
					? "/social-icons/email.svg"
					: "/social-icons/email-dark.svg",
			classNames: "aspect-[25/24]",
		},
	};

	return (
		<CardWrapper>
			<div className="flex items-center justify-center w-full h-full opacity-80 hover:opacity-100 transition-opacity relative z-10">
				<a
					className="w-[55%] h-[55%] flex items-center justify-center rounded-3xl"
					href={link}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div
						className={`relative h-full w-auto ${
							icons[title as keyof typeof icons]?.classNames
						}`}
					>
						<Image
							src={icons[title as keyof typeof icons]?.src}
							alt={title}
							fill
						/>
					</div>
				</a>
			</div>
		</CardWrapper>
	);
};

export default IconCard;

import Image from "next/image";
import { Badge } from "../../shadcn/Badge";
import SendmessageIcon from "../../lottie-ui/send-message";
import CardWrapper from "../card-wrapper";

const StationSetup = () => {
	return (
		<CardWrapper>
			<div className="relative h-full flex flex-col justify-center gap-6 py-4 sm:py-6 px-4 sm:px-8 overflow-hidden">
				<div className="relative flex justify-between w-full h-full items-stretch flex-col">
					<div className="absolute h-full w-full aspect-[578/433] shadow-2xl rounded-lg">
						<Image
							src={"/projects/TImelineup-website.png"}
							alt={"Station landing page example"}
							fill
							style={{
								objectFit: "cover",
								objectPosition: "top",
								borderRadius: "8px",
							}}
						/>
					</div>
				</div>
				<div className="flex flex-col items-start gap-1">
					<div className="w-full flex gap-2 items-center">
						<h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90">
							TimeLineUp
						</h1>
						<SendmessageIcon
							link="https://thesudoersclub.github.io/projects/timelineup"
							lottieName="StationSetupIcon"
						/>
					</div>
					<div className="flex gap-2 flex-wrap mt-1">
						<Badge variant="default" className="text-xs">
							Android
						</Badge>
						<Badge variant="default" className="text-xs">
							Javascript
						</Badge>
						<Badge variant="default" className="text-xs">
							Figma
						</Badge>
						<Badge variant="default" className="text-xs">
							SCSS
						</Badge>
						<Badge variant="default" className="text-xs">
							JSON
						</Badge>
					</div>
				</div>
			</div>
		</CardWrapper>
	);
};

export default StationSetup;

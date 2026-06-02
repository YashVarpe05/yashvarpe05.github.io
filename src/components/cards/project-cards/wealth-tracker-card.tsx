import Image from "next/image";
import { Badge } from "../../shadcn/Badge";
import SendmessageIcon from "../../lottie-ui/send-message";
import CardWrapper from "../card-wrapper";

const CampusWealthTrackerCard = () => {
	return (
		<CardWrapper>
			<div className="relative h-full flex flex-col justify-center gap-6 py-4 sm:py-6 px-4 sm:px-8 overflow-hidden">
				<div className="relative flex justify-between w-full h-full items-stretch flex-col">
					<div className="absolute h-full w-full aspect-[578/433] shadow-2xl rounded-lg">
						<Image
							src={"/projects/campus-wealth-tracker.png"}
							alt={"AI-CampusWealthTracker Dashboard"}
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
							AI-Campus Wealth Tracker
						</h1>
						<SendmessageIcon
							link="https://ai-campus-wealth-tracker.vercel.app"
							lottieName="WealthTrackerIcon"
						/>
					</div>
					<div className="flex gap-2 flex-wrap mt-1">
						<Badge variant="default" className="text-xs">
							Next.js 14
						</Badge>
						<Badge variant="default" className="text-xs">
							TypeScript
						</Badge>
						<Badge variant="default" className="text-xs">
							Gemini AI
						</Badge>
						<Badge variant="default" className="text-xs">
							Prisma
						</Badge>
						<Badge variant="default" className="text-xs">
							Supabase
						</Badge>
					</div>
				</div>
			</div>
		</CardWrapper>
	);
};

export default CampusWealthTrackerCard;

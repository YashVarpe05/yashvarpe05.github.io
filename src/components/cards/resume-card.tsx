"use client"

import Download from "../lottie-ui/download-icon";
import SendIcon from "../lottie-ui/send-icon";
import CardWrapper from "./card-wrapper";

const ResumeCard = () => {
  return (
    <CardWrapper>
      <div className="relative h-full flex flex-col justify-center gap-6 px-8 py-6">
        <div className="flex justify-between w-full items-center">
          <div className="flex flex-col items-start gap-1">
            <h4 className="text-xs font-medium opacity-50 uppercase">
              2025 CV
            </h4>
            <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90">
              Resume
            </h1>
          </div>
          <div className="flex gap-2 lg:gap-6 items-center">
            <Download />
            <SendIcon />
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default ResumeCard;

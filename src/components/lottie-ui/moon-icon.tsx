"use client"

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import MoonAnimation from "../../lottie/moon/Moon.json";
import MoonLightAnimation from "../../lottie/moon/MoonLight.json";

const MoonIcon = () => {
  const { resolvedTheme } = useTheme();
  const isLightMode = resolvedTheme === "light";
  const moonIconContainer = useRef<HTMLDivElement | null>(null);

  async function getLottie() {
    const lot = await import("lottie-web");

    if (!moonIconContainer.current) return;
    lot.default.loadAnimation({
      name: "MoonIcon",
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: isLightMode ? MoonAnimation : MoonLightAnimation,
      container: moonIconContainer.current,
      rendererSettings: {
        preserveAspectRatio: "xMinYMin slice",
      },
    });
  }

  async function destroyLottie() {
    const lot = await import("lottie-web");
    lot.default.destroy("MoonIcon");
  }

  useEffect(() => {
    getLottie();

    return () => {
      destroyLottie();
    };
  }, [isLightMode, resolvedTheme]);

  const lottieHover = async () => {
    const lot = await import("lottie-web");
    lot.default.play("MoonIcon");
  }

  const lottieLeave = async () => {
    const lot = await import("lottie-web");
    lot.default.stop("MoonIcon");
  }

  return (
    <div
      onMouseEnter={lottieHover}
      onMouseLeave={lottieLeave}
      className={`group/moon h-full w-full flex items-center justify-center`}
    >
      <div
        ref={moonIconContainer}
        className={`h-10 w-10 ${!isLightMode ? "" : "opacity-50"} group-hover/moon:opacity-100 transition-opacity`}
      />
    </div>
  );
};

export default MoonIcon;

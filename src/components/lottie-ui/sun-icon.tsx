"use client"

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import SunAnimation from "../../lottie/sun/Sun.json";
import SunLightAnimation from "../../lottie/sun/SunLight.json";

const SunIcon = () => {
  const { resolvedTheme } = useTheme();
  const isLightMode = resolvedTheme === "light";
  const sunIconContainer = useRef<HTMLDivElement | null>(null);

  async function getLottie() {
    const lot = await import("lottie-web");

    if (!sunIconContainer.current) return;
    lot.default.loadAnimation({
      name: "SunIcon",
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: isLightMode ? SunAnimation : SunLightAnimation,
      container: sunIconContainer.current,
      rendererSettings: {
        preserveAspectRatio: "xMinYMin slice",
      },
    });
  }

  async function destroyLottie() {
    const lot = await import("lottie-web");
    lot.default.destroy("SunIcon");
  }

  useEffect(() => {
    getLottie();

    return () => {
      destroyLottie();
    };
  }, [isLightMode, resolvedTheme]);

  const lottieHover = async () => {
    const lot = await import("lottie-web");
    lot.default.play("SunIcon");
  };

  const lottieLeave = async () => {
    const lot = await import("lottie-web");
    lot.default.stop("SunIcon");
  };

  return (
    <div
      onMouseEnter={lottieHover}
      onMouseLeave={lottieLeave}
      className={`group/sun h-full w-full flex items-center justify-center`}
    >
      <div
        ref={sunIconContainer}
        className={`h-10 w-10 ${isLightMode ? "" : "opacity-50"} group-hover/sun:opacity-100 transition-opacity`}
      />
    </div>
  );
};

export default SunIcon;

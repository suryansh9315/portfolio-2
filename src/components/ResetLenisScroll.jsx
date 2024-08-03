"use client"
import React, { useEffect } from "react";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";

const ResetLenisScroll = () => {
  const lenis = useLenis();
  const pathname = usePathname()

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return <></>;
};

export default ResetLenisScroll;

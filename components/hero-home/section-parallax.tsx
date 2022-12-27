"use Client";
import { ParallaxProvider } from "react-scroll-parallax";
export default function SectionParallax({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}

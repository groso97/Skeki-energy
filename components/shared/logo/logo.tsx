import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-16",
  md: "h-28",
  lg: "h-32",
};

const imageSizeClasses = {
  sm: { width: 320, height: 105 },
  md: { width: 560, height: 185 },
  lg: { width: 640, height: 210 },
};

export const Logo = ({
  className,
  showText = false,
  size = "md",
}: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/skeki-energy-logo.svg"
        alt="Skeki Energy Logo"
        width={imageSizeClasses[size].width}
        height={imageSizeClasses[size].height}
        className={cn("object-contain w-auto", sizeClasses[size])}
        priority={size === "md"}
        unoptimized
      />
    </div>
  );
};

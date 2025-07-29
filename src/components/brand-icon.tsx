"use client";

import { useTheme } from "next-themes";

const BrandIcon = () => {
	const { theme } = useTheme();
	return (
		<>
			{theme === "dark" ? (
				<img src="/images/branding/m0x0-white.png" className="w-8 h-8" />
			) : (
				<img src="/images/branding/m0x0-black.png" className="w-8 h-8" />
			)}
		</>
	);
};

export default BrandIcon;

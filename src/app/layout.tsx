import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata } from "next";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Sipho Mokoena (siphom0x0)",
	description: "Sipho Mokoena's personal website and blog.",
	openGraph: {
		title: "Sipho Mokoena (siphom0x0)",
		description: "Sipho Mokoena's personal website and blog.",
		url: "https://sipho.mokoena.dev",
		siteName: "Sipho Mokoena (siphom0x0)",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Sipho Mokoena",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning>
			<link rel="icon" href="/favicon.png" sizes="any" />
			<body className="flex flex-col min-h-screen">
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}

import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import BrandIcon from "@/components/brand-icon";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
	nav: {
		title: (
			<div className="flex items-center gap-4">
				<BrandIcon />
				<p>siphom0x0</p>
			</div>
		),
	},
	// see https://fumadocs.dev/docs/ui/navigation/links
	links: [],
};

import Link from "next/link";

export default function HomePage() {
	return (
		<main className="flex flex-1 flex-col justify-center text-center">
			<div
				className="absolute inset-x-0 top- h-full max-md:hidden"
				style={{
					background:
						"repeating-linear-gradient(to right, color-mix(in oklab, var(--color-fd-primary) 10%, transparent), color-mix(in oklab, var(--color-fd-primary) 10%, transparent) 1px,transparent 1px,transparent 50px), repeating-linear-gradient(to bottom, color-mix(in oklab, var(--color-fd-primary) 10%, transparent), color-mix(in oklab, var(--color-fd-primary) 10%, transparent) 1px,transparent 1px,transparent 50px)",
				}}
			></div>
			<div className="relative z-10">
				<h1 className="mb-4 text-2xl font-bold">Hello World</h1>
				<p className="text-fd-muted-foreground">
					You can open{" "}
					<Link
						href="/docs"
						className="text-fd-foreground font-semibold underline"
					>
						/docs
					</Link>{" "}
					and see the documentation.
				</p>
			</div>
		</main>
	);
}

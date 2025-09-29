"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	const navItems = [
		{ href: "/", label: "Home" },
		{ href: "/menu", label: "Menu" },
		{ href: "/about", label: "About Us" },
		{ href: "/contact", label: "Contact Us" },
	];

	return (
		<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/80 border-b border-black/5 dark:border-white/10">
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<div className="h-16 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<Link href="/" className="flex items-center gap-2">
							<Image src="/logo.svg" alt="Foodie" width={32} height={32} className="rounded" />
							<span className="text-lg font-semibold tracking-tight">Foodie</span>
						</Link>
					</div>

					<nav className="hidden md:flex items-center gap-6">
						{navItems.map((item) => {
							const isActive = pathname === item.href;
							return (
								<Link
									key={item.href}
									href={item.href}
									className={`text-sm font-medium transition-colors ${isActive ? "text-foreground" : "text-foreground/70 hover:text-foreground"}`}
								>
									{item.label}
								</Link>
							);
						})}
					</nav>

					<div className="flex items-center gap-2">
						<ThemeToggle />
						<button
							aria-label="Open menu"
							className="md:hidden inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/15 p-2 hover:bg-black/5 dark:hover:bg-white/10"
							onClick={() => setOpen((v) => !v)}
						>
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{open && (
				<div className="md:hidden border-b border-black/5 dark:border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70">
					<div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 grid gap-2">
						{navItems.map((item) => {
							const isActive = pathname === item.href;
							return (
								<Link
									key={item.href}
									href={item.href}
									className={`py-2 px-2 rounded-md ${ isActive ? "bg-black/5 dark:bg-white/10" : "hover:bg-black/5 dark:hover:bg-white/10" }`}
									onClick={() => setOpen(false)}
								>
									{item.label}
								</Link>
							);
						})}
					</div>
				</div>
			)}
		</header>
	);
}

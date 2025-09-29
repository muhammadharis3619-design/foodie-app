"use client";
import { useEffect, useState } from "react";

function getSystemTheme() {
	if (typeof window === "undefined") return "light";
	return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
	if (typeof document === "undefined") return;
	document.documentElement.setAttribute("data-theme", theme);
}

export default function ThemeToggle() {
	const [theme, setTheme] = useState("light");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const stored = typeof window !== "undefined" ? window.localStorage.getItem("theme") : null;
		const initial = stored || getSystemTheme();
		setTheme(initial);
		applyTheme(initial);
		setMounted(true);
	}, []);

	function toggle() {
		const next = theme === "dark" ? "light" : "dark";
		setTheme(next);
		applyTheme(next);
		try { window.localStorage.setItem("theme", next); } catch {}
	}

	return (
		<button
			aria-label="Toggle theme"
			onClick={toggle}
			className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
		>
			{mounted && theme === "dark" ? (
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 3a9 9 0 108.485 12.728A7 7 0 0112 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			) : (
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 4V2M12 22v-2M4.93 4.93L3.52 3.52M20.48 20.48l-1.41-1.41M4 12H2M22 12h-2M4.93 19.07L3.52 20.48M20.48 3.52l-1.41 1.41M12 18a6 6 0 100-12 6 6 0 000 12z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			)}
		</button>
	);
}

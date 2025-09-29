"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useCart } from "../context/CartContext";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [cartOpen, setCartOpen] = useState(false);
	const pathname = usePathname();
	const { items, subtotal, removeItem, clear } = useCart();

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
							aria-label="Cart"
							onClick={() => setCartOpen((v) => !v)}
							className="relative inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/15 p-2 hover:bg-black/5 dark:hover:bg-white/10"
						>
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6h15l-1.5 9h-12L6 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="20" r="1.5" fill="currentColor"/><circle cx="18" cy="20" r="1.5" fill="currentColor"/></svg>
							{items.length > 0 && (
								<span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-foreground text-background text-[10px] font-bold flex items-center justify-center">{items.reduce((n, i) => n + i.quantity, 0)}</span>
							)}
						</button>
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

			{/* Cart summary panel */}
			{cartOpen && (
				<div className="fixed inset-0 z-[55]">
					<div className="absolute inset-0 bg-black/40" onClick={() => setCartOpen(false)} />
					<div className="absolute right-0 top-0 h-full w-full sm:w-[360px] bg-background border-l border-black/10 dark:border-white/10 shadow-xl p-5">
						<div className="flex items-center justify-between">
							<h4 className="text-lg font-semibold">Your Cart</h4>
							<button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10" onClick={() => setCartOpen(false)}>
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
							</button>
						</div>
						<div className="mt-4 grid gap-3 max-h-[60vh] overflow-auto pr-1">
							{items.length === 0 ? (
								<p className="text-foreground/70">Your cart is empty.</p>
							) : (
								items.map((it) => (
									<div key={`${it.id}-${it.name}`} className="flex items-center justify-between gap-3 border-b border-black/5 dark:border-white/10 pb-3">
										<div>
											<p className="font-medium">{it.name}</p>
											<p className="text-foreground/70 text-sm">{it.quantity} × ${it.price.toFixed(2)}</p>
										</div>
										<p className="font-semibold">${(it.price * it.quantity).toFixed(2)}</p>
									</div>
								))
							)}
						</div>
						<div className="mt-4 flex items-center justify-between">
							<span className="text-foreground/70">Subtotal</span>
							<span className="text-lg font-semibold">${subtotal.toFixed(2)}</span>
						</div>
						<div className="mt-4 flex items-center justify-end gap-2">
							<button className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/15 px-4 py-2 font-medium hover:bg-black/5 dark:hover:bg-white/10" onClick={clear}>Clear</button>
							<Link href="/checkout" className="inline-flex items-center justify-center rounded-lg bg-foreground text-background px-4 py-2 font-semibold hover:opacity-90">Checkout</Link>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}

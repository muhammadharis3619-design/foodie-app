"use client";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
	const { items, subtotal, clear } = useCart();
	const [showThanks, setShowThanks] = useState(false);

	function handlePlaceOrder() {
		setShowThanks(true);
		clear();
	}

	useEffect(() => {
		if (!showThanks) return;
		const id = setTimeout(() => setShowThanks(false), 2500);
		return () => clearTimeout(id);
	}, [showThanks]);

	return (
		<div className="min-h-dvh">
			<section className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
				<h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Checkout</h1>
				<p className="mt-3 text-foreground/70">Review your order and enter your details.</p>

				<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2">
						<div className="rounded-2xl border border-black/5 dark:border-white/10 bg-background/60 backdrop-blur p-5">
							<h2 className="text-lg font-semibold">Order Summary</h2>
							<div className="mt-4 grid gap-3">
								{items.length === 0 ? (
									<p className="text-foreground/70">Your cart is empty. <Link href="/menu" className="underline">Add items</Link>.</p>
								) : (
									items.map((it) => (
										<div key={`${it.id}-${it.name}`} className="flex items-center justify-between">
											<p className="text-sm">{it.name} × {it.quantity}</p>
											<p className="font-medium">${(it.price * it.quantity).toFixed(2)}</p>
										</div>
									))
								)}
							</div>
							<div className="mt-4 flex items-center justify-between">
								<span className="text-foreground/70">Subtotal</span>
								<span className="text-lg font-semibold">${subtotal.toFixed(2)}</span>
							</div>
						</div>
					</div>

					<div>
						<form className="rounded-2xl border border-black/5 dark:border-white/10 bg-background/60 backdrop-blur p-5 grid gap-4">
							<h2 className="text-lg font-semibold">Your Details</h2>
							<input className="w-full rounded-lg border border-black/10 dark:border-white/15 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-foreground/20" placeholder="Full name" />
							<input className="w-full rounded-lg border border-black/10 dark:border-white/15 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-foreground/20" placeholder="Email" type="email" />
							<input className="w-full rounded-lg border border-black/10 dark:border-white/15 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-foreground/20" placeholder="Address" />
							<div className="grid grid-cols-2 gap-3">
								<input className="w-full rounded-lg border border-black/10 dark:border-white/15 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-foreground/20" placeholder="City" />
								<input className="w-full rounded-lg border border-black/10 dark:border-white/15 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-foreground/20" placeholder="Postal code" />
							</div>
						<button type="button" className="mt-2 inline-flex items-center justify-center rounded-lg bg-foreground text-background px-4 py-3 font-semibold hover:opacity-90" onClick={handlePlaceOrder}>Place Order</button>
						</form>
						<p className="mt-3 text-foreground/70 text-sm">Placing order clears the cart for this demo.</p>
					</div>
				</div>

				<div className="mt-6">
					<Link href="/menu" className="text-sm text-foreground/80 hover:underline">← Continue shopping</Link>
				</div>
			</section>
		{/* Thanks modal */}
		{showThanks && (
			<div className="fixed inset-0 z-[100] flex items-center justify-center">
				<div className="absolute inset-0 bg-black/50" onClick={() => setShowThanks(false)} />
				<div className="relative mx-4 w-full max-w-md overflow-hidden rounded-2xl shadow-2xl">
					<div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-foreground/20 blur-3xl" />
					<div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-foreground/30 blur-3xl" />
					<div className="relative bg-gradient-to-br from-background to-background/90 border border-black/10 dark:border-white/10 p-8 text-center backdrop-blur">
						<div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background shadow-lg">
							<svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
						</div>
						<h3 className="text-xl font-bold tracking-tight">Thanks for ordering!</h3>
						<p className="mt-2 text-foreground/70">Your delicious food is being prepared.</p>
						<div className="mt-6 flex items-center justify-center gap-2">
							<button onClick={() => setShowThanks(false)} className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/15 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">Close</button>
							<Link href="/" className="inline-flex items-center justify-center rounded-lg bg-foreground text-background px-4 py-2 text-sm font-semibold hover:opacity-90">Go Home</Link>
						</div>
					</div>
				</div>
			</div>
		)}
		</div>
	);
}

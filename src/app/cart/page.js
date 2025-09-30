"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
	const { items, subtotal } = useCart();

	const totalItems = items.reduce((n, it) => n + it.quantity, 0);

	return (
		<div className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-semibold tracking-tight">Your Cart</h1>
				<Link href="/" className="inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/15 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">Back to Home</Link>
			</div>

			<div className="mt-2 text-foreground/70 text-sm">{totalItems} item{totalItems !== 1 ? "s" : ""} in cart</div>

			<div className="mt-6 grid gap-3">
				{items.length === 0 ? (
					<p className="text-foreground/70">Your cart is empty.</p>
				) : (
					items.map((it) => {
						const itemTotal = it.price * it.quantity;
						return (
							<div key={`${it.id}-${it.name}`} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 rounded-xl border border-black/10 dark:border-white/10 p-4">
								<div>
									<p className="font-medium">{it.name}</p>
									<p className="text-foreground/70 text-sm">Qty: {it.quantity}</p>
								</div>
								<p className="text-foreground/70 text-sm">@ ${it.price.toFixed(2)}</p>
								<p className="font-semibold">${itemTotal.toFixed(2)}</p>
							</div>
						);
					})
				)}
			</div>

			<div className="mt-8 flex items-center justify-between rounded-xl border border-black/10 dark:border-white/10 p-4">
				<span className="text-foreground/70">Grand Total</span>
				<span className="text-xl font-semibold">${subtotal.toFixed(2)}</span>
			</div>

			<div className="mt-4 flex items-center justify-end gap-2">
				<Link href="/menu" className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/15 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">Continue Shopping</Link>
				<Link href="/checkout" className="inline-flex items-center justify-center rounded-lg bg-foreground text-background px-4 py-2 text-sm font-semibold hover:opacity-90">Proceed to Checkout</Link>
			</div>
		</div>
	);
}



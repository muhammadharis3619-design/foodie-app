// "use client";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export const metadata = { title: "Checkout | Foodie" };

export default function CheckoutPage() {
	const { items, subtotal, clear } = useCart();

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
							<button type="button" className="mt-2 inline-flex items-center justify-center rounded-lg bg-foreground text-background px-4 py-3 font-semibold hover:opacity-90" onClick={clear}>Place Order</button>
						</form>
						<p className="mt-3 text-foreground/70 text-sm">Placing order clears the cart for this demo.</p>
					</div>
				</div>

				<div className="mt-6">
					<Link href="/menu" className="text-sm text-foreground/80 hover:underline">← Continue shopping</Link>
				</div>
			</section>
		</div>
	);
}

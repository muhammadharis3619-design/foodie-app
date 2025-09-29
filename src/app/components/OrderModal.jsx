"use client";
import { useEffect, useMemo, useState } from "react";
import { useCart } from "../context/CartContext";

export default function OrderModal({ open, onClose, item }) {
	const [quantity, setQuantity] = useState(1);
	const { addItem } = useCart();

	useEffect(() => {
		if (open) setQuantity(1);
	}, [open]);

	const unitPrice = useMemo(() => {
		if (!item?.price) return 0;
		const numeric = typeof item.price === "number" ? item.price : parseFloat(String(item.price).replace(/[^0-9.]/g, ""));
		return Number.isFinite(numeric) ? numeric : 0;
	}, [item]);

	const total = useMemo(() => {
		return Math.max(1, Number(quantity || 1)) * unitPrice;
	}, [quantity, unitPrice]);

	if (!open || !item) return null;

	function confirm() {
		addItem({ id: item.id, name: item.name, price: unitPrice, quantity: Math.max(1, Number(quantity || 1)) });
		onClose();
	}

	return (
		<div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
			<div className="absolute inset-0 bg-black/40" onClick={onClose} />
			<div className="relative w-full sm:max-w-md bg-background border border-black/10 dark:border-white/15 rounded-2xl shadow-xl p-6 m-2">
				<div className="flex items-start justify-between gap-4">
					<div>
						<h3 className="text-xl font-semibold">Order {item.name}</h3>
						<p className="text-foreground/70">Unit price: ${unitPrice.toFixed(2)}</p>
					</div>
					<button
						aria-label="Close"
						onClick={onClose}
						className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
					>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
					</button>
				</div>

				<div className="mt-6 grid gap-3">
					<label className="text-sm font-medium" htmlFor="qty-input">Quantity</label>
					<input
						id="qty-input"
						type="number"
						min={1}
						value={quantity}
						onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
						className="w-full rounded-lg border border-black/10 dark:border-white/15 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-foreground/20"
					/>
				</div>

				<div className="mt-6 flex items-center justify-between">
					<span className="text-foreground/70">Total</span>
					<span className="text-lg font-semibold">${total.toFixed(2)}</span>
				</div>

				<div className="mt-6 flex items-center justify-end gap-2">
					<button onClick={onClose} className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/15 px-4 py-2 font-medium hover:bg-black/5 dark:hover:bg-white/10">Cancel</button>
					<button onClick={confirm} className="inline-flex items-center justify-center rounded-lg bg-foreground text-background px-4 py-2 font-semibold hover:opacity-90">Confirm Order</button>
				</div>
			</div>
		</div>
	);
}

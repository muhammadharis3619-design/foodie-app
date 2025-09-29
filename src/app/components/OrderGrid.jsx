"use client";
import Image from "next/image";
import { useState } from "react";
import OrderModal from "./OrderModal";

export default function OrderGrid({ items }) {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState(null);

	function onCardClick(item) {
		setSelected(item);
		setOpen(true);
	}

	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{items.map((it) => (
					<button
						key={it.id}
						onClick={() => onCardClick(it)}
						className="text-left group rounded-2xl border border-black/5 dark:border-white/10 bg-background/60 backdrop-blur hover:shadow-xl hover:-translate-y-0.5 transition-all overflow-hidden"
					>
						<div className="h-40 w-full overflow-hidden">
							<Image src={it.img} alt={it.name} width={640} height={320} className="h-full w-full object-cover" />
						</div>
						<div className="p-5 flex items-center justify-between">
							<div>
								<h3 className="text-lg font-semibold">{it.name}</h3>
								<p className="text-foreground/70">${Number(it.price).toFixed(2)}</p>
							</div>
							<span className="inline-flex items-center gap-2 text-sm font-medium text-foreground/90 group-hover:underline">Order
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
							</span>
						</div>
					</button>
				))}
			</div>
			<OrderModal open={open} onClose={() => setOpen(false)} item={selected} />
		</>
	);
}

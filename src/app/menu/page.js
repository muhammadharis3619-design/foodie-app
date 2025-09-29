import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Menu | Foodie" };

export default function MenuPage() {
	const items = [
		{ id: 1, name: "Spicy Ramen", price: "$12", img: "/window.svg" },
		{ id: 2, name: "Sushi Platter", price: "$18", img: "/globe.svg" },
		{ id: 3, name: "Veggie Bowl", price: "$10", img: "/file.svg" },
		{ id: 4, name: "Burger Deluxe", price: "$14", img: "/vercel.svg" },
	];

	return (
		<div className="min-h-dvh">
			<section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
				<h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Menu</h1>
				<p className="mt-3 text-foreground/70 max-w-2xl">Discover our chef-curated dishes crafted with seasonal ingredients.</p>
				<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{items.map((it) => (
						<div key={it.id} className="group rounded-2xl border border-black/5 dark:border-white/10 bg-background/60 backdrop-blur p-5 hover:shadow-xl hover:-translate-y-0.5 transition-all">
							<div className="aspect-[16/9] rounded-xl overflow-hidden bg-black/5 dark:bg-white/10 flex items-center justify-center">
								<Image src={it.img} alt={it.name} width={96} height={96} className="object-contain" />
							</div>
							<div className="mt-4 flex items-center justify-between">
								<div>
									<h3 className="text-lg font-semibold">{it.name}</h3>
									<p className="text-foreground/70">{it.price}</p>
								</div>
								<Link href="#" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline">
									Order
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
								</Link>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}

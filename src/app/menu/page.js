import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Menu | Foodie" };

export default function MenuPage() {
	const items = [
		{ id: 1, name: "Stacks", price: "$9", img: "/foods/hailey-tong-CMwG_Brm2QE-unsplash.jpg" },
		{ id: 2, name: "Shawarma", price: "$11", img: "/foods/yoad-shejtman-sPmF7MNzdnU-unsplash.jpg" },
		{ id: 3, name: "Zinger Burger", price: "$14", img: "/foods/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg" },
		{ id: 4, name: "Chicken Corn Soup", price: "$8", img: "/foods/keesha-s-kitchen-gDwy_JEoz8k-unsplash.jpg" },
		{ id: 5, name: "Salad", price: "$9", img: "/foods/anna-pelzer-IGfIGP5ONV0-unsplash.jpg" },
		{ id: 6, name: "Burrito", price: "$9", img: "/foods/clint-bustrillos-YFTGpQBNLVw-unsplash.jpg" },
	];

	return (
		<div className="min-h-dvh">
			<section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
				<h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Menu</h1>
				<p className="mt-3 text-foreground/70 max-w-2xl">Discover our chef-curated dishes crafted with seasonal ingredients.</p>
				<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{items.map((it) => (
						<div key={it.id} className="group rounded-2xl border border-black/5 dark:border-white/10 bg-background/60 backdrop-blur hover:shadow-xl hover:-translate-y-0.5 transition-all overflow-hidden">
							<div className="h-40 w-full overflow-hidden">
								<Image src={it.img} alt={it.name} width={640} height={320} className="h-full w-full object-cover" />
							</div>
							<div className="p-5 flex items-center justify-between">
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

import Image from "next/image";
import OrderGrid from "../components/OrderGrid";

export const metadata = { title: "Menu | Foodie" };

export default function MenuPage() {
	const items = [
		{ id: 1, name: "Stacks", price: 9, img: "/foods/hailey-tong-CMwG_Brm2QE-unsplash.jpg" },
		{ id: 2, name: "Shawarma", price: 11, img: "/foods/yoad-shejtman-sPmF7MNzdnU-unsplash.jpg" },
		{ id: 3, name: "Zinger Burger", price: 14, img: "/foods/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg" },
		{ id: 4, name: "Salad", price: 9, img: "/foods/anna-pelzer-IGfIGP5ONV0-unsplash.jpg" },
	];

	return (
		<div className="min-h-dvh">
			<section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
				<h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Menu</h1>
				<p className="mt-3 text-foreground/70 max-w-2xl">Discover our chef-curated dishes crafted with seasonal ingredients.</p>
				<div className="mt-8">
					<OrderGrid items={items} />
				</div>
			</section>
		</div>
	);
}

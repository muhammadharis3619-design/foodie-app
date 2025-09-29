export const metadata = { title: "About Us | Foodie" };

export default function AboutPage() {
	return (
		<div className="min-h-dvh">
			<section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
				<h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">About Us</h1>
				<p className="mt-4 text-foreground/70 max-w-3xl">
					We are passionate food lovers bringing flavorful experiences to your doorstep.
					From local produce to global cuisines, our mission is to make great food
					accessible and delightful.
				</p>
				<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
					<div className="rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-background/60 backdrop-blur">
						<h3 className="font-semibold text-lg">Fresh Ingredients</h3>
						<p className="mt-2 text-foreground/70">Sourced daily from trusted partners.</p>
					</div>
					<div className="rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-background/60 backdrop-blur">
						<h3 className="font-semibold text-lg">Fast Delivery</h3>
						<p className="mt-2 text-foreground/70">Hot and fresh at your door.</p>
					</div>
					<div className="rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-background/60 backdrop-blur">
						<h3 className="font-semibold text-lg">Eco Friendly</h3>
						<p className="mt-2 text-foreground/70">Sustainable packaging and operations.</p>
					</div>
				</div>
			</section>
		</div>
	);
}

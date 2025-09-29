export const metadata = { title: "Contact Us | Foodie" };

export default function ContactPage() {
	return (
		<div className="min-h-dvh">
			<section className="mx-auto max-w-xl px-4 sm:px-6 py-12">
				<h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Contact Us</h1>
				<p className="mt-3 text-foreground/70">We'd love to hear from you. Send us a message.</p>
				<form className="mt-8 grid gap-4">
					<input className="w-full rounded-lg border border-black/10 dark:border-white/15 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-foreground/20" placeholder="Your name" />
					<input type="email" className="w-full rounded-lg border border-black/10 dark:border-white/15 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-foreground/20" placeholder="Your email" />
					<textarea rows={5} className="w-full rounded-lg border border-black/10 dark:border-white/15 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-foreground/20" placeholder="Your message" />
					<button type="button" className="inline-flex justify-center items-center rounded-lg bg-foreground text-background px-5 py-3 font-semibold hover:opacity-90">Send</button>
				</form>
			</section>
		</div>
	);
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-dvh">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#ffbf59]/30 via-transparent to-transparent blur-2xl" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-3 py-1 text-xs font-medium text-foreground/70">
                <span>Fresh • Fast • Delicious</span>
              </div>
              <h1 className="mt-4 text-5xl sm:text-6xl font-extrabold tracking-tight">
                Crave it. We make it.
              </h1>
              <p className="mt-4 text-lg text-foreground/70 max-w-xl">
                Discover chef-crafted meals delivered hot to your door. Seasonal ingredients, bold flavors, zero hassle.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/menu" className="inline-flex items-center justify-center rounded-lg bg-foreground text-background px-6 py-3 font-semibold hover:opacity-90">
                  Explore Menu
                </Link>
                <Link href="/about" className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/15 px-6 py-3 font-semibold hover:bg-black/5 dark:hover:bg-white/10">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -right-6 size-40 rounded-full bg-[#ff7a59]/20 blur-2xl -z-10" />
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-background/70 backdrop-blur flex flex-col items-center">
                  <Image src="/globe.svg" alt="Dish" width={64} height={64} />
                  <p className="mt-3 font-semibold">Sushi Platter</p>
                  <span className="text-foreground/60">$18</span>
                </div>
                <div className="rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-background/70 backdrop-blur flex flex-col items-center">
                  <Image src="/window.svg" alt="Dish" width={64} height={64} />
                  <p className="mt-3 font-semibold">Spicy Ramen</p>
                  <span className="text-foreground/60">$12</span>
                </div>
                <div className="rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-background/70 backdrop-blur flex flex-col items-center">
                  <Image src="/file.svg" alt="Dish" width={64} height={64} />
                  <p className="mt-3 font-semibold">Veggie Bowl</p>
                  <span className="text-foreground/60">$10</span>
                </div>
                <div className="rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-background/70 backdrop-blur flex flex-col items-center">
                  <Image src="/vercel.svg" alt="Dish" width={64} height={64} />
                  <p className="mt-3 font-semibold">Burger Deluxe</p>
                  <span className="text-foreground/60">$14</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Featured Picks</h2>
          <Link href="/menu" className="text-sm font-semibold text-foreground/80 hover:text-foreground">View all →</Link>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Fire-Grilled Tacos","Truffle Pasta","Rainbow Salad","BBQ Wings","Poke Bowl","Cheese Pizza"].map((name, idx) => (
            <div key={name} className="group rounded-2xl border border-black/5 dark:border-white/10 bg-background/60 backdrop-blur p-5 hover:shadow-xl hover:-translate-y-0.5 transition-all">
              <div className="aspect-[16/9] rounded-xl overflow-hidden bg-black/5 dark:bg-white/10 flex items-center justify-center">
                <Image src={idx % 2 === 0 ? "/globe.svg" : "/window.svg"} alt={name} width={96} height={96} className="object-contain" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <p className="text-foreground/70">From $9</p>
                </div>
                <Link href="/menu" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline">
                  Order
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/menu" className="inline-flex items-center justify-center rounded-lg bg-foreground text-background px-6 py-3 font-semibold hover:opacity-90">
            Start Your Order
          </Link>
        </div>
      </section>
    </div>
  );
}

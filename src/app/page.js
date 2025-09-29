import Image from "next/image";
import Link from "next/link";
import OrderGrid from "./components/OrderGrid";



export default function Home() {
  return (
    <div className="min-h-dvh">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#ffbf59]/30 via-transparent to-transparent blur-2xl" />
        {/* Leaf animation removed as requested */}
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
              <OrderGrid items={[
                { id: 1, name: "Stacks", price: 9, img: "/foods/hailey-tong-CMwG_Brm2QE-unsplash.jpg" },
                { id: 2, name: "Shawarma", price: 11, img: "/foods/yoad-shejtman-sPmF7MNzdnU-unsplash.jpg" },
                { id: 3, name: "Zinger Burger", price: 14, img: "/foods/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg" },
                { id: 4, name: "Salad", price: 8, img: "/foods/keesha-s-kitchen-gDwy_JEoz8k-unsplash.jpg" },
              ]} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

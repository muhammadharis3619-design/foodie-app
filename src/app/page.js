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
                <div className="rounded-2xl border border-black/5 dark:border-white/10 p-0 bg-background/70 overflow-hidden">
                  <Image src="/foods/hailey-tong-CMwG_Brm2QE-unsplash.jpg" alt="Stacks" width={640} height={480} className="h-40 w-full object-cover" />
                  <div className="p-4">
                    <p className="font-semibold">Stacks</p>
                    <span className="text-foreground/60">$9</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-black/5 dark:border-white/10 p-0 bg-background/70 overflow-hidden">
                  <Image src="/foods/yoad-shejtman-sPmF7MNzdnU-unsplash.jpg" alt="Shawarma" width={640} height={480} className="h-40 w-full object-cover" />
                  <div className="p-4">
                    <p className="font-semibold">Shawarma</p>
                    <span className="text-foreground/60">$11</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-black/5 dark:border-white/10 p-0 bg-background/70 overflow-hidden">
                  <Image src="/foods/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg" alt="Zinger Burger" width={640} height={480} className="h-40 w-full object-cover" />
                  <div className="p-4">
                    <p className="font-semibold">Zinger Burger</p>
                    <span className="text-foreground/60">$14</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-black/5 dark:border-white/10 p-0 bg-background/70 overflow-hidden">
                  <Image src="/foods/keesha-s-kitchen-gDwy_JEoz8k-unsplash.jpg" alt="Chicken Corn Soup" width={640} height={480} className="h-40 w-full object-cover" />
                  <div className="p-4">
                    <p className="font-semibold">Chicken Corn Soup</p>
                    <span className="text-foreground/60">$8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

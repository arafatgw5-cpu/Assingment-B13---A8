import Link from "next/link";

export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-orange-100 via-white to-yellow-100">
            <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <p className="text-orange-500 font-semibold mb-2">Learn. Grow. Succeed.</p>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Upgrade Your Skills Today 🚀
                    </h1>
                    <p className="mt-5 text-slate-600">
                        Learn from industry experts and enroll in skill-based programs.
                    </p>
                    <Link href="/courses" className="btn mt-6 bg-orange-500 text-white">
                        Explore Courses
                    </Link>
                </div>

                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                    className="rounded-3xl shadow-xl"
                    alt="learning"
                />
            </div>
        </section>
    );
}
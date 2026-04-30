import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[70vh] sm:min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center text-center text-white px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          Upgrade Your Skills Today 🚀
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-7 max-w-2xl mx-auto">
          Learn from Industry Experts and build your career
        </p>

        <Link
          href="/courses"
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg transition hover:bg-blue-700"
        >
          Explore Courses
        </Link>
      </div>
    </section>
  );
}
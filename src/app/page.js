import Banner from "@/components/Banner";
import CourseCard from "@/components/CourseCard";

const page = async () => {
  const res = await fetch(
    "https://assingment-b13-a8-fqbh.vercel.app/courses.json",
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  // 👉 First 6 ta course
  const firstSix = data.slice(0, 4);

  return (
    <div>
      <Banner />

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">📦 All Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {firstSix.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
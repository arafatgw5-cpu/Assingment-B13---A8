import Banner from "@/components/Banner";
import CourseCard from "@/components/CourseCard";

// export default async function Home() {
  // const res = await fetch("http://localhost:3000/courses.json", {
  //   cache: "no-store",
  // });

  const courses = await res.json();

  const firstSix = courses.slice(0, 4);

  return (
    <>
      <Banner />

      {/* <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">📦 All Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {firstSix.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section> */}
    </>
  );
// }
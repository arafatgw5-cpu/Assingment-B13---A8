import Link from "next/link";

export default function CourseCard({ course }) {
  const {
    id,
    title,
    instructor,
    rating,
    image,
    level,
    duration,
  } = course;

  return (
    <div className="bg-base-100 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">
      
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 space-y-2">
        
        {/* Title */}
        <h2 className="text-lg font-bold line-clamp-2">
          {title}
        </h2>

        {/* Instructor */}
        <p className="text-sm text-gray-500">
          👨‍🏫 {instructor}
        </p>

        {/* Info Row */}
        <div className="flex justify-between text-sm text-gray-600">
          <span>⭐ {rating}</span>
          <span>{duration}</span>
        </div>

        {/* Level */}
        <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded">
          {level}
        </span>

        {/* Button */}
        <Link
          href={`/courses/${id}`}
          className="block mt-3"
        >
          <button className="btn btn-primary w-full">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
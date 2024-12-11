import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import useCourses from "../../hooks/useCourses";

function RelatedCourses({ cartItems }) {
  const [error, setError] = useState(null);
  const { courses, loading, getCourses } = useCourses();

  function getRelatedCourses(courses, cartItems, criteria = ["program", "course_type"]) {
    if (!courses || !cartItems?.length) return [];

    const relatedCoursesSet = new Map(); // Use Map to track courses by their ID

    cartItems.forEach((currentCourse) => {
      //console.log("Current Course: ", currentCourse); // Debug: Check current course
      courses.forEach((course) => {
        //console.log("Course: ", course); // Debug: Check course in courses array

        if (course.id === currentCourse.id) return; // Skip if the course is the same

        // Check if all criteria match
        const matchesAllCriteria = criteria.every((key) => {
          const isMatch = currentCourse[key] === course[key];
          //console.log(`${key}: ${currentCourse[key]} === ${course[key]} ? ${isMatch}`); // Debug: Check each criteria
          return isMatch;
        });

        if (matchesAllCriteria) {
          //console.log("Matching Course: ", course); // Debug: Check if a match was found
          // Add course to Map if not already added by ID
          if (!relatedCoursesSet.has(course.id)) {
            relatedCoursesSet.set(course.id, course);
          }
        }
      });
    });

    return Array.from(relatedCoursesSet.values()); // Return courses as an array from the Map
  }

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        await getCourses();
      } catch (err) {
        setError("Failed to fetch courses. Please try again later.");
      }
    };

    fetchCourses();
  }, [getCourses]);

  // Get related courses, limiting to the first 4
  const relatedCourses = getRelatedCourses(courses, cartItems);
  const limitedRelatedCourses = relatedCourses.slice(0, 4);

  return (
    <div className="w-full flex flex-col gap-[20px]">
      <h3 className="font-bold text-lg">Related Courses</h3>

      {loading ? (
        <div className="flex justify-center items-center mt-10 min-h-5 bg-gray-100">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-600"></div>
        </div>
      ) : error ? (
        <div className="w-full text-red-500 text-center">
          {error}
        </div>
      ) : (
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-3 min-[1200px]:grid-cols-4 justify-center gap-4">
          {limitedRelatedCourses?.map((currentCourse) => (
            <CourseCard key={currentCourse?.id} data={currentCourse} />
          ))}
        </ul>
      )}

      {!loading && !error && limitedRelatedCourses.length === 0 && (
        <div className="w-full text-center text-gray-500">
          No related courses found.
        </div>
      )}
    </div>
  );
}

export default RelatedCourses;

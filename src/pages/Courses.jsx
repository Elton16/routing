import React, { useEffect, useState } from "react";
import { getAllCourses } from "../services/courseService";

function Courses() {
  const [courses, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getAllCourses()
      .then((data) => {
        console.log(data);
        setCourse(data);
      })
      .catch(() => {
        setError("issue with data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">My Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold mb-2">{course.title}</h2>

            <p className="text-gray-600 mb-3">
              Level:{" "}
              <span className="font-medium text-gray-800">{course.level}</span>
            </p>

            <div className="flex items-center justify-between">
              <span className="text-green-600 font-bold">${course.price}</span>

              <button className="px-3 py-1 text-sm bg-black text-white rounded-lg hover:bg-gray-800 transition">
                Enroll
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;

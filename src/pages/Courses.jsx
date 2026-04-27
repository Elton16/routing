import React, { useEffect, useState } from "react";
import { getAllCourses } from "../services/courseService";

function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    async function loadCourses() {
      try {
        const data = await getAllCourses();
        setCourses(data);
      } catch {
        console.error("Not Found");
      }
    }

    loadCourses();
  }, []);
  return (
    <div>
      {courses.map((course) => (
        <div>
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "2px solid black",
              margin: "20px",
              padding: "15px",
              color: "white",
              backgroundColor: "teal",
              height: "150px",
            }}
          >
            {course.title},{course.level},{course.lessons},{course.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Courses;

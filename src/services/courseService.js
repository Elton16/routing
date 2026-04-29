const API_URL = "http://localhost:5174/courses";

export const getAllCourses = () => {
  return fetch(API_URL).then((response) => {
    if (!response.ok) {
      throw new Error("Couldnt find the courses");
    }
    return response.json();
  });
};

export const getCourseById = (courseId) => {
  return fetch(`${API_URL}/${courseId}`).then((response) => {
    if (!response.ok) {
      throw new Error("Couldnt find this Course");
    }
    return response.json();
  });
};

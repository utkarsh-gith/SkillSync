import React from 'react';

const courses = [
    {
        title: "Introduction to Programming",
        description: "Learn the basics of programming with this introductory course.",
        link: "#"
    },
    {
        title: "Web Development",
        description: "Build modern web applications using HTML, CSS, and JavaScript.",
        link: "#"
    },
    {
        title: "Data Science",
        description: "Explore data analysis, visualization, and machine learning techniques.",
        link: "#"
    },
    {
        title: "Cybersecurity",
        description: "Understand the fundamentals of cybersecurity and how to protect systems.",
        link: "#"
    }
];

function Course() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Course Recommendations</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-semibold mb-2 dark:text-gray-100">{course.title}</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{course.description}</p>
                        <a href={course.link} className="text-blue-500 hover:underline dark:text-blue-300">Learn More</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Course;

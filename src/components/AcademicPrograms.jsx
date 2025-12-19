import React, { useEffect, useState } from "react";
import sal from "sal.js";
import "sal.js/dist/sal.css";

// 👉 IMPORT IMAGES (IMPORTANT)
import course8 from "../assets/images/course/course-08.jpg";
import course9 from "../assets/images/course/course-09.jpg";
import course10 from "../assets/images/course/course-10.jpg";

const coursesData = [
    {
        id: 1,
        title: "Public Administration",
        category: ["undergraduate", "graduate"],
        level: "Management",
        rating: "5.0 / 5 Rating",
        image: course8,
        mode: "Online + Onsite",
        description:
            "Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.",
    },
    {
        id: 2,
        title: "Major in Economics",
        category: ["undergraduate", "graduate"],
        level: "Economics",
        rating: "4.9 / 5 Rating",
        image: course9,
        mode: "Online + Onsite",
        description:
            "Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.",
    },
    {
        id: 3,
        title: "Business Studies",
        category: ["undergraduate", "online"],
        level: "Business",
        rating: "4.7 / 5 Rating",
        image: course10,
        mode: "Online Only",
        description:
            "Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.",
    },
];

const AcademicPrograms = () => {
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        sal({ once: true });
    }, []);

    const filteredCourses =
        filter === "all"
            ? coursesData
            : coursesData.filter((course) => course.category.includes(filter));

    return (
        <div className="edu-course-area course-area-3 section-gap-large bg-lighten04">
            <div className="container">

                {/* SECTION TITLE */}
                <div
                    className="section-title section-center"
                    data-sal="slide-up"
                    data-sal-duration="800"
                >
                    <span className="pre-title">Popular Courses</span>
                    <h2 className="title">Academic Programs</h2>
                    <span className="shape-line">
                        <i className="icon-19"></i>
                    </span>
                </div>

                {/* FILTER BUTTONS */}
                <div className="isotop-button isotop-filter text-center mb-5">
                    <button
                        className={filter === "undergraduate" ? "is-checked" : ""}
                        onClick={() => setFilter("undergraduate")}
                    >
                        Undergraduate Program
                    </button>

                    <button
                        className={filter === "graduate" ? "is-checked" : ""}
                        onClick={() => setFilter("graduate")}
                    >
                        Graduate Program
                    </button>

                    <button
                        className={filter === "online" ? "is-checked" : ""}
                        onClick={() => setFilter("online")}
                    >
                        Online Program
                    </button>

                    <button
                        className={filter === "all" ? "is-checked" : ""}
                        onClick={() => setFilter("all")}
                    >
                        All Programs
                    </button>
                </div>

                {/* COURSES */}
                <div className="row g-5">
                    {filteredCourses.map((course, index) => (
                        <div
                            key={course.id}
                            className="col-md-6 col-lg-4"
                            data-sal="slide-up"
                            data-sal-delay={index * 100}
                            data-sal-duration="800"
                        >
                            <div className="edu-course course-style-3">
                                <div className="inner">

                                    {/* IMAGE */}
                                    <div className="thumbnail">
                                        <img src={course.image} alt={course.title} />
                                        <div className="time-top">
                                            <span className="duration">
                                                <i className="icon-61"></i> {course.mode}
                                            </span>
                                        </div>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="content">
                                        <span className="course-level">{course.level}</span>
                                        <h5 className="title">{course.title}</h5>

                                        <p>{course.description}</p>

                                        <div className="course-rating">
                                            <div className="rating">
                                                {[...Array(5)].map((_, i) => (
                                                    <i key={i} className="icon-23"></i>
                                                ))}
                                            </div>
                                            <span className="rating-count">({course.rating})</span>
                                        </div>

                                        <div className="read-more-btn">
                                            <a className="edu-btn btn-small btn-secondary" href="#">
                                                Learn More <i className="icon-4"></i>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AcademicPrograms;

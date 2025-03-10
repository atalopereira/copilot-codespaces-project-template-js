/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "ux/ui design for beginners",
    description:
      "A comprehensive course designed to introduce beginners to the fundamentals of UX/UI design. This course covers everything from user research and wireframing to prototyping and usability testing.",
    url: "https://www.udemy.com/course/ux-ui-design-for-beginners/",
  },
  {
    title: "Inclusive Web Design",
    description:
      "A course that teaches the principles of inclusive web design, including how to create accessible websites and applications for people with disabilities.",
    url: "https://www.udemy.com/course/inclusive-web-design/",
  },
  {
    title: "Design Thinking for Beginners",
    description:
      "A beginner's guide to design thinking, a problem-solving approach that emphasizes empathy and creativity. This course covers the basics of design thinking and how to apply it to real-world problems.",
    url: "https://www.udemy.com/course/design-thinking-for-beginners/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

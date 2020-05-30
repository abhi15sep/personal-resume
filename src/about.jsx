import React, { Component } from "react";

class About extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY < 196) {
        this.setState({ scrolled: false });
      } else {
        this.setState({ scrolled: true });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <div>
        <section className="about" id="About">
          <h1
            style={
              this.state.scrolled
                ? { opacity: 1, transform: "translateX(0px)" }
                : { opacity: 0 }
            }
          >
            About Me
          </h1>
          <p
            style={
              this.state.scrolled
                ? { opacity: 1, transform: "translateX(0px)" }
                : { opacity: 0 }
            }
          >
            Hi, I'm <strong>Abhay Pratap Singh</strong>, web and backend developer based
            on Bangalore, India. My passion is software development, and I find happiness in being a better me today than the me yesterday. I am knowledgeable in{" "}
            <strong>
              HTML5, CSS3, JavaScript, jQuery, Python, AWS, NodeJS,
              ReactJS, Java, Spring, Kubernetes, Docker.
            </strong>{" "}
            My goal is to become a full stack developer with the MERN stack and
            be able to develop fully functional and beautiful web apps that will
            provide satisfaction to its users.
          </p>
        </section>
      </div>
    );
  }
}

export default About;

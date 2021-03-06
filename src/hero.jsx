import React, { Component } from "react";

class Hero extends Component {
  constructor() {
    super();
    this.state = {
      load: false,
    };
  }

  componentDidMount() {
    window.addEventListener("load", () => {
      this.setState({ load: true });
    });
  }
  componentWillUnmount() {
    window.removeEventListener("load");
  }

  render() {
    return (
      <div className="heroimage" id="home">
        <section>
          <h1
            style={
              this.state.load
                ? { opacity: 1, transform: "translateX(0px)" }
                : { opacity: 0 }
            }
          >
            HI, I'M ABHAY AND I'M A DEVELOPER
          </h1>
          <a
            href="https://abhay-profile.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="button"
              style={
                this.state.load
                  ? { opacity: 1, transform: "translateX(0px)" }
                  : { opacity: 0 }
              }
            >
              HIRE ME!
            </button>
          </a>
        </section>
      </div>
    );
  }
}

export default Hero;

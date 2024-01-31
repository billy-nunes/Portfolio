import React from "react";
import AboutMe from "./Home/AboutMe";
import Projects from "./Home/Projects";
import Skills from "./Home/Skills";

function Home() {
    return (
        <section>
            <AboutMe />
            <Skills />
            <Projects />
        </section>
    );
}

export default Home;
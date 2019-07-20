import React from "react";
import { Link } from "react-scroll";
// @ts-ignore
import { SocialIcon } from "react-social-icons";
import Section from "./Section";
import LorumIpsum from "./LorumIpsum";
import "./App.css";

const App: React.FC = () => {
    return <div className="App">
        <nav className="SiteNav">
            <div className="NavContainer">
                <ul>
                    <li><Link activeClass="active" to="about" smooth={true} duration={500} spy={true} offset={-75}>About</Link></li>
                    <li><Link activeClass="active" to="forMentors" smooth={true} duration={500} spy={true} offset={-75}>For Mentors</Link></li>
                    <li><Link activeClass="active" to="forMentees" smooth={true} duration={500} spy={true} offset={-75}>For Mentees</Link></li>
                </ul>
            </div>
        </nav>
        <div className="Background"></div>
        <div className="Body">
            <h1>codebar Helsinki Mentorship Program</h1>
            <img src="https://picsum.photos/id/237/800/200" alt=""></img>
            <Section navName="about">
                <h2>About</h2>
                <LorumIpsum></LorumIpsum>
            </Section>
            <Section navName="forMentors">
                <h2>For Mentors</h2>
                <LorumIpsum></LorumIpsum>
            </Section>
            <Section navName="forMentees">
                <h2>For Mentees</h2>
                <LorumIpsum></LorumIpsum>
            </Section>
        </div>
        <footer>
            <hr></hr>
            <SocialIcon url="https://www.twitter.com/codebarhelsinki"></SocialIcon> 
            <SocialIcon url="https://www.facebook.com/codebarhelsinki/"></SocialIcon>
            <SocialIcon url="mailto:helsinki@codebar.io"></SocialIcon>
        </footer>
    </div>;
}

export default App;

import React from "react";
import profilePic from "../assets/profile.jpg";
import ScrollIndicator from "./ScrollIndicator";

const Hero: React.FC = () => {
	return (
		<section
			id="hero"
			className="h-screen snap-start flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 bg-gradient-to-b from-base-100 to-base-200 gap-12 relative"
		>
			<div className="flex-shrink-0">
				<img
					src={profilePic}
					alt="Calvin"
					className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border-4 border-primary shadow-lg object-cover"
				/>
			</div>
			<div className="flex flex-col justify-center max-w-2xl space-y-6">
				<h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
					Hi, I'm Calvin
				</h1>

				<p className="text-lg sm:text-xl md:text-2xl text-base-content/70">
					Web Developer specializing in building exceptional digital experiences
					with React, NodeJs, TailwindCSS, and modern web technologies.
				</p>

				<div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
					<a
						href="#projects"
						className="btn btn-lg text-white bg-gradient-to-r from-primary to-secondary bg-[length:400%_100%] bg-[position:0%_0%] transition-transform transform hover:scale-105"
					>
						View Projects
					</a>
					<a
						href="#contact"
						className="btn btn-lg text-white bg-gradient-to-r from-primary to-secondary bg-[length:400%_100%] bg-[position:25%_0%] transition-transform transform hover:scale-105"
					>
						Contact Me
					</a>
					<a
						href="/assets/Calvin_CV.pdf"
						download
						className="btn btn-lg text-white bg-gradient-to-r from-primary to-secondary bg-[length:400%_100%] bg-[position:75%_0%] transition-transform transform hover:scale-105"
					>
						Download CV
					</a>
					<a
						href="#something"
						className="btn btn-lg text-white bg-gradient-to-r from-primary to-secondary bg-[length:400%_100%] bg-[position:100%_0%] transition-transform transform hover:scale-105"
					>
						GitHub
					</a>
				</div>
			</div>
			<ScrollIndicator
				direction="down"
				text="Scroll down for more"
				href="#tech-stack"
			/>{" "}
		</section>
	);
};

export default Hero;

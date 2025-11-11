import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import ScrollIndicator from "./ScrollIndicator";

const Contact: React.FC = () => {
	return (
		<section
			id="contact"
			className="h-screen flex flex-col justify-center items-center px-6 md:px-12 bg-base-100 snap-start relative "
		>
			<div className="max-w-2xl w-full text-center">
				<h2 className="text-4xl font-bold mb-6 text-primary">Contact Me</h2>
				<p className="text-base-content/70 mb-4">
					Feel free to reach out via email or check out my GitHub profile.
				</p>

				<div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
					<a
						href="mailto:hocalvin1@gmail.com"
						className="btn btn-outline btn-lg gap-2"
					>
						<FaEnvelope className="text-xl" />
						Email Me
					</a>
					<a
						href="https://github.com/calvincode123"
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-outline btn-lg gap-2"
					>
						<FaGithub className="text-xl" />
						GitHub
					</a>
				</div>
			</div>
			<ScrollIndicator direction="up" text="Back to top" href="#hero" />{" "}
		</section>
	);
};

export default Contact;

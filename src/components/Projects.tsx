import React from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

interface Project {
	name: string;
	description: string;
	github?: string;
	website?: string;
	techs?: string[];
}

const projects: Project[] = [
	{
		name: "Pokepacks",
		description: "An e-commerce site for trading card merchandise.",
		github: "https://github.com/CalvinCode123/PokePacks",
		website: "https://pokepacks.com",
		techs: ["React", "Node.js", "Tailwind CSS", "MongoDB", "JavaScript"],
	},
	{
		name: "classTrail",
		description:
			"A learning management system for making online teaching more accessible.",
		github: "https://github.com/CalvinCode123/fyp",
		website: "https://classnametrail.com",
		techs: ["Django", "Python", "PostgreSQL", "HTML5", "CSS3"],
	},
	{
		name: "Portfolio",
		description: "My portfolio website built with React and TailwindCSS.",
		github: "https://github.com/CalvinCode123/calvin-portfolio",
		website: "https://calvinho.ie",
		techs: ["React", "TypeScript", "Tailwind CSS"],
	},
];

interface ProjectsProps {
	setHighlightedTechs: React.Dispatch<React.SetStateAction<string[]>>;
}

const Projects: React.FC<ProjectsProps> = ({ setHighlightedTechs }) => {
	const handleTechStackClick = (techs?: string[]) => {
		setHighlightedTechs(techs || []);
		document
			.getElementById("tech-stack")
			?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section
			id="projects"
			className="min-h-screen snap-start flex flex-col justify-center items-center my-4 px-3 sm:px-4 md:px-8 bg-gradient-to-b from-base-200 to-white dark:from-base-500 dark:to-white"
		>
			<h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary text-center">
				Example Projects
			</h2>
			<p className="text-base-content/70 mb-4 text-center text-sm sm:text-base">
				Here are a few live examples of projects I have worked on!
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 w-full max-w-6xl">
				{projects.map((project) => (
					<div
						key={project.name}
						className="card bg-base-200 shadow-md hover:shadow-lg transition-shadow duration-200 border border-base-300 flex flex-col justify-between p-1 sm:p-2 rounded-lg my-2"
					>
						<div className="card-body flex flex-col flex-1">
							<h3 className="card-title text-sm sm:text-base md:text-lg font-semibold">
								{project.name}
							</h3>
							<p className="text-base-content/70 mt-1 flex-1 text-xs sm:text-sm md:text-base">
								{project.description}
							</p>

							{project.techs && (
								<div className="mt-1 flex flex-wrap gap-1 sm:gap-1.5">
									{project.techs.map((tech) => (
										<span
											key={tech}
											className="badge badge-outline badge-[0.5rem] sm:badge-xs text-[8px] sm:text-[9px]"
										>
											{tech}
										</span>
									))}
								</div>
							)}
						</div>

						<div className="card-actions justify-center mt-1 mb-1 gap-1 sm:gap-2 flex-wrap">
							{project.github && (
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-[0.5rem] sm:btn-xs btn-outline gap-1 sm:gap-2 text-[8px] sm:text-[9px]"
								>
									<FaGithub /> GitHub
								</a>
							)}
							{project.website && (
								<a
									href={project.website}
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-[0.5rem] sm:btn-xs btn-outline gap-1 sm:gap-2 text-[8px] sm:text-[9px]"
								>
									<FaExternalLinkAlt /> Website
								</a>
							)}
							{project.techs && (
								<button
									className="btn btn-[0.5rem] sm:btn-xs btn-outline gap-1 sm:gap-2 text-[8px] sm:text-[9px]"
									onClick={() => handleTechStackClick(project.techs)}
								>
									<FaCode /> Tech Stack
								</button>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;

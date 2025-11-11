// Projects.tsx
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
		github: "https://github.com/yourusername/pokepacks",
		website: "https://pokepacks.com",
		techs: ["React", "Node.js", "Tailwind CSS", "MongoDB", "JavaScript"],
	},
	{
		name: "classTrail",
		description:
			"A learning management system for making online teaching more accessible.",
		github: "https://github.com/yourusername/classnametrail",
		website: "https://classnametrail.com",
		techs: ["Django", "Python", "PostgreSQL", "HTML5", "CSS3"],
	},
	{
		name: "Portfolio",
		description: "My portfolio website built with React and TailwindCSS.",
		github: "https://github.com/yourusername/portfolio",
		website: "https://yourportfolio.com",
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
			className="h-screen snap-start flex flex-col justify-center items-center px-6 
                bg-gradient-to-b from-base-200 to-white dark:from-base-500 dark:to-white"
		>
			<h2 className="text-4xl font-bold mb-4 text-primary">Example Projects</h2>
			<p className="text-base-content/70 mb-12">
				Here a a few live examples of projects I have worked on!
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
				{projects.map((project) => (
					<div
						key={project.name}
						className="card bg-base-200 shadow-lg hover:shadow-2xl transition-shadow duration-200 border border-base-300 flex flex-col justify-between"
					>
						<div className="card-body flex flex-col flex-1">
							<h3 className="card-title text-xl font-semibold">
								{project.name}
							</h3>
							<p className="text-base-content/70 mt-2 flex-1">
								{project.description}
							</p>

							{project.techs && (
								<div className="mt-4 flex flex-wrap gap-2">
									{project.techs.map((tech) => (
										<span
											key={tech}
											className="badge badge-outline badge-sm text-xs"
										>
											{tech}
										</span>
									))}
								</div>
							)}
						</div>

						<div className="card-actions justify-center mt-4 mb-4 gap-2">
							{project.github && (
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-sm btn-outline gap-2"
								>
									<FaGithub /> GitHub
								</a>
							)}
							{project.website && (
								<a
									href={project.website}
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-sm btn-outline gap-2"
								>
									<FaExternalLinkAlt /> Website
								</a>
							)}
							{project.techs && (
								<button
									className="btn btn-sm btn-outline gap-2"
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

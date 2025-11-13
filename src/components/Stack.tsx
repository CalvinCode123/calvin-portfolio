import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
	FaReact,
	FaNodeJs,
	FaPython,
	FaHtml5,
	FaCss3Alt,
} from "react-icons/fa";
import {
	SiTypescript,
	SiTailwindcss,
	SiPostgresql,
	SiDjango,
	SiJavascript,
} from "react-icons/si";

interface Tech {
	name: string;
	icon: React.ReactNode;
	category: string;
}

interface StackProps {
	highlightedTechs: string[];
}

const techStack: Tech[] = [
	{
		name: "React",
		icon: <FaReact className="text-sky-400" />,
		category: "Frontend",
	},
	{
		name: "TypeScript",
		icon: <SiTypescript className="text-blue-500" />,
		category: "Language",
	},
	{
		name: "JavaScript",
		icon: <SiJavascript className="text-yellow-400" />,
		category: "Language",
	},
	{
		name: "Node.js",
		icon: <FaNodeJs className="text-green-600" />,
		category: "Backend",
	},
	{
		name: "Python",
		icon: <FaPython className="text-yellow-400" />,
		category: "Language",
	},
	{
		name: "Tailwind CSS",
		icon: <SiTailwindcss className="text-teal-400" />,
		category: "Styling",
	},
	{
		name: "HTML5",
		icon: <FaHtml5 className="text-orange-500" />,
		category: "Frontend",
	},
	{
		name: "CSS3",
		icon: <FaCss3Alt className="text-blue-400" />,
		category: "Styling",
	},
	{
		name: "Django",
		icon: <SiDjango className="text-green-600" />,
		category: "Backend",
	},
	{
		name: "PostgreSQL",
		icon: <SiPostgresql className="text-sky-700" />,
		category: "Database",
	},
];

const containerVariants = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.12 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 25, scale: 0.92 },
	show: (isHighlighted: boolean) => ({
		opacity: 1,
		y: 0,
		scale: isHighlighted ? 1.06 : 1,
		boxShadow: isHighlighted
			? "0 10px 25px rgba(0,0,0,0.25)"
			: "0 3px 8px rgba(0,0,0,0.08)",
		zIndex: isHighlighted ? 10 : 1,
		transition: { type: "spring", stiffness: 280, damping: 30 },
	}),
};

const Stack: React.FC<StackProps> = ({ highlightedTechs }) => {
	const sectionRef = useRef<HTMLElement>(null);
	const [activeHighlights, setActiveHighlights] =
		useState<string[]>(highlightedTechs);

	useEffect(() => {
		setActiveHighlights(highlightedTechs);
	}, [highlightedTechs]);

	const highlightCurrentStack = () => {
		setActiveHighlights([
			"React",
			"JavaScript",
			"Node.js",
			"Tailwind CSS",
			"HTML5",
			"CSS3",
		]);
	};

	return (
		<motion.section
			ref={sectionRef}
			id="tech-stack"
			className="h-screen flex flex-col justify-center items-center px-6 md:px-12 bg-base-100 dark:bg-base-200 snap-start"
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.8 }}
		>
			<div className="max-w-6xl w-full text-center">
				<h2 className="text-4xl font-bold mb-4 text-primary">
					Technologies I have experience with
				</h2>
				<p className="text-base-content/70 mb-12">
					Technologies I use to build fast, scalable, and beautiful web
					experiences.
				</p>

				<motion.div
					variants={containerVariants}
					className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
				>
					{techStack.map((tech) => {
						const isHighlighted = activeHighlights.includes(tech.name);
						return (
							<motion.div
								key={tech.name}
								variants={itemVariants}
								custom={isHighlighted}
								className="card bg-base-200 dark:bg-base-300 shadow-md will-change-transform"
							>
								<div className="card-body items-center text-center">
									<div className="text-5xl mb-3">{tech.icon}</div>
									<h3
										className={`card-title text-lg transition-colors duration-300 ${
											isHighlighted ? "text-primary" : "text-base-content/50"
										}`}
									>
										{tech.name}
									</h3>
									<p className="text-sm text-base-content/50">
										{tech.category}
									</p>
								</div>
							</motion.div>
						);
					})}
				</motion.div>

				<button
					onClick={highlightCurrentStack}
					className="btn btn-primary mt-8"
				>
					My Current Tech Stack
				</button>

				<p className="mt-6 text-sm text-base-content/50 animate-bounce md:hidden">
					Scroll down to explore
				</p>
			</div>
		</motion.section>
	);
};

export default Stack;

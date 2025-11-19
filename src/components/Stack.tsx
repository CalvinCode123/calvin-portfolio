import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

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
	show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 12, scale: 0.95 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
	},
};

const Stack: React.FC<StackProps> = ({ highlightedTechs }) => {
	const [activeHighlights, setActiveHighlights] =
		useState<string[]>(highlightedTechs);
	const isHighlightMode = activeHighlights.length > 0;

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

	const unHighlightCurrentStack = () => setActiveHighlights([]);

	useEffect(() => {
		const onClick = () => unHighlightCurrentStack();
		window.addEventListener("click", onClick, { capture: true });
		return () =>
			window.removeEventListener("click", onClick, { capture: true });
	}, []);

	return (
		<motion.section
			id="tech-stack"
			className="min-h-screen flex flex-col justify-center items-center px-4 bg-base-100 dark:bg-base-200 snap-start"
			initial="hidden"
			whileInView="show"
			viewport={{ margin: "-80px", once: true }}
		>
			<div className="max-w-6xl w-full text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
					My Technologies
				</h2>

				<p className="text-base-content/70 mb-10"></p>

				<motion.div
					variants={containerVariants}
					className="flex flex-wrap justify-center gap-3 px-2 mb-6 md:hidden"
				>
					{techStack.map((tech) => {
						const isHighlighted = activeHighlights.includes(tech.name);

						return (
							<motion.div
								key={tech.name}
								variants={itemVariants}
								animate={{
									scale: isHighlighted ? 1.08 : 1,
									opacity: isHighlightMode && !isHighlighted ? 0.35 : 1,
									filter:
										isHighlightMode && !isHighlighted
											? "grayscale(1)"
											: "grayscale(0)",
								}}
								transition={{ duration: 0.25 }}
								className="flex items-center gap-2 bg-base-200 dark:bg-base-300 px-3 py-2 rounded-full shadow-sm whitespace-nowrap"
							>
								<span className="text-lg">{tech.icon}</span>
								<span className="text-sm font-medium">{tech.name}</span>
							</motion.div>
						);
					})}
				</motion.div>

				<motion.div
					variants={containerVariants}
					className="hidden md:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
				>
					{techStack.map((tech) => {
						const isHighlighted = activeHighlights.includes(tech.name);

						return (
							<motion.div
								key={tech.name}
								variants={itemVariants}
								animate={{
									scale: isHighlighted ? 1.05 : 1,
									opacity: isHighlightMode && !isHighlighted ? 0.4 : 1,
									filter:
										isHighlightMode && !isHighlighted
											? "grayscale(1)"
											: "grayscale(0)",
								}}
								transition={{ duration: 0.3 }}
								className="card bg-base-200 dark:bg-base-300 shadow-md rounded-lg p-5"
							>
								<div className="card-body items-center text-center p-3">
									<div className="text-4xl mb-2">{tech.icon}</div>
									<h3
										className={`text-lg font-semibold ${
											isHighlighted ? "text-primary" : "text-base-content/60"
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
					onClick={(e) => {
						e.stopPropagation();
						highlightCurrentStack();
					}}
					className="btn btn-primary mt-10"
				>
					My Current Tech Stack
				</button>
			</div>
		</motion.section>
	);
};

export default Stack;

import "./App.css";

import React, { useState } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Stack from "./components/Stack";
import { motion } from "motion/react";

const App: React.FC = () => {
	const [highlightedTechs, setHighlightedTechs] = useState<string[]>([]);

	return (
		<div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
			<motion.div
				animate={{
					opacity: 1,
					y: 0,
					transition: { duration: 0.5, ease: "easeOut" },
				}}
				initial={{ opacity: 0, y: 20 }}
			>
				<Hero />
			</motion.div>

			<Stack highlightedTechs={highlightedTechs} />

			<Projects setHighlightedTechs={setHighlightedTechs} />

			<Contact />
		</div>
	);
};

export default App;

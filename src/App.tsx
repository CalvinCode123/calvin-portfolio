import "./App.css";

import React, { useState } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Stack from "./components/Stack";

const App: React.FC = () => {
	const [highlightedTechs, setHighlightedTechs] = useState<string[]>([]);

	return (
		<div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
			<section className="h-screen snap-start">
				<Hero />
			</section>

			<section className="snap-start">
				<Stack highlightedTechs={highlightedTechs} />
			</section>

			<section className="h-screen snap-start">
				<Projects setHighlightedTechs={setHighlightedTechs} />
			</section>

			<section className="h-screen snap-start">
				<Contact />
			</section>
		</div>
	);
};

export default App;

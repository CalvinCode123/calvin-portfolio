import "./App.css";

import React, { useState } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Stack from "./components/Stack";

const App: React.FC = () => {
	const [highlightedTechs, setHighlightedTechs] = useState<string[]>([]);

	return (
		<div className="h-dvh overflow-y-scroll snap-y snap-mandatory scroll-smooth">
			<Hero />

			<Stack highlightedTechs={highlightedTechs} />

			<Projects setHighlightedTechs={setHighlightedTechs} />

			<Contact />
		</div>
	);
};

export default App;

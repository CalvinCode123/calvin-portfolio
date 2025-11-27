import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface ScrollIndicatorProps {
	direction?: "down" | "up";
	text?: string;
	href?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
	direction = "down",
	text,
	href,
}) => {
	const Icon = direction === "down" ? FaChevronDown : FaChevronUp;
	const isDown = direction === "down";

	// Mobile browser bottom-bar offset
	const [bottomOffset, setBottomOffset] = useState(0);

	useEffect(() => {
		const update = () => {
			if (window.visualViewport) {
				const offset = window.innerHeight - window.visualViewport.height;
				setBottomOffset(offset);
			}
		};

		update();
		window.visualViewport?.addEventListener("resize", update);
		window.visualViewport?.addEventListener("scroll", update);

		return () => {
			window.visualViewport?.removeEventListener("resize", update);
			window.visualViewport?.removeEventListener("scroll", update);
		};
	}, []);

	return (
		<div
			style={{
				position: "absolute",
				left: "50%",
				transform: "translateX(-50%)",
				bottom: isDown ? "calc(env(safe-area-inset-bottom) + 24px)" : undefined,
				top: !isDown ? "24px" : undefined,
			}}
			className="flex flex-col items-center gap-2"
		>
			{href ? (
				<a href={href}>
					<Icon className="text-primary text-2xl animate-bounce" />
				</a>
			) : (
				<Icon className="text-primary text-2xl animate-bounce" />
			)}

			{text && (
				<span className="text-sm text-base-content/70 animate-pulse">
					{text}
				</span>
			)}
		</div>
	);
};

export default ScrollIndicator;

import React from "react";
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

	return (
		<div
			style={{
				// absolute so it moves with the section; parent section must be positioned (e.g. className="relative")
				position: "absolute",
				left: "50%",
				transform: "translateX(-50%)",
				bottom: isDown
					? `calc(1rem + env(safe-area-inset-bottom, 0px))`
					: undefined,
				top: !isDown ? `calc(1rem + env(safe-area-inset-top, 0px))` : undefined,
				zIndex: 50,
			}}
			className="scroll-indicator flex flex-col items-center gap-2"
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

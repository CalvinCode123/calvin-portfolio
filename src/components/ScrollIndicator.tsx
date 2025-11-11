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

	const positionClass =
		direction === "down" ? "absolute bottom-6" : "absolute top-6";

	return (
		<div
			className={`${positionClass} left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2`}
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

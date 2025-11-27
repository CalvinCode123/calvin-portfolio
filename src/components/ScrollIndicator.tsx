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
				position: "absolute",
				left: "50%",
				transform: "translateX(-50%)",

				// Dynamic viewport + safe area = always above bottom bars
				bottom: isDown
					? "calc(env(safe-area-inset-bottom, 0px) + 24px)"
					: undefined,

				top: !isDown ? "24px" : undefined,
				zIndex: 20,
			}}
			className="flex flex-col items-center gap-2 pointer-events-auto"
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

// ...existing code...
import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface ScrollIndicatorProps {
	direction?: "down" | "up";
	text?: string;
	href?: string;
}

const HIDE_DELAY_MS = 200;

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
	direction = "down",
	text,
	href,
}) => {
	const Icon = direction === "down" ? FaChevronDown : FaChevronUp;
	const isDown = direction === "down";

	const [visible, setVisible] = useState(true);
	const [shown, setShown] = useState(true);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const hideTimeout = useRef<number | null>(null);

	const [topUIOffset, setTopUIOffset] = useState(0);
	const [bottomUIOffset, setBottomUIOffset] = useState(0);

	useEffect(() => {
		const section =
			containerRef.current?.closest("section") ??
			containerRef.current?.parentElement;
		if (!section) {
			setVisible(true);
			return;
		}

		const io = new IntersectionObserver(
			(entries) => {
				const e = entries[0];
				setVisible(e.isIntersecting && e.intersectionRatio > 0.1);
			},
			{ threshold: [0, 0.05, 0.1, 0.25, 0.5, 1] }
		);

		io.observe(section);
		return () => io.disconnect();
	}, []);

	useEffect(() => {
		const updateOffsets = () => {
			if (window.visualViewport) {
				const vv = window.visualViewport;
				const top = Math.max(0, vv.offsetTop || 0);
				const totalUi = Math.max(0, window.innerHeight - vv.height);
				const bottom = Math.max(0, totalUi - top);
				setTopUIOffset(Math.round(top));
				setBottomUIOffset(Math.round(bottom));
			} else {
				setTopUIOffset(0);
				setBottomUIOffset(0);
			}
		};

		updateOffsets();
		window.visualViewport?.addEventListener("resize", updateOffsets);
		window.visualViewport?.addEventListener("scroll", updateOffsets);
		window.addEventListener("resize", updateOffsets);

		return () => {
			window.visualViewport?.removeEventListener("resize", updateOffsets);
			window.visualViewport?.removeEventListener("scroll", updateOffsets);
			window.removeEventListener("resize", updateOffsets);
		};
	}, []);

	// smooth show/hide with small delay to avoid flicker
	useEffect(() => {
		if (visible) {
			if (hideTimeout.current) {
				window.clearTimeout(hideTimeout.current);
				hideTimeout.current = null;
			}
			setShown(true);
		} else {
			if (hideTimeout.current) {
				window.clearTimeout(hideTimeout.current);
			}
			hideTimeout.current = window.setTimeout(() => {
				setShown(false);
				hideTimeout.current = null;
			}, HIDE_DELAY_MS);
		}

		return () => {
			if (hideTimeout.current) {
				window.clearTimeout(hideTimeout.current);
				hideTimeout.current = null;
			}
		};
	}, [visible]);

	return (
		<div
			ref={containerRef}
			style={{
				position: "absolute",
				left: "50%",
				transform: shown
					? "translateX(-50%) translateY(0)"
					: "translateX(-50%) translateY(8px)",
				// offset the indicator by the detected browser chrome at top or bottom so it remains visible
				bottom: isDown
					? `calc(1rem + env(safe-area-inset-bottom, 0px) + ${bottomUIOffset}px)`
					: undefined,
				top: !isDown
					? `calc(1rem + env(safe-area-inset-top, 0px) + ${topUIOffset}px)`
					: undefined,
				zIndex: 50,
				opacity: shown ? 1 : 0,
				pointerEvents: shown ? "auto" : "none",
				transition: "opacity 180ms ease, transform 180ms ease",
			}}
			className="scroll-indicator flex flex-col items-center gap-2 max-w-max"
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

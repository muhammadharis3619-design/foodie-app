"use client";
import { useEffect, useMemo, useState } from "react";

export default function LeafDrift({ count = 3 }) {
	const [seeds, setSeeds] = useState([]);

	useEffect(() => {
		const list = Array.from({ length: count }).map(() => ({
			// random top between 10% and 60%
			top: 10 + Math.random() * 50,
			// random delay between 0 and 8s
			delay: Math.random() * 8,
			// slight size variation 18px to 26px
			size: 18 + Math.random() * 8,
		}));
		setSeeds(list);
	}, [count]);

	return (
		<>
			{seeds.map((s, idx) => (
				<img
					key={idx}
					src="/leaf.svg"
					alt=""
					className="leaf-anim"
					style={{ top: `${s.top}%`, width: `${s.size}px`, height: `${s.size}px`, animationDelay: `${s.delay}s` }}
				/>
			))}
		</>
	);
}

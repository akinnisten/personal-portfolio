import { useEffect, useRef } from "react";

export const CursorGlow = () => {
    const glowRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const current = useRef({ x: 0, y: 0 });
    const animationFrame = useRef(null);

    const size = 700;
    const half = size / 2;

    useEffect(() => {
        const handleMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        const animate = () => {
            current.current.x += (mouse.current.x - current.current.x) * 0.025;
            current.current.y += (mouse.current.y - current.current.y) * 0.025;

            if (glowRef.current) {
                glowRef.current.style.transform = `translate(${current.current.x - half}px, ${current.current.y - half}px)`;
            }

            animationFrame.current = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMove);
        animationFrame.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }
        };
    }, [half]);

    return (
        <div
            ref={glowRef}
            className="pointer-events-none fixed left-0 top-0 z-40 rounded-full"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                filter: "blur(120px)",
                background: `
                    radial-gradient(
                        circle,
                        rgba(168,85,247,0.14) 0%,
                        rgba(168,85,247,0.10) 20%,
                        rgba(168,85,247,0.06) 40%,
                        rgba(168,85,247,0.03) 60%,
                        transparent 78%
                    )
                `,
                transform: "translate(-9999px, -9999px)",
            }}
        />
    );
};
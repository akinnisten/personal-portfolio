import { useEffect, useRef } from "react";

export const CursorGlow = () => {
    const glowRef = useRef(null);
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const current = useRef({ x: 0, y: 0 });
    const animationFrame = useRef(null);

    const size = 220;
    const half = size / 2;

    useEffect(() => {
        const handleMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        const animate = () => {
            current.current.x += (mouse.current.x - current.current.x) * 0.16;
            current.current.y += (mouse.current.y - current.current.y) * 0.16;

            if (glowRef.current) {
                glowRef.current.style.transform = `translate(${current.current.x - half}px, ${current.current.y - half}px)`;
            }
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${current.current.x - 9}px, ${current.current.y - 9}px)`;
            }
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${mouse.current.x - 2}px, ${mouse.current.y - 2}px)`;
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
        <>
            <div
                ref={glowRef}
                className="pointer-events-none fixed left-0 top-0 z-30 rounded-full hidden md:block"
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    filter: "blur(58px)",
                    background: `
                        radial-gradient(
                            circle,
                            color-mix(in srgb, var(--color-primary) 18%, transparent) 0%,
                            color-mix(in srgb, var(--color-secondary-foreground) 10%, transparent) 35%,
                            transparent 72%
                        )
                    `,
                    transform: "translate(-9999px, -9999px)",
                }}
            />
            <div
                ref={ringRef}
                className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-[18px] w-[18px] rounded-full border border-primary/70 mix-blend-difference md:block"
                style={{ transform: "translate(-9999px, -9999px)" }}
            />
            <div
                ref={dotRef}
                className="pointer-events-none fixed left-0 top-0 z-[91] hidden h-1 w-1 rounded-full bg-foreground md:block"
                style={{ transform: "translate(-9999px, -9999px)" }}
            />
        </>
    );
};

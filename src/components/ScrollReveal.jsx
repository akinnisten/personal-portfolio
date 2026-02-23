import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const ScrollReveal = ({ children, className = "" }) => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ${
                isVisible 
                    ? "opacity-100 translate-y-0 blur-0" 
                    : "opacity-0 translate-y-8 blur-sm"
            } ${className}`}
        >
            {children}
        </div>
    );
};
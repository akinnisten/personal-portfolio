const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-4 text-lg",
}

export const AnimatedBorderButton = ({ children, className = "", size = "md" }) => { 
    return (
        <button 
            className={`relative bg-transparent border border-secondary-foreground text-secondary-foreground
                focus:outline-none focus-visible:ring-2 focus-visible:ring-primary 
                focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed 
                rounded-full cursor-pointer font-medium
                transition-all duration-300
                hover:border-primary hover:shadow-[0_0_12px_2px_var(--color-primary)] 
                ${sizeClasses[size]} ${className}`}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    )
}
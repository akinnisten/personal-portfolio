export const Loader = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-[9999] overflow-hidden">

      {/* sweeping lines */}
      <div className="loader-lines">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="loader-line"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>

    </div>
  );
};
import "../globals.css";

export default function Card({ title, children, className = "" }) {
  return (
    <div
      className={`w-full bg-hsl(var(--card)) backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 text-gray-300 ${className}`}
      style={{
        backgroundColor: "hsl(var(--card))",
        color: "hsl(var(--card-foreground))",
      }}
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="text-center flex-1 flex flex-col justify-center">{children}</div>
    </div>
  );
}
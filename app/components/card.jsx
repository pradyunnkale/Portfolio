import "../globals.css";
export default function Card({ title, children }) {
  return (
    <div className="w-full bg-hsl(var(--card)) backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 text-gray-300"
      style={{
      backgroundColor: "hsl(var(--card))",
      color: "hsl(var(--card-foreground))",
  }}
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="text-center">{children}</div>
    </div>
  );
}

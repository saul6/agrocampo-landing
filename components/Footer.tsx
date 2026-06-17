export function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: "#0b1a10",
        borderColor: "rgba(255,255,255,0.07)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-semibold text-base" style={{ color: "#f0fdf4" }}>
          Agro<span style={{ color: "#4ade80" }}>Campo</span>
        </span>

        <p className="text-sm" style={{ color: "rgba(240,253,244,0.4)" }}>
          &copy; {new Date().getFullYear()} DuoMind Solutions &amp; Hima Inocuidad Alimentaria.
        </p>

        <div className="flex gap-6">
          <a href="#" className="link-dim text-sm">
            Privacidad
          </a>
          <a href="#demo" className="link-dim text-sm">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}

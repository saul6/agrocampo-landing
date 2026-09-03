import { MadyLogo } from "./MadyLogo";

export function Footer() {
  return (
    <footer style={{ background: "#173251" }}>
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div
          className="rounded-full px-3 py-1.5"
          style={{ background: "rgba(255,255,255,0.9)" }}
        >
          <MadyLogo />
        </div>

        <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
          &copy; {new Date().getFullYear()} M.A.D.Y &middot; Inocuidad Inteligente.
        </p>

        <div className="flex gap-6">
          <a href="#" className="link-footer text-sm">Privacidad</a>
          <a href="#plan-personalizado" className="link-footer text-sm">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
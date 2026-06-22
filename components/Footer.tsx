import { MadyLogo } from "./MadyLogo";

export function Footer() {
  return (
    <footer style={{ background: "#0c243c" }}>
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <MadyLogo theme="dark" className="font-semibold text-base" />

        <p className="text-sm" style={{ color: "rgba(255,255,255,0.38)" }}>
          &copy; {new Date().getFullYear()} M.A.D.Y &middot; Inocuidad Alimentaria.
        </p>

        <div className="flex gap-6">
          <a href="#" className="link-footer text-sm">Privacidad</a>
          <a href="#demo" className="link-footer text-sm">Contacto</a>
        </div>
      </div>
    </footer>
  );
}

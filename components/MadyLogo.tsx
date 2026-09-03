import Image from "next/image";

export function MadyLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/mady-logo.png"
      alt="M.A.D.Y — Inocuidad Inteligente"
      width={168}
      height={40}
      priority
      className={className}
      style={{ height: "34px", width: "auto" }}
    />
  );
}
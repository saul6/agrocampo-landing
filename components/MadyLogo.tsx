type LogoTheme = 'light' | 'dark';

/**
 * M.A.D.Y logo con colores por letra.
 * light (fondo claro): M·A en #2B7AB5, D·Y en #0D5A8F, puntos en gris tenue.
 * dark  (fondo oscuro): M·A en #5BADD9, D·Y en #FFFFFF,  puntos en blanco tenue.
 */
export function MadyLogo({
  theme = 'light',
  className,
  style,
}: {
  theme?: LogoTheme;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ma  = theme === 'dark' ? '#5BADD9' : '#2B7AB5';
  const dy  = theme === 'dark' ? '#FFFFFF'  : '#0D5A8F';
  const dot = theme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.22)';

  return (
    <span className={className} style={{ letterSpacing: '0.01em', ...style }}>
      <span style={{ color: ma }}>M</span>
      <span style={{ color: dot }}>.</span>
      <span style={{ color: ma }}>A</span>
      <span style={{ color: dot }}>.</span>
      <span style={{ color: dy }}>D</span>
      <span style={{ color: dot }}>.</span>
      <span style={{ color: dy }}>Y</span>
    </span>
  );
}

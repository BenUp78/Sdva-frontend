import type { ButtonHTMLAttributes } from "react";

export type BtnActionVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | "link";

export type BtnActionSize = "sm" | "lg" | undefined;

export interface BtnActionProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  /** Contenido del botón (texto, icono, etc.) */
  children: React.ReactNode;
  /** Variante visual de Bootstrap (primary, secondary, etc.) */
  variant?: BtnActionVariant;
  /** Si es true, usa el estilo outline (btn-outline-*) */
  outline?: boolean;
  /** Tamaño: "sm" o "lg". Sin definir = tamaño normal */
  size?: BtnActionSize;
  /** Clases CSS adicionales (se combinan con las de Bootstrap) */
  className?: string;
}

export const BtnAction = ({
  children,
  variant = "primary",
  outline = false,
  size,
  className = "",
  type = "button",
  ...rest
}: BtnActionProps) => {
  const baseClass = "btn";
  const variantClass = outline ? `btn-outline-${variant}` : `btn-${variant}`;
  const sizeClass = size ? `btn-${size}` : "";
  const classes = [baseClass, variantClass, sizeClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
};

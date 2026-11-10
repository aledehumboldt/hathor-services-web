import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hathor Services C.A. | Agentes Aduanales",
  description: "Su aliado estratégico en comercio exterior y logística internacional desde La Guaira, Venezuela.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}

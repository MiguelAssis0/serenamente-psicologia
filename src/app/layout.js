import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SerenaMente Psicologia",
  description: "Esse site é uma landing page de psicologia.",
  keywords: "psicologia, terapia, saúde mental, bem-estar",
  author: "Miguel Anjos Dev",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className} style={{ margin: 0 }}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

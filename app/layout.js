import "./globals.css";

export const metadata = {
  title: "Siwes Application",
  description: "A Personal Project by Akinnukawe Oreoluwa, Apel Tavershima and Abah Gabriel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

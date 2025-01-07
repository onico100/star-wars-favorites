import "../styles/globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Star Wars Favorites",
  description: "Mark your favorite Star Wars movies!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

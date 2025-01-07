import "../styles/globals.css";

export const metadata = {
  title: "Star Wars Favorites",
  description: "Mark your favorite Star Wars movies!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            padding: "1rem",
            backgroundColor: "#20232a",
            color: "white",
          }}
        >
          <h1>Star Wars Movies</h1>
        </header>
        {children}
      </body>
    </html>
  );
}

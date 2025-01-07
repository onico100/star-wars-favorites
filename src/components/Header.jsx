import { EB_Garamond } from "next/font/google";

const eb_gramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Header = () => {
  return (
    <header
      style={{ padding: "0.8rem", backgroundColor: "#964848", color: "white" }}
    >
      <h1 className={eb_gramond.className}>Star Wars Movies</h1>
    </header>
  );
};

export default Header;

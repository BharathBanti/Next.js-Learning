import Navbar from "./Navbar";

export const metadata = {
  title: "user Layout",
  description: "User Layout of the Next.js app",
};

export default function RootLayout({ children }) {
  return (
      <div>
        <Navbar />
        {children}
      </div>
  );
}

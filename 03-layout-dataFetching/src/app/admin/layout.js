import Navbar from './Navbar'

export const metadata = {
  title: "Admin Layout",
  description: "Admin Layout of the Next.js app",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

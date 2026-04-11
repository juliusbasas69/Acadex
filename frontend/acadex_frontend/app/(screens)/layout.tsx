import Sidebar from "../components/sidebar/sidebar";
import Header from "../components/header/header";
import Breadcrumb from "../components/header/Breadcrumb";
import "../globals.css";

export default function ScreenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      <Sidebar />
      <Header />
      <Breadcrumb />
      <main>{children}</main>
    </div>
  );
}

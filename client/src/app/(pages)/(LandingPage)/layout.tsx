import Navbar from "../(CommonPages)/Navbar/Navbar";
import Location from "../(CommonPages)/Location/Location";
import Footer from "../(CommonPages)/Footer/Footer";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Navbar />
        {children}
        <Location/>
        <Footer/>
    </>
  );
}
import Navbar from "../(pages)/(CommonPages)/Navbar/Navbar";
import Location from "../(pages)/(CommonPages)/Location/Location";
import Footer from "../(pages)/(CommonPages)/Footer/Footer";
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
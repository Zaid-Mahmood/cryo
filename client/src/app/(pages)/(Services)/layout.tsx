import Navbar from "../(CommonPages)/Navbar/Navbar";
import Footer from "../(CommonPages)/Footer/Footer";
import Location from "../(CommonPages)/Location/Location";
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Location />
      <Footer />
    </>
  )
}

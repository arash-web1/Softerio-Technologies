import Header from "./components/Header";
import Footer from "./components/Footer";
import Prosses from "./sections/Process/Process";
import "../src/styles/App.css";
import Services from "./components/Services";

export default function App() {
  return (
    <>
      <Header />
      <Services />
      <Prosses />
      <Footer />
    </>
  );
}
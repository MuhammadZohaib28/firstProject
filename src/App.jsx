import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainSection from "./components/mainsection/MainSection";
import Records from "./components/records/Records";

const App = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <Records />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

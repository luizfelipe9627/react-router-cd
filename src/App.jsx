import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

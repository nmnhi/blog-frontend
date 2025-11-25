import { BrowserRouter } from "react-router-dom";
import { Footer, Navbar } from "./components";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray-50 min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-grow">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

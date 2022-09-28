import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

const Layout = ({ children }) => {
  return (
    <>{children}</>
  )
}

function App() {
  return (
    <div className="App bg-black text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Layout>
              <Header />
              <Home />
              <Footer/>
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
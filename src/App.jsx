import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Product from "./pages/Product.jsx"
import Smartphone from "./pages/Smartphone.jsx"
import Tablet from "./pages/Tablet.jsx"
import NotFound from "./pages/NotFound.jsx"

export default function App() {
  return (
    <>
      <BrowserRouter>
        {/* แสดง Header ไว้ด้านบนของทุกหน้า */}
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dti/sau/product" element={<Product />} />
          <Route path="/product/smartphone" element={<Smartphone />} />
          <Route path="/product/tablet" element={<Tablet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* แสดง Footer ไว้ด้านล่างของทุกหน้า */}
        <Footer />
      </BrowserRouter>
    </>
  )
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/public/Contact";
import HomePage from "./pages/public/HomePage";
import LogIn from "./pages/public/LogIn";
import Products from "./pages/public/Products";
import SignIn from "./pages/public/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLICAS */}
        <Route path="/">
          <Route index element={<HomePage />}></Route>
          <Route path="login" element={<LogIn />} />
          <Route path="registro" element={<SignIn />} />
          <Route path="productos" element={<Products />} />
          <Route path="marcas" element={<Contact />} />
          <Route path="contacto" element={<Contact />} />
        </Route>
        {/* PRIVADAS */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

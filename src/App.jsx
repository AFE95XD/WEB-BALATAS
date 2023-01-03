import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/public/HomePage";
import Servicios from "./pages/public/Servicios";
import Productos from "./pages/public/Productos";
import LogIn from "./pages/public/LogIn";
import SignIn from "./pages/public/SignIn";
import Blog from "./pages/public/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLICAS */}
        <Route path="/">
          <Route index element={<HomePage />}></Route>
          <Route path="login" element={<LogIn />} />
          <Route path="registro" element={<SignIn />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="productos" element={<Productos />} />
          <Route path="blog" element={<Blog />} />
        </Route>
        {/* PRIVADAS */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

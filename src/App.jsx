import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/public/HomePage";
import LogIn from "./pages/public/LogIn";
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
        </Route>
        {/* PRIVADAS */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

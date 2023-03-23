import { logo_full } from "./assets";
import { Home, CreatePost } from "./pages";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 border-b border-b-[#e6ebf4]">
        <Link to="/" className="p-4">
          <img src={logo_full} alt="imagine Full Logo" className="w-36 object-contain" />
        </Link>
        <Link to="/create-post" className="text-white px-4 py-2 rounded-md bg-stone-600">
          Imagine
        </Link>
      </header>
      <main className="px-4 py-8 w-full bg-slate-100 min-h-[calc(100vh-73px)] sm:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;

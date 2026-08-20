import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Sell from "./pages/Sell/Sell";
import Donate from "./pages/Donate/Donate";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";


function MyCloset() {
  return <h1>My Closet</h1>;
}

function Account() {
  return <h1>Account</h1>;
}


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Explore */}
        <Route
          path="/explore"
          element={<Explore />}
        />

        {/* Item Details */}
        <Route
          path="/item/:id"
          element={<ItemDetail />}
        />

        {/* Sell */}
        <Route
          path="/sell"
          element={<Sell />}
        />

        {/* Donate */}
        <Route
          path="/donate"
          element={<Donate />}
        />

        {/* My Closet */}
        <Route
          path="/my-closet"
          element={<MyCloset />}
        />

        {/* About */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Sign Up */}
        <Route
          path="/signup"
          element={<SignUp />}
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* Account */}
        <Route
          path="/account"
          element={<Account />}
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={<Cart />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
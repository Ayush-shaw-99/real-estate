import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </Router>
    </>
  );
}



{/* <BrowserRouter>
  <Routes>
   <Route path="/" element={<Home />}
   <Route path="/sign-in" element={<SignIn />}
   <Route path="/Sign-up" element={<SignUp />}
   <Route path="/about" element={<About />}
   <Route path="/profile" element={<profile />}
  </Routes>
  </BrowserRouter>; */}
import "./App.css";
import Text from "./components/Text";
import Profile from "./screens/Profile";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div>
      {/* <Login/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<SignIn />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

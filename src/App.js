import logo from "./logo.svg";
import "./App.css";
import { router } from "./components/Router";
import { RouterProvider } from "react-router-dom";
import CustomNavbar from "./components/Navbar/CustomNavbar";

function App() {
  return (
    <div className="App">
      <CustomNavbar></CustomNavbar>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

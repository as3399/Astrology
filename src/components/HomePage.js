import "../AdminDashboard/AdminPanel.css";
import "./LoginPage.css";
import "./HomePage.css";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import Navbar from "./NavBar";

export default function HomePage(props) {
  return (
    <>
      <div class="super_container">
      <Navbar />
        <div class="HomeContainer"></div>
      </div>
    </>
  );
}

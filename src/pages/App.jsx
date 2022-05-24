import { Outlet } from "react-router-dom";
import "../style/main.scss";
import NavVertical from "../components/NavVertical";
import NavHorizontal from "../components/NavHorizontal";
function App() {
  return (
    <div>
      <NavHorizontal />
      <div className="app">
        <NavVertical />
        <Outlet />
      </div>
    </div>
  );
}
export default App;

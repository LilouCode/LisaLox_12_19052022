import { Outlet } from "react-router-dom";
import "../style/main.scss";
import NavVertical from "../components/NavVertical";
import NavHorizontal from "../components/NavHorizontal";
import DevSection from "../components/DevSection";
import { SourceProvider} from "../utils/context";

function App() {
  return (
    <SourceProvider>
        <div>
          <DevSection />
          <NavHorizontal />
          <div className="app">
            <NavVertical />
            <Outlet />
          </div>
        </div>
    </SourceProvider>
  );
}
export default App;

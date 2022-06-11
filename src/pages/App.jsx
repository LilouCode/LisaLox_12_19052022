import { Outlet } from "react-router-dom";
import "../style/main.scss";
import NavVertical from "../components/NavVertical";
import NavHorizontal from "../components/NavHorizontal";
import DevSection from "../components/DevSection";
import { SourceProvider} from "../utils/context";

/**
 * This function component returns the entire Dasboard App
 * SourceProvider - to provide source state to the consummers
 * NavHorizontal-
 * NavVertical -
 * Outlet - 
 * @returns The app returns all the elements of the app with a SourceProvider at the top
 */
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

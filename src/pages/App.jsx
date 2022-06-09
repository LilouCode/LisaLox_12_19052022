import { Outlet } from "react-router-dom";
import "../style/main.scss";
import NavVertical from "../components/NavVertical";
import NavHorizontal from "../components/NavHorizontal";
import DevSection from "../components/DevSection";
import { SourceProvider, DataProvider } from "../utils/context";

function App() {
  return (
    <SourceProvider>
      <DataProvider>
        <div>
          <DevSection />
          <NavHorizontal />
          <div className="app">
            <NavVertical />
            <Outlet />
          </div>
        </div>
      </DataProvider>
    </SourceProvider>
  );
}
export default App;

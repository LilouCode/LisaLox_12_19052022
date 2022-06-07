import { Outlet } from "react-router-dom";
import "../style/main.scss";
import NavVertical from "../components/NavVertical";
import NavHorizontal from "../components/NavHorizontal";
import DevSection from "../components/DevSection";
import { SourceProvider, DataProvider, IdProvider } from "../utils/context";
function App() {
  return (
    <SourceProvider>
      <IdProvider>
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
      </IdProvider>
    </SourceProvider>
  );
}
export default App;

import { Outlet } from "react-router-dom"
// import Footer from "../components/Footer";
// import Header from '../components/Header';
import '../styles/main.scss';
function App() {
    return (
      <div>
      {/* <Header/> */}
      <Outlet />
      {/* <Footer/> */}
    </div>
    )
  }
  export default App
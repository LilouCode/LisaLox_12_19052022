import {useFetch} from "../service/service"
import Dashboard from "./Dashboard"
import Loader from "./Loader"
function Home (){
    const {data, isLoading, error} = useFetch()
    return(
        <div className="home">
            {isLoading ? 
            <Loader/> : 
            <Dashboard/>
            }
        </div>
    )
} export default Home
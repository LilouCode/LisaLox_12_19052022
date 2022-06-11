import {useFetch} from "../service/service"
import Dashboard from "./Dashboard"
import Loader from "./Loader"

/**
 * 
 * @returns The Home page returns a Loader while the data are fetched
 */
function Home (){
    const {isLoading} = useFetch()
    return(
        <div className="home">
            {isLoading ? 
            <Loader/> : 
            <Dashboard/>
            }
        </div>
    )
} export default Home
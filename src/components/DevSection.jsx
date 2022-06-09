import { useSource, useData } from "../utils/hooks"; //useId
import {useFetch} from "../service/service";
function DevSection() {
  const { toggleSource, source } = useSource();
  // const { toggleId, id } = useId();
  // const { data, isLoading, error } = useFetch();
  const { toggleData, dataApi } = useData();
  return (
    <div className="service">
      <h5>| Dev section |</h5>
      <p>click to switch data source or user {" >>>"} </p>

        <button
          className={
            source === "api"
              ? "service__btn"
              : " service__btn service__btn--mock"
          }
          onClick={() => {
            toggleSource();
            toggleData();
          }
          }
        >
          {source === "api" ? "Api" : "Mock"}
        </button>

      {/* <button
        className={
          id === 12 ? "service__btn service__btn--12" : " service__btn service__btn--18"
        }
        onClick={() => {
          toggleId();
          toggleData();
        }}
      >
        {id === 12 ? 18 : 12}
      </button> */}
      <button className="service__btn service__btn--close ">X</button>
    </div>
  );
}
export default DevSection;

import { useSource} from "../utils/hooks";
function DevSection() {
  const { toggleSource, source } = useSource();
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
          onClick={() => {toggleSource()}}
        >
          {source === "api" ? "Api" : "Mock"}
        </button>
      <button className="service__btn service__btn--close ">X</button>
    </div>
  );
}
export default DevSection;

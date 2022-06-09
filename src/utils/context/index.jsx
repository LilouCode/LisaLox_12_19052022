import userMain from "../../models/userMain";
import userActivity from "../../models/userActivity";
import userAverageSessions from "../../models/userAverageSessions";
import userPerformance from "../../models/userPerformance";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSource } from "../hooks";
import {
  USER_ACTIVITY,
  USER_MAIN_DATA,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../__mocks__/mock";
// import { useParams } from "react-router-dom";

export const SourceContext = React.createContext();

export const SourceProvider = ({ children }) => {
  const [source, setSource] = useState("mock");

  const toggleSource = () => {
    setSource(source === "mock" ? "api" : "mock");
  };

  return (
    <SourceContext.Provider value={{ source, toggleSource }}>
      {children}
    </SourceContext.Provider>
  );
};

export const IdContext = React.createContext();

export const IdProvider = ({ children }) => {
  const [id, setId] = useState(12);

  const toggleId = () => {
    setId(id === 12 ? 18 : 12);
  };

  return (
    <IdContext.Provider value={{ id, toggleId }}>{children}</IdContext.Provider>
  );
};

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  // const {id} = useParams()

  const [dataApi, setDataApi] = useState({});
  const [dataMock, setDataMock] = useState({});
  const [data, setData] = useState({});

  const [dataActivityApi, setDataActivityApi] = useState({});
  const [dataActivityMock, setDataActivityMock] = useState({});
  const [dataActivity, setDataActivity] = useState({});

  const [dataSessionsApi, setDataSessionsApi] = useState({});
  const [dataSessionsMock, setDataSessionsMock] = useState({});
  const [dataSessions, setDataSessions] = useState({});

  const [dataPerformanceApi, setDataPerformanceApi] = useState({});
  const [dataPerformanceMock, setDataPerformanceMock] = useState({});
  const [dataPerformance, setDataPerformance] = useState({});

  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState('');
  const { source } = useSource();

  //GET MAIN DATA
  useEffect(() =>{
    
    setLoading(true)
    async function fetchApi() {
      try {
        const response = await fetch('http://localhost:3000/user/18')
        const data = await response.json()
        setDataApi(data.data)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchApi()
  }, [])
  // useEffect(() =>{
  //   setIsLoaded(false)
  //   async function getDataApi(){
  //     const solution = await axios.get("http://localhost:3000/user/18")
  //         .then((res) => {
  //           const array = new userMain(res.data.data);
  //           console.log("MAIN API object from Data Provider : ", array);
  //           setDataApi(array);
  //           setIsLoaded(true)
  //         },
  //         (error) => {
  //           setError(error);
  //           console.log(error);
  //           setIsLoaded(true)
  //         });
  //         return solution
  //   }
  //   getDataApi()
  // }, [])
  








    // useEffect(() => {
    //   axios
    //     .get("http://localhost:3000/user/18")
    //     .then(async (res) => {
    //       const array = new userMain(await res.data.data);
    //       console.log("MAIN API object from Data Provider : ", array);
    //       setDataApi(array);
    //       setIsLoaded(true)
    //     },
    //     (error) => {
    //       setError(error);
    //       console.log(error);
    //       setIsLoaded(true)
    //     });
    // }, []);

  useEffect(() => {
    let mock = [];
    const user = USER_MAIN_DATA.find((element) => {
      return element.id === 12;
    });
    mock = new userMain(user);
    // console.log("ICI :::::::",mock)
    setDataMock(mock);
    setData(mock)
    
  }, []);

  //GET ACTIVITY DATA
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/18/activity")
      .then((res) => {
        const array = new userActivity(res.data.data);
        // console.log("ACTIVITY API object from Data Provider : ", array);
        setDataActivityApi(array);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
      
  }, []);

  useEffect(() => {
    let mock = [];
    const user = USER_ACTIVITY.find((element) => {
      return element.userId === 12;
    });
    mock = new userActivity(user);
    setDataActivityMock(mock);
  }, []);
  //GET SESSIONS DATA
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/18/average-sessions")
      .then((res) => {
        const array = new userAverageSessions(res.data.data);
        // console.log("Average SESSIONS API object from Data Provider : ", array);
        setDataSessionsApi(array);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, []);

  useEffect(() => {
    let mock = [];
    const user = USER_AVERAGE_SESSIONS.find((element) => {
      return element.userId === 12;
    });
    mock = new userAverageSessions(user);
    setDataSessionsMock(mock);
  }, []);
  //GET PERFORMANCE DATA
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/18/performance")
      .then((res) => {
        const array = new userPerformance(res.data.data);
        // console.log("Average Performance API object from Data Provider : ", array);
        setDataPerformanceApi(array);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, []);

  useEffect(() => {
    let mock = [];
    const user = USER_PERFORMANCE.find((element) => {
      return element.userId === 12;
    });
    mock = new userPerformance(user);
    setDataPerformanceMock(mock);
  }, []);
    
    // setDataActivity(source === "mock" ? {dataActivityMock}.dataActivityMock : { dataActivityApi}.dataActivityApi);
    // setDataSessions(source === "mock" ? {dataSessionsMock}.dataSessionsMock : {dataSessionsApi}.dataSessionsApi);
    // setDataPerformance(source === "mock" ? {dataPerformanceMock}.dataPerformanceMock : {dataPerformanceApi}.dataPerformanceApi);
  ///
  const toggleData = () => {
    setData(source === "mock" ?  { dataApi }.dataApi: { dataMock }.dataMock);
    setDataActivity(source === "mock" ? {dataActivityMock}.dataActivityMock : { dataActivityApi}.dataActivityApi);
    setDataSessions(source === "mock" ? {dataSessionsMock}.dataSessionsMock : {dataSessionsApi}.dataSessionsApi);
    setDataPerformance(source === "mock" ? {dataPerformanceMock}.dataPerformanceMock : {dataPerformanceApi}.dataPerformanceApi);
    console.log("ToggleData MAIN from ", source, data);
    console.log("ToggleData ACTIVITY from ", source, dataActivity);
    console.log("ToggleData SESSIONS from ", source, dataSessions);
    console.log("ToggleData PERFORMANCE from ", source, dataPerformance);
  };

  return (
    <DataContext.Provider
      value={{ data, dataApi, dataMock, dataActivity, dataSessions, dataPerformance,isLoaded, isLoading, error, toggleData }}
    >
      {children}
    </DataContext.Provider>
  );
};
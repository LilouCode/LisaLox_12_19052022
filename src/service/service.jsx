import { useEffect, useState } from "react";
import userMain from "../models/userMain";
import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "../__mocks__/mock";
import { useSource } from "../utils/hooks";
import axios from "axios";
import userActivity from "../models/userActivity";
import userAverageSessions from "../models/userAverageSessions";
import userPerformance from "../models/userPerformance";

export function useFetch() {
  const [data, setData] = useState({});
  const [dataActivity, setDataActivity] = useState({});
  const [dataSessions, setDataSessions] = useState({});
  const [dataPerformance, setDataPerformance] = useState({});

  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { source, toggleSource } = useSource();

  useEffect(() => {
    setLoading(true);
    let mounted = true;
    const CancelToken = axios.CancelToken;
    const sources = CancelToken.source();

    async function fetchApi() {
      
      try {
          const response = await axios.get("http://localhost:3000/user/18", { cancelToken: sources.token });
          const responseActivity = await axios.get(
            "http://localhost:3000/user/18/activity", { cancelToken: sources.token }
          );
          const responseAverageSessions = await axios.get(
            "http://localhost:3000/user/18/average-sessions", { cancelToken: sources.token }
          );
          const responsePerformance = await axios.get(
            "http://localhost:3000/user/18/performance", { cancelToken: sources.token }
          );
          if (mounted) {
          const dataUser = await response;
          const dataActivity = await responseActivity;
          const dataSessions = await responseAverageSessions;
          const dataPerformance = await responsePerformance;
          
          const dataUserMain = new userMain(dataUser.data.data);
          const dataUserActivity = new userActivity(dataActivity.data.data);
          const dataUserSessions = new userAverageSessions(
            dataSessions.data.data
          );
          const dataUserPerformance = new userPerformance(
            dataPerformance.data.data
          );
          setData(dataUserMain);
          setDataActivity(dataUserActivity);
          setDataSessions(dataUserSessions);
          setDataPerformance(dataUserPerformance);
        }
      } catch (err) {
        if (!mounted) return;
        setError(true);
        toggleSource();
        fetchMock(12);
      } finally {
        setLoading(false);
      }
      return () =>{
        mounted = false;
        setError(false)
        sources.cancel();
        setData({})
        setDataActivity({
        })
        setDataSessions({})
        setDataPerformance({})
        
      }
    }

    async function fetchMock(id) {
      try {
        const dataUser = new userMain(
          USER_MAIN_DATA.find((element) => {
            return element.id === id;
          })
        );
        const dataUserActivity = new userActivity(
          USER_ACTIVITY.find((element) => {
            return element.userId === id;
          })
        );
        const dataUserSessions = new userAverageSessions(
          USER_AVERAGE_SESSIONS.find((element) => {
            return element.userId === id;
          })
        );
        const dataUserPerformance = new userPerformance(
          USER_PERFORMANCE.find((element) => {
            return element.userId === id;
          })
        );

        setData(dataUser);
        setDataActivity(dataUserActivity);
        setDataSessions(dataUserSessions);
        setDataPerformance(dataUserPerformance);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    source === "mock" ? fetchMock(12) : fetchApi();
    return () =>{
      setData({})
        setDataActivity({
        })
        setDataSessions({})
        setDataPerformance({})
    }
    
  }, [source, toggleSource, error]);
  return {
    isLoading,
    data,
    dataActivity,
    dataSessions,
    dataPerformance,
    error,
  };
}

import {useEffect, useState} from "react";
import userMain from "../models/userMain";
import { USER_MAIN_DATA } from "../__mocks__/mock";
import { useSource} from "../utils/hooks";

export function useFetch() {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const {source, toggleSource} = useSource()

  useEffect(() => {
    
    setLoading(true)
    async function fetchApi() {
      try {
        const response = await fetch('http://localhost:3000/user/18')
        const data = await response.json()
        setData(data.data)
      } catch (err) {
        console.log(err)
        setError(true)
        fetchMock(12)
        alert("Vous n'êtes pas connecter avec l'API")
      } finally {
        setLoading(false)
        toggleSource()
      }
    }
    async function fetchMock(id){
      try{
  
      const user = new userMain( USER_MAIN_DATA.find((element) => {
        return element.id === id;
      }));
      // mock = new userMain(user);
      console.log("ICI :::::::",user)
      
      setData(user)
      }catch (err){
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    source === 'mock'? (
      fetchMock(12)
    ): (
      fetchApi()
    )
  }, [source])
  return { isLoading, data, error }
}























// import axios from "axios";
// import React, { useState, useCallback, useEffect } from "react";
// import { useSource } from "../utils/hooks";

// export const HelloApiContext = React.createContext({});

// export function useDataApi(url) {
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [serverData, setServerData] = useState({});

//   const loadData = useCallback(() => {
//     setLoading(true);
//     setError(false);

//     fetch(url)
//       .then((result) => result.json())
//       .then((data) => {
//         setServerData(data);
//         setLoading(false);
//       })
//       .catch(() => setError(true));
//   }, [url]);

//   return { error, loading, data: serverData, loadData };
// }

// export function MyHelloApiComponent({ children }) {
//   const { error, loading, data, loadData } = useDataApi(
//     "http://localhost:3000/user/18"
//   );
  
//   useEffect(loadData, []);

//   return (
//     <HelloApiContext.Provider value={{ values: { error, loading, data } }}>
//       {children}
//     </HelloApiContext.Provider>
//   );
// }

// function getData(mode, id) {
//   let dataUser = [];
//   const apiURL = `http://localhost:3000/user/${id}`;
//   if (mode === "api") {
//     axios
//       .get(apiURL)
//       .then((res) => {
//         console.log("Getting from fetchData(): ", res.data.data);
//         dataUser = res.data.data;
//         return dataUser

//       })
//       .catch((err) => console.log(err));
//   }

//   console.log('ligne 1_ from service: '+ dataUser);

//   return(
//     <div></div>
//   );

// } export default getData

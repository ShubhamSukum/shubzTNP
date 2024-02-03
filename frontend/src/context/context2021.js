import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { api2021, api2021ppo } from "../configs/config";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [dataPpo, setDataPpo] = useState([]);
  const [loadingPpo, setLoadingPpo] = useState(true);
  const [errorPpo, setErrorPpo] = useState(null);

  useEffect(() => {
    axios
      .get(api2021)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });

    axios
      .get(api2021ppo)
      .then((response) => {
        setDataPpo(response.data);
        setLoadingPpo(false);
      })
      .catch((error) => {
        setErrorPpo(error.message);
        setLoadingPpo(false);
      });
  }, []);

  return (
    <DataContext.Provider
      value={{ data, loading, error, dataPpo, loadingPpo, errorPpo }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};

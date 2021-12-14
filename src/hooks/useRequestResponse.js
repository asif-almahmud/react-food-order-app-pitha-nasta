import React, { useState, useEffect } from "react";
import axios from "axios";

export const useRequestResponse = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        const responseData = await response.data;
        setData(responseData);
      } catch (e) {
        setErrorMessage(e);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [url]);
  return { data, isLoading, errorMessage };
};

import { useState, useEffect } from "react";

export default function useCallAPI() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  async function fetchApi(url) {
    try {
      setIsError(false);
      const response = await fetch(url);
      if (!response.ok) {
        setIsLoading(false);
        setIsError(true);
      }
      const responseData = await response.json();
      setData(responseData);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  }

  return [isLoading, isError, data, fetchApi];
}

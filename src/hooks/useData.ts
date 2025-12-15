// Removed: import type { AxiosRequestConfig } from "axios";

import { useEffect, useState } from "react";

// Use the standard RequestInit type for native fetch
// It controls headers, method, body, etc. (but not query params directly)
const useData = <T>(
  endpoint: string,
  queryConfig?: Record<string, string>, // New: Use a simple object for query params
  requestInit?: RequestInit, // New: Use RequestInit for headers, method, etc.
  deps: any[] = [] // Default the dependency array
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController(); // Good practice for cleaning up fetch
    setLoading(true); // Reset loading state when dependencies change
    console.log(queryConfig);
    const fetchData = async () => {
      try {
        // 1. Build the Query String
        const defaultParams = {
          key: "12811374eced43dbb6731e6d86bfb390",
          ...(queryConfig || {}), // Spread any additional parameters from the hook consumer
        };
        const searchParams = new URLSearchParams(defaultParams);
        const url =
          "https://api.rawg.io/api" + endpoint + "?" + searchParams.toString();

        console.log("Fetching URL:", url); // <--- ADD THIS LINE

        // 2. Perform the Fetch Request
        const response = await fetch(url, {
          signal: controller.signal, // Pass the signal for cancellation
          ...requestInit, // Spread any additional fetch configuration (headers, method, etc.)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setData((data.results as T[]) || []);
        setError(null);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          // Ignore error if it's a cancellation
          setError("Failed to fetch data: " + err.message);
        }
        setData([]); // Clear data on error
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function to cancel the request if the component unmounts
    return () => controller.abort();
  }, [
    endpoint,
    JSON.stringify(queryConfig),
    JSON.stringify(requestInit),
    ...deps,
  ]); // Note: Include config objects in deps

  return { data, error, loading };
};

export default useData;

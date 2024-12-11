import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { axiosClient } from "../services/axios-client";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { FormatError } from "../utils/UtilMethods";
import { onFailure } from "../utils/notifications/OnFailure";

function useCourses() {
  const [courses, setCourses] = useState([]);
  const { authDetails } = useContext(AuthenticationContext);
 // console.log(authDetails)
  const client = axiosClient(authDetails?.token);
  
  const [error, setError] = useState({
    message: "",
    error: "",
  });
  const [loading, setIsLoading] = useState(false);
  const getCourses = useCallback(async () => {
    setIsLoading(true);
    try {
      console.log("Token being sent to API:", authDetails?.token);
      const response = await client.get("/course/getAllCourses");
      console.log("API Response Data:", response.data);
      setCourses(response?.data?.allCourses);
    } catch (error) {
      if (error.response) {
        console.error("Response Error:", error.response);
        console.error("Status Code:", error.response.status); // Check if it's 401
        console.error("Response Data:", error.response.data);
      } else {
        console.error("Network Error:", error.message);
      }
      FormatError(error, setError, "Course Error");
    } finally {
      setIsLoading(false);
    }
  }, []);
  

  useEffect(() => {
    if (error.message && error.error) {
      onFailure(error);
      setError({
        message: "",
        error: "",
      });
      setIsLoading(false);
    }
  }, [error.message, error.error]);

  useEffect(() => {
   getCourses()
  }, [])

  return { courses, loading, getCourses };
}

export default useCourses;

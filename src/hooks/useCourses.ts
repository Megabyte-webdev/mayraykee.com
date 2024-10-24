import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { axiosClient } from "../services/axios-client";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { FormatError } from "../utils/UtilMethods";
import { onFailure } from "../utils/notifications/OnFailure";

function useCourses() {
  const [courses, setCourses] = useState([]);
  const { authDetails } = useContext(AuthenticationContext);
  const client = axiosClient(authDetails.token);
  const [error, setError] = useState({
    message: "",
    error: "",
  });
  const [loading, setIsLoading] = useState(false);

  const getCourses = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await client.get("/course/getAllCourses");
      setCourses(response?.data?.allCourses);
      setIsLoading(false);
    } catch (error) {
      FormatError(error, setError, "Course Error");
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

import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { axiosClient } from "../services/axios-client";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { FormatError } from "../utils/UtilMethods";
import { onFailure } from "../utils/notifications/OnFailure";

function useEnrolledCourses() {
  const [courses, setCourses] = useState([]);
  const [courseSchedule, setCourseSchedule] = useState([])
  const { authDetails } = useContext(AuthenticationContext);
  const client = axiosClient(authDetails.token);
  const [error, setError] = useState({
    message: "",
    error: "",
  });
  const [loading, setIsLoading] = useState(false)

  const getCourses = useCallback(async () => {
    
    setIsLoading(true);
    try {
      const response = await client.get(`/enroll/getEnrollByUserId/${authDetails?.user?.id}`);
      setCourses(response?.data?.enrolled_users);
      setIsLoading(false);
    } catch (error) {
      FormatError(error, setError, "Course Error");
    }
  }, []);

  const getCourseSchedule = useCallback(async (courseId: number) => {
    setIsLoading(true);
    try {
      const response = await client.get(`/schedule/scheduleByCourseId/${courseId}`);
      setIsLoading(false);
      return response?.data?.schedule
    } catch (error) {
      FormatError(error, setError, "Course Error");
      return []
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

  return { courses, loading, courseSchedule, getCourses, getCourseSchedule };
}

export default useEnrolledCourses;

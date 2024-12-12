import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import {BASE_URL} from '../utils/base'
const InstructorDetailsPage = () => {
  const { id } = useParams();
  const [instructor, setInstructor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch the instructor data
    const fetchInstructor = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/instructors/${id}`); // Replace with your API endpoint
        const data = await response.json();
        setInstructor(data);
      } catch (err) {
        setError("Failed to fetch instructor details.");
      } finally {
        setLoading(false);
      }
    };

    fetchInstructor();
  }, [id]);

  const getSocialIcon = (platform) => {
    switch (platform) {
      case "facebook":
        return <FaFacebook className="text-blue-600" />;
      case "twitter":
        return <FaTwitter className="text-blue-400" />;
      case "linkedin":
        return <FaLinkedin className="text-blue-700" />;
      case "instagram":
        return <FaInstagram className="text-pink-500" />;
      default:
        return null;
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 md:px-10">
      <h1 className="text-3xl font-bold text-gray-800">{instructor.name}</h1>
      <p>{instructor.specialization}</p>
      {/* Add more detailed fields */}
    </div>
  );
};

export default InstructorDetailsPage;

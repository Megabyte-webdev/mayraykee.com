import React, { useState, useEffect, useContext } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { ResourceContext } from "../context/ResourceContext";

const InstructorsPage = () => {
  const { setGetInstructors, getInstructors } = useContext(ResourceContext);
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError("");
    try {
      setGetInstructors((prev) => ({
        ...prev,
        isDataNeeded: true,
      }));
    } catch (err) {
      setError("Error loading instructors.");
      setLoading(false);
    }
  }, [setGetInstructors]);

  useEffect(() => {
    if (getInstructors?.data) {
      setInstructors(getInstructors.data);
      setLoading(false);
    } else if (getInstructors?.error) {
      setError("Error fetching instructors.");
      setLoading(false);
    }
  }, [getInstructors]);

  const handleModalClose = () => setSelectedInstructor(null);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 md:px-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Meet Our Instructors
      </h1>

      {loading && (
        <div className="flex justify-center items-center mt-10 min-h-40 bg-gray-100">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-600"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-100 text-xl text-red-600 p-4 rounded-lg text-center min-h-40 mb-4">
          {error}
        </div>
      )}

      {!loading && !error && instructors.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              onClick={() => setSelectedInstructor(instructor)}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <h2 className="text-xl font-bold text-gray-800">
                {instructor.title ? `${instructor.title} ` : ""}
                {instructor.first_name} {instructor.last_name}
              </h2>
              <p className="text-gray-500">{instructor.specialization}</p>
              <small className="text-gray-600">{instructor?.degree}</small>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && instructors.length === 0 && (
        <p className="text-center text-gray-600 text-lg">No instructors found.</p>
      )}

      {/* Modal for Instructor Details */}
      {selectedInstructor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
            <button
              onClick={handleModalClose}
              className="absolute top-3 right-3 text-2xl text-red-500 hover:text-red-800"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">
              {selectedInstructor.title ? `${selectedInstructor.title} ` : ""}
              {selectedInstructor.first_name} {selectedInstructor.last_name}
            </h2>
            <p className="text-gray-600 mb-2">
              <strong>Specialization:</strong> {selectedInstructor.specialization || "N/A"}
            </p>
            
            <p className="text-gray-600 mb-2">
              <strong>Qualifications:</strong> {selectedInstructor.degree || "N/A"}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Experience:</strong> {selectedInstructor.year_experience || "N/A"} years
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Institution:</strong> {selectedInstructor.institution || "N/A"}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Research:</strong> {selectedInstructor.research || "N/A"}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Publications:</strong> {selectedInstructor.publication || "N/A"}
            </p>
            {selectedInstructor.cv && (
              <p className="text-gray-600 mb-2">
                <strong>CV:</strong>{" "}
                <a
                  href={selectedInstructor.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View CV
                </a>
              </p>
            )}
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> {selectedInstructor.email || "N/A"}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Phone:</strong> {selectedInstructor.phone_number || "N/A"}
            </p>
            {/* Social Media Links */}
            {selectedInstructor.socials && (
              <div className="flex space-x-4">
                {selectedInstructor.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl"
                  >
                    {getSocialIcon(social.platform)}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

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

export default InstructorsPage;

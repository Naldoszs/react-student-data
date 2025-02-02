import { useEffect, useState } from "react";
import LinkButton from "../components/LinkButton";
import { FaCaretRight } from "react-icons/fa";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import apiRequest from "../components/apiRequest";

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  //import the backend data
  useEffect(() => {
    //get the data
    const fetchStudentData = async () => {
      const res = await fetch("http://localhost:4000/students");
      const data = await res.json();

      setStudents(data);
    };
    //call the function

    (async () => {
      await fetchStudentData();
    })();
  }, []);

  //display details ftn
  const displayDetails = (id) => {
    navigate(`/student/view/${id}`);
  };
  //edit details funtn
  const editDetails = (id) => {
    //navigate to pg to make edit
    navigate(`/student/edit/${id}`);
  };

  const deleteData = async (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      const API_URL = `http://localhost:4000/students/${id}`;
      //change the optionsobj
      const deleteOptions = {
        method: "DELETE",
      };
      const msg = "Data deleted successfully";
      //call the api ftn
      const result = await apiRequest(API_URL, deleteOptions, msg);
      //reload the page manually after
      window.location.reload();
    }
  };
  return (
    <main className="w-full flex flex-col justify-start items-center min-h-screen padding-desktop max-lg:padding-tablet max-sm:padding-mobile">
      {/* the generic wrapper */}
      <div
        aria-label="generic wrapper container for all contents"
        className="w-full flex flex-col justify-start items-center border-2 border-foreground bg-white rounded-md backdrop-blur-lg space-y-5 p-3 max-lg:p-2 max-sm:p-1 h-auto"
      >
        {/* the header */}
        <header className="flex flex-col w-full space-y-2 items-center relative">
          <h2 className="text-black-text-100 text-3xl font-extrabold  text-center w-full">
            Students Table
          </h2>
          {/* the underline */}
          <div aria-label="the header underline" className="underline"></div>
        </header>

        {/* the table container*/}
        <div
          aria-label="table container"
          className="flex flex-col w-full h-auto space-y-4"
        >
          {/* the btn */}
          <LinkButton
            path="/student/create"
            textSize="text-lg"
            text="Add new student"
            color="text-white"
            bgColor="bg-black"
            iconColor="text-blue-500"
            icon={FaCaretRight}
            hoverColor="hover:bg-blue-900"
            hoverIconColor="group-hover:text-purple-200"
          />
          {/* the table */}
          <table className="w-full h-auto flex flex-col">
            <thead className="flex w-full h-auto mb-4 bg-blue-500 p-2 rounded-sm text-white">
              <tr className="flex justify-between w-full h-auto text-xl">
                <th className="center-item">ID</th>
                <th className="center-item">Name</th>
                <th className="center-item">Place</th>
                <th className="center-item">Phone</th>
                <th className="center-item">Actions</th>
              </tr>
            </thead>
            <tbody className="flex flex-col w-full h-auto space-y-8">
              {/* the rendering expression */}
              {students.map((student) => (
                <tr
                  className="flex justify-between w-full h-auto"
                  key={student.id}
                >
                  <td className="center-item info-text2">{student.id}</td>
                  <td className="center-item  info-text2">{student.name}</td>
                  <td className="center-item info-text2">{student.place}</td>
                  <td className="center-item info-text2">{student.phone}</td>
                  <td className="center-item info-text2">
                    {/* the actn buttons */}
                    <div
                      className="flex justify-center flex-wrap items-end space-x-2 space-y-2 w-full h-auto"
                      aria-label="buttons wrapper"
                    >
                      <Button
                        text="View"
                        bgColor="bg-green-500"
                        color="text-white"
                        hoverColor="hover:bg-green-900"
                        paddingX="px-[8px]"
                        paddingY="py-[4px]"
                        onClick={() => displayDetails(student.id)}
                      />

                      <Button
                        text="Edit"
                        bgColor="bg-purple-500"
                        color="text-white"
                        hoverColor="hover:bg-purple-900"
                        paddingX="px-[8px]"
                        paddingY="py-[4px]"
                        onClick={() => editDetails(student.id)}
                      />

                      <Button
                        text="Delete"
                        bgColor="bg-red-500"
                        color="text-white"
                        hoverColor="hover:bg-red-900"
                        paddingX="px-[8px]"
                        paddingY="py-[4px]"
                        onClick={() => deleteData(student.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default StudentTable;

import { useParams } from "react-router-dom";

import LinkButton from "./LinkButton";
import { useEffect, useState } from "react";

const ViewDetails = () => {
  //acess the specific id of the student on displayed on the url
  const { studentid } = useParams();
  const [studentData, setStudentData] = useState({});
  const API_URL = `http://localhost:4000/students/${studentid}`;
  //import d data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) {
          throw new Error("Error fetching data..");
        } else {
          const data = await res.json();
          setStudentData(data);
        }
      } catch (err) {
        console.log(err.message);
      } finally {
        console.log("Data fetching completed!");
      }
    };

    //run the fetchdata ftn
    fetchData();
  }, []);

  return (
    <main className="w-full flex flex-col justify-start items-center min-h-screen padding-desktop max-lg:padding-tablet max-sm:padding-mobile lg:max-w-[900px]">
      <div
        aria-label="content wrapper"
        className="flex flex-col h-auto w-full items-start border-2 border-purple-200 p-8 rounded-md backdrop-blur-lg bg-white space-y-2"
      >
        <h1 className="w-full text-3xl font-bold ">STUDENT DETAILS 🧑‍🎓</h1>
        {studentData && (
          <div className="flex flex-col w-full space-y-1.5  pb-2">
            <p className="flex space-x-3">
              <strong className="w-[70px] text-xl text-slate-500">ID:</strong>
              <span className="info-text">{studentData.id}</span>
            </p>
            <p className="flex space-x-3">
              <strong className="w-[70px] text-xl text-slate-500">Name:</strong>
              <span className="info-text">{studentData.name}</span>
            </p>
            <p className="flex space-x-3">
              <strong className="w-[70px] text-xl text-slate-500">
                Place:
              </strong>
              <span className="info-text">{studentData.place}</span>
            </p>
            <p className="flex space-x-3">
              <strong className="w-[70px] text-xl text-slate-500">
                Phone:
              </strong>
              <span className="info-text">{studentData.phone}</span>
            </p>
          </div>
        )}
        {/* the button */}
        <LinkButton
          path="/"
          text="Back to Home"
          textSize="text-lg"
          bgColor="bg-red-500"
          color="text-white"
          hoverColor="bg-purple-700"
        />
      </div>
    </main>
  );
};

export default ViewDetails;
//JUST A QUICK ONE: border-2 border-red-500
// border-2 border-purple-500

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "./Button";
import LinkButton from "./LinkButton";
import apiRequest from "./apiRequest";

const EditStudent = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();
  //acess the specific id of the student on displayed on the url
  const { studentid } = useParams();
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
          //data is an object
          //update the input field

          setId(data.id);
          setName(data.name);
          setPlace(data.place);
          setPhone(data.phone);
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

  //handleSubmit ftn
  const handleSubmit = async (e) => {
    e.preventDefault();
    //change the optionsObj of the api
    const putOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, place, phone }),
    };

    const msg = "Data updated successfully";
    //call the api ftn
    const result = await apiRequest(API_URL, putOptions, msg);

    //make the inputs placeholder empty
    setId("");
    setName("");
    setPlace("");
    setPhone("");

    //redirect to home page
    navigate("/");
  };

  return (
    <main className="w-full flex flex-col justify-start items-center min-h-screen padding-desktop max-lg:padding-tablet max-sm:padding-mobile lg:max-w-[900px]">
      <div className="flex flex-col h-auto w-full items-center border-2 border-slate-300 p-4 rounded-md backdrop-blur-lg">
        <h2 className="text-3xl font-bold">Edit Student Data</h2>
        <form
          className="flex flex-col w-full h-auto space-y-5"
          onSubmit={handleSubmit}
        >
          <div
            aria-label="input-label wrapper"
            className="flex flex-col w-full h-auto space-y-1"
          >
            <label htmlFor="id" className="w-full font-semibold text-xl">
              ID
            </label>
            <input
              type="text"
              id="id"
              className="border-2 border-foreground w-full rounded-sm p-2 focus:outline-slate-400 info-text"
              placeholder="234-567-780..."
              name="id"
              required
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
              onMouseDown={() => {
                setValidation(true);
              }}
            />
            {/* display error msg if no input */}
            {id.length === 0 && validation && (
              <span className="text-red-500">This field can't be empty</span>
            )}
            {/* stopped at 1:15:37 */}
          </div>

          <div
            aria-label="input-label wrapper"
            className="flex flex-col w-full h-auto space-y-1"
          >
            <label htmlFor="name" className="w-full font-semibold text-xl">
              NAME
            </label>
            <input
              type="text"
              id="name"
              className="border-2 border-foreground w-full rounded-sm p-2 focus:outline-slate-400 info-text"
              placeholder="Adeyeye Niyi Festus..."
              name="name"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            {/* display error msg if no input */}
            {name.length === 0 && validation && (
              <span className="text-red-500">This field can't be empty</span>
            )}
          </div>

          <div
            aria-label="input-label wrapper"
            className="flex flex-col w-full h-auto space-y-1"
          >
            <label htmlFor="place" className="w-full font-semibold text-xl">
              PLACE
            </label>
            <input
              type="text"
              id="place"
              className="border-2 border-foreground w-full rounded-sm p-2 focus:outline-slate-400 info-text"
              placeholder="Pakistan..."
              name="place"
              required
              value={place}
              onChange={(e) => {
                setPlace(e.target.value);
              }}
            />
            {/* display error msg if no input */}
            {place.length === 0 && validation && (
              <span className="text-red-500">This field can't be empty</span>
            )}
          </div>

          <div
            aria-label="input-label wrapper"
            className="flex flex-col w-full h-auto space-y-1"
          >
            <label
              htmlFor="phone-number"
              className="w-full font-semibold text-xl"
            >
              PHONE NUMBER
            </label>
            <input
              type="text"
              id="phone-number"
              className="border-2 border-foreground w-full rounded-sm p-2 focus:outline-slate-400 info-text"
              placeholder="08134365139..."
              name="phone-number"
              required
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            {/* display error msg if no input */}
            {phone.length === 0 && validation && (
              <span className="text-red-500">This field can't be empty</span>
            )}
          </div>

          <div
            aria-label="buttons-wrapper"
            className="flex justify-start flex-wrap h-auto w-full space-x-2  items-start"
          >
            <Button
              text="Update"
              textSize="text-lg"
              bgColor="bg-purple-500"
              color="text-white"
              hoverColor="hover:bg-green-900"
            />

            <LinkButton
              text="Back to Home"
              textSize="text-lg"
              bgColor="bg-black"
              color="text-white"
              hoverColor="hover:bg-red-900"
              path="/"
            />
          </div>
        </form>
      </div>
    </main>
  );
};

export default EditStudent;

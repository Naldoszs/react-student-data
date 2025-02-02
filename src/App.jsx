import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentTable from "./sections/StudentTable";
import CreateStudent from "./components/CreateStudent";
import EditStudent from "./components/EditStudent";
import ViewDetails from "./components/ViewDetails";

const App = () => {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentTable />}></Route>

          <Route path="/student/create" element={<CreateStudent />}></Route>

          <Route path="/student/create" element={<CreateStudent />}></Route>

          {/* stopped at 17:24 */}
          <Route
            path="/student/edit/:studentid"
            element={<EditStudent />}
          ></Route>

          <Route
            path="/student/view/:studentid"
            element={<ViewDetails />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};
export default App;

import { RouterProvider } from "react-router-dom";
import { Router } from "./Routes/Routes";

function App() {
  return (
    <div className="bg-[#141517]">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;

import Home from "./pages/Home";
import CreateContact from "./pages/CreateContact";
import NoPage from "./pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditContact from "./pages/EditContact";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
            <Route path="/create" element={<CreateContact />} />
            <Route path="/edit/:id" element={<EditContact />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

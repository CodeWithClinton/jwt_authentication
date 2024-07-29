import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AddNotePage from "./pages/AddNotePage";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import api from "./api";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [username, setUsername] = useState("");

  const [notes, setNotes] = useState([]);
  const [noteError, setNoteError] = useState("");

  function newNote(data) {
      api.post("/notes/", data)
      .then(res => {
        setNotes([...notes, res.data])
      })
      .catch(err => {
        setNoteError(err.message)
      })
  } 



  useEffect(() => {
    api
      .get("/notes")
      .then((res) => {
        setNotes(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setNoteError(err.message);
      });
  }, []);




  function fetchUsername() {
    api
      .get("/get-username")
      .then((res) => {
        console.log(res.data);
        setUsername(res.data.username);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    const token = localStorage.getItem("access");
    if (token) {
      const decoded = jwtDecode(token);
      const expiry_date = decoded.exp;
      const current_time = Date.now() / 1000;

      if (current_time > expiry_date) {
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
        fetchUsername();
      }
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout
              setUsername={setUsername}
              setIsAuthenticated={setIsAuthenticated}
              isAuthenticated={isAuthenticated}
              username={username}
            />
          }
        >
          <Route index element={<HomePage notes={notes} error={noteError} />} />
          <Route
            path="add-notes"
            element={
              <ProtectedRoute>
                <AddNotePage newNote={newNote} error={noteError} />
              </ProtectedRoute>
            }
          />
          <Route
            path="login"
            element={
              <LoginPage
                setIsAuthenticated={setIsAuthenticated}
                fetchUsername={fetchUsername}
              />
            }
          />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

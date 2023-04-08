import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./features/about/About";
import Home from "./features/home/Home";
import Navbar from "./features/Navbar";
import Tasks from "./features/tasks/Tasks";
import LogIn from "./features/auth/LogIn";
import Error from "./features/Error";

function App() {
  return (
    <div className="App">
      <header></header>
      <h1>BruinPal</h1>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="auth" element={<LogIn />} />
          {/*<Route path="dashboard" element={<Navbar />} />*/}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

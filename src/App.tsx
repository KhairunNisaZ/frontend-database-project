import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home2 from "./routes/Home2";
import BookList from "./routes/BookList";
import AddBook from "./routes/AddBook";
import UpdateBook from "./routes/UpdateBook";
import EditBook from "./routes/EditBook";
import Staff from "./routes/Staff";
import Store from "./routes/Store";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" Component={Home2} />
          <Route path="/booklist" Component={BookList} />
          <Route path="/addbook" Component={AddBook} />
          <Route path="/updatebook" Component={UpdateBook} />
          <Route path="/:booknumber/editbook" Component={EditBook} />
          <Route path="/staff" Component={Staff} />
          <Route path="/store" Component={Store} />
        </Routes>
      </Router>
    </div>
  );
}

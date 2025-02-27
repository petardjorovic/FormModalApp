import "bootstrap/dist/css/bootstrap.min.css";
import MainTable from "./components/MainTable";
import FormComponent from "./components/FormComponent";
import fakeUsers from "./fake-users.json";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState(fakeUsers);

  const saveNewUser = (newUser) => {
    setUsers([...users, newUser]);
  };
  return (
    <div className="container">
      <h1 className="alert alert-dark text-center">Custom Modal</h1>
      <MainTable users={users} />
      <FormComponent saveNewUser={saveNewUser} />
    </div>
  );
}

export default App;

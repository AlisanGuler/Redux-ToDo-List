import React from "react";
import AddForm from "./components/AddForm";
import ListTodos from "./components/ListTodos";

const App = () => {
  return (
    <div className="vh-100 vw-100">
      <div className="container p-5">
        <h2 className="text-center">
          Redux
          <span className="text-danger"> CRUD</span>
        </h2>

        <AddForm />
        <ListTodos />
      </div>
    </div>
  );
};

export default App;

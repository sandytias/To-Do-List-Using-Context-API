import React from "react";
import { DataProvider } from "./component/DataProvider";
import Footer from "./component/Footer";
import FormInput from "./component/FormInput";
import List from "./component/List";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>To Do List</h1>
        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;

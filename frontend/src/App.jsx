import { useState, useCallback } from "react";
import Form from "./components/Form/Form";
import UsersList from "./components/UsersList/UsersList";
import toast from "react-hot-toast";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  const loadData = useCallback(async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/members/");
      if (Array.isArray(response.data)) {
        setUsers(response.data);
        console.log(response.data);
        
        toast.success("Data successfully loaded!!!");
      } else {
        toast.error("Unexpected data format received.");
      }
    } catch (error) {
      toast.error("Error loading data: " + error.message);
    }
  }, []);

  const addData = async (formData) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/members/",
        formData
      );
      setUsers((prevUsers) => [...prevUsers, response.data]);
      loadData()
      toast.success("You are successfully registered!!!");
    } catch (error) {
      toast.error("Error adding user: " + error.message);
    }
  };

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/member/${id}/`);
      setUsers((prevUsers) => prevUsers.filter(user => user.id !== id));
      console.log(response.data);
      loadData()
      toast.success("You are successfully registered!!!");
    } catch (error) {
      toast.error("Error adding user: " + error.message);
    }
  };

  return (
    <div>
      <Form addData={addData} />
      <UsersList users={users} loadData={loadData} deleteData={deleteData} />
    </div>
  );
}

export default App;

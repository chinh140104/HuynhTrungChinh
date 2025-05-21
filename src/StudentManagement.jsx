import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

function StudentManagement() {
  const api = "https://6829c6616075e87073a77375.mockapi.io/Student";

  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const response = await axios.get(api);
    console.log(response.data);
    setStudents(response.data);
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  const Columns = [
    {
      title: "ID",
      dataIndex: "ID",
      key: "ID",
    },
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
    },
    {
      title: "Code",
      dataIndex: "Code",
      key: "Code",
    },
    {
      title: "Score",
      dataIndex: "Score",
      key: "Score",
    },
  ];

  return (
    <div>
      <h1>Student StudentManagement</h1>
      <Table columns={Columns} dataSource={students} />
    </div>
  );
}

export default StudentManagement;

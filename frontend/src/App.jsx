import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Todoform from './components/Todoform';
import Table from './components/Table';

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []); // Only run once, when the component mounts

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/todo/');
      setTodos(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false); // Make sure to update loading state even if there's an error
    }
  };

  return (
    <div className='bg-indigo-100 px-8 min-h-screen'>
      <nav className='pt-8'>
        <h1 className='text-5xl text-center pb-12'>ToDo List</h1>
      </nav>
      <Todoform />
      <Table todos={todos} setTodos={setTodos} isLoading={isLoading} />
    </div>
  );
}

export default App;

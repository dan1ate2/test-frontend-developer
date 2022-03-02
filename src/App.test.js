import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import ToDoList from "./components/ToDoList";


test('renders todo app', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToDoList />, div);
});
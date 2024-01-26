// src/components/TodoModal.js

import { useState } from 'react';
import Modal, { setAppElement } from 'react-modal';
import { toast } from 'react-toastify';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
setAppElement('#root');

const TodoModal = ({ isOpen, onClose, onSave, initialValue, status }) => {

  const [text, setText] = useState(initialValue);
  const [initialStatus, setStatus] = useState(status)

  const handleSave = () => {
    onSave(text, initialStatus);
    onClose();
    setText('')
    toast.success('Task edited successfully');
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Edit Todo</h2>
      <input className='border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md py-2 px-4 w-full' type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <select value={initialStatus} onChange={(e) => setStatus(e.target.value)} >
        <option value="todo">To Do</option>
        <option value="progress">In  Progrss</option>
        <option value="done">Done</option>
      </select>
      <button className='bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600' onClick={handleSave}>Save</button>
      <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none" onClick={onClose}>Cancel</button>
    </Modal>
  );
};

export default TodoModal;

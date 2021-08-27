import React from 'react';
import { ReactComponent as TrashcanIcon } from 'assets/icons/trashcan.svg';

const TaskList = () => {
  return (
    <ul>
      <li>
        <input type="checkbox" id="1" />
        <label htmlFor="1">Finish app </label>
        <button>
          <TrashcanIcon />
        </button>
      </li>
      <li>
        <input type="checkbox" id="2" />
        <label htmlFor="2">Drink water (2l) </label>
        <button>
          <TrashcanIcon />
        </button>
      </li>
      <li>
        <input type="checkbox" id="3" />
        <label htmlFor="3">Take creatine (5g) </label>
        <button>
          <TrashcanIcon />
        </button>
      </li>
    </ul>
  );
};

export default TaskList;

import React from 'react';

import './CourseGoalItem.css';

export function CourseGoalItem(props) {
  // const [deleteText, setDeleteText] = useState('');

  function deleteHandler() {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};



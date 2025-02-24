// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.css';
import Task from 'src/components/Task';

// == Composant
const List = ({ tasks, checkTask, removeTask }) => (
  <ul id="tasks-list">
    {tasks.map((task) => (
      <Task
        key={task.id}
        {...task}
        checkTask={checkTask}
        removeTask={removeTask}
      />
    ))}
  </ul>
);

List.propTypes = {
  checkTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  ).isRequired,
};

// == Export
export default List;

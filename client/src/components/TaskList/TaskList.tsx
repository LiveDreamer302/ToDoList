import React, { useState } from "react";
import {Task} from "../../UNIT/models/IRooms";

interface TaskListProps {
    tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDeadline, setTaskDeadline] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);

    const handleTaskClick = (task: Task) => {
        setSelectedTask(task);
    };

    const handleAddTaskClick = () => {
        setModalOpen(true);
    };

    const handleSaveTaskClick = () => {
        // Добавьте обработку сохранения задачи в вашем приложении
        // В этом примере мы просто закрываем модальное окно
        setModalOpen(false);
    };

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <div className="list-group">
                        {tasks.map((task) => (
                            <button
                                key={task.id}
                                type="button"
                                className={`list-group-item list-group-item-action ${
                                    selectedTask === task ? "active" : ""
                                }`}
                                onClick={() => handleTaskClick(task)}
                            >
                                {task.title}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="col-8">
                    {selectedTask && (
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{selectedTask.title}</h5>
                                <p className="card-text">{selectedTask.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TaskList;

import React, { useState } from "react";

interface TaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (taskName: string, taskDescription: string, taskDeadline: string) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, onSave }) => {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDeadline, setTaskDeadline] = useState("");

    const handleSave = () => {
        onSave(taskName, taskDescription, taskDeadline);
        onClose();
    };

    return (
        <div
            className={`modal ${isOpen ? "show" : ""}`}
            tabIndex={-1}
            style={{ display: isOpen ? "block" : "none" }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Task</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="taskName" className="form-label">
                                    Task Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="taskName"
                                    value={taskName}
                                    onChange={(e) => setTaskName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="taskDescription" className="form-label">
                                    Task Description
                                </label>
                                <textarea
                                    className="form-control"
                                    id="taskDescription"
                                    rows={3}
                                    value={taskDescription}
                                    onChange={(e) => setTaskDescription(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="taskDeadline" className="form-label">
                                    Deadline
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="taskDeadline"
                                    value={taskDeadline}
                                    onChange={(e) => setTaskDeadline(e.target.value)}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Close
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleSave}>
                            Save Task
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;

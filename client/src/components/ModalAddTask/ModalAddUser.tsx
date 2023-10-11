import React, { useState } from "react";

interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (email: string) => void;
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSave }) => {
    const [email, setEmail] = useState("");

    const handleSave = () => {
        onSave(email);
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
                        <h5 className="modal-title">Add User</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Close
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleSave}>
                            Save User
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserModal;

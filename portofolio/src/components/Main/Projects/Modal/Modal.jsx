import "./Modal.css";
import React, { useEffect, useRef } from "react";

const Modal = ({ isModalOpen, project, onClose }) => {
    console.log("opining modal?")
    console.log("YESS")
    console.log(isModalOpen)

    const modalRef = useRef(null);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        }

        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        });

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", (e) => {
                if (e.key === "Escape") {
                    onClose();
                }
            });
        };
    }, [isModalOpen, onClose]);

    return isModalOpen &&
            
            <dialog className = "modal-project" open ref={modalRef}>
                <div className="modal-content">
                    <button className="modal-close" onClick={onClose}>
                        <span className="close-icon">&times;</span>
                    </button>
                    <h2 className="modal-title">{project.title}</h2>
                    <p className="modal-description">{project.description}</p>
    
                    <iframe
                        src={project.link}
                        width="100%"
                        height="600px"
                        title="Resume"
                        className="modal-iframe"
                    ></iframe>
    
                </div>
            </dialog>
}

export default Modal;
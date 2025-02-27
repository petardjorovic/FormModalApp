import "./Modal.css";

function CustomModal({ isOpen, closeModal, currentUser }) {
  if (!isOpen) return;
  return (
    <div className="outer-modal z-3">
      <div className="inner-modal">
        <h1>{currentUser.firstName} Info</h1>
        <p>{currentUser.bio}</p>
        <button onClick={closeModal} className="close-btn">
          x
        </button>
        <h4>Skills</h4>
        <p>
          {currentUser.skills.map((skill, index) => {
            return (
              <span className="badge bg-danger m-1" key={index}>
                {skill}
              </span>
            );
          })}
        </p>

        <button onClick={closeModal} className="big-btn mt-3">
          Close modal
        </button>
      </div>
    </div>
  );
}

export default CustomModal;

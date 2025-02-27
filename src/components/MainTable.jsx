import { useState } from "react";
import CustomModal from "./CustomModal";

function MainTable({ users }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const openModal = (user) => {
    setIsModalOpen(true);
    setCurrentUser(user);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="row">
      <div className="col-10 offset-1">
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              let gender = user.gender === "Male" ? "primary" : "danger";
              return (
                <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button className={`btn btn-sm btn-outline-${gender}`}>
                      {user.gender}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => openModal(user)}
                      className="btn btn-sm btn-outline-dark"
                    >
                      More Info
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <CustomModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        currentUser={currentUser}
      />
    </div>
  );
}

export default MainTable;

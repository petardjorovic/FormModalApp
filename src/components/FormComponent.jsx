import { useState } from "react";

function FormComponent({ saveNewUser }) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState({
    Javascript: { title: "Javascript", isChecked: false },
    PHP: { title: "PHP", isChecked: false },
    Java: { title: "Java", isChecked: false },
    Python: { title: "Python", isChecked: false },
  });
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [isGenderSelected, setIsGenderSelected] = useState({
    Male: { isChecked: false },
    Female: { isChecked: false },
  });

  const SaveNewForm = (e) => {
    e.preventDefault();

    let emptySkills = [];
    for (const skillName in skills) {
      if (skills[skillName].isChecked) {
        emptySkills.push(skills[skillName].title);
      }
    }

    let newUser = {
      id: crypto.randomUUID(),
      firstName: firstName,
      email: email,
      phone: phone,
      gender: gender,
      bio: bio,
      skills: emptySkills,
    };

    saveNewUser(newUser);

    setFirstName("");
    setEmail("");
    setPhone("");
    setGender("");
    setBio("");
    setSkills({
      Javascript: { title: "Javascript", isChecked: false },
      PHP: { title: "PHP", isChecked: false },
      Java: { title: "Java", isChecked: false },
      Python: { title: "Python", isChecked: false },
    });
    setIsAllSelected(false);
    setIsGenderSelected({
      Male: { isChecked: false },
      Female: { isChecked: false },
    });
  };

  const handleSkill = (e) => {
    const { name, checked } = e.target;
    setSkills({ ...skills, [name]: { title: name, isChecked: checked } });
  };

  const selectAllSkills = (e) => {
    setIsAllSelected(e.target.checked);
    setSkills({
      Javascript: { title: "Javascript", isChecked: true },
      PHP: { title: "PHP", isChecked: true },
      Java: { title: "Java", isChecked: true },
      Python: { title: "Python", isChecked: true },
    });
  };

  const handleGender = (e) => {
    const { value, checked } = e.target;
    setGender(value);
    setIsGenderSelected({
      ...isGenderSelected,
      [value]: { isChecked: checked },
    });
  };
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <form className="alert alert-primary" onSubmit={SaveNewForm}>
          <input
            type="text"
            placeholder="First Name"
            className="form-control mb-1"
            name="FirstName"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <input
            type="email"
            placeholder="Email"
            className="form-control mb-1"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="text"
            placeholder="Phone"
            className="form-control mb-1"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <h4>Gender</h4>
          <input
            type="radio"
            name="gender"
            value={"Male"}
            onChange={handleGender}
            className="m-1"
            checked={isGenderSelected.Male.isChecked}
          />
          Male
          <input
            type="radio"
            name="gender"
            value={"Female"}
            onChange={handleGender}
            className="m-1"
            checked={isGenderSelected.Female.isChecked}
          />
          Female
          <h4>Bio</h4>
          <textarea
            name="bios"
            className="form-control mb-3"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
          <h4>Skills</h4>
          <input
            type="checkbox"
            name="Javascript"
            className="m-1"
            checked={skills.Javascript.isChecked}
            onChange={handleSkill}
          />
          Javascript
          <input
            type="checkbox"
            name="PHP"
            className="m-1"
            checked={skills.PHP.isChecked}
            onChange={handleSkill}
          />
          PHP
          <input
            type="checkbox"
            name="Java"
            className="m-1"
            checked={skills.Java.isChecked}
            onChange={handleSkill}
          />
          Java
          <input
            type="checkbox"
            name="Python"
            className="m-1"
            checked={skills.Python.isChecked}
            onChange={handleSkill}
          />
          Python
          <input
            type="checkbox"
            name="All"
            className="m-1"
            onChange={selectAllSkills}
            checked={isAllSelected}
          />
          Select All
          <button type="submit" className="btn btn-primary form-control">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormComponent;

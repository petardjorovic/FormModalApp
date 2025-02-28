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
  };

  const handleSkill = (e) => {
    const { name, checked } = e.target;
    setSkills({ ...skills, [name]: { title: name, isChecked: checked } });
  };

  const selectAllSkills = (e) => {
    e.preventDefault();
    setSkills({
      Javascript: { title: "Javascript", isChecked: true },
      PHP: { title: "PHP", isChecked: true },
      Java: { title: "Java", isChecked: true },
      Python: { title: "Python", isChecked: true },
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
            onChange={(e) => setGender(e.target.value)}
            className="m-1"
            checked={gender === "Male" ? true : false}
          />
          Male
          <input
            type="radio"
            name="gender"
            value={"Female"}
            onChange={(e) => setGender(e.target.value)}
            className="m-1"
            checked={gender === "Female" ? true : false}
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
          Python <br />
          <button className="btn btn-primary form-control w-50">Save</button>
          <button
            className="btn btn-success w-25 ms-3"
            onClick={selectAllSkills}
          >
            All skills
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormComponent;

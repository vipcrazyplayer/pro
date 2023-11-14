import React, { useContext, useState } from "react";
import style from "./home.module.css";
import { useNavigate } from "react-router-dom";
import { heroContext } from "../Contexts/heroContext";

const AddForm = () => {
  const { addHero } = useContext(heroContext);

  const [heroObj, setHeroObj] = useState({
    title: "",
    desc: "",
    image: "",
  });

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    addHero(heroObj);
    setHeroObj({
      title: "",
      desc: "",
      image: "",
    });
    navigate("/");
  }

  return (
    <div className={style.addForm}>
      <h2>Add form</h2>
      <form onSubmit={handleSubmit} className={style.add}>
        <input
          value={heroObj.title}
          placeholder="Title"
          onChange={(e) => setHeroObj({ ...heroObj, title: e.target.value })}
          type="text"
        />
        <input
          value={heroObj.desc}
          placeholder="Description"
          onChange={(e) => setHeroObj({ ...heroObj, desc: e.target.value })}
          type="text"
        />
        <input
          value={heroObj.image}
          placeholder="Url"
          onChange={(e) => setHeroObj({ ...heroObj, image: e.target.value })}
          type="url"
        />

        <button className={style.save}>Save</button>
      </form>
    </div>
  );
};

export default AddForm;

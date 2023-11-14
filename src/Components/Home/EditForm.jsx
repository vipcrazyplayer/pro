import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { heroContext } from "../Contexts/heroContext";

const EditForm = () => {
  const { getOneHero, oneHero, updateHero } = useContext(heroContext);

  const [editedObj, setEditedObj] = useState({
    title: "",
    desc: "",
    image: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getOneHero(id);
  }, []);

  useEffect(() => {
    oneHero && setEditedObj(oneHero);
  }, [oneHero]);

  function heroSave(e) {
    e.preventDefault();
    updateHero(id, editedObj);
    navigate("/");
  }

  return (
    <div className={style.addForm}>
      <h2>Edit form</h2>
      <form onSubmit={heroSave} className={style.add}>
        <input
          value={editedObj.title}
          placeholder="Title"
          onChange={(e) =>
            setEditedObj({ ...editedObj, title: e.target.value })
          }
          type="text"
        />
        <input
          value={editedObj.desc}
          placeholder="Description"
          onChange={(e) => setEditedObj({ ...editedObj, desc: e.target.value })}
          type="text"
        />
        <input
          value={editedObj.image}
          placeholder="Url"
          onChange={(e) =>
            setEditedObj({ ...editedObj, image: e.target.value })
          }
          type="url"
        />

        <button className={style.save}>Save</button>
      </form>
    </div>
  );
};

export default EditForm;

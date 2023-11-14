import React, { createContext, useState } from "react";
import axios from "axios";

export const heroContext = createContext();

const HeroContextProvider = ({ children }) => {
  const API = "http://localhost:8000/heroes";

  const [heroes, setHeroes] = useState([]);
  const [oneHero, setOneHero] = useState(null);

  async function addHero(newHero) {
    await axios.post(API, newHero);
    getHeroes();
  }

  async function getHeroes() {
    let res = await axios.get(API);
    setHeroes(res.data);
  }

  async function deleteHero(id) {
    await axios.delete(`${API}/${id}`);
    getHeroes();
  }

  async function getOneHero(id) {
    const res = await axios.get(`${API}/${id}`);
    setOneHero(res.data);
  }

  async function updateHero(id, editedHero) {
    await axios.patch(`${API}/${id}`, editedHero);
    getHeroes();
  }

  const vals = {
    heroes,
    addHero,
    getHeroes,
    updateHero,
    deleteHero,
    oneHero,
    getOneHero,
  };
  return <heroContext.Provider value={vals}>{children}</heroContext.Provider>;
};

export default HeroContextProvider;

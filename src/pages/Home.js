import React, { useState } from "react";
import { Box } from "@mui/material";
import Exercises from "../components/Exercises.js";
import HeroBanner from "../components/HeroBanner.js";
import SearchExercises from "../components/SearchExercises.js";
const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
        setExercises={setExercises}
      />
      <Exercises
        exercises={exercises}
        bodyPart={bodyPart}
        setExercises={setExercises}
      />
    </Box>
  );
};

export default Home;

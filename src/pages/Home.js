import React from 'react'
import {Box} from '@mui/material';
import Exercises from '../components/Exercises.js';
import HeroBanner from '../components/HeroBanner.js';
import SearchExercises from '../components/SearchExercises.js';
const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home
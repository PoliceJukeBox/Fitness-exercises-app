import React, {useEffect, useState} from 'react';
import { formGroupClasses, Pagination } from '@mui/material';
import { Box, Stack, Typography} from '@mui/material';

import {exerciseOptions, fetchData } from '../utils/fetchData'

function Exercises({exercices, setExercices, bodyPart}) {
  
  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {exercices.map((exercise, idx) => (
          <p>{exercise.name}</p>
        ))}
      </Stack>
    </Box>
  )
}

export default Exercises
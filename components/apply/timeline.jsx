import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel, { stepLabelClasses } from '@mui/material/StepLabel';
import { styled } from '@mui/material/styles';
import ContentBlock from '../ContentBlock';

const CustomStepLabel = styled(StepLabel)(() => ({
  [`& .${stepLabelClasses.label}`]: {
    [`&.${stepLabelClasses.completed}`]: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
    [`&.${stepLabelClasses.active}`]: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
    fontSize: '18px',
    fontWeight: 'bold',
  },
}));

function Timeline({ steps }) {
  return (
    <div className="timeline">
      <Box sx={{ width: '115%' }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps &&
            steps.map((step) => (
              <Step key={step.header}>
                <CustomStepLabel> {step.header}</CustomStepLabel>
                <ContentBlock content={step.body.json} />
              </Step>
            ))}
        </Stepper>
      </Box>
    </div>
  );
}

export default Timeline;

import { Modal, Typography, Box } from "@mui/material";

interface WorkDetailModalProps {
  open: boolean;
  onClose: () => void;
}

const details = [
  "Takes on a feature, breaks it down into stories and delivers them from start to the end Write clean and efficient code (React, Typescript, Ruby on Rails and GraphQL)",
  "Participate in code review sessions both with direct teammates and outside the team",
  "Work closely with designers, exchange ideas and improve on the UI/UX for given tasks and bring them to life.",
  "Contributes to our internal design system",
  "Update and Implement Storybook on new components created/updated",
  "Write tests in rspec, to system test the UI and also for unit tests for the methods that are written for each new feature",
  "Participate in discussion and brainstorming sessions on how to approach each new feature requested in addition to daily meetings and scrum routine",
  "Helps organize team activities both directly within my team and as well as company's wide for events and gatherings",
  "Promotes transparency and teamwork by helping my team with their questions or through pair programming to solve more complex tasks",
];

const WorkDetailModal = ({ open, onClose }: WorkDetailModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: 4,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Position details
        </Typography>
        <ul>
          {details.map((detail) => (
            <li>
              <Typography>{detail}</Typography>
            </li>
          ))}
        </ul>
      </Box>
    </Modal>
  );
};

export default WorkDetailModal;

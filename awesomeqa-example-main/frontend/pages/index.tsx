import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import KnowledgeBaseImage from '@mui/icons-material/LibraryBooks'; 
import TicketsImage from '@mui/icons-material/SupportAgent'; 
import FaqImage from '@mui/icons-material/Lightbulb'; 

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#1C1C1F",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  boxShadow: 'none', // Removes the shadow for a flat design
  borderRadius: '8px',
  border: '1px solid #302F36',
}));

const IndexPage = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 15, mb: 15 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Item>
            <Button
              variant="contained"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '20px',
                width: '306px',
                padding: '16px',
                color: '#F7F8F8',
                backgroundColor: '#1C1C1F',
                '&:hover': {
                  backgroundColor: '#1C1C1F', 
                  opacity: '0.7', 
                },
                boxShadow: 'none', 
                textTransform: 'none', 
              }}
              startIcon={<KnowledgeBaseImage />}
              href="#"
            >
              Knowledge Base
            </Button>
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <Button
              variant="contained"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '20px',
                width: '306px',
                padding: '16px 0px 16px 16px',
                color: '#FFFFFF',
                backgroundColor: '#1C1C1F', 
                '&:hover': {
                  backgroundColor: '#1C1C1F', 
                  opacity: '0.7', 
                },
                boxShadow: 'none', 
                textTransform: 'none', 
              }}
              startIcon={<TicketsImage />}
              href="/tickets"
            >
              Tickets
            </Button>
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <Button
              variant="contained"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '20px',
                width: '306px',
                padding: '16px 0px 16px 16px',
                color: '#FFFFFF',
                backgroundColor: '#1C1C1F', 
                '&:hover': {
                  backgroundColor: '#1C1C1F', 
                  opacity: '0.7', 
                },
                boxShadow: 'none', 
                textTransform: 'none', 
              }}
              startIcon={<FaqImage />}
              href="#"
            >
              FAQ Insights
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default IndexPage;

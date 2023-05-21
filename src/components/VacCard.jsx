import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const VacCard = () => {
  return (
    <Card className="container" sx={{ minWidth: 275, backgroundColor: '#FFFF00' }}>
      <CardContent className='content' >
        <Typography sx={{ fontSize: 40 }} gutterBottom>
          DEVELOPER .NET
        </Typography>
        <Typography sx={{textAlign:'left'}}>
            Requirements:
        </Typography>
        <Typography component="div" sx={{textAlign:'left'}}>
          <ul>
            <li>
                fdfd
            </li>
            <li>
                fdfd
            </li>
            <li>
                fdfd
            </li>
            <li>
                fdfd
            </li>
          </ul>
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize:'20px'}}>
          Description
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dolor harum est asperiores, pariatur quaerat officiis, esse dolores officia hic blanditiis aspernatur perferendis eos minus alias eligendi aut sint aliquid!
        </Typography>
      </CardContent>
      <CardActions className="action">
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default VacCard;

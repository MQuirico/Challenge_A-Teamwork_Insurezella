import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react"
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

export default function Select() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            textTransform: "none",
            fontFamily: "Poppins, sans-serif",
            fontSize: "110%",
            fontWeight: "bold",
            color: "black"
          }}
        >
          Find insurance &#9660;
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          
        >
          <MenuItem onClick={handleClose}>Health insurance</MenuItem>
          <MenuItem onClick={handleClose}>Medicare supplement</MenuItem>
          <MenuItem onClick={handleClose}>Medicare Advantage</MenuItem>
          <MenuItem onClick={handleClose}>Life insurance</MenuItem>
          <MenuItem onClick={handleClose}>ACA / obamacare</MenuItem>
          <MenuItem onClick={handleClose}>Short-Term Medical</MenuItem>

        </Menu>
      </div>
    );
  }
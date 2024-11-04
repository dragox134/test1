// src/components/MenuComponent.tsx

import React from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';

const MenuComponent: React.FC = () => {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls={anchorEl ? 'menu-appbar' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        Menu
      </Button>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        {session ? (
          <>
            <MenuItem onClick={() => { signOut(); handleClose(); }}>Sign Out</MenuItem>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
          </>
        ) : (
          <MenuItem onClick={() => { signIn('google'); handleClose(); }}>Sign In</MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default MenuComponent;

import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';
import EqualizerIcon from '@mui/icons-material/Equalizer';

type SidebarProps = {
  drawerWidth: number, 
  mobileOpen: boolean, 
  handleDrawerTransitionEnd: () => void, 
  handleDrawerClose: () => void,
}

type menuItem = {
  text: string,
  path: string,
  icon: React.ComponentType
}

const SideBar =
  // props
  ({drawerWidth, 
    mobileOpen, 
    handleDrawerTransitionEnd, 
    handleDrawerClose,
  }:SidebarProps
  ) => {

  // menuItem
  const MenuItems:menuItem[] = [
    {text: "Home", path: "/", icon: HomeIcon},
    {text: "Report", path: "/report", icon: EqualizerIcon},
  ]

  const drawer = (
      <div>
        <Toolbar />
        <Divider />
        <List>
          {MenuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  <item.icon/>
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
  );
  
  return (

          <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* モバイル用 */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
  
          {/* PC用 */}
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
  
  )
}

export default SideBar
import React from 'react'

export default function () {
  return (
    <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Book Review App
          </Typography>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/signup" color="inherit">Sign Up</Button>
          <Button component={Link} to="/login" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  )
}

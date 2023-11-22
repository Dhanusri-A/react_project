import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Paper, Button } from '@mui/material';
import HomePage from './homepage';
import LoginPage from './Login';
import SignUpPage from './Signup';
import './book.css';
import BookForm from './BookForm';
import Login from './loginDetail';
function App() {
  return (
    <Router>
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
      <Container sx={{ marginTop: 2 }}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            
          <Route path='/BookForm' element={<BookForm/>}></Route>
       
          </Routes>
        </Paper>
      </Container>
    </Router>
  );
}

export default App;
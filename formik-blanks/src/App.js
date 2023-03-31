import logo from './logo.svg';
import './App.css';
import FormikContainer from './components/FormikContainer';
import { LoginForm } from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import EnrollmentFrom from './components/EnrollmentFrom';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className='App'>
        <LoginForm />
      </div>
    </ChakraProvider>
  );
}

export default App;

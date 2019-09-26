import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import Form from './components/Form';
import { handleSubmit } from './utils/handleSubmit';

export default function App() {
  return (
    <Container maxWidth="md">
      <Header />
      <Form onSubmit={handleSubmit} />
    </Container>
  );
}

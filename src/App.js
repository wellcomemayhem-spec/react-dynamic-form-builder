import React from 'react';
import DynamicFormBuilder from './DynamicFormBuilder';

const App = () => {
  const handleFormSubmit = (formData) => {
    console.log(formData);
  };

  return <DynamicFormBuilder onSubmit={handleFormSubmit} />;
};

export default App;

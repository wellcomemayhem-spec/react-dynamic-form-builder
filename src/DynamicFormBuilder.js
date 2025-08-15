import React, { useState } from 'react';

const DynamicFormBuilder = ({ onSubmit }) => {
  const [fields, setFields] = useState([
    { id: Date.now(), label: 'Field 1', type: 'text', value: '' }
  ]);

  const addField = () => {
    setFields([...fields, { id: Date.now(), label: `Field ${fields.length + 1}`, type: 'text', value: '' }]);
  };

  const handleChange = (id, e) => {
    const updatedFields = fields.map(field => 
      field.id === id ? { ...field, value: e.target.value } : field
    );
    setFields(updatedFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = fields.reduce((acc, field) => {
      acc[field.label] = field.value;
      return acc;
    }, {});
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(field => (
        <div key={field.id}>
          <label>{field.label}</label>
          <input 
            type={field.type}
            value={field.value}
            onChange={(e) => handleChange(field.id, e)}
          />
        </div>
      ))}
      <button type="button" onClick={addField}>Add Field</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicFormBuilder;

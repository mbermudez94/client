import React from "react";
import { Field, Form } from 'react-final-form';

class StreamForm extends React.Component {
  renderError({touched, error}){
    if(touched && error){
      return(
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }
  
  
  renderInput=({ input, label, meta })=> {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit=(formValues)=>{
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <Form
      initialValues={this.props.initialValues}
      onSubmit={this.onSubmit}
      validate={(formValues) => {
        const errors = {};
 
        if (!formValues.title) {
          errors.title = "You must enter a title";
        }
 
        if (!formValues.description) {
          errors.description = "You must enter a description";
        }
 
        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="ui form error">
          <Field name="title" component={this.renderInput} label="Enter Title" />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />
          <button className="ui button primary">Submit</button>
        </form>
    )}
    />
  );
};
}

export default StreamForm;
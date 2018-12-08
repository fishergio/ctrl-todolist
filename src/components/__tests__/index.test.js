import React from 'react';
import { mount } from 'enzyme';
import App from '../index';

describe('App', () => {
  let app = mount(<App />);

  it('display Form component', () => {
    expect(app.find('TaskForm').exists()).toBe(true);    
  })

  it('display TaskList component', () => {
    expect(app.find('TasksList').exists()).toBe(true);
  })

  
})

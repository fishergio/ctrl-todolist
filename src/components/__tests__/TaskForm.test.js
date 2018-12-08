import React from 'react';
import { mount, shallow } from 'enzyme';
import TaskForm from '../TaskForm';

describe('TaskForm', () => {

  let form = mount(<TaskForm/>);

  it('display the title', () => {
    expect(form.find('h2').text()).toEqual('Ctrl+ToDo');
  });

  it('display add task button', () => {
    const input = form.find('.btnFormSubmit');
    const { value } = input.props();
    expect(value).toEqual('Add Task');
  })

  it('display delete button', () => {
    const wrapper = shallow(<button className="btnForm">Delete All</button>);
    expect(wrapper.text().includes('Delete All')).toBe(true);
  })

  describe('rendering the form', () => {
    it('display form component', () => {
      expect(form.find('form').exists()).toBe(true);
    })
    it('display a input', () => {
      expect(form.find('input').exists()).toBe(true);
    });
  })
})
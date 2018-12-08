import React from 'react';
import { mount } from 'enzyme';
import Task from '../Task';

const props = {task: 'test task', index: 'uid252'}

describe('Task', () => {
  let task = mount(<Task {...props}/>);

  it('display the task text', () => {
    //console.log(task.debug());
    expect(task.find('h3').text()).toEqual(props.task);
  });
  it('number of task', () => {
    expect(task.find('span').text()).toEqual(props.index);
  });
})

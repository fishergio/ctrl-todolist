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

  /*describe('creating a task', () => {
    let testTask = { task: 'test', id: '546', status: false };

    describe('submitting the new task', () => {

      beforeEach(() => {
        app.find('.btnFormSubmit').at(0).simulate('click');
      });

      it('update state', () => {
        //console.log("hoos", app.state())
        expect(app.state().tasks).toEqual(testTask)
      })
    })
  })*/
})

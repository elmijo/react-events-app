import React from 'react';
import { cleanup } from '@testing-library/react';
import Event from "../../../../src/app/components/events/Event";

afterEach(cleanup);

const props = {
    id:1,
    label:'Event 1',
    description: 'The Event 1',
    location: 'The Event Location 1',
    date:'2020-01-01',
    categoryId: 1,
};

test('Test render Event component structure', () => {
    const wrapper = shallow(<Event {...props}/>);
    expect(wrapper.find('.event').type()).toBe('div');
    expect(wrapper.find('.event h3').type()).toBe('h3');
    expect(wrapper.find('.event .label').type()).toBe('span');
    expect(wrapper.find('.event .content').type()).toBe('div');
    expect(wrapper.find('.event .content p').length).toBe(2);
    expect(wrapper.find('.event .actions').type()).toBe('div');
    expect(wrapper.find('.event .actions input').prop('type')).toBe('checkbox');
    expect(wrapper.find('.event .actions label').type()).toBe('label');
});

test('Test render Event component content', () => {
    const wrapper = shallow(<Event {...props}/>);
    expect(wrapper.find('.event h3').text()).toBe(props.label);
    expect(wrapper.find('.event .label').text()).toBe(props.date);
    expect(wrapper.find('.event .content p').at(0).text()).toBe(props.location);
    expect(wrapper.find('.event .content p').at(1).text()).toBe(props.description);
    expect(wrapper.find('.event .actions input').prop('checked')).toBe(false);
    expect(wrapper.find('.event .actions label').text()).toBe('Suscrito');
});

test('Test render Event subscribe action', () => {
    const wrapper = shallow(<Event {...props}/>);
    const spy = jest.spyOn(wrapper.instance(), 'subscribe');
    const checkbox =  wrapper.find('.event .actions input');
    expect(checkbox.prop('checked')).toBeFalsy();
    checkbox.simulate('change');
    // expect(spy).toHaveBeenCalledTimes(1)
    // expect(checkbox.prop('checked')).toBeTruthy();
});
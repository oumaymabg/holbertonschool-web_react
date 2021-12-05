const assert = require('assert');
import {shallow} from 'enzyme';
import Notifications from './Notifications';


describe('Test Notifications component', () => {
    it('test that Notifications renders without crashing', () => {
        shallow(<Notifications />);
    })
    it('verify that Notifications renders three list items', () => {
        const wrapper = shallow(<Notification />);
        assert.equal(wrapper.find('ul').children().length, 3);
    });
    it('verify that Notifications renders the text', () => {
        const wrapper = shallow(<Notification />);
        assert.equal(wrapper.find('p').text(), 'Here is the list of notifications');
    });
});
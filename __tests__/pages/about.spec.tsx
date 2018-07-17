import * as React from 'react'
import { mount } from 'enzyme';
import AboutPage from '../../pages/about'

describe('Pages', () => {
  describe('AboutPage', () => {
    it('on button click changes text', () => {
      const wrapper = mount(<AboutPage />)
      const button = wrapper.find('button')
      expect(button.text()).toBe('off')
      
      button.simulate('click')
      expect(button.text()).toBe('on')
    })

    it('on input changes text', () => {
      const wrapper = mount(<AboutPage />)
      const input = wrapper.find('input')
      expect(wrapper.find('h3').text()).toBe('')

      input.simulate('change', {target: {value: 'Tyler'}})
      expect(wrapper.find('h3').text()).toBe('Tyler')
    })

    it.skip('spyOn click function', () => {
      const wrapper = mount(<AboutPage />)
      const button = wrapper.find('button')

      const spy = jest.spyOn(AboutPage.prototype, 'handleClick')

      button.simulate('click')

      expect(spy).toHaveBeenCalled()
      spy.mockRestore()
    })
  })
})

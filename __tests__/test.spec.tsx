import * as React from 'react'
import {mount} from 'enzyme'
import configureStore from 'redux-mock-store'

import IndexPage from '../pages/index'
import { Footer } from '../components/layout/index'
import { Provider } from 'react-redux';

const middlewares = []
const mockStore = configureStore(middlewares)

const ProviderWrap = ({store}) => 
  <Provider store={store}>
    {this.props.children}
  </Provider>

describe('Pages', () => {
  describe('IndexPage', () => {
    it('should render without throwing an error', function () {
      // https://github.com/airbnb/enzyme/issues/1002#issuecomment-353592037
      
      // Initialize mockstore with empty state
      const initialState = {
        user: {
          message: 'This is message'
        },
        about: {
          name: 'This is name'
        }
      }
      const store = mockStore(initialState)
      const wrap = mount(<ProviderWrap store={store}><IndexPage /></ProviderWrap>)
      expect(wrap.find('div').length).toBe(1)
    })
  })
})

describe('Components', () => {
  describe('Footer', () => {
    it('should render without throwing an error', function () {
      const wrap = mount(<Footer />)
      expect(wrap.find('div').length).toBe(1)
    })
  })
})


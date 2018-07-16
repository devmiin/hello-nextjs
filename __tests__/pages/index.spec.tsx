import * as React from 'react'
import {mount} from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import IndexPage from '../../pages/index'

const middlewares = []
const mockStore = configureStore(middlewares)

const ProviderWrap = props => 
  <Provider store={props.store}>
    {props.children}
  </Provider>

describe('Pages', () => {
  describe('IndexPage', () => {
    it('should render without throwing an error', function () {      
      // Initialize mockstore
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

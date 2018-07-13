import * as React from 'react'
import {shallow} from 'enzyme'

import IndexPage from './index'

describe('Component', () => {
  describe('IndexPage', () => {
    it('should render without throwing an error', function () {
      expect(shallow(<IndexPage/>).contains(
        <p>
          Hello world!
        </p>
      )).toEqual(true)
    })
  })
})
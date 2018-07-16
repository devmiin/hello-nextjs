import * as React from 'react'
import {mount} from 'enzyme'

import { Footer } from '../../../components/layout/index'

describe('Components', () => {
  describe('Footer', () => {
    it('should render without throwing an error', function () {
      const wrap = mount(<Footer />)
      expect(wrap.find('div').length).toBe(1)
    })
  })
})
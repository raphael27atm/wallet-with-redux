import React from 'react'
import { shallow } from 'enzime'
import Wallet from './Wallet'

describe('Wallet', () => {
	const wallet = shallow(<Wallet/>);

	it('renders properly', () => {
		expect(wallet).toMatchSnapshot();
	})
})

// this is a function represented the calendar 
// objectif: to have the current progression on the unit tests

const assert = require('assert');
const { expect } = require('chai');
const { calendar } = require('../src/calendar.js');
const { addDate, removeDate, getDates } = require('../src/calendar.js');

describe('this is a calendar function', () => {
	it('should be add the new date in the calendar', () => {
		let result;
		result = calendar();
		expect(result).be.to.eq(0);
	});
});



describe('Calendar functions', () => {
	it('Should add a date to the calendar', () => {
		const date = new Date();
		addDate(date);
		const dates = getDates();
		expect(dates).to.include(date);
	});

	it('Should remove a date from the calendar', () => {
		const date = new Date();
		addDate(date);
		removeDate(date);
		const dates = getDates();
		expect(dates).to.not.include(date);
	});

	it('Should get all dates from the calendar', () => {
		const date1 = new Date();
		const date2 = new Date();
		addDate(date1);
		addDate(date2);
		const dates = getDates();
		expect(dates).to.have.lengthOf(2);
		expect(dates).to.include(date1);
		expect(dates).to.include(date2);
	});
});

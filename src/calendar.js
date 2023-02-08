// this is a function represented the calendar 
// objectif: to have the current progression on the unit tests

const calendar = () => {
	return 0; 
}



let dates = [];

const addDate = (date) => {
	if(date === undefined){
		return 0;
	}
	dates.push(date);
};

const removeDate = (date) => {
	dates = dates.filter(d => d.getTime() !== date.getTime());
};

const getDates = () => {
	return dates.slice();
};


module.exports = { addDate, removeDate, getDates, calendar };
export default {
	filterCities: (state) => {
		let filtercities =  state.chinaCities.filter(function(value) {
			var list = value.list.filter(function(v) {
				return v.name.indexOf(state.filterInfo) > -1
			})
			return list.length > 0
		})
		let result = filtercities.filter(function(value){
			value.list = value.list.filter(function(v) {
				return v.name.indexOf(state.filterInfo) > -1
			})
			return true
		});
		console.log(result)
		return result;
	}
}

import {
	getUser,
	mHotMovies,
	mComingMovies,
	hotCities,
	chinaCities,
	accountLogin
} from '../service/getData'
import {
	GET_USERINFO,
	HOT_MOVIES,
	CHINA_CITIES
} from './mutation-types.js'

export default {
	async getUserInfo({
		commit,
		state
	}) {
		let res = await getUser();
		commit(GET_USERINFO, res)
	},
	async getHotMovies({
		commit,
		state
	}){
		let hotmovies = await mHotMovies();
		commit(HOT_MOVIES, hotmovies);	
	},
	async getChinaCities({
		commit,
		state
	}){
		let chinacities = await chinaCities();
		commit(CHINA_CITIES, chinacities);	
	}
}
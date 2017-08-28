import fetch from '../config/fetch'
import * as movie from './tempdata/movie'
import * as login from './tempdata/login'
import * as city from './tempdata/city'
import * as ciname from './tempdata/cinema'


/**
 * 创建临时数据
 */
const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}

//编译环境使用真实数据
if (process.env.NODE_ENV == 'dev') {
	/*热门电影*/
    var mHotMovies = () => fetch('get', 'v2/movie/in_theaters', {});
    /*即将上映*/
    var mComingMovies = () => fetch('get', '/v2/movie/coming_soon', {});
    var getUser = () => fetch('get', '/v2/user', {});
	var accountLogin = (username, password, captcha_code) => fetch('post', '/v2/login', {username, password, captcha_code});

	var chinaCities = () => setpromise(city.chinaCities);
	var hotCities = () => setpromise(city.hotCities);


} else {
	var mHotMovies = (city, start, count) => setpromise(movie.mHotMovies);
	var mComingMovies = (city, start, count) => setpromise(movie.mComingMovies);
	var getUser = () => setpromise(login.userInfo);
	var hotCities = () => setpromise(city.hotCities);
	var chinaCities = () => setpromise(city.chinaCities);
	var accountLogin = (username, password,captcha_code) => setpromise(login.userInfo)
}


/**
 * 以下Api接口不需要进行反向代理
 */

var sendLogin = (code, mobile, validate_token) => setpromise(login.userInfo);
export {mHotMovies,mComingMovies,getUser,accountLogin, hotCities, chinaCities}
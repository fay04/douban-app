import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import index from '@/components/index/index'
import bookmovie from '@/components/bookmovie/bookmovie'
import movie from '@/components/bookmovie/movie/movie'
import buymovie from '@/components/bookmovie/movie/movies.vue'
import book from '@/components/bookmovie/book/book'
import fair from '@/components/bookmovie/fair/fair'
import city from '@/components/bookmovie/city/city' //同城
import selectcity from '@/common/vue/selectCity'
import music from '@/components/bookmovie/music/music'
import broadcast from '@/components/broadcast/broadcast'
import team from '@/components/team/team'
import me from '@/components/me/me'

Vue.use(Router)
Vue.use(Vuex)
Vue.use(VueResource)
Vue.http.options.xhr = {
	withCredentials: true
}
Vue.http.options.emulateJSON = true
export default new Router({
	routes: [{
			path: '/',
			name: 'bookmovie',
			component: index,
			redirect: '/bookmovie'
		},
		{
			path: '/index',
			name: 'index',
			component: index
		},
		{
			path: '/bookmovie',
			component: bookmovie,
			children: [{
					path: '',
					redirect: 'movie'
				},
				{
					path: 'movie',
					component: movie,
					children: [{
						path: 'buymovie/:type',
						components: {
							default: buymovie,
							buymovie: buymovie
						}
					}]
				},
				{
					path: 'book',
					component: book
				},
				{
					path: 'fair',
					component: fair
				},
				{
					path: 'city',
					component: city
				},
				{
					path: 'music',
					component: music
				}
			]
		},
		{
			path: '/broadcast',
			name: 'broadcast',
			component: broadcast
		},
		{
			path: '/team',
			name: 'team',
			component: team
		},
		{
			path: '/me',
			name: 'me',
			component: me
		},
		{
			path: '/selectcity',
			name: 'selectcity',
			components: {
				default: selectcity,
				selectcity: selectcity
			}
		}
	],
	linkActiveClass: 'active'
})
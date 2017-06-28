import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import index from '@/components/index/index'
import bookmovie from '@/components/bookmovie/bookmovie'
import movie from '@/components/bookmovie/movie/movie'
import book from '@/components/bookmovie/book/book'
import tv from '@/components/bookmovie/tv/tv'
import city from '@/components/bookmovie/city/city'
import music from '@/components/bookmovie/music/music'
import broadcast from '@/components/broadcast/broadcast'
import team from '@/components/team/team'
import me from '@/components/me/me'

Vue.use(Router)
Vue.use(VueResource)
Vue.http.options.xhr = { withCredentials: true }
Vue.http.options.emulateJSON = true
export default new Router({
  routes: [
    {
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
      name: 'bookmovie',
      component: bookmovie,
      children: [
      	{
          path: '',
          redirect: '/bookmovie/movie'
        },
        {
          path: '/bookmovie/movie',
          component: movie
        },
        {
          path: '/bookmovie/book',
          component: book
        },
        {
          path: '/bookmovie/tv',
          component: tv
        },
        {
          path: '/bookmovie/city',
          component: city
        },
        {
          path: '/bookmovie/music',
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
    }
  ],
  linkActiveClass: 'active'
})


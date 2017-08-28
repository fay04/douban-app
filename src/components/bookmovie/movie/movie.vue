<template>
	<div class="movie" ref="moviesWrapper">
		<div>
			<div class="" v-for="movieM in moviesM">
				<split></split>
				<keep-alive><mmovie :moviesM="movieM"></mmovie></keep-alive>
			</div>
			<split></split>
			<div class="billboard-list">
				<h1 class="title">精选榜单</h1>
			</div>
		</div>
  	<router-view name="buymovie"></router-view>
	</div>
</template>

<script type="text/ecmascript-6">
	import { emit } from '../../../common/js/emit.js'
	import split from '../../../common/vue/split.vue'
	import BScroll from 'better-scroll'
	import mmovie from './mmovie.vue'

	export default {
		data() {
			return {
				moviesM: [{
					'title': '影院热映',
					'url': 'https://api.douban.com/v2/movie/in_theaters',
					'type': 0
				}, {
					'title': '院线即将上映',
					'url': 'https://api.douban.com/v2/movie/coming_soon',
					'type': 1
				}],
				type: 1
			}
		},
		components: {
			mmovie,
			split
		},
		created() {
			emit.$on('initscroll', this._initScroll)
		},
		mounted() {
			this._initScroll()
		},
		methods: {
			_initScroll() {
				this.$nextTick(() => {
					if (!this.moviesScroll) {
						this.moviesScroll = new BScroll(this.$refs.moviesWrapper, {
							click: true
						})
					} else {
						this.moviesScroll.refresh()
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.movie {
		position: fixed;
		top: 4.8rem;
		bottom: 2.8rem;
		left: 0;
		width: 100%;
		z-index: 2;
		overflow: hidden;
		background: #fff;
		.billboard-list {
			padding: .9rem;
			.title {
				font-weight: 700;
				font-size: .9rem;
			}
		}
	}
</style>
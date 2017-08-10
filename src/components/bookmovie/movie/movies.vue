<template>
	<div class="movies">
		<div class="header">
			<div class="icon" @click="returnPage">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-arrow_lift"></use>
				</svg>
			</div>
			<h1 class="title">院线电影</h1>
			<router-link to="/selectcity" class="fr">
		   	<address >上海
					<div class="icon-small">
						<svg class="icon" aria-hidden="true">
						  <use xlink:href="#icon-arrow_down"></use>
						</svg>
					</div>
				</address>
		  </router-link>
			
		</div>
		<nav @click="changeMovieType">
			<div class="nav-item" type="0" v-bind:class="{ active: type===0}">正在热映</div>
			<div class="nav-item" type="1" v-bind:class="{ active: type===1}">即将上映</div>
		</nav>
		<div class="movies-list" v-if="movies && movies.subjects">
			<div v-for="movie in movies.subjects">
				<b-movie :movie="movie" :moviesType="type"></b-movie>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import { emit } from '../../../common/js/emit.js'
	import bMovie from './b_movie.vue'
	import { mHotMovies, mComingMovies } from '../../../service/getData'

	export default {
		data() {
			return {
				movies: {},
				type: 0
			}
		},
		components: {
			bMovie
		},
		methods: {
			changeMovieType(el) {
				var dom = el.target;
				if(dom.classList.contains('nav-item') && !dom.classList.contains('active')) {
					el.target.classList.add("active");
					let domsibling = el.target.nextElementSibling ? el.target.nextElementSibling : el.target.previousElementSibling;
					domsibling.classList.remove("active")
					let currentMovie;
					if(el.target.getAttribute("type") == "1") {
						currentMovie = mComingMovies
					} else {
						currentMovie = mHotMovies
					}
					currentMovie().then(res => {
						let movies = res
						this.movies = movies
					})
				}
			},
			returnPage() {
				this.$router.go(-1)
			}
		},
		mounted() {
			let currentMovie;
			console.log(this.$route.params)
			this.type = Number(this.$route.params.type);
			if(this.type == 1) {
				currentMovie = mComingMovies
			} else {
				currentMovie = mHotMovies
			}
			currentMovie().then(res => {
				let movies = res
				this.movies = movies
			})

		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../common/scss/common.scss';
	.movies {
		position: fixed;
		z-index: 99;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		.header {
			color: #333333;
			font-size: 20px;
			line-height: 30px;
			padding: 16px 20px;
			vertical-align: middle;
			@include border-b-1px();
			&>.icon {
				color: #57a95f;
				vertical-align: middle;
			}
			* {
				font-weight: 700;
				display: inline-block;
			}
			.icon {
				width: 20px;
				height: 20px;
				padding-right: 28px;
			}
			.icon-small {
				vertical-align: middle;
				width: 12px;
				height: 12px;
				.icon {
					width: 100%;
					height: 100%;
					color: rgba(94, 73, 73, 0.5);
				}
			}
			address {
				font-style: normal;
				font-weight: 100;
				color:#333;
				font-size: 16px;
			}
		}
		nav {
			font-size: 0;
			text-align: center;
			line-height: 50px;
			height: 52px;
			@include border-b-1px();
			.nav-item {
				display: inline-block;
				width: 50%;
				font-size: 18px;
				color: #8F8F8F;
				&.active {
					border-bottom: 2px solid #8F8F8F;
					color: #333;
				}
			}
		}
	}
</style>
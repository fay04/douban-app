<template>
  <div class="m-movie">
   <div class="title-wrapper">
  		<h2 class="title">{{moviesM.title}}</h2>
  		<div class="more-btn" @click="selectMoreMovies">
  			更多
  			<svg class="icon" aria-hidden="true">
		      <use xlink:href="#icon-keyboard_arrow_right"></use>
		    </svg>
  		</div>
  	</div>
  	<div ref="moviesWrapper" class="movies-scroll" v-show="movies.subjects">
  		<div class="movies-wrapper" ref="movieList">
  			<div class="movie-item-wrapper" v-for="movie in movies.subjects"  :class="{'coming':moviesM.type}">
	  			<div class="movies-border" v-if="moviesM.type===1">
	  				<p class="text">{{movie.year}}</p><span class="line"></span>
	  			</div>
	  			<movieitem :movie="movie" :moviesType="moviesM.type"></movieitem>
	  		</div>
	  		<div class="movie-item-wrapper length" :class="{'coming':moviesM.type}">
	  			<p class="title">全部</p>
	  			<p class="content">{{movies.total}}部</p>
	  		</div>
  		</div>
  	</div>
  	<movies></movies>
  </div>
</template>

<script type="text/ecmascript-6">
	import movieitem from './movie-item.vue'
	import { emit } from '../../../common/js/emit.js'
	import BScroll from 'better-scroll'
	
	export default {
		data() {
			return {
				movies: {}
			}
		},
		created() {
			if (this.moviesM && this.moviesM.url) {
				this.$http.jsonp(this.moviesM.url).then((response) => {
					console.log(response)
				  if (response.status === 200) {
				  	let movies = response.data
				  	console.log(movies)
						this.movies = movies
						this._initMoviesList()
						emit.$emit('initscroll', {})
					}
				})
			}
		},
		props: {
			moviesM: {
				type: Object
			}
		},
		methods: {
			_initMoviesList() {
				 if (this.movies.subjects) {
				 	let picWidth = 96
				 	let margin = 20
				 	let width = (picWidth + margin) * (this.movies.subjects.length + 1)
				 	this.$refs.movieList.style.width = width + 'px'
					this.$nextTick(function () {
						if (!this.scroll) {
					    this.scroll = new BScroll(this.$refs.moviesWrapper, {
					    	scrollX: true,
					    	eventPassthrough: 'vertical'
					    })
						} else {
							this.scroll.refresh()
						}
				 	})
				 }
			},
			selectMoreMovies() {
				console.log(this.moviesM.type)
			}
		},
		components: {
			movieitem
		},
		mounted() {
		}
	}
</script>

<style lang="scss">
	@import '../../../common/scss/variable.scss';
	@import '../../../common/scss/common.scss';
	
 .m-movie {
 	.title-wrapper {
 		padding: 23px 16px;
 		display:flex;
 		height: 16px;
    line-height: 16px;
 		.title {
 			font-size: 18px;
 			font-weight: 700;
 			color: #474747;
 			flex: 0 0 auto;
 		}
 		.more-btn {
 			flex: 1;
 			height: 24px;
 			padding: 0 10px;
 			line-height: 24px;
 			font-size: 10px;
 			text-align: right;
 			color: $green;
 			.icon {
 				width: 10px;
 				height: 10px;
 				vertical-align: middle;
 			}
 		}
 	}
 	.movies-scroll {
 		padding: 0 16px 20px;
 	}
 	.movies-wrapper {
 		display: flex;
 		overflow: hidden;
 		white-space: nowrap;
 		.movie-item-wrapper {
 			position: relative;
 			padding-right: 20px;
	 		&.coming {
	 			padding-top: 20px;
	 		}
	 		&.length.coming {
	 			margin-top: 20px;
	 		}
 			&.length {
 				display: flex;
 				width: 96px;
 				height: 144px;
 				flex-direction: column;
 				justify-content: center;
 				align-content: center;
 				background: #f4f4f4;
 				p {
 					width: 50%;
 					margin: 0 auto;
 					text-align: center;
 					@include border-b-1px();
 					color: #8f8f8f;
 					padding-bottom: 4px;
 					font-size: 12px;
 					&:last-child {
 						padding: 4px 0 0 0;
 						@include border-none();
 					}
 				}
 			}
 		}
 		.movies-border {
 			position: absolute;
 			top: 0;
 			left: 0;
 			width: 100%;
 			height: 10px;
 			line-height: 10px;
 			.text {
 				display: inline-block;
 				color: #8f8f8f;
 				font-size: 10px;
 				padding: 0 2px;
 				background: #fff;
 				z-index: 3;
 				margin-left: 8px;
 			}
 			.line {
 				position: absolute;
 				width: 100%;
 				height: 1px;
 				top: 50%;
 				left: 0;
 				transform: translateY(-50%);
 				background: rgba(7, 17, 27, .1);
 				z-index: -1;
 			}
 		}
 	}
 }
</style>

<template>
  <div class="m-movie">
   <div class="title-wrapper">
  		<h2 class="title">{{moviesM.title}}</h2>
  			<router-link :to="'/bookmovie/buymovie/' + moviesM.type" class="more-btn">
		   			更多
	  			<svg class="icon" aria-hidden="true">
			      <use xlink:href="#icon-keyboard_arrow_right"></use>
			    </svg>
		  </router-link>
  		<!--<div  @click="selectMoreMovies" >
  			
  		</div>-->
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
  	
  </div>
</template>

<script type="text/ecmascript-6">
	import movieitem from './movie-item.vue'
	import { emit } from '../../../common/js/emit.js'
	import BScroll from 'better-scroll'
  import {mHotMovies,mComingMovies} from '../../../service/getData'
	
	export default {
		data() {
			return {
				movies: {}
			}
		},
		created() {
			/*if (this.moviesM && this.moviesM.url) {
				this.$http.jsonp(this.moviesM.url).then((response) => {
				  if (response.status === 200) {
				  	let movies = response.data
						this.movies = movies
						this._initMoviesList()
						emit.$emit('initscroll', {})
					}
				})
			}*/
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
			}
		},
		mounted () {
			let currentMovie;
			if(this.moviesM.type === 1) {
				currentMovie = mComingMovies
			}else {
				currentMovie = mHotMovies
			}
			
				currentMovie().then(res => {
            let movies = res
						this.movies = movies
						this._initMoviesList()
						emit.$emit('initscroll', {})
        })
        
    },
		components: {
			movieitem
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../common/scss/variable.scss';
	@import '../../../common/scss/common.scss';
	
 .m-movie {
 	.title-wrapper {
 		padding: 1.15rem .8rem;
 		display:flex;
 		height: .8rem;
    line-height: .8rem;
 		.title {
 			font-size: .9rem;
 			font-weight: 700;
 			color: #474747;
 			flex: 0 0 auto;
 		}
 		.more-btn {
 			flex: 1;
 			height: 1.2rem;
 			padding: 0 .5rem;
 			line-height: 1.2rem;
 			font-size: .6rem;
 			text-align: right;
 			color: $green;
 			.icon {
 				width: .6rem;
 				height: .6rem;
 				vertical-align: middle;
 			}
 		}
 	}
 	.movies-scroll {
 		padding: 0 .8rem 1rem;
 	}
 	.movies-wrapper {
 		display: flex;
 		overflow: hidden;
 		white-space: nowrap;
 		.movie-item-wrapper {
 			position: relative;
 			padding-right: 1rem;
	 		&.coming {
	 			padding-top: 1rem;
	 		}
	 		&.length.coming {
	 			margin-top: 1rem;
	 		}
 			&.length {
 				display: flex;
 				width: 4.8rem;
 				height: 7.2rem;
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
 					font-size: .6rem;
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
 			height: .5rem;
 			line-height: .5rem;
 			.text {
 				display: inline-block;
 				color: #8f8f8f;
 				font-size: .5rem;
 				padding: 0 2px;
 				background: #fff;
 				z-index: 3;
 				margin-left: .4rem;
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

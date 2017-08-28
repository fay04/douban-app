<template>
  <div class="movie-item">
   <img :src="movie.images.large" width="96" height="144"/>
   <h2 class="title">{{movie.title}}</h2>
   <div class="average-wrapper"  v-if="moviesType === 0">
   	<star :rating="movie.rating"></star>
   	<p>{{movie.rating.average}}</p>
   </div>
   <div class="favorite-wrapper" v-if="moviesType === 1 && movie.collect_count">
   	{{movie.collect_count}}人想看
   </div>
  </div>
</template>

<script type="text/ecmascript-6">
	import star from './star.vue'
	
	export default {
		props: {
			movie: {
				type: Object
			},
			moviesType: {
				type: Number
			}
		},
		components: {
			star
		}
	}
</script>

<style lang="scss" scoped>
 .movie-item {
 	width: 4.8rem;
	.title {
	 	overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		font-size: .6rem;
		font-weight: 700;
		padding: .2rem 0;
	}
	.average-wrapper {
		font-size: 0;
		height: .75rem;
		& > * {
			display: inline-block;
			vertical-align: top;
		}
		p {
			line-height: .75rem;
			font-size: .45rem;
		}
	}
	.favorite-wrapper {
		font-size: .6rem;
		color: #8f8f8f;
	}
 }
</style>

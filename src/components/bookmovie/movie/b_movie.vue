<template>
  <div class="b-movie">
   <img :src="movie.images.large" width="80" height="120"/>
   <div class="movie-content">
   	<h1 class="title">{{movie.title}}</h1>
   	<star  :rating="movie.rating"></star>
   <!--	导演：庐阳{{movie.subtype}}
   	主演：
   	61002人看过-->
   </div>
   <div class="btn-buymovie">
   	<a class="empty-btn">购票</a>
   </div>
  </div>
</template>

<script type="text/ecmascript-6" >
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
	@import '../../../common/scss/common.scss';
.b-movie {
	padding: 1rem .6rem;
 	@include border-b-1px();
 	display:flex;
 	align-items:center;
 	font-size: .8rem;
 	.movie-content {
 		padding: 0 .6rem;
 		vertical-align: top;
 		flex: 1;
 		.title {
 			padding-bottom: .5rem;
 			font-weight: 700;
 		}
 	}
 		.btn-buymovie {
 			display: inline-block;
 			padding-right: .2rem;
 			.empty-btn {
	 			color: red;
	 			padding: .4rem .6rem;
	 			border: 1px solid;
	 			border-radius: .3rem;
	 			font-size: .6rem;
	 			height: 2rem;
	 			box-sizing: border-box;
 			}
 		}
}
</style>

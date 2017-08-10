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
	padding: 20px 12px;
 	@include border-b-1px();
 	display:flex;
 	align-items:center;
 	font-size: 20px;
 	.movie-content {
 		padding: 0 12px;
 		vertical-align: top;
 		flex: 1;
 		.title {
 			padding-bottom: 10px;
 			font-weight: 700;
 		}
 	}
 		.btn-buymovie {
 			display: inline-block;
 			.empty-btn {
	 			color: red;
	 			padding: 10px 15px;
	 			border: 1px solid;
	 			border-radius: 6px;
	 			font-size: 14px;
	 			height: 40px;
	 			box-sizing: border-box;
 			}
 		}
}
</style>

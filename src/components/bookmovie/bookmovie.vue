<template>
  <div class="book-movie">
   	<header>
   		<h1 class="title">书影节</h1>
   		<svg class="icon icon-search" aria-hidden="true">
	      <use xlink:href="#icon-search"></use>
	    </svg>
	    <svg class="icon icon-message" aria-hidden="true">
	      <use xlink:href="#icon-message"></use>
	    </svg>
   	</header>
   	<nav>
   		<div class="nav-item">
	   		<router-link to="/bookmovie/movie">
		   			电影
		   	</router-link>
	   	</div>
   		<div class="nav-item">
   			<router-link to="/bookmovie/book">
   				读书
   			</router-link>
   		</div>
   		<div class="nav-item">
	   		<router-link to="/bookmovie/tv">
		   		电视
	   		</router-link>
	   	</div>
	   	<div class="nav-item">
	   		<router-link to="/bookmovie/city">
		   			同城
	   		</router-link>
	   	</div>
   		<div class="nav-item">
	   		<router-link to="/bookmovie/music">
	   			音乐
	   		</router-link>
   		</div>
   	</nav>
   	<keep-alive><router-view></router-view></keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
	import split from '../common/split.vue'
	
	export default {
   	components: {
			split
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../common/scss/variable.scss';
	@import '../../common/scss/icon.scss';
	@import '../../common/scss/common.scss';
	
	.book-movie {
		header {
			text-align: center;
			font-weight: 700;
			color: #3e3e3e;
			font-size: 18px;
			@include border-b-1px();
			.title {
				height: 56px;
				line-height: 56px;
			}
			.icon {
				position: absolute;
				width: 24px;
				height: 24px;
				color: $green;
				top: 50%;
				transform: translateY(-50%);
				&.icon-search {
					right: 80px;
				}
				&.icon-message {
					right: 20px;
				}
			}
		}
		nav {
			@include border-b-1px();
			display: flex;
			text-align: center;
			.nav-item {
				position: relative;
				flex: 1;
				height: 40px;
				line-height: 40px;
				box-sizing: border-box;
				bottom: 1px;
				.active {
					display: block;
					border-bottom: 1px solid;
				}
			}
		}
	}
</style>

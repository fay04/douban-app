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
	   		<router-link to="/bookmovie/fair">
		   		市集
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
	import split from '../../common/vue/split.vue'
  import movies from './movie/movies.vue'
	
	export default {
   	components: {
			split,
			movies
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
			font-size: .9rem;
			@include border-b-1px();
			position:relative;
			background:#fff;
			.title {
				height: 2.8rem;
				line-height: 2.8rem;
			}
			.icon {
				position: absolute;
				width: 1.2rem;
				height: 1.2rem;
				color: $green;
				top: 50%;
				transform: translateY(-50%);
				&.icon-search {
					right: 4rem;
				}
				&.icon-message {
					right: 1rem;
				}
			}
		}
		nav {
			@include border-b-1px();
			display: flex;
			text-align: center;
			z-index: 99;
			background: #fff;
			.nav-item {
				position: relative;
				flex: 1;
				height: 2rem;
				line-height: 2rem;
				box-sizing: border-box;
				bottom: 1px;
				.active {
					border-bottom: 1px solid;
				}
				a {
					font-size: .7rem;
					display: block;
					box-sizing: border-box;
				}
			}
		}
	}
</style>

<template>
	<div class="movies">
		<div class="header">
			<div class="icon" @click="returnPage">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-arrow_lift"></use>
				</svg>
			</div>
			<h1 class="title">选择城市</h1>
		</div>
		<nav @click="changeCityType">
			<div class="nav-item" type="0" v-bind:class="{ active: type===0}">国内</div>
			<div class="nav-item" type="1" v-bind:class="{ active: type===1}">海外</div>
		</nav>
		<div class="content">
			<label class="search" for="search">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-search"></use>
				</svg>
				<input type="" name="" id="search" value="" placeholder="输入城市名称查询"/>
			</label>
			<div class="hotcities">
				<h1 class="title">热门城市</h1>
				<div class="cities">
					<p class="city-item">深圳</p>
					<p class="city-item">成都</p>
					<p class="city-item">成都</p>
					<p class="city-item">成都</p>
					<p class="city-item">成都</p>
					<p class="city-item">成都</p>
					<p class="city-item">成都</p>
				</div>
			</div>
			<div class="allcities">
				<h1 class="title">A</h1>
				<div class="cities">
					<p class="city-item">安徽</p>
					<p class="city-item">安徽</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import { emit } from '../js/emit.js'
	import { mHotMovies, mComingMovies } from '../../service/getData'

	export default {
		data() {
			return {
				type: 0
			}
		},
		methods: {
			changeCityType(el) {
				var dom = el.target;
				if(dom.classList.contains('nav-item') && !dom.classList.contains('active')) {
					
				}
			},
			returnPage() {
				this.$router.go(-1)
			}
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss" scoped>
	@import '../scss/common.scss';
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
		.content {
			.search {
				display: flex;
				align-content: center;
				padding: 16px;
				height: 20px;
				.icon {
					width: 18px;
					padding-right: 10px;
				}
				input {
					flex: 1 0 auto;
				}
			}
			.hotcities {
				background: #f5f5f9;
				padding: 0 16px;
				.title {
					padding: 15px 0;
				}
				.cities {
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					text-align: center;
					.city-item {
						width: 23%;
						padding: 10px;
						background: #FFFFFF;
						margin-right: 10px;
						margin-bottom: 10px;
					}
				}
			}
			.allcities {
				background: #f5f5f9;
				.title {
					padding: 5px 16px;
				}
				.cities {
					background: #FFFFFF;
					.city-item {
						padding: 10px 16px;
						@include border-b-1px();
					}
				}
			}
		}
	}
</style>
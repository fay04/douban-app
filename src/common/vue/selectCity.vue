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
		<!--<nav @click="changeCityType">
			<div class="nav-item" type="0" v-bind:class="{ active: type===0}">国内</div>
			<div class="nav-item" type="1" v-bind:class="{ active: type===1}">海外</div>
		</nav>-->
		<div class="content">
			<label class="search" for="search">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-search"></use>
				</svg>
				<input type="" name="" id="search" value="" placeholder="输入城市名称查询" @input="queryCities"/>
			</label>
			<div  ref="citiesWrapper" style="height: 400px;"> 
				<div>
					<div class="hotcities" v-if="hotcities && hotcities.length" ontouchstart>
						<h1 class="title">热门城市</h1>
						<div class="cities">
							<p v-for="hotcity in hotcities" class="city-item" >{{hotcity.name}}</p>
						</div>
					</div>
					<div class="allcities" v-if="chinaCities && chinaCities.length">
						<div v-for="lcity in chinaCities">
							<h1 class="title" v-if="lcity.list && lcity.list.length">{{lcity.initial}}</h1>
							<div class="cities" v-if="lcity.list && lcity.list.length">
								<p class="city-item"  v-for="city in lcity.list">{{city.name}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import { emit } from '../js/emit.js'
	import BScroll from 'better-scroll'
	import { hotCities, chinaCities } from '../../service/getData'
	import { mapState, mapGetters,mapMutations } from 'vuex'
	
	
	export default {
		data() {
			return {
				type: 0,
				hotcities: []/*,
				chinacities: []*/
			}
		},
		methods: {
			/*changeCityType(el) {
				var dom = el.target;
				if(dom.classList.contains('nav-item') && !dom.classList.contains('active')) {
				}
			},*/
			returnPage() {
				this.$router.go(-1)
			},
			_initScroll() {
				this.$nextTick(() => {
					if (!this.citiesScroll) {
						this.citiesScroll = new BScroll(this.$refs.citiesWrapper, {
							click: true
						})
					} else {
						this.citiesScroll.refresh()
					}
				});
			},
			...mapMutations([
                'FILTER_INFO'
            ]),
            queryCities(e) {
            	var stCity = ''
            	if(stCity) {
            		clearTimeout(stCity)
            	}
            	stCity = setTimeout(() => {
            		this.FILTER_INFO(e.target.value?e.target.value:"");
            	}, 100)
            }
		},
		mounted() {
			hotCities().then(res => {
	            let cities = res;
				this.hotcities = cities;
	       }) 
			new Promise((resolve, reject) => {
			 	this.$store.dispatch('getChinaCities');
			 	resolve()
			}).then(() => {
			  this._initScroll()
			});
		},
		computed: {
			...mapState({
			   chinaCities: 'chinaCities'
			}),
			...mapGetters({
				chinaCities: 'filterCities'
			})
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
			position: relative;
			z-index: 11;
			background: #FFFFFF;
			color: #333333;
			font-size: .9rem;
			line-height: 1.5rem;
			padding: .8rem 1rem;
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
				width: 1rem;
				height: 1rem;
				padding-right: .3rem;
			}
			.icon-small {
				vertical-align: middle;
				width: .6rem;
				height: .6rem;
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
			@include border-b-1px();
			position: relative;
			z-index: 11;
			background: #FFFFFF;
			.nav-item {
				display: inline-block;
				width: 50%;
				font-size: .7rem;
				height: 2rem;
				line-height: 2rem;
				color: #8F8F8F;
				&.active {
					border-bottom: .1rem solid #8F8F8F;
					color: #333;
				}
			}
		}
		.content {
			height: 20rem;
			.search {
				position: relative;
				z-index: 11;
				display: flex;
				align-content: center;
				padding: .6rem;
				height: 1rem;
				background: #FFFFFF;
				@include border-b-1px();
				.icon {
					width: .8rem;
					padding-right: .3rem;
				}
				input {
					flex: 1 0 auto;
					font-size: .7rem;
				}
			}
			.hotcities {
				background: #f5f5f9;
				padding: 0 .8rem;
				font-size: .6rem;
				.title {
					padding: .75rem 0;
					font-size: .7rem;
				}
				.cities {
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					text-align: center;
					.city-item {
						width: 22%;
						padding: .5rem;
						background: #FFFFFF;
						margin-right: .5rem;
						margin-bottom: .5rem;
						transition: all .2s;
						&:active {
							background: #ccc;
							color: #fff;
						}
					}
				}
			}
			.allcities {
				background: #f5f5f9;
				font-size: .6rem;
				.title {
					padding: .25rem .8rem;
					font-size: .7rem;
				}
				.cities {
					background: #FFFFFF;
					.city-item {
						padding: .6rem .8rem;
						@include border-b-1px();
					}
				}
			}
		}
	}
	
			.city-item{
				&:active {
					background: #57a95f;
					color: #fff;
				}
			}
</style>
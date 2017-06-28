<template>
  <div class="stars">
   <span class="star-item" v-for="star in getStars" >
   		<svg class="icon" aria-hidden="true">
	      <use :xlink:href="getIconType(star)"></use>
	    </svg>
   </span>
  </div>
</template>

<script type="text/ecmascript-6">
	const LENGTH = 5
	const CLS_ON = 'on'
	const CLS_HALF = 'half'
	const CLS_OFF = 'off'
	
	export default {
		data() {
			return {
			}
		},
		computed: {
			getStars() {
				let stars = new Array(LENGTH).fill(CLS_OFF)
				let ratings = this.rating.average / this.rating.max * LENGTH
				stars.map((value, i) => {
						if (i + 1 - ratings <= 0 || (Math.floor((ratings - i) * 2) >= 1 && (ratings - i) * 2 <= 2)) {
							stars[i] = CLS_ON
						} else if (Math.floor((ratings - i) * 2) >= 0 && (ratings - i) * 2 <= 1) {
							stars[i] = CLS_HALF
						} else {
							stars[i] = CLS_OFF
						}
					})
				return stars
			}
		},
		methods: {
			getIconType(star) {
				if (star === CLS_ON) {
					return '#icon-star_on'
				} else if (star === CLS_HALF) {
					return '#icon-star_half'
				}
				return '#icon-star_off'
			}
		},
		props: {
			rating: {
				type: Object
			}
		}
	}
</script>

<style lang="scss">
 .stars {
 	font-size: 0;
 	.star-item {
 		display: inline-block;
 	}
 	.icon {
 		width: 15px;
 		height: 15px;
 	}
 }
</style>

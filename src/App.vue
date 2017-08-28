<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="selectcity"></router-view>
    <div class="nav-wrapper">
   	 	<v-nav></v-nav>
    </div>
  </div>
  
</template>

<script type="text/ecmascript-6">
import nav from './components/nav/nav.vue'

export default {
  name: 'app',
  components: {
    'v-nav': nav
  }
}
</script>

<style  lang="scss">
	@import './common/scss/icon.scss';
	@import './common/scss/common.scss';
	#app {
		.nav-wrapper {
			position: fixed;
	    bottom: 0;
	    width: 100%;
	    left: 0;
	    background: #fff;
		}
	}
</style>
<!--<template>
	<div>
		<transition name="router-fade" mode="out-in">
    		<router-view></router-view>
    	</transition>
    </div>
</template>

<script>

  	export default {
    	
  	}

</script>

<style lang="scss">
  	@import './style/common';
	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>
-->
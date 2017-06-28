<template>
  <div id="app">
    <router-view></router-view>
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
	    z-index: 10;
		}
	}
</style>

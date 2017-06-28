<template>
  <div class="nav ">
  	
   <div class="icon-item">
   	<router-link to="/index">
   		 	<svg class="icon" aria-hidden="true">
		      <use xlink:href="#icon-index"></use>
		    </svg>
		    <p>首页</p>
   	</router-link>
   </div>
   <div class="icon-item">
   	<router-link to="/bookmovie">
   		 	<svg class="icon" aria-hidden="true">
		      <use xlink:href="#icon-book-team"></use>
		    </svg>
		    <p>书影节</p>
   	</router-link>
   </div>
   <div class="icon-item">
    <router-link to="/broadcast">
   		 <svg class="icon" aria-hidden="true">
	      <use xlink:href="#icon-broadcast"></use>
	    </svg>
	    <p>广播</p>
   	</router-link>
   </div>
   <div class="icon-item">
   	<router-link to="/team">
   		<svg class="icon" aria-hidden="true">
	      <use xlink:href="#icon-team"></use>
	    </svg>
	    <p>小组</p>
   	</router-link>
   </div>
   <div class="icon-item">
   	<router-link to="/me">
	   	<svg class="icon" aria-hidden="true">
	      <use xlink:href="#icon-me"></use>
	    </svg>
	    <p>我的</p>
    </router-link>
   </div>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<style lang="scss">
	@import '../../common/scss/icon.scss';
	@import '../../common/scss/common.scss';

 .nav {
 	display: flex;
 	text-align: center;
 	@include border-t-1px();
 	background: #fff;
 	padding: 8px 0;
 	.icon-item {
 		flex: 1;
 		color: #afafaf;
 		font-size: 14px;
 		.icon {
 			width: 18px;
 			height: 18px;
 			font-size: 18px;
 			margin-bottom: 8px;
 		}
 	}
 }
</style>

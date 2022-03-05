<script setup>
import TopBanner from '../components/TopBanner.vue'
</script>
<template>
	<div id="page" class="site">
			<div class="site-header mg-b">
			<div class="site-header-in">
					<div class="header-banner"><TopBanner></TopBanner></div>
					<div class="header logo-left">logo</div>
			</div>
			</div>
			<div id="content" class="site=content">
			内容主题
			</div>
			<footer id="colophon" class="footer">
			页脚部分
			</footer>
	</div>
</template>

<style>
#app{
    font-weight: var(--font-weight);
    font-size: var(--font-size);
}
.site-header{
    height: 121px;
}
.site-header-in{
    position: fixed;
    width: 100%;
    z-index: 7;
    transform: translate(0);
    transition: transform .3s;
    box-shadow: 0px 5px 40px 0px rgb(17 58 93 / 10%)
}
.header-banner .ym-menu a, .header-banner, .social-top .site-title, .top-search-button button, .top-search input {
    color: #ffffff;
    fill: #ffffff;
}
.header-banner {
    background-color: #404cba;
    background-image: url(https://pmthinking.com/wp-content/themes/b2/Assets/fontend/images/bg-top.png);
}
.header-banner {
    width: 100%;
    padding: 0 15px;
    position: relative;
    z-index: 6;
}
</style>
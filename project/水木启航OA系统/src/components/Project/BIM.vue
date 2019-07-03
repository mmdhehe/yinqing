<template>
<div class='project-BIM'>
	<!-- 侧边栏 -->
	<div class="slide">
		<Navigation :isActive='num'></Navigation>			
	</div>
	<div class="content">
	BIM族库
	</div>
</div>
</template>
<script type="text/javascript">
import Navigation from '../Navigation.vue'
export default {
	components: { Navigation },
	data() {
		return {
			num: 3
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped>
.project-BIM {
	display: flex;
	.content {
		flex: 1;
		padding-right: 30px;
	}
}
</style>
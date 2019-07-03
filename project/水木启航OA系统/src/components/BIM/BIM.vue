<template>
<div class="bim-main">
	<div class="slide">
		<Navigation :isActive='num'  v-on:ReceiveComponentId='ShowId'></Navigation>			
	</div>
	<div class='content'>BIM</div>
</div>
</template>
<script type="text/javascript">
import Navigation from "../Navigation.vue"
export default {
	components: { Navigation },
	data() {
		return {
			num: 4,
			show:''
		}
	},
	methods: {
		ShowId(data) {
			this.show = data
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped="">
.bim-main {
	display: flex;
	/* .content {
		flex: 1;
	} */
}
</style>
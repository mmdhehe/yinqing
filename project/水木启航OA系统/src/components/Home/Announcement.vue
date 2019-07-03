<template>
<div class="component-announcement">
	<div class="title">
		{{viewinfo.title}}
	</div>
	<div class="date">
		<span>时间：{{viewinfo.date}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>发布人员：{{viewinfo.publisher}}</span>
	</div>
	<div class="text">
		{{viewinfo.text}}
	</div>
</div>
</template>
<script type="text/javascript">
export default {
	props: [ 'viewinfo' ],
	created() {
		// console.log(this.viewinfo);
	}
}
</script>
<style type="text/css" lang='scss' scoped>
.component-announcement {
	padding-top: 50px;
	width: 1024px;
	margin: 0 auto;
	.title {
		font-size: 14px;
		text-align: center;
		margin-bottom: 50px;
	}
	.date {
		font-size: 12px;
		text-align: right;
		margin-bottom: 30px;
	}
	.text {
		font-size: 12px;
		margin-bottom: 30px;
		word-wrap:break-word;
	}
}
</style>
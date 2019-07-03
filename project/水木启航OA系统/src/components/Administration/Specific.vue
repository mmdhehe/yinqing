<template>
<div class="components-specific">
	<div class="content">
		<!-- 职责题目 -->
		<div class="title">{{info[0].name}}</div>
		<!-- 发布时间与发布人 -->
		<div class="info">
			<div class="date">时间：{{info[0].date}}</div>
			<div class="publisher">发布人员：{{info[0].founder}}</div>
		</div>
		<!-- 具体内容 -->
		<div class="main">
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
export default {
	props: [ 'title', 'info' ],
	created() {
		console.log(this.info);
	}
}
</script>
<style type="text/css" lang='scss' scoped>
.components-specific {
	.content {
		padding: 50px 100px;
		// border: 1px solid #ccc;
		.title {
			text-align: center;
			margin-bottom: 30px;
		}
		.info {
			display: flex;
			font-size: 12px;
			margin-bottom: 30px;
			text-align: right;
			.date {
				flex: 6;
			}
			.publisher {
				flex: 1;
			}
		}
		.main {
			font-size: 12px;
			line-height: 30px;
		}
	}
}	
</style>
<template>
<div class="common-sort">
	<!-- 分类标题 -->
	<div class="sort-title">
		<span class='classify'>分类</span><span class='edit'>+ 编辑</span>
	</div>
	<!-- 类别列表 -->
	<div class="sort-list" v-for="(item, index) in sortList" :key='index' @click='isclick' :id='index'>
		<p><i class="el-icon-folder"></i>&nbsp;{{item}}</p>
	</div>
</div>	
</template>
<script type="text/javascript">
export default {
	props: ['sortList'],
	data() {
		return {
			isshow: true
		}
	},
	methods: {
		isclick(e) {
			console.log(e.path[1].id);
			this.$emit('status', e.path[1].id);
		}
	},
	created() {
		// console.log(this.sortList);
	}
}
</script>
<style type="text/css" lang='scss' scoped>
.common-sort {
	border: 1px solid #ccc;
	line-height: 30px;
	border-radius: 3px;
	margin-right: 30px;
	.sort-title {
		padding: 5px 10px;
		font-size: 14px;
		line-height: 20px;
		border-bottom: 1px solid #ccc;
		display: flex;
		.classify {
			flex: 1;
			text-align: left;			
		}
		.edit {
			cursor: pointer;
			background-color: #2587DB;
			font-size: 12px;
			padding: 0 5px;
			border-radius: 5px;
			color: #fff;
		}	
	}
	.sort-list {
		cursor: pointer;
		padding-left: 30px;
		font-size: 12px;
		border-bottom: 1px solid #ccc;
	}
}
</style>
<!-- 项目核算表 -->
<template>
<div class='component-accountform'>
	<div class="title">项目核算表</div>
	<table class='form-info' border="1" cellspacing="0" cellpadding="0">
		<tr>
			<td>项目名称</td>
			<td colspan="2"><input type="text" v-bind:readonly="!IsBtn"></td>
			<td>项目编码</td>
			<td colspan="2"><input type="text" v-bind:readonly="!IsBtn"></td>
		</tr>
		<tr>
			<td>项目开始时间</td>
			<td colspan="2">
				<div class="block">
					<el-date-picker v-bind:readonly="!IsBtn" v-model="value1" type="date" placeholder="选择日期">
					</el-date-picker>
				</div>
			</td>
			<td>项目结束时间</td>
			<td colspan="2">
				<div class="block">
					<el-date-picker v-bind:readonly="!IsBtn" v-model="value2" type="date" placeholder="选择日期">
					</el-date-picker>
				</div>
			</td>
		</tr>
		<tr>
			<td colspan="6" class='left'>项目费用</td>
		</tr>
		<tr>
			<td>直接费用</td>
			<td><input type="text" v-bind:readonly="!IsBtn"></td>
			<td>差旅费用</td>
			<td><input type="text" v-bind:readonly="!IsBtn"></td>
			<td>外包费用</td>
			<td><input type="text" v-bind:readonly="!IsBtn"></td>
		</tr>
		<tr>
			<td>人员工资</td>
			<td><input type="text" v-bind:readonly="!IsBtn"></td>
			<td>招待费用</td>
			<td><input type="text" v-bind:readonly="!IsBtn"></td>
			<td>其他费用</td>
			<td><input type="text" v-bind:readonly="!IsBtn"></td>
		</tr>
		<tr>
			<td>费用总计</td>
			<td colspan="5"><input type="text" v-bind:readonly="!IsBtn"></td>
		</tr>
	</table>
	<div class="btn">
		<span class='submit' @click='submit' v-if='IsBtn'>提交</span>
	</div>
</div>
</template>
<script type="text/javascript">
export default {
	props: [ 'accountinfo', 'IsBtn' ],
	data() {
		return {
			// 表单数据
			formdata: {},
			// 项目开始时间
			value1: '',
			// 项目结束时间
			value2: ''
			
		}
	},
	created() {
		this.formdata = this.accountinfo;
		console.log(this.IsBtn);
	},
	methods: {
		// 提交借款申请表
		submit() {
			// 获取表单数据，并提交给后台
			
			// 返回借款列表页
			this.$emit('back', true)
		}
	}
}
</script>
<style type="text/css" lang="scss" scoped>
.component-accountform {
	padding: 0 50px;
	.left {
		padding-left: 20px;
		text-align: left;
	}
	input {
		border: none;
		outline:medium;
		width: 80%;
		padding: 0 0px;
		text-align: center;
		font-size: 12px;
	}
	select {
		border: none;
		// width: 100%;
		outline:medium;
		text-align: center;
		text-align-last: center;
	}
	textarea {
		box-sizing: border-box;
		padding: 10px;
		border: none;
		width: 100%;
		height: 100px;
		resize:none;
		display: block;
		outline:medium;
		overflow-y: scroll;
	}
	.title {
		line-height: 40px;
		text-align: center;
	}
	.form-info {
		font-size: 12px;
		width: 100%;
		line-height: 40px;
		text-align: center;
		border-collapse: collapse;
		margin-bottom: 20px;
		overflow: hidden;
		.block {
			width: 100%;
			.el-input__inner {
				border: none;
			}
			.el-date-editor.el-input,.el-date-editor.el-input__inner {
				width: 100%;
			}
		}
		td {
			span {
				margin-left: 50px;
				cursor: pointer;
			}
		}
	}
	.btn {
		text-align: center;
		span {
			font-size: 12px;
			color: #fff;
			padding: 8px 20px;
			border-radius: 5px;
			background-color: #3F51B5;
			cursor: pointer;
		}
		.count {
			margin-right: 150px;
		}
	}
}
</style>
<!-- 项目日报 -->
<template>
	<div class="component-formreport">
		<div class="title">项目工作填报报表</div>
		<table class='form-info' border="1" cellspacing="0" cellpadding="0">
			<tr>
				<td>项目名称</td>
				<td><input type="text"></td>
				<td>项目编码</td>
				<td><input type="text"></td>
				<td>填表时间</td>
				<td><input type="text"></td>
			</tr>
			<tr>
				<td>项目经理</td>
				<td><input type="text"></td>
				<td>项目进展百分比</td>
				<td><input type="text"></td>
				<td>认定完成百分比</td>
				<td><input type="text"></td>
			</tr>
			<tr>
				<td class='left' colspan='6'>项目成员及完成情况</td>
			</tr>
			<tr>
				<td>员工姓名</td>
				<td><input type="text"></td>
				<td>累计完成百分比</td>
				<td colspan='4'><input type="text"></td>
			</tr>
			<tr>
				<td colspan='2'>工作内容</td>
				<td colspan='2'>提交成果</td>
				<td colspan='2'>计划工时</td>
			</tr>
			<tr>
				<td colspan='2'><textarea></textarea></td>
				<td colspan='2'><textarea></textarea></td>
				<td colspan='2'><textarea></textarea></td>
			</tr>
			<tr>
				<td class='left' colspan='6'>分解内容</td>
			</tr>
		</table>
		<table class='form-info' border="1" cellspacing="0" cellpadding="0">
			<tr>
				<td>工作内容</td>
				<td>提交成果</td>
				<td>计划工时</td>
				<td>实际工时</td>
			</tr>
			<tr>
				<td><input type="text"></td>
				<td><input type="text"></td>
				<td><input type="text"></td>
				<td><input type="text"></td>
			</tr>
			<tr>
				<td>员工姓名</td>
				<td><input type="text"></td>
				<td>累计完成百分比</td>
				<td><input type="text"></td>
			</tr>
			<tr>
				<td>检查监督人</td>
				<td colspan="3"><input type="text"></td>
			</tr>
			<tr>
				<td>备注</td>
				<td colspan="3"><input type="text"></td>
			</tr>
		</table>
		<div class="submit" v-if='IsBtn'><span @click='submit'>提交审核</span></div>
	</div>
</template>
<script type="text/javascript">
export default {
	props: [ 'forminfo', 'IsBtn' ],
	data() {
		return {
			num: [1, 2],
			number: 1,
			// 填表时间
			value1: '',
			// 表格数据
			data: {}
		}
	},
	updated() {
		// this.$router.go(0);
	},
	created() {
		this.data = this.forminfo;
		var date = new Date;
		console.log(this.data);
	},
	methods: {
		addtip() {
			this.num.length++;
			// console.log(this.num.length)
			this.num[this.num.length-1] = this.num.length;
			// console.log(this.num.length);
			// console.log(this.num);
			this.number++;
		},
		// 提交审核按钮
		submit() {
			// 获取表单数据，发送数据到后端
			
			this.$emit('back', true)
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped>
.component-formreport {
	padding: 0 50px;
	height: 700px;
	overflow: scroll;
	text-align: center;
	margin-top: 20px;
	// 表格内文字垂直居中
	.vertical {
		width: 10px;
		line-height: 15px;
		padding: 15px 20px;
	}
	// 文字居左
	.left {
		text-align: left;
		padding-left: 20px;
		padding-right: 20px;
		span {
			display: inline-block;
			width: 20px;
			float: right;
		}
	}
	.block {
		width: 100%;
		.el-date-editor.el-input, .el-date-editor.el-input__inner {
			width: 100%;
		}
	}
	.upload {
		padding-top: 12px;
	}
	input {
		border: none;
		outline:medium;
		width: 80%;
		padding: 0 10px;
		text-align: center;
	}
	select {
		border: none;
		width: 100%;
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
	td {
		overflow: hidden;
	}
	.title {
		line-height: 40px;
		font-weight: bold;
	}
	.form-info {
		font-size: 12px;
		width: 100%;
		line-height: 40px;
		text-align: center;
		border-collapse: collapse;
		overflow: hidden;
	}
	.submit {
		margin-bottom: 20px;
		margin-top: 30px;
		span {
			padding: 10px 20px;
			cursor: pointer;
			background-color: #3F51B5;
			border: none;
			border-radius: 5px;
			color: #fff;
		}
	}
}
</style>
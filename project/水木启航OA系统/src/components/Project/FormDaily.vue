<!-- 项目个人日报 -->
<template>
	<div class="component-formdaily">
		<div class="title">项目个人日报表</div>
		<table class='form-info' border="1" cellspacing="0" cellpadding="0">
			<tr>
				<td colspan="2">员工编号</td>
				<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
				<td>姓名</td>
				<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
				<td colspan="2">填表时间</td>
				<td>
					
				</td>
			</tr>
			<tr>
				<td colspan="2">项目名称</td>
				<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
				<td>项目编码</td>
				<td colspan="4"><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
			</tr>
			<tr>
				<td colspan="4">工作内容</td>
				<td colspan="2">提交成果</td>
				<td colspan="2">计划工时</td>
			</tr>
			<tr>
				<td colspan="4"><textarea :readonly="IsBtn ? false : 'readonly'"></textarea></td>
				<td colspan="2"><textarea :readonly="IsBtn ? false : 'readonly'"></textarea></td>
				<td colspan="2"><textarea :readonly="IsBtn ? false : 'readonly'"></textarea></td>
			</tr>
			<tr>
				<td colspan="8" class='left'>分解内容<span><i class='el-icon-circle-plus-outline' @click='addtip'></i></span></td>
			</tr>
			<tr>
				<td colspan="2">工作内容</td>
				<td colspan="2">提交成果</td>
				<td colspan="2">计划工时</td>
				<td colspan="2">实际工时</td>
			</tr>
			<tr v-for='(item, index) in num' :key='index' v-model='num'>
				<td class='vertical'>{{item}}</td>
				<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
				<td colspan="2"><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
				<td colspan="2"><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
				<td colspan="2"><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
			</tr>
			<tr style="display: none">
				<td v-model='num'>{{num}}{{number}}</td>
			</tr>
			<tr>
				<td colspan="2">累计完成百分比</td>
				<td colspan="6"><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
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
.component-formdaily {
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
		margin-bottom: 20px;
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
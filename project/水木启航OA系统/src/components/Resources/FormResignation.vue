<!-- 离职申请单 -->
<template>
 <div class='components-formleave'>
	<div class="forms">
		<div class="caption">离职申请单</div>
		<table class='form-info' border="1" cellspacing="0" cellpadding="0">
			<tr>
				<td>姓名</td>
				<td><input type="text"></td>
				<td>工号</td>
				<td><input type="text"></td>
				<td>部门</td>
				<td><input type="text"></td>
			</tr>
			<tr>
				<td>职务</td>
				<td><input type="text"></td>
				<td>员工级别</td>
				<td><input type="text"></td>
				<td>离职时间</td>
				<td><input type="text"></td>
			</tr>
		</table>
		<table class='form-info' border="1" cellspacing="0" cellpadding="0">
			<tr>
				<td class='vertical'>离职原因</td>
				<td colspan='7'><textarea></textarea></td>
			</tr>
			<tr>
				<td class='vertical'>资料交接清单</td>
				<td><input type="text"></td>
				<td class='vertical'>交接人</td>
				<td><input type="text"></td>
				<td class='vertical'>签收人</td>
				<td><input type="text"></td>
				<td class='vertical'>确认</td>
				<td><input type="text"></td>
			</tr>
			<tr>
				<td class='vertical'>其他</td>
				<td colspan='7'><input type="text"></td>
			</tr>
		</table>
		<!-- <table class='form-info' border="1" cellspacing="0" cellpadding="0">
			<tr>
				<td colspan="15" class='left'>审核</td>
			</tr>
			<tr>
				<td colspan="1" class="vertical">部门经理</td>
				<td colspan="2"><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
				<td colspan="1" class="vertical">意见</td>
				<td colspan="2"><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
				<td colspan="1" class="vertical">原因</td>
				<td colspan="5"><textarea :readonly="IsDisabled ? false : 'readonly'"></textarea></td>
				<td colspan="1" class="vertical">时间</td>
				<td colspan="2"><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
			</tr>
			<tr>
				<td colspan="1" class="vertical">人事经理</td>
				<td colspan="2"><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
				<td colspan="1" class="vertical">意见</td>
				<td colspan="2"><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
				<td colspan="1" class="vertical">原因</td>
				<td colspan="5"><textarea :readonly="IsDisabled ? false : 'readonly'"></textarea></td>
				<td colspan="1" class="vertical">时间</td>
				<td colspan="2"><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
			</tr>
			<tr>
				<td colspan="1" class="vertical">总经理</td>
				<td colspan="2"><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
				<td colspan="1" class="vertical">意见</td>
				<td colspan="2"><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
				<td colspan="1" class="vertical">原因</td>
				<td colspan="5"><textarea :readonly="IsDisabled ? false : 'readonly'"></textarea></td>
				<td colspan="1" class="vertical">时间</td>
				<td colspan="2"><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
			</tr>
		</table> -->
		<div class="submit">
			<span @click='submit' v-if='IsBtn'>提交主管审批</span>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
export default {
	props: [ 'IsBtn', 'forminfo' ],
	data() {
		return {
			value1: '',
			// 请假时间
			value2: '',
			// 部门经理时间
			value3: '',
			// 总经理时间
			value4: '',
			// 表单数据
			data: {}
		}
	},
	created() {
		console.log(this.IsBtn);
		console.log(this.forminfo);
		this.data = this.forminfo;
	},
	methods: {
		// 提交按钮
		submit() {
			// 发送请求，将表单数据提交
			


			this.$emit('back', false);
		}
	}
} 
</script>
<style type="text/css" lang='scss' scoped>
.components-formleave {
	// 表格内文字垂直居中
	.vertical {
		width: 10px;
		line-height: 15px;
		padding: 15px 20px;
	}
	.left {
		padding-left: 10px;
		text-align: left;
	}
	.forms {
		padding: 0 50px;
		text-align: center;
		word-wrap:break-word;
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
			height: 100%;
			outline:medium;
			text-align: center;
			text-align-last: center;
		}
		textarea {
			box-sizing: border-box;
			padding: 10px;
			border: none;
			width: 100%;
			height: 100%;
			resize:none;
			display: block;
			outline:medium;
			overflow-y: scroll;
		}
		.caption {
			margin: 20px 0;
		}
		.form-info {
			width: 100%;
			// margin-bottom: 50px;
			font-size: 12px;
			line-height: 40px;
			border-collapse: collapse;
			.el-date-editor.el-input,.el-date-editor.el-input__inner {
				width: 100%;
			}
			.Review {
				text-align: left;
				padding-left: 10px;
			}
		}
		.submit {
			span {
				background-color: #3F51B5;
				border-radius: 3px;
				padding: 10px 20px;
				color: #fff;
				cursor: pointer;
				// margin-right: 30px;
			}
		}
	}
}
</style>
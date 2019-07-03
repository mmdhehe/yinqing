<!-- 项目竣工申请表 -->
<template>
<div class="component-form">
	<div class="title">项目竣工申请表</div>
	<table class='form-info' border="1" cellspacing="0" cellpadding="0">
		<tr>
			<td>立项人</td>
			<td><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
			<td>立项时间</td>
			<td><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
		</tr>
		<tr>
			<td>项目名称</td>
			<td><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
			<td>项目简称</td>
			<td><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
		</tr>
		<tr>
			<td>项目编码</td>
			<td><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
			<td>项目经理</td>
			<td><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
		</tr>
		<tr>
			<td>合同开始时间</td>
			<td><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
			<td>合同结束时间</td>
			<td><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
		</tr>
		<tr>
			<td colspan='4' class='left'>资料列表</td>
		</tr>
		<tr>
			<td>图纸资料</td>
			<td><input type="file"></td>
			<td>视频资料</td>
			<td><input type="file"></td>
		</tr>
		<tr>
			<td>BIM模型</td>
			<td><input type="file"></td>
			<td>项目方案</td>
			<td><input type="file"></td>
		</tr>
		<tr>
			<td>规范标准</td>
			<td><input type="file"></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td class='left' colspan='4'>总结评价</td>
		</tr>
		<tr>
			<td colspan='4'><textarea></textarea></td>
		</tr>
	</table>
	<!-- 审核 -->
	<table class='form-info' border="1" cellspacing="0" cellpadding="0">
		<tr>
			<td colspan="15" class='left'>审核</td>
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
		<tr>
			<td colspan="1" class="vertical">董事长</td>
			<td colspan="2"><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
			<td colspan="1" class="vertical">意见</td>
			<td colspan="2"><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
			<td colspan="1" class="vertical">原因</td>
			<td colspan="5"><textarea :readonly="IsDisabled ? false : 'readonly'"></textarea></td>
			<td colspan="1" class="vertical">时间</td>
			<td colspan="2"><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
		</tr>
	</table>
	<div class="submit"><el-button @click='submit' type="primary" :disabled="IsDisabled ? false : 'disabled'">提交审核</el-button></div>
	<el-steps :active="active" finish-status="success">
		<el-step title="待审核"></el-step>
		<el-step title="审核中"></el-step>
		<el-step title="已审核"></el-step>
	</el-steps>
</div>
</template>
<script type="text/javascript">
export default {
	//disabled为false时，提交审核隐藏，表单为只读 
	props: [ 'showinfo', 'disabled' ], 
	data() {
		return {
			date: '',
			// 步骤条
			active: 0,
			// 按钮是否禁用
			IsDisabled: true,
			// 计划开始时间
			value1: '',
			// 计划结束时间
			value2: '',
			// 申请部门
			value3: '',
			// 项目类别
			value4: '',
			// 项目工作成果添加
			Result: [1],
			// 工作计划添加
			plan: [1],
			project: { name: '', code: '', department: '', sort: '', manager: '', date: '', start: '', end: '', aims: '', task: '', workcontent: '', timeframe: '', SubmitResults: '', TechnicalDirector: '', TechnicalEngineer: '', PlanTime: '', ResourceArrangement: '', Process: '', GeneralManager: '', ManagerView: '', ManagerReason: '', ManagerDate: '',  Boss: '', BossView: '', BossReason: '', BossDate: '' }
		}
	},
	created() {
		var date = new Date;
		var year = date.getFullYear();
		var mouth = date.getMonth() + 1;
		var day = date.getDate();
		// console.log(year);
		this.date = year + '/' + mouth + '/' + day;
		// console.log(123, this.showinfo);
		this.project = this.showinfo;
	},
	methods: {
		submit() {
			console.log(this.project);
			console.log(this.value3)
			// 发送请求，将表格内容提交给后台
			// 步骤条进行到第二步
			this.active = 1;
			// 禁用按钮
			this.IsDisabled = false;
		},
		// 添加项目工作成果
		addresult() {
			let len = this.Result.length;
			this.Result.push(len+1);
			// console.log(len);
		},
		// 添加工作计划
		addplan() {
			let len = this.plan.length;
			this.plan.push(len+1);
			// console.log(len);
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped>
@import '../../base.scss';
.component-form {
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
	.el-steps--horizontal {
		text-align: left;
	}
	// 文字居左
	.left {
		text-align: left;
		padding-left: 20px;
	}
	.block {
		width: 100%;
		.el-date-editor.el-input, .el-date-editor.el-input__inner {
			width: 100%;
		}
	}
	input {
		border: none;
		outline:medium;
		width: 80%;
		padding: 0 10px;
		text-align: center;
	}
	.upload {
		padding-top: 12px;
	}
	i {
		float: right;
		padding-right: 20px;
		padding-top: 13px;
		cursor: pointer;
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
		margin-top: 20px;
	}
}
</style>
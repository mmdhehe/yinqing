<!-- 项目立项申请表 -->
<template>
<div class="component-form">
	<div class="title">项目立项申请表</div>
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
	</table>
	<table class='form-info' border="1" cellspacing="0" cellpadding="0">
		<tr>
			<td colspan="7" class='left'>项目工作目标</td>
		</tr>
		<tr>
			<td colspan="7"><textarea :readonly="IsDisabled ? false : 'readonly'"></textarea></td>
		</tr>
		<tr>
			<td colspan="7" class='left'>项目工作成果<i class='el-icon-circle-plus-outline' @click='addresult'></i></td>
		</tr>
		<tr>
			<td style='width: 40px'>序号</td>
			<td>成果名称</td>
			<td colspan="2">数据格式</td>
			<td colspan="2">提交时间</td>
			<td>备注</td>
		</tr>
		<tr v-for='(item, index) in Result' :key='"a"+index'>
			<td>{{item}}</td>
			<td><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
			<td colspan="2"><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
			<td colspan="2"><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
			<td><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
		</tr>
		<tr>
			<td colspan="7" class='left'>工作计划<i class='el-icon-circle-plus-outline' @click='addplan'></i></td>
		</tr>
		<tr>
			<td>序号</td>
			<td>工作任务</td>
			<td>开始时间</td>
			<td>结束时间</td>
			<td>责任人</td>
			<td>计划工时</td>
			<td>备注</td>
		</tr>
		<tr v-for='(item, index) in plan' :key='index'>
			<td>{{item}}</td>
			<td><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
			<td><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
			<td><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
			<td><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
			<td><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
			<td><input type="text" :readonly="IsDisabled ? false : 'readonly'"></td>
		</tr>
		<tr>
			<td colspan="7" class='left'>工作流程</td>
		</tr>
		<tr>
			<td colspan="7"><textarea :readonly="IsDisabled ? false : 'readonly'"></textarea></td>
		</tr>
	</table>
	<!-- <table class='form-info' border="1" cellspacing="0" cellpadding="0">
		<tr class='one'>
			<td colspan="2">项目名称</td>
			<td colspan="3"><input type="text" v-model='project.name' :readonly="disabled ? false : 'readonly'"></td>
			<td colspan="2">项目编码</td>
			<td colspan="5"><input type="text" v-model='project.code' :readonly="disabled ? false : 'readonly'"></td>
			<td colspan="2">申请部门</td>
			<td colspan="1">
				<select required v-model='value3' :disabled="disabled ? false : 'disabled'">
					<option value="" disabled selected></option> 
					<option value="A01">技术部</option>
					<option value="A02">研发部</option>
					<option value="A03">人事部</option>
					<option value="A04">财务部</option>
				</select>
			</td>
		</tr>
		<tr class='two'>
			<td colspan="2">项目类别</td>
			<td colspan="3">
				<select required v-model='value4'  :disabled="disabled ? false : 'disabled'">
					<option value="" disabled selected></option> 
					<option value="B01">技术部</option>
					<option value="B02">研发部</option>
					<option value="B03">人事部</option>
					<option value="B04">财务部</option>
				</select>
			</td>
			<td colspan="2">项目经理</td>
			<td colspan="5"><input type="text" v-model='project.manager' :readonly="disabled ? false : 'readonly'"></td>
			<td colspan="2">申请时间</td>
			<td colspan="1">{{date}}</td>
		</tr>
		<tr class='three'>
			<td colspan="2">计划开始时间</td>
			<td colspan="5">
				 <div class="block">
					<el-date-picker v-model="value1" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" :readonly="disabled ? false : 'readonly'">
					</el-date-picker>
				</div>
			</td>
			<td colspan="2">计划结束时间</td>
			<td colspan="6">
				<div class="block">
					<el-date-picker v-model="value2" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" :readonly="disabled ? false : 'readonly'">
					</el-date-picker>
				</div>
			</td>
		</tr>
		<tr class='four'>
			<td colspan="1" class="vertical">主要目标</td>
			<td colspan="14"><textarea v-model='project.aims' :readonly="disabled ? false : 'readonly'"></textarea></td>
		</tr>
		<tr class='five'>
			<td colspan="1" class="vertical">工作任务</td>
			<td colspan="14"><textarea v-model='project.task' :readonly="disabled ? false : 'readonly'"></textarea></td>
		</tr>
		<tr class='six'>
			<td colspan="15" class='left'>进度安排</td>
		</tr>
		<tr class='seven'>
			<td colspan="1" class="vertical">工作内容</td>
			<td colspan="3"><textarea v-model='project.workcontent' :readonly="disabled ? false : 'readonly'"></textarea></td>
			<td colspan="1" class="vertical">时间节点</td>
			<td colspan="7"><textarea v-model='project.timeframe' :readonly="disabled ? false : 'readonly'"></textarea></td>
			<td colspan="1" class="vertical">提交成果</td>
			<td colspan="2"><textarea v-model='project.SubmitResults' :readonly="disabled ? false : 'readonly'"></textarea></td>
		</tr>
		<tr>
			<td colspan="15" class='left'>项目组织</td>
		</tr>
		<tr>
			<td colspan="1" class="vertical">项目经理</td>
			<td colspan="1"><input type="text" v-model='project.manager' :readonly="disabled ? false : 'readonly'"></td>
			<td colspan="1" class="vertical">技术负责人</td>
			<td colspan="10"><input type="text" v-model='project.TechnicalDirector' :readonly="disabled ? false : 'readonly'"></td>
			<td colspan="1" class="vertical">技术工程师</td>
			<td colspan="1"><input type="text" v-model='project.TechnicalEngineer' :readonly="disabled ? false : 'readonly'"></td>
		</tr>
		<tr>
			<td colspan="1" class="vertical">计划工时</td>
			<td colspan="14"><textarea v-model='project.PlanTime' :readonly="disabled ? false : 'readonly'"></textarea></td>
		</tr>
		<tr>
			<td colspan="1" class="vertical">资源安排</td>
			<td colspan="14"><textarea v-model='project.ResourceArrangement' :readonly="disabled ? false : 'readonly'"></textarea></td>
		</tr>
		<tr>
			<td colspan="15" class='left'>项目流程</td>
		</tr>
		<tr>
			<td colspan="15"><textarea v-model='project.Process' :readonly="disabled ? false : 'readonly'"></textarea></td>
		</tr>
		<tr>
			<td colspan="2">项目技术文档</td>
			<td colspan="5"><div class='upload'><input type="file" name="file1" :readonly="disabled ? false : 'readonly'"></div></td>
			<td colspan="5">项目实施方案</td>
			<td colspan="3"><div class='upload'><input type="file" name="file2" :readonly="disabled ? false : 'readonly'"></div></td>
		</tr>
	</table> -->
	<table class='form-info' border="1" cellspacing="0" cellpadding="0">
		<tr>
			<td colspan="15" class='left'>审核</td>
		</tr>
		<tr>
			<td colspan="1" class="vertical">总经理</td>
			<td colspan="2"><input type="text" v-model='project.GeneralManager' :readonly="IsDisabled ? false : 'readonly'"></td>
			<td colspan="1" class="vertical">意见</td>
			<td colspan="2"><input type="text" v-model='project.ManagerView' :readonly="IsDisabled ? false : 'readonly'"></td>
			<td colspan="1" class="vertical">原因</td>
			<td colspan="5"><textarea v-model='project.ManagerReason' :readonly="IsDisabled ? false : 'readonly'"></textarea></td>
			<td colspan="1" class="vertical">时间</td>
			<td colspan="2"><input type="text" v-model='project.ManagerDate' :readonly="IsDisabled ? false : 'readonly'"></td>
		</tr>
		<tr>
			<td colspan="1" class="vertical">董事长</td>
			<td colspan="2"><input type="text" v-model='project.Boss' :readonly="IsDisabled ? false : 'readonly'"></td>
			<td colspan="1" class="vertical">意见</td>
			<td colspan="2"><input type="text" v-model='project.BossView' :readonly="IsDisabled ? false : 'readonly'"></td>
			<td colspan="1" class="vertical">原因</td>
			<td colspan="5"><textarea v-model='project.BossReason' :readonly="IsDisabled ? false : 'readonly'"></textarea></td>
			<td colspan="1" class="vertical">时间</td>
			<td colspan="2"><input type="text" v-model='project.BossDate' :readonly="IsDisabled ? false : 'readonly'"></td>
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
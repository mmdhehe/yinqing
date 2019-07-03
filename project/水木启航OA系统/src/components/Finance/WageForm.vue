<!-- 工资表 -->
<template>
<div class='component-wageform'>
	<div class="title">工资表</div>
	<table class='form-info' border="1" cellspacing="0" cellpadding="0">
		<tr>
			<td>员工编号</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
			<td>姓名</td>
			<td><input type="text" v-model='forminfo.name'></td>
			<td>身份证号</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
		</tr>
		<tr>
			<td>部门</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
			<td>岗位</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
			<td>工资卡开户行</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
		</tr>
		<tr>
			<td>工资银行卡</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
			<td>应该出勤天数</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
			<td>缺勤天数</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
		</tr>
		<tr>
			<td>实际出勤天数</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
			<td>病假天数</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
			<td>事假天数</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
		</tr>
		<tr>
			<td>年假天数</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
			<td>基本工资</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
			<td>岗位工资</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
		</tr>
		<tr>
			<td>工龄工资</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
			<td>学历津贴</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
			<td>通讯补助</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
		</tr>
		<tr>
			<td>职称补助</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
			<td>交通补助</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
			<td>餐补</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
		</tr>
		<tr>
			<td>全勤奖</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
			<td>绩效工资</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
			<td>工作奖</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
		</tr>
		<tr>
			<td>罚款</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
			<td>应付工资</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
			<td>个人所得说</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
		</tr>
		<tr>
			<td colspan="6" class='left'>代扣代缴</td>
		</tr>
		<tr>
			<td>养老</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
			<td>医疗</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
			<td>失业</td>
			<td><input type="text" v-model='forminfo.JobNumber'></td>
		</tr>
		<tr>
			<td>住房公积金</td>
			<td colspan="5"><input type="text" v-model='forminfo.JobNumber'></td>
		</tr>
		<tr>
			<td>实发工资</td>
			<td colspan="5"><input type="text" v-model='forminfo.RealWage'></td>
		</tr>
	</table>
	<div class="btn" v-if='IsBtn'>
		<span class='count' @click='count'>计算</span>
		<span class='submit' @click='submit'>提交</span>
	</div>
</div>
</template>
<script type="text/javascript">
export default {
	props: [ 'formInFo', 'IsBtn' ],
	data() {
		return {
			forminfo: {Serial:'', name: '', JobNumber: '', BasicWage: '', WageJob: '', SocialSecurity: '', RealWage: '', UploadStaff: ''}
		}
	},
	created() {
		this.forminfo = this.formInFo;
	},
	methods: {
		// 计算实际应发工资
		count() {
			this.forminfo.RealWage = 100000;
		},
		// 点击提交按钮
		submit() {
			// 获取表单数据，发送请求，添加工资信息
			
			// 返回首页
			this.$emit('back', true);
		}

	}
}
</script>
<style type="text/css" lang='scss' scoped>
.component-wageform {
	.left {
		padding-left: 20px;
		text-align: left;
	}
	input {
		border: none;
		outline:medium;
		width: 80%;
		padding: 0 10px;
		text-align: center;
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
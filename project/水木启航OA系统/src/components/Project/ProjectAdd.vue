<!-- 项目添加表 -->
<template>
<div class='form-addproject'>
	<div class="title">添加项目</div>
	<table class='form-info' border="1" cellspacing="0" cellpadding="0">
		<tr>
			<td>项目名称</td>
			<td><input type="text" v-model='data.projectname'></td>
			<td>项目编码</td>
			<td><input type="text" v-model='data.projectID'></td>
			<td>部门</td>
			<td>
				<select required v-model='data.department'>
					<option value="" disabled selected></option> 
					<option value="研发部">研发部</option>
					<option value="财务部">财务部</option>
					<option value="人事部">人事部</option>
					<option value="销售部">销售部</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>项目类别</td>
			<td>
				<select required v-model='data.sort'>
					<option value="" disabled selected></option> 
					<option value="应用类">应用类</option>
					<option value="研发类">研发类</option>
					<option value="其他">其他</option>
				</select>
			</td>
			<td>项目经理</td>
			<td><input type="text" v-model='data.ProjectManager'></td>
			<td>添加时间</td>
			<td><input type="text"v-model='data.date'></td>
		</tr>
	</table>
	<div class="submit"><span @click='submit'>提交审核</span></div>
</div>
</template>
<script type="text/javascript">
export default {
	data() {
		return {
			// 表格数据
			data: {projectname: '', projectID: '', department: '', sort: '', ProjectManager: '', date: ''}
		}
	},
	created() {
		var date = new Date;
		var year = date.getFullYear();
		var mouth = date.getMonth() + 1;
		var day = date.getDate();
		console.log(year + '/' + mouth + '/' + day);
		this.data.date = year + '/' + mouth + '/' + day;
	},
	methods: {
		// 发送请求，提交表单数据
		submit() {
			console.log(this.data);

			// 返回项目管理首页
			this.$emit('back', true);
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped>
.form-addproject {
	height: 700px;
	overflow: scroll;
	text-align: center;
	margin-top: 20px;
	// padding: 0 20px;
	padding: 0 50px;
	.title {
		line-height: 50px;
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
	.form-info {
		font-size: 12px;
		width: 100%;
		line-height: 40px;
		text-align: center;
		border-collapse: collapse;
		margin-bottom: 20px;
		overflow: hidden;
		margin-bottom: 100px;
	}
	.submit {
		span {
			background-color: #3F51B5;
			border-radius: 3px;
			padding: 10px 20px;
			color: #fff;
			cursor: pointer;
			margin-right: 30px;
		}
	}
}
</style>
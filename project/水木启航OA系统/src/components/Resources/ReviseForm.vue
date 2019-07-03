<template>
<div class='components-revise'>
	<table class='form-info' border="1" cellspacing="0" cellpadding="0">
		<tr>
			<td>工号</td>
			<td>{{editinfo.JobNum}}</td>
			<td>姓名</td>
			<td>{{editinfo.name}}</td>
			<td>日期</td>
			<td>{{editinfo.date}}</td>
		</tr>
		<tr>
			<td>上班时间</td>
			<td>{{editinfo.Working}}</td>
			<td>下班时间</td>
			<td>{{editinfo.AfterWork}}</td>
			<td>工作时长</td>
			<td>{{editinfo.WorkTime}}</td>
		</tr>
		<tr>
			<td>状态</td>
			<td>
				<select v-model='editinfo.status'>
					<option value="">正常</option>
					<option value="">迟到</option>
					<option value="">早退</option>
					<option value="">请假</option>
					<option value="">矿工</option>
				</select>
			</td>
			<td>备注</td>
			<td colspan='3'><input type="text"></td>
		</tr>
	</table>
	<div class="btn">
		<span class='submit' @click='submit'>确认</span><span class='cencal' @click='returnhome'>取消</span>
	</div>
</div>
</template>
<script type="text/javascript">
export default {
	props: [ 'editinfo' ],
	created() {
		console.log(this.editinfo)
	},
	methods: {
		submit() {
			// 发送请求，修改数据
			
			//返回首页
			this.$emit('back', true);
		},
		// 取消按钮
		returnhome() {
			//返回首页
			this.$emit('back', true);
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped>
.components-revise {
	padding: 0 100px;
	.form-info {
		width: 100%;
		margin: 0 auto;
		font-size: 12px;
		line-height: 30px;
		text-align: center;
		border-collapse: collapse;
		margin-bottom: 100px;
		input {
			border: none;
			outline:medium;
			width: 80%;
			overflow: hidden;
			// padding: 0 10px;
			// text-align: center;
		}
		select {
			border: none;
			width: 100%;
			outline:medium;
			text-align: center;
			text-align-last: center;
		}
	}
	.btn {
		text-align: center;
		.submit {
			margin-right: 100px; 
		}
		span {
			border: 1px solid #ccc;
			padding: 10px 20px;
			border-radius: 3px;
			font-size: 12px;
			background-color: #3F51B5;
			color: #fff;
			cursor: pointer;
		}
	}
}
</style>
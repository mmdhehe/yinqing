<!-- 借款申请表 -->
<template>
<div class='component-loanform'>
	<div class="title">借款申请表</div>
	<table class='form-info' border="1" cellspacing="0" cellpadding="0">
		<tr>
			<td>员工编号</td>
			<td colspan="2"><input type="text" v-bind:readonly="!IsBtn"></td>
			<td>姓名</td>
			<td colspan="2"><input type="text" v-bind:readonly="!IsBtn"></td>
			<td>借款时间</td>
			<td>
				<div class="block">
					<el-date-picker v-model="value1" type="date" placeholder="选择日期"  v-bind:readonly="!IsBtn">
					</el-date-picker>
				</div>
			</td>
		</tr>
		<tr>
			<td>借款金额</td>
			<td colspan="2"><input type="text" v-bind:readonly="!IsBtn"></td>
			<td>累计金额</td>
			<td colspan="2"><input type="text" v-bind:readonly="!IsBtn"></td>
			<td>归还时间</td>
			<td>
				<div class="block">
					<el-date-picker v-model="value2" type="date" placeholder="选择日期" v-bind:readonly="!IsBtn">
					</el-date-picker>
				</div>
			</td>
		</tr>
		<tr>
			<td>借款方式</td>
			<td colspan="2">
				<select required v-bind:disabled="!IsBtn">
					<option value="" disabled selected>请选择</option> 
					<option value="B01">打卡</option>
					<option value="B02">现金</option>
				</select>
			</td>
			<td></td>
			<td colspan="2"></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td colspan="8" class='left'>借款事由</td>
		</tr>
		<tr>
			<td colspan="8"><textarea v-bind:readonly="!IsBtn"></textarea></td>
		</tr>
		<tr>
			<td colspan="8" class='left'>审核</td>
		</tr>
		<tr>
			<td class='vertical'>总经理</td>
			<td><input type="text" v-bind:readonly="!IsBtn"></td>
			<td class='vertical'>意见</td>
			<td><input type="text" v-bind:readonly="!IsBtn"></td>
			<td class='vertical'>原因</td>
			<td><input type="text" v-bind:readonly="!IsBtn"></td>
			<td class='vertical'>时间</td>
			<td><input type="text" v-bind:readonly="!IsBtn"></td>
		</tr>
		<tr>
			<td class='vertical'>财务经理</td>
			<td><input type="text" v-bind:readonly="!IsBtn"></td>
			<td class='vertical'>意见</td>
			<td><input type="text" v-bind:readonly="!IsBtn"></td>
			<td class='vertical'>原因</td>
			<td><input type="text" v-bind:readonly="!IsBtn"></td>
			<td class='vertical'>时间</td>
			<td><input type="text" v-bind:readonly="!IsBtn"></td>
		</tr>
		<tr>
			<td class='vertical'>董事长</td>
			<td><input type="text" v-bind:readonly="!IsBtn"></td>
			<td class='vertical'>意见</td>
			<td><input type="text" v-bind:readonly="!IsBtn"></td>
			<td class='vertical'>原因</td>
			<td><input type="text" v-bind:readonly="!IsBtn"></td>
			<td class='vertical'>时间</td>
			<td><input type="text" v-bind:readonly="!IsBtn"></td>
		</tr>
		<tr>
			<td colspan="8" class='left'>财务是否已经打卡或现金支付<span>是</span><span>否</span></td>
		</tr>
	</table>
	<div class="btn">
		<span class='submit' @click='submit' v-if='IsBtn'>提交</span>
	</div>
</div>
</template>
<script type="text/javascript">
export default {
	props: [ 'loaninfo', 'IsBtn' ],
	data() {
		return {
			// 借款时间
			value1: '',
			// 归还时间
			value2: '',
			// 表单数据
			formdata: {}
			
		}
	},
	created() {
		this.formdata = this.loaninfo;
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
.component-loanform {
	padding: 0 50px;
	// 表格内文字垂直居中
	.vertical {
		width: 10px;
		line-height: 15px;
		padding: 15px 20px;
	}
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
		font-size: 12px;
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
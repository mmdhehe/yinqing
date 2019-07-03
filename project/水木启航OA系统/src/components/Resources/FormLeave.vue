<!-- 请假申请单 -->
<template>
 <div class='components-formleave'>
	<div class="forms">
		<div class="caption">请假申请单</div>
		<table class='form-info' border="1" cellspacing="0" cellpadding="0">
			<tr>
				<td colspan="2">申请人</td>
				<td colspan="2"><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
				<td colspan="2">申请单号</td>
				<td colspan="2">20190510123</td>
			</tr>
			<tr>
				<td colspan="2">申请时间</td>
				<td colspan="2">
					<el-date-picker v-model="value1" type="date" placeholder="选择日期" :readonly="IsBtn ? false : 'readonly'">
					</el-date-picker>
				</td>
				<td colspan="2">请假类型</td>
				<td colspan="2">
					<select required :disabled="IsBtn ? false : 'disabled'">
						<option value="" disabled selected>请选择</option> 
						<option value="事假">事假</option>
						<option value="病假">病假</option>
						<option value="婚假">婚假</option>
						<option value="产假">产假</option>
						<option value="丧假">丧假</option>
						<option value="其他">其他</option>
					</select>
				</td>
			</tr>
			<tr>
				<td colspan="2">请假时间</td>
				<td colspan="2">
					<el-date-picker v-model="value2" type="daterange" range-separator="--" start-placeholder="开始日期" end-placeholder="结束日期" :readonly="IsBtn ? false : 'readonly'">
					</el-date-picker>
				</td>
				<td colspan="2">共计时间</td>
				<td colspan="2"><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
			</tr>
			<tr>
				<td colspan="8" class='left'>请假事由</td>
			</tr>
			<tr>
				<td colspan="8"><textarea name="" id="" cols="30" rows="10" :readonly="IsBtn ? false : 'readonly'"></textarea></td>
			</tr>
			<tr>
				<td colspan="8" class='left'>审核</td>
			</tr>
			<tr>
				<td class='vertical'>部门经理</td>
				<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
				<td class='vertical'>意见</td>
				<td><textarea :readonly="IsBtn ? false : 'readonly'"></textarea></td>
				<td class='vertical'>原因</td>
				<td><textarea :readonly="IsBtn ? false : 'readonly'"></textarea></td>
				<td class='vertical'>时间</td>
				<td>
					<el-date-picker v-model="value3" type="date" placeholder="选择日期" :readonly="IsBtn ? false : 'readonly'">
					</el-date-picker>
				</td>
			</tr>
			<tr>
				<td class='vertical'>总经理</td>
				<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
				<td class='vertical'>意见</td>
				<td><textarea :readonly="IsBtn ? false : 'readonly'"></textarea></td>
				<td class='vertical'>原因</td>
				<td><textarea :readonly="IsBtn ? false : 'readonly'"></textarea></td>
				<td class='vertical'>时间</td>
				<td>
					<el-date-picker v-model="value4" type="date" placeholder="选择日期" :readonly="IsBtn ? false : 'readonly'">
					</el-date-picker>
				</td>
			</tr>
		</table>
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
			margin-bottom: 50px;
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
<!-- 财务报销表 -->
<template>
<div class='component-loanform'>
	<div class="title">财务报销表</div>
	<table class='form-info' border="1" cellspacing="0" cellpadding="0">
		<tr>
			<td colspan="2">工号</td>
			<td colspan="2"><input type="text" v-bind:readonly="!IsBtn"></td>
			<td colspan="2">姓名</td>
			<td colspan="2"><input type="text" v-bind:readonly="!IsBtn"></td>
			<td colspan="2">工资卡号</td>
			<td colspan="4"><input type="text"></td>
		</tr>
		<tr>
			<td colspan="2">报销类型</td>
			<td colspan="2">
				<select required v-bind:disabled="!IsBtn">
					<option value="" disabled selected>请选择</option> 
					<option value="B01">差旅报销</option>
				</select>
			</td>
			<td colspan="2">项目名称</td>
			<td colspan="2"><input type="text" v-bind:readonly="!IsBtn"></td>
			<td colspan="2">项目编码</td>
			<td colspan="4"><input type="text"></td>
		</tr>
		<tr>
			<td colspan="2">出差申请单号</td>
			<td colspan="2"><input type="text"></td>
			<td colspan="2">出差时间</td>
			<td colspan="8">
				<div class="block">
					<el-date-picker v-model="value1" type="daterange" range-separator="--" start-placeholder="开始日期" end-placeholder="结束日期">
					</el-date-picker>
				</div>
			</td>
		</tr>
		<tr>
			<td colspan="2">差旅补助</td>
			<td colspan="2">
				<select required v-bind:disabled="!IsBtn">
					<option value="" disabled selected>请选择</option> 
					<option value="B01">甲方提供食宿</option>
					<option value="B01">甲方不提供食宿</option>
				</select>
			</td>
			<td colspan="2">出差天数</td>
			<td colspan="2"><input type="text" v-bind:readonly="!IsBtn"></td>
			<td colspan="2">补助金额</td>
			<td colspan="4"><input type="text"></td>
		</tr>
		<tr>
			<td colspan="15">住宿</td>
		</tr>
		<tr>
			<td colspan="2">地点</td>
			<td colspan="2">入住时间</td>
			<td colspan="2">退房时间</td>
			<td colspan="2">金额</td>
			<td colspan="2">票据张数</td>
			<td colspan="2">附件</td>
			<td colspan="2">备注</td>
		</tr>
		<tr>
			<td colspan="2"><input type="text"></td>
			<td colspan="2">
				<div class="block">
					<el-date-picker v-model="value1" type="date" placeholder="选择日期">
					</el-date-picker>
				</div>
			</td>
			<td colspan="2">
				<div class="block">
					<el-date-picker v-model="value1" type="date" placeholder="选择日期">
					</el-date-picker>
				</div>
			</td>
			<td colspan="2"><input type="text"></td>
			<td colspan="2"><input type="text"></td>
			<td colspan="2"><input type="text"></td>
			<td colspan="2"><input type="text"></td>
		</tr>
		<tr>
			<td colspan="15">交通</td>
		</tr>
		<tr>
			<td colspan="2">出发地</td>
			<td>目的地</td>
			<td>出发时间</td>
			<td colspan="2">到达时间</td>
			<td>交通工具</td>
			<td>类型</td>
			<td>金额</td>
			<td colspan="2">票据张数</td>
			<td colspan="2">附件</td>
			<td colspan="2">备注</td>
		</tr>
		<tr>
			<td colspan="2"><input type="text"></td>
			<td><input type="text"></td>
			<td>
				<div class="block">
					<el-date-picker v-model="value1" type="date" placeholder="选择日期">
					</el-date-picker>
				</div>
			</td>
			<td colspan="2">
				<div class="block">
					<el-date-picker v-model="value1" type="date" placeholder="选择日期">
					</el-date-picker>
				</div>
			</td>
			<td>
				<select required v-bind:disabled="!IsBtn">
					<option value="" disabled selected>请选择</option> 
					<option value="B01">火车</option>
					<option value="B01">飞机</option>
				</select>
			</td>
			<td>
				<select required v-bind:disabled="!IsBtn">
					<option value="" disabled selected>请选择</option> 
					<option value="B01">火车</option>
					<option value="B01">飞机</option>
				</select>
			</td>
			<td><input type="text"></td>
			<td colspan="2"><input type="text"></td>
			<td colspan="2"><input type="file"></td>
			<td colspan="2"><input type="text"></td>
		</tr>
		<tr>
			<td colspan="15">其他</td>
		</tr>
		<tr>
			<td colspan="15"><textarea name="" id="" cols="30" rows="10"></textarea></td>
		</tr>
		<tr>
			<td colspan="3">帐款总额</td>
			<td colspan="12"><input type="text"></td>
		</tr>
	</table>
	<table class='form-info form-info2' border="1" cellspacing="0" cellpadding="0">
		<tr>
			<td colspan="15" class='left'>审核</td>
		</tr>
		<tr>
			<td colspan="2" class='vertical'>总经理</td>
			<td colspan="1"><input type="text" v-bind:readonly="!IsBtn"></td>
			<td colspan="1" class='vertical'>意见</td>
			<td colspan="3"><input type="text" v-bind:readonly="!IsBtn"></td>
			<td class='vertical'>原因</td>
			<td colspan="3"><input type="text" v-bind:readonly="!IsBtn"></td>
			<td class='vertical'>时间</td>
			<td colspan="2"><input type="text" v-bind:readonly="!IsBtn"></td>
		</tr>
		<tr>
			<td colspan="2" class='vertical'>财务经理</td>
			<td colspan="1"><input type="text" v-bind:readonly="!IsBtn"></td>
			<td colspan="1" class='vertical'>意见</td>
			<td colspan="3"><input type="text" v-bind:readonly="!IsBtn"></td>
			<td class='vertical'>原因</td>
			<td colspan="3"><input type="text" v-bind:readonly="!IsBtn"></td>
			<td class='vertical'>时间</td>
			<td colspan="2"><input type="text" v-bind:readonly="!IsBtn"></td>
		</tr>
		<tr>
			<td colspan="2" class='vertical'>董事长</td>
			<td colspan="1"><input type="text" v-bind:readonly="!IsBtn"></td>
			<td colspan="1" class='vertical'>意见</td>
			<td colspan="3"><input type="text" v-bind:readonly="!IsBtn"></td>
			<td class='vertical'>原因</td>
			<td colspan="3"><input type="text" v-bind:readonly="!IsBtn"></td>
			<td class='vertical'>时间</td>
			<td colspan="2"><input type="text" v-bind:readonly="!IsBtn"></td>
		</tr>
		<tr>
			<td colspan="15" class='left'>财务是否已经打卡或现金支付<span>是</span><span>否</span></td>
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
		padding: 0 0px;
		text-align: center;
		font-size: 12px;
	}
	select {
		border: none;
		// width: 100%;
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
		// margin-bottom: 20px;
		overflow: hidden;
		.block {
			width: 100%;
			.el-input__inner {
				border: none;
			}
			.el-date-editor.el-input,.el-date-editor.el-input__inner {
				width: 100%;
			}
		}
		td {
			span {
				margin-left: 50px;
				cursor: pointer;
			}
		}
	}
	.form-info2 {
		margin-bottom: 20px;
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
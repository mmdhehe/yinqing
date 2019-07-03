<template>
<div class='components-formtravel'>
	<div class="forms">
		<div class="caption">出差申请单</div>
		<table class='form-info' border="1" cellspacing="0" cellpadding="0">
			<tr>
				<td colspan="2">申请人</td>
				<td colspan="2"><input type="text"></td>
				<td colspan="2">申请单号</td>
				<td colspan="2"><input type="text"></td>
			</tr>
			<tr>
				<td colspan="2">申请时间</td>
				<td colspan="2"><input type="text"></td>
				<td colspan="2">项目编码</td>
				<td colspan="2"><input type="text"></td>
			</tr>
			<tr>
				<td colspan="2">出差时间</td>
				<td colspan="2">
					<div class="block">
						<el-date-picker
						v-model="value1"
						type="datetimerange"
						range-separator="---"
						start-placeholder="开始日期"
						end-placeholder="结束日期">
						</el-date-picker>
					</div>
				</td>
				<td colspan="2">出差类型</td>
				<td colspan="2">
					<select required>
						<option value="" disabled selected>请选择</option> 
						<option value="B01">项目</option>
						<option value="B02">会议</option>
						<option value="B03">学习</option>
						<option value="B03">其他</option>
					</select>
				</td>
			</tr>
			<tr>
				<td class='vertical'>目的地</td>
				<td><input type="text"></td>
				<td class='vertical'>出差事由</td>
				<td colspan="2"><textarea name="" id="" cols="10" rows="5"></textarea></td>
				<td class='vertical'>交通工具</td>
				<td colspan="2">
					<select required>
						<option value="" disabled selected>请选择</option> 
						<option value="B01">火车</option>
						<option value="B02">动车</option>
						<option value="B03">飞机</option>
						<option value="B03">汽车</option>
						<option value="B03">轮船</option>
						<option value="B03">其他</option>
					</select>
				</td>
			</tr>
			<tr>
				<td colspan="8" class='Review'>审核</td>
			</tr>
			<tr>
				<td class='vertical'>部门经理</td>
				<td><input type="text"></td>
				<td class='vertical'>意见</td>
				<td><textarea name="" id="" cols="10" rows="5"></textarea></td>
				<td class='vertical'>原因</td>
				<td><textarea name="" id="" cols="10" rows="5"></textarea></td>
				<td class='vertical'>时间</td>
				<td><input type="text"></td>
			</tr>
			<tr>
				<td class='vertical'>总经理</td>
				<td><input type="text"></td>
				<td class='vertical'>意见</td>
				<td><textarea name="" id="" cols="10" rows="5"></textarea></td>
				<td class='vertical'>原因</td>
				<td><textarea name="" id="" cols="10" rows="5"></textarea></td>
				<td class='vertical'>时间</td>
				<td><input type="text"></td>
			</tr>
		</table>
		<div class="submit" v-if='!viewinfo.name'>
			<span @click='submit'>提交主管审批</span>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
export default {
	props: [ 'viewinfo' ],
	data() {
		return {
			value1: '',
			forminfo: {}
		}
	},
	created() {
		console.log(this.viewinfo);
		this.forminfo = this.viewinfo;
	},
	methods: {
		submit() {
			// 发送请求，将表格中的数据提交到数据库
			

			// 返回出差申请列表页面
			this.$emit('back', false);
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped>
.components-formtravel {
	// 表格内文字垂直居中
	.vertical {
		width: 10px;
		line-height: 15px;
		padding: 15px 20px;
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
			.Review {
				text-align: left;
				padding-left: 10px;
			}
			.block {
				width: 100%;
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
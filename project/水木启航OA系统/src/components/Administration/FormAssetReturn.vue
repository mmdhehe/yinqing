<!-- 资产归还申请表 -->
<template>
<div class="component-assetreturn">
	<div class="title">资产归还申请表</div>
	<table class='form-info' border="1" cellspacing="0" cellpadding="0">
		<tr>
			<td style="width: 25%">申请人</td>
			<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
			<td>员工编码</td>
			<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
		</tr>
		<tr>
			<td>申请部门</td>
			<td>
				<select required :disabled="IsBtn ? false : 'disabled'">
					<option value="" disabled selected>请选择</option> 
					<option value="研发部">研发部</option>
					<option value="财务部">财务部</option>
					<option value="人事部">人事部</option>
					<option value="销售部">销售部</option>
				</select>
			</td>
			<td>申请时间</td>
			<td>
				<div class="block">
					<el-date-picker v-model="value1" type="date" placeholder="选择日期" :readonly="IsBtn ? false : 'readonly'">
					</el-date-picker>
				</div>
			</td>
		</tr>
		<tr>
			<td>资产类别</td>
			<td>资产名称</td>
			<td>编号</td>
			<td>领用人 <span class='right' @click='addline'><i class='el-icon-circle-plus-outline'></i></span></td>
		</tr>
		<tr v-for='(item, index) in Option' :key='index'>
			<td>
				<select required :disabled="IsBtn ? false : 'disabled'">
					<option value="" disabled selected>请选择</option> 
					<option value="电脑类">电脑类</option>
					<option value="电器类">电器类</option>
					<option value="家居用品">家居用品</option>
					<option value="其他">其他</option>
				</select>
			</td>
			<td>
				<select required :disabled="IsBtn ? false : 'disabled'">
					<option value="" disabled selected>请选择</option> 
					
				</select>
			</td>
			<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
			<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
		</tr>
	</table>
	<table class='form-info' border="1" cellspacing="0" cellpadding="0">
		<tr>
			<td class='vertical'>备注</td>
			<td colspan="7"><textarea :readonly="IsBtn ? false : 'readonly'"></textarea></td>
		</tr>
		<tr>
			<td colspan="8" class='left'>审核</td>
		</tr>
		<tr>
			<td class='vertical'>部门经理</td>
			<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
			<td class='vertical'>意见</td>
			<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
			<td class='vertical'>原因</td>
			<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
			<td class='vertical'>时间</td>
			<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
		</tr>
	</table>
	<div class="submit" v-if='IsBtn'>
		<span @click='submit'>提交</span>
		<span @click='cancel'>取消</span>
	</div>
</div>
</template>
<script type="text/javascript">
export default {
	props: [ 'forminfo', 'IsBtn' ],
	data() {
		return {
			// 表单数据
			data: {},
			// 申请时间
			value1: '',
			Option: [ 1 ]
		}
	},
	created() {
		// console.log(this.forminfo);
		this.data = this.forminfo;
	},
	methods: {
		handleChange(file, fileList) {
			this.fileList = fileList.slice(-10);
		},
		// 点击提交按钮
		submit() {
			//发送请求，将表单数据提交给后台
			

			// 返回首页
			this.$emit('back', true);
		},
		// 点击取消按钮
		cancel() {
			// 返回首页
			this.$emit('back', true);
		},
		// 增加
		addline() {
			this.Option.push(1);
			console.log(this.Option);
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped>
.component-assetreturn {
	text-align: center;
	.el-button--primary {
		background-color: #fff;
		border-color: #ccc;
		color: #000;
	}
	.el-date-editor.el-input {
		width: 100%;
	}
	// 表格内文字垂直居中
	.vertical {
		width: 10px;
		line-height: 15px;
		padding: 15px 20px;
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
	.left {
		text-align: left;
		padding-left: 10px;
	}
	.right {
		float: right;
		padding-right: 20px;
		padding-left: 20px;
		border-left: 1px solid #ccc;
		cursor: pointer;
	}
	.title {
		line-height: 50px;
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
		margin-top: 50px;
		margin-bottom: 20px;
		span {
			padding: 10px 20px;
			cursor: pointer;
			margin-right: 150px;
			margin-left: 150px;
			background-color: #3F51B5;
			border: none;
			border-radius: 5px;
			color: #fff;
		}
	}
}
</style>
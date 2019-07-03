<!-- 资产添加表 -->
<template>
<div class="component-asset">
	<div class="title">资产添加表</div>
	<table class='form-info' border="1" cellspacing="0" cellpadding="0">
		<tr>
			<td>名称</td>
			<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
			<td>规格</td>
			<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
			<td>编号</td>
			<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
		</tr>
		<tr>
			<td>资产类别</td>
			<td>
				<select required :disabled="IsBtn ? false : 'disabled'">
					<option value="" disabled selected>请选择</option> 
					<option value="电脑类">电脑类</option>
					<option value="电器类">电器类</option>
					<option value="家居用品">家居用品</option>
					<option value="其他">其他</option>
				</select>
			</td>
			<td>单价</td>
			<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
			<td>状态</td>
			<td>
				<select required :disabled="IsBtn ? false : 'disabled'">
					<option value="" disabled selected>请选择</option> 
					<option value="正常">正常</option>
					<option value="维修中">维修中</option>
					<option value="报废">报废</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>生产商</td>
			<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
			<td>供应商</td>
			<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
			<td>采购日期</td>
			<td>
				<div class="block">
					<el-date-picker v-model="value1" type="date" placeholder="选择日期" :readonly="IsBtn ? false : 'readonly'">
					</el-date-picker>
				</div>
			</td>
		</tr>
		<tr>
			<td>存放区域</td>
			<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
			<td>领用人</td>
			<td colspan="3"><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
		</tr>
		<tr>
			<td>备注</td>
			<td colspan="5"><textarea :readonly="IsBtn ? false : 'readonly'"></textarea></td>
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
	props: [ 'form', 'IsBtn' ],
	data() {
		return {
			// 表单数据
			data: {},
			// 采购日期
			value1: ''
		}
	},
	created() {
		console.log(this.form);
		this.data = this.form;
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
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped>
.component-asset {
	text-align: center;
	.el-button--primary {
		background-color: #fff;
		border-color: #ccc;
		color: #000;
	}
	.el-date-editor.el-input {
		width: 100%;
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
	.title {
		line-height: 50px;
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
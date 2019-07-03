<!-- 合同模板表格 -->
<template>
<div class="component-contracttemplate">
	<div class="title">合同模板</div>
	<table class='form-info' border="1" cellspacing="0" cellpadding="0">
		<tr>
			<td>合同类别</td>
			<td>
				<select required :disabled="IsBtn ? false : 'disabled'">
					<option value="" disabled selected>请选择</option> 
					<option value="承包">承包</option>
					<option value="外包">外包</option>
				</select>
			</td>
			<td>合同名称</td>
			<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
			<td>合同编码</td>
			<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
		</tr>
		<tr>
			<td>合同开始时间</td>
			<td>
				<div class="block">
					<el-date-picker v-model="value1" type="date" placeholder="选择日期" :readonly="IsBtn ? false : 'readonly'">
					</el-date-picker>
				</div>
			</td>
			<td>合同结束时间</td>
			<td>
				<div class="block">
					<el-date-picker v-model="value2" type="date" placeholder="选择日期" :readonly="IsBtn ? false : 'readonly'">
					</el-date-picker>
				</div>
			</td>
			<td>签约日期</td>
			<td>
				<div class="block">
					<el-date-picker v-model="value3" type="date" placeholder="选择日期" :readonly="IsBtn ? false : 'readonly'">
					</el-date-picker>
				</div>
			</td>
		</tr>
		<tr>
			<td>对方公司联系人</td>
			<td><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
			<td>联系电话</td>
			<td colspan="4"><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
		</tr>
		<tr>
			<td>上传时间</td>
			<td>
				<div class="block">
					<el-date-picker v-model="value4" type="date" placeholder="选择日期" :readonly="IsBtn ? false : 'readonly'">
					</el-date-picker>
				</div>
			</td>
			<td>上传人员</td>
			<td colspan="4"><input type="text" :readonly="IsBtn ? false : 'readonly'"></td>
		</tr>
		<tr>
			<td colspan="6" class='left'>合同内容</td>
		</tr>
		<tr>
			<td colspan="6"><textarea :readonly="IsBtn ? false : 'readonly'"></textarea></td>
		</tr>
		<tr>
			<td colspan="6" class='left'>合同附件</td>
		</tr>
		<tr>
			<td colspan="6" class='left'>
				<el-upload :disabled="IsBtn ? false : 'disabled'" class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList" >
					<el-button size="small" type="primary">点击上传</el-button>
				</el-upload>
			</td>
		</tr>
	</table>
	<div class="submit">
		<span @click='submit' v-if='IsBtn'>提交</span>
	</div>
</div>
</template>
<script type="text/javascript">
export default {
	props: [ 'forminfo', 'IsBtn' ],
	data() {
		return {
			// 合同开始时间
			value1: '',
			// 合同结束时间
			value2: '',
			// 签约日期
			value3: '',
			// 上传时间
			value4: '',
			// 表单数据
			data: {},
			fileList: [{
				name: 'food.jpeg',
				url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}, {
				name: 'food2.jpeg',
				url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
			}]
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
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped>
.component-contracttemplate {
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
			background-color: #3F51B5;
			border: none;
			border-radius: 5px;
			color: #fff;
		}
	}
}
</style>
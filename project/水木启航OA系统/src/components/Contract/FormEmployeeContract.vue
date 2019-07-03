<!-- 员工合同添加 -->
<template>
<div class="component-contract">
	<div class="title">员工合同添加</div>
	<table class='form-info' border="1" cellspacing="0" cellpadding="0">
		<tr>
			<td>合同编号</td>
			<td><input type="text"></td>
			<td>员工姓名</td>
			<td><input type="text"></td>
			<td>员工工号</td>
			<td><input type="text"></td>
		</tr>
		<tr>
			<td>合同类型</td>
			<td>
				<select required :disabled="IsBtn ? false : 'disabled'">
					<option value="" disabled selected>请选择</option> 
					<option value="无固定期限合同">无固定期限合同</option>
					<option value="固定期限合同">固定期限合同</option>
				</select>
			</td>
			<td>年限</td>
			<td>
				<select required :disabled="IsBtn ? false : 'disabled'">
					<option value="" disabled selected>请选择</option> 
					<option value="1年">1年</option>
					<option value="2年">2年</option>
					<option value="3年">3年</option>
					<option value="5年">5年</option>
					<option value="10年">10年</option>
				</select>
			</td>
			<td>试用期时间</td>
			<td>
				<select required :disabled="IsBtn ? false : 'disabled'">
					<option value="" disabled selected>请选择</option> 
					<option value="一个月">一个月</option>
					<option value="两个月">两个月</option>
					<option value="三个月">三个月</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>签订日期</td>
			<td>
				<div class="block">
					<el-date-picker v-model="value2" type="date" placeholder="选择日期" :readonly="IsBtn ? false : 'readonly'">
					</el-date-picker>
				</div>
			</td>
			<td>生效日期</td>
			<td>
				<div class="block">
					<el-date-picker v-model="value3" type="date" placeholder="选择日期" :readonly="IsBtn ? false : 'readonly'">
					</el-date-picker>
				</div>
			</td>
			<td>终止日期</td>
			<td>
				<div class="block">
					<el-date-picker v-model="value4" type="date" placeholder="选择日期" :readonly="IsBtn ? false : 'readonly'">
					</el-date-picker>
				</div>
			</td>
		</tr>
		<tr>
			<td>提醒日期</td>
			<td>
				<div class="block">
					<el-date-picker v-model="value5" type="date" placeholder="选择日期" :readonly="IsBtn ? false : 'readonly'">
					</el-date-picker>
				</div>
			</td>
			<td>填表人员</td>
			<td><input type="text"></td>
			<td>填表日期</td>
			<td>{{value6}}</td>
		</tr>
		<tr>
			<td>状态</td>
			<td>
				<select required :disabled="IsBtn ? false : 'disabled'">
					<option value="" disabled selected>请选择</option> 
					<option value="正常">正常</option>
					<option value="续约">续约</option>
					<option value="终止">终止</option>
				</select>
			</td>
			<td colspan="4"></td>
		</tr>
		<tr>
			<td colspan="6" class='left'>附件描述</td>
		</tr>
		<tr>
			<td colspan="6"><textarea></textarea></td>
		</tr>
		<tr>
			<td colspan="6" class='left'>
				<!-- <el-upload :disabled="IsBtn ? false : 'disabled'" class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList" >
					<el-button size="small" type="primary">点击上传</el-button>
				</el-upload> -->
				<input type="file">
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
			// // 试用期时间
			// value1: '',
			// 签订日期
			value2: '',
			// 生效日期
			value3: '',
			// 终止日期
			value4: '',
			// 提醒日期
			value5: '',
			// // 填表日期
			value6: '',
			// 表单数据
			data: {},
			handleChange(file, fileList) {
				this.fileList = fileList.slice(-10);
			},
			fileList: []
		}
	},
	created() {
		// console.log(this.forminfo);
		this.data = this.forminfo;
		var date = new Date;
		var year = date.getFullYear();
		var mouth = date.getMonth() + 1;
		var day = date.getDate();
		console.log(year + '/' + mouth + '/' + day);
		this.value6 = year + '/' + mouth + '/' + day;
	},
	methods: {
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
.component-contract {
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
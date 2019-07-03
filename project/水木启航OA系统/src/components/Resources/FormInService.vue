<!-- 在职人员登记表 -->
<template>
<div class='component-forminservice'>
</div>
</template>
<!-- 离职申请单 -->
<template>
 <div class='components-formleave'>
	<div class="forms">
		<div class="caption">在职人员登记表</div>
		<table class="form-info" border="1" cellspacing="0" cellpadding="0">
			<tr>
				<td>姓名</td>
				<td><input type="text"></td>
				<td>性别</td>
				<td>
					<select required>
						<option value="" disabled selected></option> 
						<option value="B01">男</option>
						<option value="B02">女</option>
					</select>
				</td>
				<td>年龄</td>
				<td><input type="text"></td>
				<td rowspan='6'>照片</td>
			</tr>
			<tr>
				<td>来源</td>
				<td>
					<select required>
						<option value="" disabled selected></option> 
						<option value="B01">社招</option>
						<option value="B02">校招</option>
						<option value="B03">推荐</option>
					</select>
				</td>
				<td>籍贯</td>
				<td>
					<select required>
						<option value="" disabled selected></option> 
						<option value="B01">大专</option>
						<option value="B02">本科</option>
						<option value="B03">研究生</option>
						<option value="B03">其他</option>
					</select>
				</td>
				<td>民族</td>
				<td>
					<select required>
						<option value="" disabled selected></option> 
						<option value="B01">大专</option>
						<option value="B02">本科</option>
						<option value="B03">研究生</option>
						<option value="B03">其他</option>
					</select>
				</td>
			</tr>
			<tr>
				<td>身高</td>
				<td>
					<select required>
						<option value="" disabled selected></option> 
						<option value="B01">大专</option>
						<option value="B02">本科</option>
						<option value="B03">研究生</option>
						<option value="B03">其他</option>
					</select>
				</td>
				<td>出生年月</td>
				<td>
					<div class="block">
						<el-date-picker v-model="value2" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日">
						</el-date-picker>
					</div>
				</td>
				<td>健康状态</td>
				<td>
					<select required>
						<option value="" disabled selected></option> 
						<option value="B01">健康</option>
						<option value="B02">一般</option>
						<option value="B03">较差</option>
					</select>
				</td>
			</tr>
			<tr>
				<td>婚育状况</td>
				<td>
					<select required>
						<option value="" disabled selected></option> 
						<option value="B01">未婚</option>
						<option value="B02">已婚未育</option>
						<option value="B03">已婚已育</option>
					</select>
				</td>
				<td>身份证号</td>
				<td><input type="text"></td>
				<td>最高学历</td>
				<td>
					<select required>
						<option value="" disabled selected></option> 
						<option value="B01">大专</option>
						<option value="B02">本科</option>
						<option value="B03">研究生</option>
						<option value="B03">其他</option>
					</select>
				</td>
			</tr>
			<tr>
				<td>毕业院校</td>
				<td>
					<select required>
						<option value="" disabled selected></option> 
						<option value="B01">大专</option>
						<option value="B02">本科</option>
						<option value="B03">研究生</option>
						<option value="B03">其他</option>
					</select>
				</td>
				<td>专业</td>
				<td><input type="text"></td>
				<td>证书附件</td>
				<td><input type="text"></td>
			</tr>
			<tr>
				<td>固定电话</td>
				<td><input type="text"></td>
				<td>移动电话</td>
				<td><input type="text"></td>
				<td>邮箱地址</td>
				<td><input type="text"></td>
			</tr>
			<tr>
				<td>员工编号</td>
				<td><input type="text"></td>
				<td>入职时间</td>
				<td>
					<div class="block">
						<el-date-picker v-model="value1" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日">
						</el-date-picker>
					</div>
				</td>
				<td>所属部门</td>
				<td colspan="2">
					<select required>
						<option value="" disabled selected></option> 
						<option value="B01">大专</option>
						<option value="B02">本科</option>
						<option value="B03">研究生</option>
						<option value="B03">其他</option>
					</select>
				</td>
			</tr>
			<tr>
				<td>职位</td>
				<td><input type="text"></td>
				<td>工资定级</td>
				<td><input type="text"></td>
				<td>银行卡号</td>
				<td colspan="2"><input type="text"></td>
			</tr>
			<tr>
				<td rowspan='4' class='vertical'>教育经历</td>
				<td>开始时间</td>
				<td>结束时间</td>
				<td colspan="2">学校（高中填起）</td>
				<td>专业</td>
				<td>外语语种及程度</td>
			</tr>
			<tr>
				<td>
					<select required>
						<option value="" disabled selected></option> 
						<option value="B01">大专</option>
						<option value="B02">本科</option>
						<option value="B03">研究生</option>
						<option value="B03">其他</option>
					</select>
				</td>
				<td>
					<select required>
						<option value="" disabled selected></option> 
						<option value="B01">大专</option>
						<option value="B02">本科</option>
						<option value="B03">研究生</option>
						<option value="B03">其他</option>
					</select>
				</td>
				<td colspan="2"><input type="text"></td>
				<td><input type="text"></td>
				<td><input type="text"></td>
			</tr>
			<tr>
				<td><input type="text"></td>
				<td><input type="text"></td>
				<td colspan="2"><input type="text"></td>
				<td><input type="text"></td>
				<td><input type="text"></td>
			</tr>
			<tr>
				<td><input type="text"></td>
				<td><input type="text"></td>
				<td colspan="2"><input type="text"></td>
				<td><input type="text"></td>
				<td><input type="text"></td>
			</tr>
			<tr>
				<td rowspan='4' class='vertical'>工作经历</td>
				<td>开始时间</td>
				<td>结束时间</td>
				<td colspan="2">工作单位</td>
				<td>职务及工作内容</td>
				<td>离职原因</td>
			</tr>
			<tr>
				<td><input type="text"></td>
				<td><input type="text"></td>
				<td colspan="2"><input type="text"></td>
				<td><input type="text"></td>
				<td><input type="text"></td>
			</tr>
			<tr>
				<td><input type="text"></td>
				<td><input type="text"></td>
				<td colspan="2"><input type="text"></td>
				<td><input type="text"></td>
				<td><input type="text"></td>
			</tr>
			<tr>
				<td><input type="text"></td>
				<td><input type="text"></td>
				<td colspan="2"><input type="text"></td>
				<td><input type="text"></td>
				<td><input type="text"></td>
			</tr>
			<tr>
				<td rowspan='4' class='vertical'>家庭成员</td>
				<td>姓名</td>
				<td>与本人关系</td>
				<td colspan="3">工作单位及职务</td>
				<td>联系电话</td>
			</tr>
			<tr>
				<td><input type="text"></td>
				<td><input type="text"></td>
				<td colspan="3"><input type="text"></td>
				<td><input type="text"></td>
			</tr>
			<tr>
				<td><input type="text"></td>
				<td><input type="text"></td>
				<td colspan="3"><input type="text"></td>
				<td><input type="text"></td>
			</tr>
			<tr>
				<td><input type="text"></td>
				<td><input type="text"></td>
				<td colspan="3"><input type="text"></td>
				<td><input type="text"></td>
			</tr>
			<tr>
				<td colspan="2">兴趣爱好</td>
				<td><input type="text"></td>
				<td colspan="2">计算机水平</td>
				<td colspan="2"><input type="text"></td>
			</tr>
			<tr>
				<td colspan="7" class='left'>面试评点</td>
			</tr>
			<tr>
				<td colspan="2">资料是否真实</td>
				<td colspan="5">
					<select required>
						<option value="" disabled selected></option> 
						<option value="B01">是</option>
						<option value="B02">否</option>
					</select>
				</td>
			</tr>
			<tr>
				<td colspan="2">仪容仪表</td>
				<td colspan="5"><input type="text"></td>
			</tr>
			<tr>
				<td class='vertical'>专业水平</td>
				<td colspan="6"><input type="text"></td>
			</tr>
			<tr>
				<td class='vertical'>其他</td>
				<td colspan="6"><input type="text"></td>
			</tr>
			<tr>
				<td class='vertical'>设备发放</td>
				<td colspan="6"><input type="text"></td>
			</tr>
			<tr>
				<td class='vertical'>备注</td>
				<td colspan="6"><input type="text"></td>
			</tr>
		</table>
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
			// margin-bottom: 50px;
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
<!-- 面试人员登记表 -->
<template>
	<div class="components-formentry">
		<div class="forms">
			<div class="caption">面试人员登记表</div>
			<table class='form-info' border="1" cellspacing="0" cellpadding="0">
			<!-- 第一行 -->
				<tr class='one'>
					<td>姓名</td>
					<td><input type="text" v-model='project.name'></td>
					<td>性别</td>
					<td>
						<select required>
							<option value="" disabled selected></option> 
							<option value="A01">男</option>
							<option value="A02">女</option>
						</select>
					</td>
					<td>年龄</td>
					<td><input type="text" v-model='project.code'></td>
					<td colspan="2" rowspan='6' class='picture'><input type="file"></td>
				</tr>
				<!-- 第二行 -->
				<tr class='two'>
					<td>来源</td>
					<td>
						<select required>
							<option value="" disabled selected></option> 
							<option value="B01">校招</option>
							<option value="B02">社招</option>
							<option value="B03">推荐</option>
						</select>
					</td>
					<td>籍贯</td>
					<td>
						<select required>
							<option value="" disabled selected></option> 
							<option value="B01">校招</option>
							<option value="B02">社招</option>
							<option value="B03">推荐</option>
						</select>
					</td>
					<td>民族</td>
					<td>{{date}}</td>
				</tr>
				<!-- 第三行 -->
				<tr class='three'>
					<td>身高</td>
					<td><input type="type"></td>
					<td>出生年月</td>
					<td>
						<div class="block">
							<el-date-picker v-model="value1" type="date" placeholder="选择日期">
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
				<tr class='four'>
					<td>婚育状况</td>
					<td>
						<select required>
							<option value="" disabled selected></option> 
							<option value="B01">未婚</option>
							<option value="B02">已婚已育</option>
							<option value="B03">已婚未育</option>
						</select>
					</td>
					<td>身份证号</td>
					<td><input type="type"></td>
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
				<tr class='five'>
					<td>毕业院校</td>
					<td><input type="type"></td>
					
					<td>专业</td>
					<td><input type="type"></td>
				
					<td>证书附件</td>
					<td><input type="file"></td>
					
				</tr>
				<tr class='six'>
					<td>固定电话</td>
					<td><input type="type"></td>
					
					<td>移动电话</td>
					<td><input type="type"></td>
		
					<td>邮箱地址</td>
					<td><input type="type"></td>

				</tr>
				<tr class='seven'>
					<td rowspan='4'>教育经历</td>
					<td>开始时间</td>
					<td>结束时间</td>
					<td colspan="2">学校（高中填起）</td>
					<td>专业</td>
					<td>外语语种及程度</td>
				</tr>
				<tr>
					<td><input type="date" v-model='project.manager'></td>
					<td><input type="date" v-model='project.manager'></td>
					<td colspan="2"><input type="text" v-model='project.manager'></td>
					<td><input type="text" v-model='project.manager'></td>
					<td><input type="text" v-model='project.manager'></td>
				</tr>
				<tr>
					<td><input type="date" v-model='project.manager'></td>
					<td><input type="date" v-model='project.manager'></td>
					<td colspan="2"><input type="text" v-model='project.manager'></td>
					<td><input type="text" v-model='project.manager'></td>
					<td><input type="text" v-model='project.manager'></td>
				</tr>
				<tr>
					<td><input type="date" v-model='project.manager'></td>
					<td><input type="date" v-model='project.manager'></td>
					<td colspan="2"><input type="text" v-model='project.manager'></td>
					<td><input type="text" v-model='project.manager'></td>
					<td><input type="text" v-model='project.manager'></td>
				</tr>
				<tr>
					<td rowspan='4'>工作经历</td>
					<td>开始时间</td>
					<td>结束时间</td>
					<td>工作单位</td>
					<td colspan="2">职务及工作内容</td>
					<td>离职原因</td>
				</tr>
				<tr>
					<td><input type="date" v-model='project.manager'></td>
					<td><input type="date" v-model='project.manager'></td>
					<td><input type="text" v-model='project.manager'></td>
					<td colspan="2"><input type="text" v-model='project.manager'></td>
					<td><input type="text" v-model='project.manager'></td>
				</tr>
				<tr>
					<td><input type="date" v-model='project.manager'></td>
					<td><input type="date" v-model='project.manager'></td>
					<td><input type="text" v-model='project.manager'></td>
					<td colspan="2"><input type="text" v-model='project.manager'></td>
					<td><input type="text" v-model='project.manager'></td>
				</tr>
				<tr>
					<td><input type="date" v-model='project.manager'></td>
					<td><input type="date" v-model='project.manager'></td>
					<td><input type="text" v-model='project.manager'></td>
					<td colspan="2"><input type="text" v-model='project.manager'></td>
					<td><input type="text" v-model='project.manager'></td>
				</tr>
				<tr>
					<td rowspan='4'>家庭成员</td>
					<td>姓名</td>
					<td>与本人关系</td>
					<td colspan="2">工作单位及职务</td>
					<td colspan="2">联系电话</td>
				</tr>
				<tr>
					<td><input type="text" v-model='project.manager'></td>
					<td><input type="text" v-model='project.manager'></td>
					<td colspan="2"><input type="text" v-model='project.manager'></td>
					<td colspan="2"><input type="text" v-model='project.manager'></td>
				</tr>
				<tr>
					<td><input type="text" v-model='project.manager'></td>
					<td><input type="text" v-model='project.manager'></td>
					<td colspan="2"><input type="text" v-model='project.manager'></td>
					<td colspan="2"><input type="text" v-model='project.manager'></td>
				</tr>
				<tr>
					<td><input type="text" v-model='project.manager'></td>
					<td><input type="text" v-model='project.manager'></td>
					<td colspan="2"><input type="text" v-model='project.manager'></td>
					<td colspan="2"><input type="text" v-model='project.manager'></td>
				</tr>
				<tr>
					<td colspan="2">兴趣爱好</td>
					<td colspan="2"><input type="text" v-model='project.manager'></td>
					<td colspan="2">计算机水平</td>
					<td colspan="2"><input type="text" v-model='project.manager'></td>
				</tr>
			</table>
			<!-- 面试预约表格 状态：待面试 面试 -->
			<div v-if='IsReservation'>
				<div class="caption">面试预约表格</div>
				<table class='form-info' border="1" cellspacing="0" cellpadding="0">
					<tr>
						<td>面试人员</td>
						<td colspan="6"><input type="text"></td>
					</tr>
					<tr>
						<td>面试时间</td>
						<td colspan="6"><input type="text"></td>
					</tr>
					<tr>
						<td>面试地址</td>
						<td colspan="6"><input type="text"></td>
					</tr>
				</table>
			</div>
			<!-- 面试点评表格 状态：面试 待入职-->
			<div v-if='IsReview'>
				<div class="caption">面试点评表格</div>
				<table class='form-info' border="1" cellspacing="0" cellpadding="0">
					<tr>
						<td>姓名</td>
						<td colspan="3"><input type="text"></td>
						<td>资料是否真实</td>
						<td colspan="3"><input type="text"></td>
					</tr>
					<tr>
						<td>仪容仪表</td>
						<td colspan="6"></td>
					</tr>
					<tr>
						<td>工资定级</td>
						<td colspan="6"></td>
					</tr>
					<tr>
						<td>专业水平</td>
						<td colspan="6"></td>
					</tr>
					<tr>
						<td>其他</td>
						<td colspan="6"></td>
					</tr>
				</table>
			</div>
			<!-- 待入职表格 状态： 待入职-->
			<div v-if='IsWaiting'>
				<div class="caption">待入职表格</div>
				<table class='form-info' border="1" cellspacing="0" cellpadding="0">
					<tr>
						<td>姓名</td>
						<td><input type="text"></td>
						<td>预计入职时间</td>
						<td><input type="text"></td>
					</tr>
				</table>
			</div>
			<!-- 入职表格 -->
			<div v-if='IsEntry'>
				<div class="caption">入职表格</div>
				<table class='form-info' border="1" cellspacing="0" cellpadding="0">
					<tr>
						<td>姓名</td>
						<td><input type="text"></td>
						<td>入职时间</td>
						<td><input type="text"></td>
					</tr>
					<tr>
						<td>员工编号</td>
						<td><input type="text"></td>
						<td>所属部门</td>
						<td><input type="text"></td>
					</tr>
					<tr>
						<td>职位</td>
						<td><input type="text"></td>
						<td>银行卡号</td>
						<td><input type="text"></td>
					</tr>
					<tr>
						<td>设备发放</td>
						<td colspan="6"><input type="text"></td>
					</tr>
					<tr>
						<td>备注</td>
						<td colspan="6"><input type="text"></td>
					</tr>
				</table>
			</div>
		</div>
		<div class="submit">
			<div class="submit1" v-if='IsSubmit1'>
				<div><p>根据以上资料，是否需要进行面试？</p><span @click='clicksubmit1'>是</span><span>否</span></div>
			</div>
			<div class="submit2" v-if='IsSubmit2'>
				<div><span @click='clicksubmit2'>提交</span><span>取消</span></div>
			</div>
			<div class="submit3" v-if='IsSubmit3'>
				<p>是否已完成面试？</p>
				<p><span @click='clicksubmit3'>是</span><span>否</span></p>
			</div>
			<div class="submit4" v-if='IsSubmit4'>
				<p>是否决定录用？</p>
				<p><span @click='clicksubmit4'>是</span><span>否</span></p>
			</div>
			<div class="submit5" v-if='IsSubmit5'>
				<span @click='clicksubmit5'>提交</span>
			</div>
			<div class="submit6" v-if='IsSubmit6'>
				<span @click='clicksubmit6'>入职</span><span>取消</span>
			</div>
			<div class="submit7" v-if='IsSubmit7'>
				<span @click='clicksubmit7'>提交</span>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
	props: [ 'showinfo', 'arr' ],
	data() {
		return {
			date: '',
			show: 0,
			project: {},
			// 判断表格的显隐
			// 是否显示面试预约表格
			IsReservation: true,
			// 是否显示面试评点表格
			IsReview: true,
			// 是否显示待入职表格
			IsWaiting: true,
			// 是否显示入职表格
			IsEntry: true,
			// 判断按钮的显隐
			// 是否进行面试
			IsSubmit1: true,
			// 是否进行面试预约
			IsSubmit2: true,
			// 是否已完成面试
			IsSubmit3: true,
			// 是否决定录用
			IsSubmit4: true,
			// 是否待入职
			IsSubmit5: true,
			// 是否入职
			IsSubmit6: true,
			// 入职提交
			IsSubmit7: true,
			// 出生年月
			value1: ''
		}
	},
	created() {
		console.log(this.arr);
		this.IsReservation = this.arr[0];
		this.IsReview = this.arr[1];
		this.IsWaiting = this.arr[2];
		this.IsEntry = this.arr[3];
		this.IsSubmit1 = this.arr[4];
		this.IsSubmit2 = this.arr[5];
		this.IsSubmit3 = this.arr[6];
		this.IsSubmit4 = this.arr[7];
		this.IsSubmit5 = this.arr[8];
		this.IsSubmit6 = this.arr[9];
		this.IsSubmit7 = this.arr[10];	
	},
	methods: {
		
		// 取消按钮，返回首页，将信息加入人才库
		cancel() {
			// 发送请求，将信息加入人才库	
			// 返回首页
			this.$emit('back', true);
		},
		// 点击第一个按钮
		clicksubmit1() {
			this.IsReservation = true;
			this.IsSubmit1 = false;
			this.IsSubmit2 = true;
		},
		// 点击第二个按钮，面试预约提交
		clicksubmit2() {
			this.$emit('back', true);
			this.$emit('label', 'second');
		},
		// 点击第三个按钮，是否已完成面试
		clicksubmit3() {
			this.IsReservation = false;
			this.IsReview = true;
			this.IsSubmit3 = false;
			this.IsSubmit4 = true;
		},
		// 点击第四个按钮，是否决定录用
		clicksubmit4() {
			this.IsReview = true;
			this.IsWaiting = true;
			this.IsSubmit4 = false;
			this.IsSubmit5 = true;
		},
		// 点击第五个按钮，是否待入职
		clicksubmit5() {
			this.$emit('back', true);
			this.$emit('label', 'third');
		},
		// 点击第六个按钮，是否入职
		clicksubmit6() {
			this.IsWaiting = false;
			this.IsEntry = true;
			this.IsSubmit6 = false;
			this.IsSubmit7 = true;
		},
		// 点击第七个按钮，入职
		clicksubmit7() {
			this.$emit('back', true);
			this.$emit('label', 'fourth');
		}

	}
}
</script>
<style type="text/css" lang='scss' scoped="">
.components-formentry {
	text-align: center;
	width: 100%;
	line-height: 30px;
	font-size: 12px;
	word-wrap:break-word;
	padding-bottom: 50px;
	.block {
		width: 100%;
		.el-input--suffix .el-input__inner {
			padding: 0;
		}
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
		height: 100%;
		resize:none;
		display: block;
		outline:medium;
		overflow-y: scroll;
	}
	.picture {
		width: 100px;
	}
	.caption {
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
		span {
			background-color: #3F51B5;
			border-radius: 3px;
			padding: 10px 20px;
			color: #fff;
			cursor: pointer;
			margin-right: 30px;
		}
	}
}
</style>
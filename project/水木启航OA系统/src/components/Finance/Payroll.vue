<template>
<div class="finance-payroll">
	<!-- 侧边栏 -->
	<div class="slide">
		<Navigation :isActive='num'></Navigation>			
	</div>
	<!-- 页面 -->
	<div class="main">
		<!-- 员工工资表 -->
		<div class="Employee-salary"  v-if='show'>
			<div class="page">
				<!-- 标题 -->
				<div class="title">财务管理</div>
				<!-- 主要内容 -->
				<div class="content">
					<el-tabs tab-position="left" v-model="activeName">
						<el-tab-pane label="个人工资表" name='first'>
							<div class="wage-list">
								<div class="title">
									<span @click='addstaff'>+ 添加</span>
									<el-date-picker v-model="value1" type="month" placeholder="选择月" format="yyyy 第 MM 月">
									</el-date-picker>
									<input type="text" placeholder="搜索">
								</div>
								<div class="wage-content">
									<div class="content-title">
										<p class='title-Serial'>序号</p>
										<p class='title-name'>姓名</p>
										<p class='title-JobNumber'>工号</p>
										<p class='title-BasicWage'>基本工资</p>
										<p class='title-WageJob'>岗位工资</p>
										<p class='title-SocialSecurity'>社保</p>
										<p class='title-RealWage'>实发工资</p>
										<p class='title-UploadStaff'>上传人员</p>
										<p class='title-operating'>操作</p>
									</div>
									<!-- 制度列表 -->
									<div class="content-main" v-for="(item, index) in wageList" :key='index' :id='index'>
										<!-- 序号 -->
										<div class="title-Serial">
											<p>{{item.Serial}}</p>
										</div>
										<!-- 姓名 -->
										<div class="title-name">
											<p>{{item.name}}</p>
										</div>
										<!-- 工号 -->
										<div class="title-JobNumber">
											<p>{{item.JobNumber}}</p>
										</div>
										<!-- 基本工资 -->
										<div class="title-BasicWage">
											<p>{{item.BasicWage}}</p>
										</div>
										<!-- 岗位工资 -->
										<div class="title-WageJob">
											<p>{{item.WageJob}}</p>
										</div>
										<!-- 社保工资 -->
										<div class="title-SocialSecurity">
											<p>{{item.SocialSecurity}}</p>
										</div>
										<!-- 实发工资 -->
										<div class="title-RealWage">
											<p>{{item.RealWage}}</p>
										</div>
										<!-- 上传人员 -->
										<div class="title-UploadStaff">
											<p>{{item.UploadStaff}}</p>
										</div>
										<!-- 操作 -->
										<div class="title-operating">
											<span class='view'><el-button type="primary" icon="el-icon-search" @click='view'>查看</el-button></span>
											<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='deleteinfo'>删除</el-button></span>
										</div>
									</div>
								</div>
								<div class="footer">
									<span class='number-bar'>共2条| 每页20条 | 共1页</span>
									<span class='number-bar-right'>
										<span class='jump-left'>
											<span @click='toFirst'>
												<b>|</b><i class="el-icon-caret-left left-one"></i>
											</span>
											<span>
												<i class="el-icon-caret-left"></i><i class="el-icon-caret-left left-two"></i>
											</span>
										</span>
										<span class='page-num'><input type="text" v-model='value2' readonly></span>
										<span class='jump-right'>
											<span>
												<i class="el-icon-caret-right right-two"></i><i class="el-icon-caret-right"></i>
											</span>
											<i class="el-icon-caret-right right-one"></i><b>|</b>
										</span>
									</span>
								</div>
							</div>
						</el-tab-pane>
						<el-tab-pane label="公司工资表" name='second'>
							<div class="wage-list">
								<div class="title">
									<span @click='addstaff'>+ 添加</span>
									<el-date-picker v-model="value1" type="month" placeholder="选择月" format="yyyy 第 MM 月">
									</el-date-picker>
									<input type="text" placeholder="搜索">
								</div>
								<div class="wage-content">
									<el-tabs v-model="activeName1" type="card" @tab-click="handleClick">
										<el-tab-pane label="人事部门" name="first">
											<div class="content-title">
												<p class='title-Serial'>序号</p>
												<p class='title-name'>姓名</p>
												<p class='title-JobNumber'>工号</p>
												<p class='title-BasicWage'>基本工资</p>
												<p class='title-WageJob'>岗位工资</p>
												<p class='title-SocialSecurity'>社保</p>
												<p class='title-RealWage'>实发工资</p>
												<p class='title-UploadStaff'>上传人员</p>
												<p class='title-operating'>操作</p>
											</div>
											<!-- 工资列表 -->
											<div class="content-main" v-for="(item, index) in Personnel" :key='index' :id='index'>
												<!-- 序号 -->
												<div class="title-Serial">
													<p>{{item.Serial}}</p>
												</div>
												<!-- 姓名 -->
												<div class="title-name">
													<p>{{item.name}}</p>
												</div>
												<!-- 工号 -->
												<div class="title-JobNumber">
													<p>{{item.JobNumber}}</p>
												</div>
												<!-- 基本工资 -->
												<div class="title-BasicWage">
													<p>{{item.BasicWage}}</p>
												</div>
												<!-- 岗位工资 -->
												<div class="title-WageJob">
													<p>{{item.WageJob}}</p>
												</div>
												<!-- 社保工资 -->
												<div class="title-SocialSecurity">
													<p>{{item.SocialSecurity}}</p>
												</div>
												<!-- 实发工资 -->
												<div class="title-RealWage">
													<p>{{item.RealWage}}</p>
												</div>
												<!-- 上传人员 -->
												<div class="title-UploadStaff">
													<p>{{item.UploadStaff}}</p>
												</div>
												<!-- 操作 -->
												<div class="title-operating">
													<span class='view'><el-button type="primary" icon="el-icon-search" @click='view'>查看</el-button></span>
													<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='deleteinfo'>删除</el-button></span>
												</div>
											</div>
										</el-tab-pane>
										<el-tab-pane label="技术部门" name="second">
											<div class="content-title">
												<p class='title-Serial'>序号</p>
												<p class='title-name'>姓名</p>
												<p class='title-JobNumber'>工号</p>
												<p class='title-BasicWage'>基本工资</p>
												<p class='title-WageJob'>岗位工资</p>
												<p class='title-SocialSecurity'>社保</p>
												<p class='title-RealWage'>实发工资</p>
												<p class='title-UploadStaff'>上传人员</p>
												<p class='title-operating'>操作</p>
											</div>
											<!-- 工资列表 -->
											<div class="content-main" v-for="(item, index) in technology" :key='index' :id='index'>
												<!-- 序号 -->
												<div class="title-Serial">
													<p>{{item.Serial}}</p>
												</div>
												<!-- 姓名 -->
												<div class="title-name">
													<p>{{item.name}}</p>
												</div>
												<!-- 工号 -->
												<div class="title-JobNumber">
													<p>{{item.JobNumber}}</p>
												</div>
												<!-- 基本工资 -->
												<div class="title-BasicWage">
													<p>{{item.BasicWage}}</p>
												</div>
												<!-- 岗位工资 -->
												<div class="title-WageJob">
													<p>{{item.WageJob}}</p>
												</div>
												<!-- 社保工资 -->
												<div class="title-SocialSecurity">
													<p>{{item.SocialSecurity}}</p>
												</div>
												<!-- 实发工资 -->
												<div class="title-RealWage">
													<p>{{item.RealWage}}</p>
												</div>
												<!-- 上传人员 -->
												<div class="title-UploadStaff">
													<p>{{item.UploadStaff}}</p>
												</div>
												<!-- 操作 -->
												<div class="title-operating">
													<span class='view'><el-button type="primary" icon="el-icon-search" @click='view'>查看</el-button></span>
													<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='deleteinfo'>删除</el-button></span>
												</div>
											</div>
										</el-tab-pane>
										<el-tab-pane label="财务部门" name="third">
											<div class="content-title">
												<p class='title-Serial'>序号</p>
												<p class='title-name'>姓名</p>
												<p class='title-JobNumber'>工号</p>
												<p class='title-BasicWage'>基本工资</p>
												<p class='title-WageJob'>岗位工资</p>
												<p class='title-SocialSecurity'>社保</p>
												<p class='title-RealWage'>实发工资</p>
												<p class='title-UploadStaff'>上传人员</p>
												<p class='title-operating'>操作</p>
											</div>
											<!-- 工资列表 -->
											<div class="content-main" v-for="(item, index) in finance" :key='index' :id='index'>
												<!-- 序号 -->
												<div class="title-Serial">
													<p>{{item.Serial}}</p>
												</div>
												<!-- 姓名 -->
												<div class="title-name">
													<p>{{item.name}}</p>
												</div>
												<!-- 工号 -->
												<div class="title-JobNumber">
													<p>{{item.JobNumber}}</p>
												</div>
												<!-- 基本工资 -->
												<div class="title-BasicWage">
													<p>{{item.BasicWage}}</p>
												</div>
												<!-- 岗位工资 -->
												<div class="title-WageJob">
													<p>{{item.WageJob}}</p>
												</div>
												<!-- 社保工资 -->
												<div class="title-SocialSecurity">
													<p>{{item.SocialSecurity}}</p>
												</div>
												<!-- 实发工资 -->
												<div class="title-RealWage">
													<p>{{item.RealWage}}</p>
												</div>
												<!-- 上传人员 -->
												<div class="title-UploadStaff">
													<p>{{item.UploadStaff}}</p>
												</div>
												<!-- 操作 -->
												<div class="title-operating">
													<span class='view'><el-button type="primary" icon="el-icon-search" @click='view'>查看</el-button></span>
													<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='deleteinfo'>删除</el-button></span>
												</div>
											</div>
										</el-tab-pane>
										<el-tab-pane label="汇总" name="fourth">
											<div class="content-title">
												<p class='title-Serial'>序号</p>
												<p class='title-name'>姓名</p>
												<p class='title-JobNumber'>工号</p>
												<p class='title-BasicWage'>基本工资</p>
												<p class='title-WageJob'>岗位工资</p>
												<p class='title-SocialSecurity'>社保</p>
												<p class='title-RealWage'>实发工资</p>
												<p class='title-UploadStaff'>上传人员</p>
												<p class='title-operating'>操作</p>
											</div>
											<!-- 工资列表 -->
											<div class="content-main" v-for="(item, index) in summary" :key='index' :id='index'>
												<!-- 序号 -->
												<div class="title-Serial">
													<p>{{item.Serial}}</p>
												</div>
												<!-- 姓名 -->
												<div class="title-name">
													<p>{{item.name}}</p>
												</div>
												<!-- 工号 -->
												<div class="title-JobNumber">
													<p>{{item.JobNumber}}</p>
												</div>
												<!-- 基本工资 -->
												<div class="title-BasicWage">
													<p>{{item.BasicWage}}</p>
												</div>
												<!-- 岗位工资 -->
												<div class="title-WageJob">
													<p>{{item.WageJob}}</p>
												</div>
												<!-- 社保工资 -->
												<div class="title-SocialSecurity">
													<p>{{item.SocialSecurity}}</p>
												</div>
												<!-- 实发工资 -->
												<div class="title-RealWage">
													<p>{{item.RealWage}}</p>
												</div>
												<!-- 上传人员 -->
												<div class="title-UploadStaff">
													<p>{{item.UploadStaff}}</p>
												</div>
												<!-- 操作 -->
												<div class="title-operating">
													<span class='view'><el-button type="primary" icon="el-icon-search" @click='view'>查看</el-button></span>
													<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='deleteinfo'>删除</el-button></span>
												</div>
											</div>
										</el-tab-pane>
									</el-tabs>
								</div>
								<!-- 工资总计 -->
								<div class="Total-salary">
									<span>工资总计</span>
									<span class='total'>{{TotalSalary}}</span>
								</div>
								<div class="footer">
									<span class='number-bar'>共2条| 每页20条 | 共1页</span>
									<span class='number-bar-right'>
										<span class='jump-left'>
											<span @click='toFirst'>
												<b>|</b><i class="el-icon-caret-left left-one"></i>
											</span>
											<span>
												<i class="el-icon-caret-left"></i><i class="el-icon-caret-left left-two"></i>
											</span>
										</span>
										<span class='page-num'><input type="text" v-model='value2' readonly></span>
										<span class='jump-right'>
											<span>
												<i class="el-icon-caret-right right-two"></i><i class="el-icon-caret-right"></i>
											</span>
											<i class="el-icon-caret-right right-one"></i><b>|</b>
										</span>
									</span>
								</div>
							</div>
						</el-tab-pane>
						<el-tab-pane label="统计表" name='third'>
							<!-- 统计表 -->
							<div class="list">
								<div class="title">
									<span><i class="el-icon-receiving"></i>打印</span>
									<input type="text" placeholder="搜索">
								</div>
								<div class="highchart">
									<!-- 引入报表 个人出勤周报表 -->
									<Test :title='personaltitle1' :data='personaldata1'></Test>
									<div class="period">
										<span>上一月</span>
										<div class="block">
											<el-date-picker v-model="value3" type="month" placeholder="选择月">
											</el-date-picker>
										</div>
										<span>下一月</span>
									</div>
								</div>
								<div class="highchart">
									<!-- 引入报表 个人出勤月报表 -->
									<Test :title='personaltitle2' :data='personaldata2'></Test>
									<div class="period">
										<span>上一月</span>
										<div class="block">
											<el-date-picker v-model="value4" type="month" placeholder="选择月">
											</el-date-picker>
										</div>
										<span>下一月</span>
									</div>
								</div>
							</div>
						</el-tab-pane>
					</el-tabs>
				</div>
			</div>			
		</div>
		<!-- 添加工资表 -->
		<div class="wageform" v-if='!show'>
			<div class="back">
				<span @click='back'>返回</span>
			</div>
			<div class="form">
				<WageForm v-on:back='receive' :formInFo='formInFo' :IsBtn='IsBtn'></WageForm>
			</div>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
import Navigation from "../Navigation.vue"
import Sort from "../Common/Sort.vue"
import WageForm from "./WageForm.vue"
import Test from "../HightChart/Test.vue"
export default {
	components: { Navigation, Sort, WageForm, Test },
	data() {
		return {
			num: 5,
			// 当前标签页
			activeName: 'first',
			activeName1: 'first',
			// 总工资
			TotalSalary: 0,
			show: true,
			// 个人工资表的时间
			value1: '',
			// 当前的页码
			value2: 1,
			// 月工资区间分布图
			value3: '',
			// 支出工资分布图
			value4: '',
			sortList: [ '个人工资表', '公司工资表', '统计表'],
			// 个人工资数据
			wageList: [{Serial:'1', name: '张华', JobNumber: '201945665566', BasicWage: '3620', WageJob: '5000', SocialSecurity: '1000', RealWage: '7620', UploadStaff: '李默'}, {Serial:'2', name: '张华张华', JobNumber: '201945665566', BasicWage: '3620', WageJob: '5000', SocialSecurity: '1000', RealWage: '7620', UploadStaff: '李默'}],
			// 人事部门数据
			Personnel: [{Serial:'1', name: '张华', JobNumber: '201945665566', BasicWage: '3620', WageJob: '5000', SocialSecurity: '1000', RealWage: '7620', UploadStaff: '李默'}, {Serial:'2', name: '张华张华', JobNumber: '201945665566', BasicWage: '3620', WageJob: '5000', SocialSecurity: '1000', RealWage: '7620', UploadStaff: '李默'}],
			// 技术部门数据
			technology: [{Serial:'1', name: '张华华', JobNumber: '201945665566', BasicWage: '3620', WageJob: '5000', SocialSecurity: '1000', RealWage: '7620', UploadStaff: '李默'}, {Serial:'2', name: '张华张华', JobNumber: '201945665566', BasicWage: '3620', WageJob: '5000', SocialSecurity: '1000', RealWage: '7620', UploadStaff: '李默'}],
			// 财务部门数据
			finance: [{Serial:'1', name: '张华', JobNumber: '201945665566', BasicWage: '3620', WageJob: '5000', SocialSecurity: '1000', RealWage: '7620', UploadStaff: '李默'}, {Serial:'2', name: '张华张华', JobNumber: '201945665566', BasicWage: '3620', WageJob: '5000', SocialSecurity: '1000', RealWage: '7620', UploadStaff: '李默'}],
			// 汇总数据
			summary: [{Serial:'1', name: '张华华', JobNumber: '201945665566', BasicWage: '3620', WageJob: '5000', SocialSecurity: '1000', RealWage: '7620', UploadStaff: '李默'}, {Serial:'2', name: '张华张华', JobNumber: '201945665566', BasicWage: '3620', WageJob: '5000', SocialSecurity: '1000', RealWage: '7620', UploadStaff: '李默'}],
			// 统计表数据
			// 个人考勤统计表数据
			personaltitle1: '月工资区间分布图',
			personaltitle2: '支出工资分布图',
			personaldata1: [ ['8-10k', 9], ['10-15k', 3], ['15-20k', 4], ['20-25k', 7] ],
			personaldata2: [ ['社保', 2], ['实发工资', 2], ['公积金', 3]],
			formInFo: {},
			IsBtn: true
		}
	},
	updated() {
		// console.log(this.value1)
	},
	methods: {
		ShowId(data) {
			this.show = data;
		},
		// 跳到第一页
		toFirst() {
			this.value2 = 1;
		},
		// 添加员工工资表
		addstaff() {
			console.log('添加员工工资表');
			this.formInFo = {};
			this.show = !this.show;
			this.IsBtn = 'true';
		},
		// 返回首页
		back() {
			this.show = !this.show;
		},
		// 接受表单数据
		receive(data) {
			console.log(data);
			this.show = data;
		},
		// 点击查看按钮
		view(e) {
			console.log(e.path[4].id);
			console.log(this.wageList[e.path[4].id]);
			this.formInFo = this.wageList[e.path[4].id];
			if ( this.formInFo != {} ) {
				this.show = !this.show;
				this.IsBtn = false;
			}
		},
		// 删除某条信息
		deleteinfo(e) {
			console.log(e.path[4].id);
			console.log(this.wageList[e.path[4].id]);
			this.formInFo = this.wageList[e.path[4].id];
			// 发送请求，删除数据
			console.log('删除成功');
		},
		handleClick(tab, event) {
			// console.log(tab, event);
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped="">
.finance-payroll {
	display: flex;
	.main {
		flex: 1;
		padding-right: 30px;
		.title {
			line-height: 50px;
			.el-date-editor.el-input, .el-date-editor.el-input__inner {
				border: none;
			}
		}
		.content {
			margin-top: 10px;
			.list {
				border: 1px solid #ccc;
				position: relative;
				box-sizing: border-box;
				.title {
					padding: 5px 10px;
					font-size: 14px;
					line-height: 30px;
					border-bottom: 1px solid #ccc;
					span {
						cursor: pointer;
						background-color: #2DB32C;
						padding: 5px 5px;
						border-radius: 5px;
						font-size: 12px;
						color: #fff;
					}
					.block {
						background-color: #fff;
						margin-left: 20px;
					}
					input {
						float: right;
						line-height: 20px;
						width: 80px;
						height: 25px;
					}
				}
				.highchart {
					display: flex;
					padding-top: 30px;
					position: relative;
					.period {
						position: absolute;
						bottom: 30px;
						right: 30px;
						display: flex;
						height: 40px;
						span {
							border: 1px solid #ccc;
							font-size: 12px;
							padding: 5px 10px;
							margin: 5px 10px;
						}
					}
				}
			}
			.wage-list {
				border: 1px solid #ccc;
				position: relative;
				box-sizing: border-box;
				.title {
					padding: 5px 10px;
					font-size: 14px;
					line-height: 30px;
					border-bottom: 1px solid #ccc;
					span {
						cursor: pointer;
						background-color: #2DB32C;
						padding: 5px 5px;
						border-radius: 5px;
						font-size: 12px;
						color: #fff;
					}
					input {
						line-height: 20px;
						width: 80px;
						height: 25px;
						float: right;
					}
				}
				
				.wage-content {
					font-size: 12px;
					line-height: 30px;
					max-height: 650px;
					.content-title {
						display: flex;
						border-bottom: 1px solid #ccc;
						padding: 0 10px;
					}
					.content-main {
						display: flex;
						border-bottom: 1px solid #ccc;
						padding: 0 10px;
						cursor: pointer;
					}
					.title-Serial { 
						flex: 1;
						// text-align: center; 
					}		
					.title-name { 
						flex: 1;
						p {
							overflow: hidden; 
							white-space: nowrap; 
							text-overflow: ellipsis;
							width: 80px;
						} 
					}		
					.title-JobNumber { flex: 1; }	
					.title-BasicWage { flex: 1; }	
					.title-WageJob { flex: 1; }		
					.title-SocialSecurity { flex: 1; }
					.title-RealWage { flex: 1; }	
					.title-UploadStaff { flex: 1; }	
					.title-operating {
						flex: 1;
						display: flex;
						padding-right: 10px;
						.view {
							margin-right: 5px;
							.el-button.el-button--primary {
								padding: 2px 3px;
								border: none;
								font-size: 12px;
							}
						}
						.delete {
							.el-button.el-button--primary {
								padding: 2px 3px;
								background-color: #C6292E;
								border: none;
								font-size: 12px;
							}
						}
					}
				}
				.Total-salary {
					height: 40px;
					line-height: 40px;
					font-size: 12px;
					padding-left: 20px;
					padding-right: 20px;
					overflow: hidden;
					.total {
						float: right;
					}
				}
				.footer {
					height: 40px;
					line-height: 40px;
					background-color: #ccc;
					font-size: 12px;
					padding: 0 20px;
					// margin-top: 20px;
					border: 1px solid #bbb;
					.number-bar {
						float: left;
					}
					.number-bar-right {
						float: right;
						b {
							position: relative;
							top: -1px;
						}
						input {
							font-size: 12px;
							outline:medium;
							width: 20px;
							text-align: center;
						}
						.jump-left {
							cursor: pointer;
							.left-one {
								position: relative;
								left: -4px;
							}
							.left-two {
								position: relative;
								left: -7px;
							}
						}
						.jump-right {
							cursor: pointer;
							.right-one {
								position: relative;
								right: -4px;
							}
							.right-two {
								position: relative;
								right: -7px;
							}
						}
					}
				}
			}
		}
		.wageform {
			.back {
				margin-top: 20px;
				span {
					border: 1px solid #ccc;
					padding: 5px 10px;
					font-size: 12px;
					cursor: pointer;
				}
			}
		}
	}
}
</style>
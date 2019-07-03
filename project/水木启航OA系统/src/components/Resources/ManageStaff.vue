<template>
<div class="resources-managestaff">
	<div class="slide">
		<Navigation :isActive='num'></Navigation>			
	</div>
	<div class="content" v-if='show'>
		<!-- 员工管理 -->
		<div class="managestaff">
			<!-- 标题 -->
			<div class="title">员工管理</div>
			<div class="content">
				<el-tabs tab-position="left" v-model="activeName">
					<el-tab-pane label="待面试" name="first">
						<div class="staff-list">
							<div class="title">
								<span @click='add'>+ 添加</span>
								<input type="text" placeholder="搜索">
							</div>
							<!-- <Waiting :staffList='staffList'></Waiting> -->
							<div class="staff-content">
								<div class="content-title">
									<p class='title-Serial'>序号</p>
									<p class='title-name'>姓名</p>
									<p class='title-sex'>性别</p>
									<p class='title-from'>来源</p>
									<p class='title-educat'>学历</p>
									<p class='title-position'>面试职位</p>
									<p class='title-date'>日期</p>
									<p class='title-Referrer'>推荐人</p>
									<p class='title-operating'>操作</p>
								</div>
								<div class="content-main" v-for='(item, index) in staffList' :key='index' :id='index'>
									<!-- 序号 -->
									<div class="title-Serial">
										<p>{{item.Serial}}</p>
									</div>
									<!-- 姓名 -->
									<div class="title-name">
										<p>{{item.name}}</p>
									</div>
									<!-- 性别 -->
									<div class="title-name">
										<p>{{item.sex}}</p>
									</div>
									<!-- 来源 -->
									<div class="title-from">
										<p>{{item.from}}</p>
									</div>
									<!-- 学历 -->
									<div class="title-educat">
										<p>{{item.educat}}</p>
									</div>
									<!-- 面试职位 -->
									<div class="title-position">
										<p>{{item.position}}</p>
									</div>
									<!-- 日期 -->
									<div class="title-date">
										<p>{{item.date}}</p>
									</div>
									<!-- 推荐人 -->
									<div class="title-Referrer">
										<p>{{item.Referrer}}</p>
									</div>
									<!-- 操作 -->
									<div class="title-operating">
										<span class='view'><el-button type="primary" icon="el-icon-search" @click='viewWaitingInterview'>查看</el-button></span>
										<span class='delete'><el-button type="primary" icon="el-icon-delete">删除</el-button></span>
									</div>
								</div>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="面试" name="second">
						<div class="staff-list">
							<div class="title">
								<span @click='add'>+ 添加</span>
								<input type="text" placeholder="搜索">
							</div>
							<!-- <Waiting :staffList='staffList'></Waiting> -->
							<div class="staff-content">
								<div class="content-title">
									<p class='title-Serial'>序号</p>
									<p class='title-name'>姓名</p>
									<p class='title-sex'>性别</p>
									<p class='title-position'>面试职位</p>
									<p class='title-Interviewer'>面试人员</p>
									<p class='title-interviewtime'>面试时间</p>
									<p class='title-Interviewlocation'>面试地点</p>
									<p class='title-operating'>操作</p>
								</div>
								<div class="content-main" v-for='(item, index) in InterviewList' :key='index' :id='index'>
									<!-- 序号 -->
									<div class="title-Serial">
										<p>{{item.Serial}}</p>
									</div>
									<!-- 姓名 -->
									<div class="title-name">
										<p>{{item.name}}</p>
									</div>
									<!-- 性别 -->
									<div class="title-sex">
										<p>{{item.sex}}</p>
									</div>
									<!-- 面试职位 -->
									<div class="title-position">
										<p>{{item.position}}</p>
									</div>
									<!-- 面试人员 -->
									<div class="title-Interviewer">
										<p>{{item.Interviewer}}</p>
									</div>
									<!-- 面试时间 -->
									<div class="title-interviewtime">
										<p>{{item.interviewtime}}</p>
									</div>
									<!-- 面试地点 -->
									<div class="title-Interviewlocation">
										<p>{{item.Interviewlocation}}</p>
									</div>
									<!-- 操作 -->
									<div class="title-operating">
										<span class='view'><el-button type="primary" icon="el-icon-search" @click='viewInterview'>查看</el-button></span>
										<span class='delete'><el-button type="primary" icon="el-icon-delete">删除</el-button></span>
									</div>
								</div>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="待入职" name="third">
						<div class="staff-list">
							<div class="title">
								<span @click='add'>+ 添加</span>
								<input type="text" placeholder="搜索">
							</div>
							<!-- <Waiting :staffList='staffList'></Waiting> -->
							<div class="staff-content">
								<div class="content-title">
									<p class='title-Serial'>序号</p>
									<p class='title-name'>姓名</p>
									<p class='title-position'>面试职位</p>
									<p class='title-position'>资料真实</p>
									<p class='title-position'>专业水平</p>
									<p class='title-position'>工资定级</p>
									<p class='title-position'>入职时间</p>
									<p class='title-position'>填写人员</p>
									<p class='title-operating'>操作</p>
								</div>
								<div class="content-main" v-for='(item, index) in WaitingLiat' :key='index' :id='index'>
									<!-- 序号 -->
									<div class="title-Serial">
										<p>{{item.Serial}}</p>
									</div>
									<!-- 姓名 -->
									<div class="title-name">
										<p>{{item.name}}</p>
									</div>
									<!-- 面试职位 -->
									<div class="title-position">
										<p>{{item.position}}</p>
									</div>
									<!-- 资料真实 -->
									<div class="title-position">
										<p>{{item.IsTrue}}</p>
									</div>
									<!-- 专业水平 -->
									<div class="title-position">
										<p>{{item.level}}</p>
									</div>
									<!-- 工资定级 -->
									<div class="title-position">
										<p>{{item.salary}}</p>
									</div>
									<!-- 入职时间 -->
									<div class="title-position">
										<p>{{item.date}}</p>
									</div>
									<!-- 填写人员 -->
									<div class="title-position">
										<p>{{item.fill}}</p>
									</div>
									<!-- 操作 -->
									<div class="title-operating">
										<span class='view'><el-button type="primary" icon="el-icon-search" @click='viewWaitingEntry'>查看</el-button></span>
										<span class='delete'><el-button type="primary" icon="el-icon-delete">删除</el-button></span>
									</div>
								</div>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="在职" name="fourth">
						<div class="staff-list">
							<div class="title">
								<span @click='add'>+ 添加</span>
								<input type="text" placeholder="搜索">
							</div>
							<!-- <Waiting :staffList='staffList'></Waiting> -->
							<div class="staff-content">
								<div class="content-title">
									<p class='title-Serial'>序号</p>
									<p class='title-name'>姓名</p>
									<p class='title-position'>员工编号</p>
									<p class='title-position'>部门</p>
									<p class='title-position'>学历</p>
									<p class='title-position'>来源</p>
									<p class='title-position'>入职日期</p>
									<p class='title-operating'>操作</p>
								</div>
								<div class="content-main" v-for='(item, index) in InserviceList' :key='index' :id='index'>
									<!-- 序号 -->
									<div class="title-Serial">
										<p>{{item.Serial}}</p>
									</div>
									<!-- 姓名 -->
									<div class="title-name">
										<p>{{item.name}}</p>
									</div>
									<!-- 员工编号 -->
									<div class="title-position">
										<p>{{item.employeeID}}</p>
									</div>
									<!-- 部门 -->
									<div class="title-position">
										<p>{{item.department}}</p>
									</div>
									<!-- 学历 -->
									<div class="title-position">
										<p>{{item.Education}}</p>
									</div>
									<!-- 来源 -->
									<div class="title-position">
										<p>{{item.source}}</p>
									</div>
									<!-- 入职日期 -->
									<div class="title-position">
										<p>{{item.date}}</p>
									</div>
									<!-- 操作 -->
									<div class="title-operating">
										<span class='view'><el-button type="primary" icon="el-icon-search" @click='viewInservice'>查看</el-button></span>
										<span class='delete'><el-button type="primary" icon="el-icon-delete">删除</el-button></span>
									</div>
								</div>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="离职" name="fifth">
						<div class="staff-list">
							<div class="title">
								<span @click='add'>+ 添加</span>
								<input type="text" placeholder="搜索">
							</div>
							<!-- <Waiting :staffList='staffList'></Waiting> -->
							<div class="staff-content">
								<div class="content-title">
									<p class='title-Serial'>序号</p>
									<p class='title-name'>姓名</p>
									<p class='title-position'>员工编号</p>
									<p class='title-position'>部门</p>
									<p class='title-position'>学历</p>
									<p class='title-position'>来源</p>
									<p class='title-position'>离职日期</p>
									<p class='title-operating'>操作</p>
								</div>
								<div class="content-main" v-for='(item, index) in LeaveList' :key='index' :id='index'>
									<!-- 序号 -->
									<div class="title-Serial">
										<p>{{item.Serial}}</p>
									</div>
									<!-- 姓名 -->
									<div class="title-name">
										<p>{{item.name}}</p>
									</div>
									<!-- 员工编号 -->
									<div class="title-position">
										<p>{{item.employeeID}}</p>
									</div>
									<!-- 部门 -->
									<div class="title-position">
										<p>{{item.department}}</p>
									</div>
									<!-- 学历 -->
									<div class="title-position">
										<p>{{item.Education}}</p>
									</div>
									<!-- 来源 -->
									<div class="title-position">
										<p>{{item.source}}</p>
									</div>
									<!-- 入职日期 -->
									<div class="title-position">
										<p>{{item.date}}</p>
									</div>
									<!-- 操作 -->
									<div class="title-operating">
										<span class='view'><el-button type="primary" icon="el-icon-search" @click='viewleave'>查看</el-button></span>
										<span class='delete'><el-button type="primary" icon="el-icon-delete">删除</el-button></span>
									</div>
								</div>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="统计报表" name="sixth">
						<el-tabs tab-position="top" style='border: 1px solid #ccc'>
							<el-tab-pane label="总体情况表">
								<div class="list">
									<div class="highchart">
										<!-- 引入报表 年度总体情况统计表 -->
										<Test :title='personaltitle1' :data='personaldata1'></Test>
										<div class="period">
											<span>上一年</span>
											<div class="block">
												<el-date-picker v-model="value1" type="year" placeholder="选择年" @blur='selectyear'>
												</el-date-picker>
											</div>
											<span>下一年</span>
										</div>
									</div>
									<div class="highchart">
										<!-- 引入报表 月度总体情况统计表 -->
										<Test :title='personaltitle2' :data='personaldata2'></Test>
										<div class="period">
											<span>上一月</span>
											<div class="block">
												<el-date-picker v-model="value2" type="month" placeholder="选择月">
												</el-date-picker>
											</div>
											<span>下一月</span>
										</div>
									</div>
								</div>
							</el-tab-pane>
							<el-tab-pane label="在职人员结构表">
								<div class="list">
									<div class="title">2019年在职人员结构统计表</div>
									<div class="highchart">
										<!-- 引入报表 年度总体情况统计表 -->
										<Test :title='personaltitle1' :data='personaldata1'></Test>
									</div>
									<div class="highchart">
										<!-- 引入报表 月度总体情况统计表 -->
										<Test :title='personaltitle2' :data='personaldata2'></Test>
									</div>
								</div>
							</el-tab-pane>
						</el-tabs>
					</el-tab-pane>
				</el-tabs>
			</div>
		</div>
	</div>
	<!-- 表单显示 -->
	<div class="form" v-if='!show'>
		<div class="back">
			<span @click='back'>返回</span>
		</div>
		<div class="table">
			<FormEntry :showinfo='showinfo' v-on:back='showMsg' v-on:label='TagJump' v-if='IsInterview' :arr='arr'></FormEntry>
			<FormInService v-if='IsInservice'></FormInService>
			<FormResignation v-if='IsLeave'></FormResignation>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
import Waiting from './Waiting.vue'
import Navigation from "../Navigation.vue"
import FormEntry from "./FormEntry.vue"
import FormInService from "./FormInService.vue"
import FormResignation from "./FormResignation.vue"
import Test from "../HightChart/Test.vue"
export default {
	components: { Waiting, Navigation, FormEntry, Test, FormInService, FormResignation },
	data() {
		return {
			num: 2,
			showinfo: {},
			show: true,
			// 年度统计表
			value1: '',
			// 月度统计表
			value2: '',
			// 当前标签页
			activeName: 'first',
			// 是否显示面试表
			IsInterview: true,
			// 是否显示在职表
			IsInservice: true,
			// 是否显示离职表
			IsLeave: true,
			// 统计报表数据
			personaltitle1: '2019年度总体情况统计表',
			personaltitle2: '2019年4月总体情况统计表',
			personaldata1: [ ['在职', 9], ['简历筛选', 3], ['面试', 4], ['新入职', 7], ['离职', 3] ],
			personaldata2: [ ['在职', 2], ['简历筛选', 2], ['面试', 3], ['新入职', 7], ['离职', 3] ],
			// 待面试列表
			staffList: [{Serial: 1, name: '汪洋', sex: '男', from: '前程', educat: '大专', position: '研发部', date: '2018/5/2', Referrer: ''},{Serial: 2, name: '汪洋', sex: '男', from: '前程', educat: '大专', position: '研发部', date: '2018/5/2', Referrer: '梨花'}],
			// 面试列表
			InterviewList: [{Serial: 1, name: '汪洋', sex: '男', position: '研发部', Interviewer: '李华', interviewtime: '2019/3/2', Interviewlocation: '公司'}],
			// 待入职列表
			WaitingLiat: [{Serial: 1, name: '汪洋', position: '研发部', IsTrue: '是', level: '中级', salary: '中级', date: '2019/2/14', fill: '王曼'}],
			// 在职列表
			InserviceList: [{Serial: 1, name: '汪洋', employeeID: '201918201', department: '研发部', Education: '大专', source: '网招', date: '2019/5/4'}],
			// 离职列表
			LeaveList: [{Serial: 1, name: '汪洋', employeeID: '201918201', department: '研发部', Education: '大专', source: '网招', date: '2019/5/4'}],
			// 传递给FormEntry组件的数据，控制表格和按钮的显隐
			arr: [true, true, true, true, true, true, true, true, true, true, true]
		}
	},
	methods: {
		// 添加按钮点击事件
		add() {
			this.show = !this.show;
			this.showinfo = {};
		},
		back() {
			this.show = !this.show;
		},
		//接受子组件的传值
		showMsg(data) {
			console.log(data);
			this.show = data;
		},
		// 接收子组件传值，判断在哪个标签页
		TagJump(data) {
			console.log(data);
			this.activeName = data;
		},
		// 选择年，失去焦点触发
		selectyear() {
			console.log(this.value1);
			this.value1.getFullYear();
			console.log(this.value1.getFullYear());
			this.personaltitle1 = this.value1.getFullYear() + "年度总体情况统计表";
			console.log(this.personaltitle1)
		},
		// 查看面试表格
		view(e) {
			this.showinfo = this.staffList[e.path[4].id];
			this.show = !this.show;
			this.IsInterview = true;
			this.IsInservice = false;
			this.IsLeave = false;
		},
		// 待面试选项里的查看
		viewWaitingInterview(e) {
			this.showinfo = this.staffList[e.path[4].id];
			this.show = !this.show;
			this.IsInterview = true;
			this.IsInservice = false;
			this.IsLeave = false;
			this.arr = [false, false, false, false, true, false, false, false, false, false, false]

		},
		// 面试选项里的查看
		viewInterview(e) {
			this.showinfo = this.staffList[e.path[4].id];
			this.show = !this.show;
			this.IsInterview = true;
			this.IsInservice = false;
			this.IsLeave = false;
			this.arr = [true, false, false, false, false, false, true, false, false, false, false]
		},
		// 待入职选项里的查看
		viewWaitingEntry(e) {
			this.showinfo = this.staffList[e.path[4].id];
			this.show = !this.show;
			this.IsInterview = true;
			this.IsInservice = false;
			this.IsLeave = false;
			this.arr = [false, true, true, false, false, false, false, false, false, true, false]
		},
		// 查看在职表
		viewInservice() {
			this.show = !this.show;
			this.IsInterview = false;
			this.IsInservice = true;
			this.IsLeave = false;
		},
		// 查看离职申请
		viewleave() {
			this.show = !this.show;
			this.IsInterview = false;
			this.IsInservice = false;
			this.IsLeave = true;
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped>
.resources-managestaff {
	display: flex;
	padding-right: 30px;
	.content {
		flex: 1;
		.title {
			line-height: 50px;
		}
		.content {
			margin-top: 10px;
			.list {
				border: 1px solid #ccc;
				position: relative;
				box-sizing: border-box;
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
			.staff-list {
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
						float: right;
						line-height: 20px;
						width: 80px;
						height: 25px;
					}
				}
				.staff-content {
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
					.title-Serial { flex: 1; }
					.title-name { flex: 1; }     
					.title-sex { flex: 1; }      
					.title-from { flex: 1; }     
					.title-educat { flex: 1; }   
					.title-position { flex: 1; } 
					.title-date { flex: 1; }     
					.title-Referrer { flex: 1; }
					.title-Interviewer { flex: 1; }
					.title-interviewtime { flex: 1; }
					.title-Interviewlocation { flex: 1; }
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
			}
		}
	}
	.form {
		width: 100%;
		padding-right: 20px;
		.back {
			padding: 10px 0;
			span {
				border: 1px solid #ccc;
				font-size: 12px;
				padding: 5px 12px;
				cursor: pointer;
			}
		}
		.table {
			padding-left: 20px;
			width: 100%;
		}
	}
}
</style>
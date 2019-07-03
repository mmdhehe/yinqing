<template>
<div class='resources-manageattend'>
	<div class="slide">
		<Navigation :isActive='num'></Navigation>			
	</div>
	<div class="content" v-if='show'>
		<div class="title">考勤管理</div>
		<div class="main">
			<el-tabs tab-position="left" v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="个人考勤表" name="first">
					<div class="list">
						<div class="title">
							<span><i class="el-icon-receiving"></i>打印</span>
							<span class="block">
								<el-date-picker v-model="value2" type="month" placeholder="选择月">
								</el-date-picker>
							</span>
							<input type="text" placeholder="搜索">
						</div>
						<!-- <Waiting :staffList='staffList'></Waiting> -->
						<el-tabs v-model="activeName1" @tab-click="handleClick">
							<el-tab-pane label="个人考勤统计" name="first">
								<div class="staff-content">
									<div class="content-title">
										<p class='title-name'>姓名</p>
										<p class='title-JobNum'>工号</p>
										<p class='title-date'>日期</p>
										<p class='title-Working'>上班时间</p>
										<p class='title-AfterWork'>下班时间</p>
										<p class='title-WorkTime'>工作时长</p>
										<p class='title-status'>状态</p>
										<p class='title-Remark'>备注</p>
										<p class='title-operating'>操作</p>
									</div>
									<div class="content-main" v-for='(item, index) in AttendList' :key='index' :id='index'>
										<!-- 姓名 -->
										<div class="title-name">
											<p>{{item.name}}</p>
										</div>
										<!-- 工号 -->
										<div class="title-JobNum">
											<p>{{item.JobNum}}</p>
										</div>
										<!-- 日期 -->
										<div class="title-date">
											<p>{{item.date}}</p>
										</div>
										<!-- 上班时间 -->
										<div class="title-Working">
											<p>{{item.Working}}</p>
										</div>
										<!-- 下班时间 -->
										<div class="title-AfterWork">
											<p>{{item.AfterWork}}</p>
										</div>
										<!-- 工作时长 -->
										<div class="title-WorkTime">
											<p>{{item.WorkTime}}</p>
										</div>
										<!-- 状态 -->
										<div class="title-status">
											<p>{{item.status}}</p>
										</div>
										<!-- 备注 -->
										<div class="title-Remark">
											<p :title='item.Remark'>{{item.Remark}}</p>
										</div>
										<!-- 操作 -->
										<div class="title-operating">
											<span @click='edit' class='view'><el-button type="primary"><i class="el-icon-edit"></i>修改</el-button></span>
											<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='daleteinfo'>删除</el-button></span>
										</div>
									</div>
								</div>
								<div class="footer">
									<span class='number-bar'>共2条| 每页20条 | 共1页</span>
									<span class='number-bar-right'>
										<span class='jump-left'>
											<span>
												<b>|</b><i class="el-icon-caret-left left-one"></i>
											</span>
											<span>
												<i class="el-icon-caret-left"></i><i class="el-icon-caret-left left-two"></i>
											</span>
										</span>
										<span class='page-num'><input type="text" v-model='value1' readonly></span>
										<span class='jump-right'>
											<span>
												<i class="el-icon-caret-right right-two"></i><i class="el-icon-caret-right"></i>
											</span>
											<i class="el-icon-caret-right right-one"></i><b>|</b>
										</span>
									</span>
								</div>
							</el-tab-pane>
							<el-tab-pane label="个人考勤统计柱状图" name="second">
								<div class="list">
									<div class="highchart">
										<!-- 引入报表 个人出勤周报表 -->
										<Test :title='personaltitle1' :data='personaldata1'></Test>
										<div class="period">
											<span>上一周</span>
											<div class="block">
												<el-date-picker v-model="value2" type="week" format="yyyy 第 WW 周" placeholder="选择周">
												</el-date-picker>
											</div>
											<span>下一周</span>
										</div>
									</div>
									<div class="highchart">
										<!-- 引入报表 个人出勤月报表 -->
										<Test :title='personaltitle2' :data='personaldata2'></Test>
										<div class="period">
											<span>上一月</span>
											<div class="block">
												<el-date-picker v-model="value3" type="month" placeholder="选择月">
												</el-date-picker>
											</div>
											<span>下一月</span>
										</div>
									</div>
								</div>
							</el-tab-pane>
						</el-tabs>
					</div>
				</el-tab-pane>
				<el-tab-pane label="部门考勤表" name="second">
					<div class="list">
						<div class="title">
							<span><i class="el-icon-receiving"></i>打印</span>
							<span class="block">
								<el-date-picker v-model="value2" type="month" placeholder="选择月">
								</el-date-picker>
							</span>
							<input type="text" placeholder="搜索">
						</div>
						<!-- <Waiting :staffList='staffList'></Waiting> -->
						<el-tabs v-model="activeName1" @tab-click="handleClick">
							<el-tab-pane label="部门考勤表统计" name="first">
								<div class="staff-content">
									<div class="content-title">
										<p class='title-name'>姓名</p>
										<p class='title-JobNum'>工号</p>
										<p class='title-date'>日期</p>
										<p class='title-Working'>上班时间</p>
										<p class='title-AfterWork'>下班时间</p>
										<p class='title-WorkTime'>工作时长</p>
										<p class='title-status'>状态</p>
										<p class='title-Remark'>备注</p>
										<p class='title-operating'>操作</p>
									</div>
									<div class="content-main" v-for='(item, index) in AttendList' :key='index' :id='index'>
										<!-- 姓名 -->
										<div class="title-name">
											<p>{{item.name}}</p>
										</div>
										<!-- 工号 -->
										<div class="title-JobNum">
											<p>{{item.JobNum}}</p>
										</div>
										<!-- 日期 -->
										<div class="title-date">
											<p>{{item.date}}</p>
										</div>
										<!-- 上班时间 -->
										<div class="title-Working">
											<p>{{item.Working}}</p>
										</div>
										<!-- 下班时间 -->
										<div class="title-AfterWork">
											<p>{{item.AfterWork}}</p>
										</div>
										<!-- 工作时长 -->
										<div class="title-WorkTime">
											<p>{{item.WorkTime}}</p>
										</div>
										<!-- 状态 -->
										<div class="title-status">
											<p>{{item.status}}</p>
										</div>
										<!-- 备注 -->
										<div class="title-Remark">
											<p :title='item.Remark'>{{item.Remark}}</p>
										</div>
										<!-- 操作 -->
										<div class="title-operating">
											<span @click='edit' class='view'><el-button type="primary"><i class="el-icon-edit"></i>修改</el-button></span>
											<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='daleteinfo'>删除</el-button></span>
										</div>
									</div>
								</div>
								<div class="footer">
									<span class='number-bar'>共2条| 每页20条 | 共1页</span>
									<span class='number-bar-right'>
										<span class='jump-left'>
											<span>
												<b>|</b><i class="el-icon-caret-left left-one"></i>
											</span>
											<span>
												<i class="el-icon-caret-left"></i><i class="el-icon-caret-left left-two"></i>
											</span>
										</span>
										<span class='page-num'><input type="text" v-model='value1' readonly></span>
										<span class='jump-right'>
											<span>
												<i class="el-icon-caret-right right-two"></i><i class="el-icon-caret-right"></i>
											</span>
											<i class="el-icon-caret-right right-one"></i><b>|</b>
										</span>
									</span>
								</div>
							</el-tab-pane>
							<el-tab-pane label="部门考勤统计柱状图" name="second">
								<div class="list">
									<div class="highchart">
										<!-- 部门日报表 -->
										<Test :title='departmenttitle1' :data='departmentdata1'></Test>
										<div class="period">
											<span>上一天</span>
											<div class="block">
												<el-date-picker v-model="value4" type="date" placeholder="选择日期">
												</el-date-picker>
											</div>
											<span>下一天</span>
										</div>
									</div>
									<div class="highchart">
										<!-- 部门周报表 -->
										<Test :title='departmenttitle2' :data='departmentdata2'></Test>
										<div class="period">
											<span>上一周</span>
											<div class="block">
												<el-date-picker v-model="value5" type="week" format="yyyy 第 WW 周" placeholder="选择周">
												</el-date-picker>
											</div>
											<span>下一周</span>
										</div>
									</div>
									<div class="highchart">
										<!-- 部门月报表 -->
										<Test :title='departmenttitle3' :data='departmentdata3'></Test>
										<div class="period">
											<span>上一月</span>
											<div class="block">
												<el-date-picker v-model="value6" type="month" placeholder="选择月">
												</el-date-picker>
											</div>
											<span>下一月</span>
										</div>
									</div>
								</div>
							</el-tab-pane>
						</el-tabs>
					</div>
				</el-tab-pane>
				<el-tab-pane label="公司考勤表" name="third">
					<div class="list">
						<div class="title">
							<span><i class="el-icon-receiving"></i>打印</span>
							<span class="block">
								<el-date-picker v-model="value2" type="month" placeholder="选择月">
								</el-date-picker>
							</span>
							<input type="text" placeholder="搜索">
						</div>
						<!-- <Waiting :staffList='staffList'></Waiting> -->
						<el-tabs v-model="activeName1" @tab-click="handleClick1">
							<el-tab-pane label="公司考勤表统计" name="first">
								<div class="staff-content">
									<div class="content-title">
										<p class='title-name'>姓名</p>
										<p class='title-JobNum'>工号</p>
										<p class='title-date'>日期</p>
										<p class='title-Working'>上班时间</p>
										<p class='title-AfterWork'>下班时间</p>
										<p class='title-WorkTime'>工作时长</p>
										<p class='title-status'>状态</p>
										<p class='title-Remark'>备注</p>
										<p class='title-operating'>操作</p>
									</div>
									<div class="content-main" v-for='(item, index) in AttendList' :key='index' :id='index'>
										<!-- 姓名 -->
										<div class="title-name">
											<p>{{item.name}}</p>
										</div>
										<!-- 工号 -->
										<div class="title-JobNum">
											<p>{{item.JobNum}}</p>
										</div>
										<!-- 日期 -->
										<div class="title-date">
											<p>{{item.date}}</p>
										</div>
										<!-- 上班时间 -->
										<div class="title-Working">
											<p>{{item.Working}}</p>
										</div>
										<!-- 下班时间 -->
										<div class="title-AfterWork">
											<p>{{item.AfterWork}}</p>
										</div>
										<!-- 工作时长 -->
										<div class="title-WorkTime">
											<p>{{item.WorkTime}}</p>
										</div>
										<!-- 状态 -->
										<div class="title-status">
											<p>{{item.status}}</p>
										</div>
										<!-- 备注 -->
										<div class="title-Remark">
											<p :title='item.Remark'>{{item.Remark}}</p>
										</div>
										<!-- 操作 -->
										<div class="title-operating">
											<span @click='edit' class='view'><el-button type="primary"><i class="el-icon-edit"></i>修改</el-button></span>
											<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='daleteinfo'>删除</el-button></span>
										</div>
									</div>
								</div>
								<div class="footer">
									<span class='number-bar'>共2条| 每页20条 | 共1页</span>
									<span class='number-bar-right'>
										<span class='jump-left'>
											<span>
												<b>|</b><i class="el-icon-caret-left left-one"></i>
											</span>
											<span>
												<i class="el-icon-caret-left"></i><i class="el-icon-caret-left left-two"></i>
											</span>
										</span>
										<span class='page-num'><input type="text" v-model='value1' readonly></span>
										<span class='jump-right'>
											<span>
												<i class="el-icon-caret-right right-two"></i><i class="el-icon-caret-right"></i>
											</span>
											<i class="el-icon-caret-right right-one"></i><b>|</b>
										</span>
									</span>
								</div>
							</el-tab-pane>
							<el-tab-pane label="公司考勤统计柱状图" name="second">
								<div class="list">
									<div class="highchart">
										<!-- 引入报表 公司出勤日报表 -->
										<Test :title='companytitle1' :data='companydata1'></Test>
										<div class="period">
											<span>上一天</span>
											<div class="block">
												<el-date-picker v-model="value7" type="date" placeholder="选择日期">
												</el-date-picker>
											</div>
											<span>下一天</span>
										</div>
									</div>
									<div class="highchart">
										<!-- 引入报表 公司出勤周报表 -->
										<Test :title='companytitle2' :data='companydata2'></Test>
										<div class="period">
											<span>上一周</span>
											<div class="block">
												<el-date-picker v-model="value8" type="week" format="yyyy 第 WW 周" placeholder="选择周">
												</el-date-picker>
											</div>
											<span>下一周</span>
										</div>
									</div>
									<div class="highchart">
										<!-- 引入报表 个人出勤月报表 -->
										<Test :title='companytitle3' :data='companydata3'></Test>
										<div class="period">
											<span>上一周</span>
											<div class="block">
												<el-date-picker v-model="value9" type="month" placeholder="选择月">
												</el-date-picker>
											</div>
											<span>下一周</span>
										</div>
									</div>
								</div>
							</el-tab-pane>
						</el-tabs>
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
	<!-- 修改考勤管理 -->
	<div class="revise" v-if='!show'>
		<div class="back"><span @click='back'>返回</span></div>
		<div class="revise">
			<ReviseForm :editinfo='editinfo' v-on:back='receiveShow'></ReviseForm>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
import Navigation from "../Navigation.vue"
import ReviseForm from './ReviseForm.vue'
import Test from "../HightChart/Test.vue"

export default {
	components: { Navigation, ReviseForm, Test },
	data() {
		return {
			num: 2,
			// 当前时间
			value: '',
			// 当前页码
			value1: 1,
			// 个人周报表
			value2: '',
			// 个人月报表
			value3: '',
			// 部门日报表
			value4: '',
			// 部门周报表
			value5: '',
			// 部门月报表
			value6: '',
			// 公司日报表
			value7: '',
			// 公司周报表
			value8: '',
			// 公司月报表
			value9: '',
			// 当前标签页
			activeName: 'first',
			// 个人考勤表的当前标签页
			activeName1: 'first',
			sortList: [ '考勤管理', '个人出勤统计', '部门出勤统计', '公司出勤统计' ],
			AttendList: [{name: '汪洋', JobNum: 12345, date: "2018/9/5", Working: '18:06', AfterWork: '18:06', WorkTime: '7小时', status: '正常', Remark: ''}, {name: '汪洋', JobNum: 12345, date: "2018/9/5", Working: '18:06', AfterWork: '18:06', WorkTime: '7小时', status: '正常', Remark: ''}, {name: '汪洋', JobNum: 12345, date: "2018/9/5", Working: '18:06', AfterWork: '18:06', WorkTime: '7小时', status: '正常', Remark: ''}, {name: '汪洋', JobNum: 12345, date: "2018/9/5", Working: '18:06', AfterWork: '18:06', WorkTime: '7小时', status: '正常', Remark: 'nihaonijhaohdiaohcds'}],
			pickerOptions: {
				disabledDate(time) {
					return time.getTime() > Date.now();
				}
			},
			show: true,
			Report: false,
			editinfo: {},
			// 个人考勤统计表数据
			personaltitle1: '个人出勤周报表',
			personaltitle2: '个人出勤月报表',
			personaldata1: [ ['请假', 9], ['迟到', 3], ['早退', 4], ['矿工', 7], ['正常', 2]],
			personaldata2: [ ['请假', 2], ['迟到', 2], ['早退', 3], ['矿工', 4], ['正常', 5]],
			// 部门考勤统计表数据
			departmenttitle1: '部门日出勤报表',
			departmenttitle2: '部门周出勤报表',
			departmenttitle3: '部门月出勤报表',
			departmentdata1: [ ['请假', 3], ['迟到', 5], ['早退', 2], ['矿工', 9], ['正常', 2]],
			departmentdata2: [ ['请假', 4], ['迟到', 2], ['早退', 4], ['矿工', 2], ['正常', 2]],
			departmentdata3: [ ['请假', 3], ['迟到', 5], ['早退', 7], ['矿工', 3], ['正常', 9]],
			// 公司考勤统计表数据
			companytitle1: '公司日出勤报表',
			companytitle2: '公司周出勤报表',
			companytitle3: '公司月出勤报表',
			companydata1: [ ['请假', 9], ['迟到', 3], ['早退', 5], ['矿工', 7], ['正常', 2]],
			companydata2: [ ['请假', 1], ['迟到', 8], ['早退', 4], ['矿工', 7], ['正常', 8]],
			companydata3: [ ['请假', 2], ['迟到', 9], ['早退', 9], ['矿工', 4], ['正常', 5]],
		}
	},
	created() {
		// 页面加载时获取当前的日期
		var date = new Date;
		var year = date.getFullYear();
		var mouth = date.getMonth() + 1;
		var day = date.getDate() - 1;
		// console.log(year + '/' + mouth + '/' + day);
		this.value = year + '/' + mouth + '/' + day;
	},
	methods: {
		receive(data) {
			// console.log(+data);
			// console.log(this.sortList[+data]);
			if (+data == 0) {
				this.Report = false;
			} else {
				this.Report = true; 
			}
		},
		// 点击修改
		edit(e) {
			// console.log(e.path[4].id);
			// console.log(this.AttendList[e.path[4].id]);
			this.editinfo = this.AttendList[e.path[4].id];
			this.show = !this.show;
		},
		// 点击删除
		daleteinfo() {
			// 发送请求，删除对应人的信息
		},
		// 点击返回
		back() {
			this.show = !this.show;
		},
		// 接受子组件的信息
		receiveShow(data) {
			console.log(data);
			this.show = data;
		},
		handleClick(tab, event) {
			// console.log(tab, event);
			this.activeName1 = 'first'
		},
		handleClick1(tab, event) {
			// console.log(tab, event);
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped>
.resources-manageattend {
	display: flex;
	.content {
		flex: 1;
		padding-right: 30px;
		.title {
			line-height: 50px;
		}
		.main {
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
					.title-name { flex: 1; }	
					.title-JobNum { flex: 1; }	
					.title-date { flex: 1; }	
					.title-Working { flex: 1; }	
					.title-AfterWork { flex: 1; }
					.title-WorkTime { flex: 1; }
					.title-status { flex: 1; }	
					.title-Remark { 
						flex: 1;
						p {
							overflow: hidden; 
							white-space: nowrap; 
							text-overflow: ellipsis;
							width: 80px; 
						}
					}	
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
						.block {

						}
					}
				}
			}
		}
	}
	.revise {
		width: 100%;
		.back {
			margin-top: 30px;
			margin-bottom: 30px;
			span {
				border: 1px solid #ccc;
				font-size: 12px;
				padding: 5px 15px;
			}
		}
	}
}
</style>
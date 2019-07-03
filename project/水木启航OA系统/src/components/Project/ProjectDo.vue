<template>
<div class='project-projectinfo'>
	<!-- 侧边栏 -->
	<div class="slide">
		<Navigation :isActive='num'></Navigation>			
	</div>
	<div class="main">
		<!-- 项目资料 -->
		<div class="projectunfo" v-if='IsDaily && IsReport'>
			<!-- 标题 -->
			<div class="title">项目执行</div>
			<div class="content">
				<!-- 左边框 分类 -->
				<div class="sort">
					<sort :sortList='sortList' v-on:status='receive'></sort>
				</div>
				<!-- 右边框 项目个人日报列表 -->
				<div class="project-list" v-if='SidebarNo == 0 && IsDaily'>
					<div class="title">
						<span @click='adddaily'>+ 添加</span>
						<el-date-picker
						v-model="value1"
						type="date"
						placeholder="选择日期">
						</el-date-picker>
						<input type="text" placeholder="搜索">
					</div>
					<!-- <Waiting :staffList='staffList'></Waiting> -->
					<div class="project-content">
						<div class="content-title">
							<p class='title-projectname'>项目名称</p>
							<p class='title-employeeID'>员工编号</p>
							<p class='title-name'>姓名</p>
							<p class='title-date'>时间</p>
							<p class='title-remark'>备注</p>
							<p class='title-operating'>操作</p>
						</div>
						<div class="content-main" v-for='(item, index) in personalList' :key='index' :id='index'>
							<!-- 项目名称 -->
							<div class="title-projectname">
								<p>{{item.projectname}}</p>
							</div>
							<!-- 员工编号 -->
							<div class="title-employeeID">
								<p>{{item.employeeID}}</p>
							</div>
							<!-- 姓名 -->
							<div class="title-name">
								<p>{{item.name}}</p>
							</div>
							<!-- 时间 -->
							<div class="title-date">
								<p>{{item.date}}</p>
							</div>
							<!-- 备注 -->
							<div class="title-remark">
								<p>{{item.remark}}</p>
							</div>
							<!-- 操作 -->
							<div class="title-operating">
								<span class='view'><el-button type="primary" icon="el-icon-search" @click='view'>查看</el-button></span>
								<span class='delete'><el-button type="primary" icon="el-icon-delete">删除</el-button></span>
							</div>
						</div>
					</div>
				</div>
				<!-- 右边框 项目工作填报列表 -->
				<div class="project-list" v-if='SidebarNo == 1'>
					<div class="title">
						<span @click='addReport'>+ 添加</span>
						<el-date-picker
						v-model="value1"
						type="date"
						placeholder="选择日期">
						</el-date-picker>
						<input type="text" placeholder="搜索">
					</div>
					<!-- <Waiting :staffList='staffList'></Waiting> -->
					<div class="project-content">
						<div class="content-title">
							<p class='title-projectname'>项目名称</p>
							<p class='title-employeeID'>员工编号</p>
							<p class='title-progress'>项目进展百分比</p>
							<p class='title-account'>认定完成百分比</p>
							<p class='title-date'>时间</p>
							<p class='title-remark'>备注</p>
							<p class='title-operating'>操作</p>
						</div>
						<div class="content-main" v-for='(item, index) in projectList' :key='index' :id='index'>
							<!-- 项目名称 -->
							<div class="title-projectname">
								<p>{{item.projectname}}</p>
							</div>
							<!-- 员工编号 -->
							<div class="title-employeeID">
								<p>{{item.employeeID}}</p>
							</div>
							<!-- 项目进展百分比 -->
							<div class="title-progress">
								<p>{{item.progress}}</p>
							</div>
							<!-- 认定完成百分比 -->
							<div class="title-account">
								<p>{{item.account}}</p>
							</div>
							<!-- 时间 -->
							<div class="title-date">
								<p>{{item.date}}</p>
							</div>
							<!-- 备注 -->
							<div class="title-remark">
								<p>{{item.remark}}</p>
							</div>
							<!-- 操作 -->
							<div class="title-operating">
								<span class='view'><el-button type="primary" icon="el-icon-search">查看</el-button></span>
								<span class='delete'><el-button type="primary" icon="el-icon-delete">删除</el-button></span>
							</div>
						</div>
					</div>
				</div>
				<!-- 右边框 项目进度查看列表 -->
				<div class="project-list" v-if='SidebarNo == 2'>
					<div class="title">
						<span @click='adddaily'>+ 添加</span>
						<el-date-picker
						v-model="value1"
						type="date"
						placeholder="选择日期">
						</el-date-picker>
						<input type="text" placeholder="搜索">
					</div>
					<!-- <Waiting :staffList='staffList'></Waiting> -->
					<div class="project-content">
						<div class="content-title">
							<p class='title-projectname'>项目名称</p>
							<p class='title-employeeID'>员工编号</p>
							<p class='title-name'>姓名</p>
							<p class='title-date'>时间</p>
							<p class='title-remark'>备注</p>
							<p class='title-operating'>操作</p>
						</div>
						<div class="content-main" v-for='(item, index) in projectList' :key='index' :id='index'>
							<!-- 项目名称 -->
							<div class="title-projectname">
								<p>{{item.projectname}}</p>
							</div>
							<!-- 员工编号 -->
							<div class="title-employeeID">
								<p>{{item.employeeID}}</p>
							</div>
							<!-- 姓名 -->
							<div class="title-name">
								<p>{{item.name}}</p>
							</div>
							<!-- 时间 -->
							<div class="title-date">
								<p>{{item.date}}</p>
							</div>
							<!-- 备注 -->
							<div class="title-remark">
								<p>{{item.remark}}</p>
							</div>
							<!-- 操作 -->
							<div class="title-operating">
								<span class='view'><el-button type="primary" icon="el-icon-search" @click='view'>查看</el-button></span>
								<span class='delete'><el-button type="primary" icon="el-icon-delete">删除</el-button></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 个人日报报表 -->
		<div class="form" v-if='!IsDaily'>
			<div class="back"><span @click='back'>返回</span></div>
			<div class="table">
				<!-- <FormEntry :showinfo='showinfo' v-on:back='showMsg'></FormEntry> -->
				<FormDaily v-on:back='showMsg' :forminfo='forminfo' :IsBtn='IsBtn'></FormDaily>
			</div>
		</div>
		<!-- 项目工作表 -->
		<div class="form" v-if='!IsReport'>
			<div class="back"><span @click='back1'>返回1</span></div>
			<div class="table">
				<!-- <FormEntry :showinfo='showinfo' v-on:back='showMsg'></FormEntry> -->
				<!-- <FormDaily v-on:back='showMsg' :forminfo='forminfo' :IsBtn='IsBtn'></FormDaily> -->
				<FormReport></FormReport>
			</div>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
import Sort from '../Common/Sort.vue'
import Navigation from '../Navigation.vue'
import FormDaily from './FormDaily.vue'
import FormReport from './FormReport.vue'
export default {
	components: { Sort, Navigation, FormDaily, FormReport },
	data() {
		return {
			num: 3,
			// 查看日期
			value1: '',
			// 是否显示添加个人日报
			IsDaily: true,
			// 是否显示项目报表
			IsReport: true,
			// 是否显示按钮
			IsBtn: true,
			// 侧边栏的索引值
			SidebarNo: 0,
			IsPersonal: true,
			sortList: [ '项目个人日报', '项目工作填报', '项目进展查看' ],
			// 个人项目报表数据
			personalList: [{projectname: '太原****项目', employeeID: 'A123456489566', name: '李默', date: '2018/9/23', remark: ''}],
			// 项目工作报表数据
			projectList: [{projectname: '太原****项目', employeeID: 'A123456489566', progress: '86%', account: '75%', date: '2018/9/23', remark: ''}],
			// 要查看的数据
			forminfo: {}
		}
	},
	methods: {
		receive(data) {
			console.log(data);
			this.SidebarNo = data;
		},
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
		// 添加个人日报
		adddaily() {
			this.IsDaily = !this.IsDaily;
		},
		// 添加项目报表
		addReport() {
			this.IsReport = !this.IsReport;
		},
		// 返回按钮，返回主页
		back() {
			this.IsDaily = !this.IsDaily;
			this.IsBtn = true;
		},
		// 接收数据
		showMsg(data) {
			this.IsDaily = data;
		},
		// 点击查看按钮
		view(e) {
			console.log(this.projectList[e.path[4].id]);
			this.forminfo = this.projectList[e.path[4].id];
			this.IsDaily = !this.IsDaily;
			this.IsBtn = false;

		},
		// 项目工作填报返回按钮
		back1() {
			console.log(123);
			this.IsReport = !this.IsReport;
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped>
.project-projectinfo {
	display: flex;
	.main {
		flex: 1;
		padding-right: 30px;
		.projectunfo {
			.title {
				line-height: 50px;
			}
			.content {
				display: flex;
				margin-top: 10px;
				.sort {
					flex: 1;
				}
				.project-list {
					flex: 5;
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
					.project-content {
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
						.title-progress { flex: 1; }
						.title-account { flex: 1; }
						.title-projectname { flex: 1; }
						.title-employeeID { flex: 1; }
						.title-name { flex: 1; }
						.title-date { flex: 1; } 
						.title-remark { flex: 1; }
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
}
</style>
<!-- 请假申请 -->
<template>
<div class="resources-talentpool">
	<div class="slide">
		<Navigation :isActive='num'></Navigation>			
	</div>
	<div class="content" v-if='!Isform'>
		<div class="title">请假申请</div>
		<!-- 右边框 请假列表 -->
		<div class="leave-list">
			<div class="title">
				<span @click='leaverequest'>+ 添加</span>
				<input type="text" placeholder="搜索">
			</div>
			<!-- <Waiting :staffList='staffList'></Waiting> -->
			<div class="leave-content">
				<div class="content-title">
					<p class='title-Serial'>序号</p>
					<p class='title-name'>姓名</p>
					<p class='title-JobNum'>工号</p>
					<p class='title-type'>类型</p>
					<p class='title-department'>部门</p>
					<p class='title-period'>时间段</p>
					<p class='title-status'>状态</p>
					<p class='title-operating'>操作</p>
				</div>
				<div class="content-main" v-for='(item, index) in leaveList' :key='index' :id='index'>
					<!-- 序号 -->
					<div class="title-Serial">
						<p>{{item.Serial}}</p>
					</div>
					<!-- 姓名 -->
					<div class="title-name">
						<p>{{item.name}}</p>
					</div>
					<!-- 工号 -->
					<div class="title-name">
						<p>{{item.JobNum}}</p>
					</div>
					<!-- 类型 -->
					<div class="title-type">
						<p>{{item.type}}</p>
					</div>
					<!-- 部门 -->
					<div class="title-department">
						<p>{{item.department}}</p>
					</div>
					<!-- 时间段 -->
					<div class="title-period">
						<p>{{item.period}}</p>
					</div>
					<!-- 状态 -->
					<div class="title-status">
						<p>{{item.status}}</p>
					</div>
					<!-- 操作 -->
					<div class="title-operating">
						<span class='view'><el-button type="primary" icon="el-icon-search" @click='view'>查看</el-button></span>
						<span class='view'><el-button type="primary" icon="el-icon-edit" @click='edit'>修改</el-button></span>
						<span class='delete'><el-button type="primary" icon="el-icon-delete">删除</el-button></span>
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
						<span class='page-num'><input type="text" v-model='value' readonly></span>
						<span class='jump-right'>
							<span>
								<i class="el-icon-caret-right right-two"></i><i class="el-icon-caret-right"></i>
							</span>
							<i class="el-icon-caret-right right-one"></i><b>|</b>
						</span>
					</span>
				</div>
			</div>
		</div>
	</div>
	<div class="form" v-if='Isform'>
		<div class="back">
			<span @click='back'>返回</span>
		</div>
		<div class="forminfo">
			<!-- <FormTravel v-on:back='receive' :viewinfo='viewinfo'></FormTravel> -->
			<FormLeave v-on:back='receive' :IsBtn='IsBtn' :forminfo='forminfo'></FormLeave>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
import Navigation from '../Navigation.vue'
import FormLeave from './FormLeave.vue'
export default {
	components: { Navigation, FormLeave },
	data() {
		return {
			num: 2,
			// 当前页码
			value: 1,
			// 是否显示申请表
			Isform: false,
			// 是否显示提交按钮
			IsBtn: true,
			leaveList: [{Serial: '1', name: '汪洋', JobNum: '1258746956', type: '事假', department: '研发部', period: '2018/5/2--2018/5/12', status: '待审核'}, {Serial: '2', name: '汪洋', JobNum: '1258746956', type: '事假', department: '研发部', period: '2018/5/2--2018/5/12', status: '待审核'}],
			// 要查看的数据
			forminfo: {}
		}
	},
	methods: {
		// 添加新的申请
		leaverequest() {
			console.log(123);
			this.Isform = !this.Isform;
			this.IsBtn = true;
			this.forminfo = {};
		},
		// 返回首页
		back() {
			this.Isform = !this.Isform;
		},
		// 接收表单数据
		receive(data) {
			this.Isform = data;
			console.log(data)
		},
		// 查看请假申请表
		view(e) {
			this.IsBtn = false;
			this.Isform = !this.Isform;
			console.log(this.leaveList[e.path[4].id]);
			this.forminfo = this.leaveList[e.path[4].id];
		},
		// 修改信息
		edit(e) {
			this.forminfo = this.leaveList[e.path[4].id];
			this.Isform = !this.Isform;
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped>
.resources-talentpool {
	display: flex;
	padding-right: 30px;
	.content {
		flex: 1;
		.title {
			line-height: 50px;
		}
		.leave-list {
			flex: 1;
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
			.leave-content {
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
				.title-JobNum { flex: 1; }
				.title-type { flex: 1; }
				.title-department { flex: 1; }
				.title-period { flex: 2; }
				.title-status { flex: 1; }
				.title-operating { 
					flex: 2;
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
	}
	.form {
		width: 100%;
		.back {
			font-size: 12px;
			margin-top: 20px;
			margin-bottom: 20px;
			span {
				border: 1px solid #ccc;
				padding: 5px 15px;
				cursor: pointer;
			}
		}
	}
}
</style>
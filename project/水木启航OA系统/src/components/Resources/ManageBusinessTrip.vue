<template>
<div class='resources-managebusinesstrip'>
	<div class="slide">
		<Navigation :isActive='num'></Navigation>			
	</div>
	<div class="content" v-if='!IsShow'>
		<div class="title">出差申请</div>
		<div class="main">
			<!-- 出差申请 -->
			<div class="list">
				<div class="title">
					<span @click='add'>+添加</span>
					<input type="text" placeholder="搜索">
				</div>
				<div class="staff-content">
					<div class="content-title">
						<p class='title-name'>姓名</p>
						<p class='title-JobNum'>工号</p>
						<p class='title-application'>申请项目编码</p>
						<p class='title-destination'>目的地</p>
						<p class='title-department'>部门</p>
						<p class='title-period'>时间段</p>
						<p class='title-status'>状态</p>
						<p class='title-operating'>操作</p>
					</div>
					<div class="content-main" v-for='(item, index) in TravelList' :key='index' :id='index'>
						<!-- 姓名 -->
						<div class="title-name">
							<p>{{item.name}}</p>
						</div>
						<!-- 工号 -->
						<div class="title-JobNum">
							<p>{{item.JobNum}}</p>
						</div>
						<!-- 申请项目编码 -->
						<div class="title-application">
							<p>{{item.application}}</p>
						</div>
						<!-- 目的地 -->
						<div class="title-destination">
							<p>{{item.destination}}</p>
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
							<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='deleteinfo'>删除</el-button></span>
						</div>
					</div>
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
	<div class="form" v-if='IsShow'>
		<div class="back">
			<span @click='back'>返回</span>
		</div>
		<div class="forminfo">
			<FormTravel v-on:back='receive' :viewinfo='viewinfo'></FormTravel>
		</div>
	</div>



	<!-- <FormInService></FormInService> -->
	<!-- <School></School> -->


</div>
</template>
<script type="text/javascript">
import Navigation from "../Navigation.vue"
import FormTravel from "./FormTravel.vue"
export default {
	components: { Navigation, FormTravel},
	data() {
		return {
			num: 2,
			// 当前页码
			value: 1,
			// 是否显示出差申请单
			IsShow: false,
			TravelList: [{name: '汪洋', JobNum: 123456789, application: "A123456489566", destination: '太原', department: '研发部', period: '2015/5/3~2018/5/29', status: '待审核'}, {name: '汪洋', JobNum: 123456789, application: "A123456489566", destination: '太原', department: '研发部', period: '2015/5/3~2018/5/29', status: '待审核'}, {name: '汪洋', JobNum: 123456789, application: "A123456489566", destination: '太原', department: '研发部', period: '2015/5/3~2018/5/29', status: '待审核'}],
			//viewinfo 点击查看时，需要查看的所有信息
			viewinfo: {}
		}
	},
	created() {
		// console.log(123);
		// 组件创建时，发送请求，渲染页面。
	},
	updated() {
		// console.log(111);
		// 数据更新，发送请求，重新渲染页面
	},
	methods: {
		// 添加按钮，添加出差申请单
		add() {
			this.IsShow = !this.IsShow;
		},
		// 返回按钮，返回出差申请列表
		back() {
			this.IsShow = !this.IsShow;
			this.viewinfo = {};
		},
		// 接受子组件传递的数据
		receive(data) {
			console.log(data);
			this.IsShow = data;
		},
		// 点击查看按钮
		view(e) {
			console.log(e.path[4].id);
			// console.log(this.TravelList[e.path[4].id]);
			this.viewinfo = this.TravelList[e.path[4].id];
			this.IsShow = !this.IsShow;
		},
		// 点击删除按钮
		deleteinfo() {
			// 发送请求，删除数据
			

			console.log('删除成功');
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped>
.resources-managebusinesstrip {
	display: flex;
	.content {
		flex: 1;
		padding-right: 30px;
		.title {
			line-height: 50px;
		}
		.main {
			display: flex;
			margin-top: 10px;
			.sort {
				flex: 1;
			}
			.list {
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
					.title-JobNum { flex: 2; }
					.title-application { flex: 2; }
					.title-destination { flex: 1; }
					.title-department { flex: 1; }
					.title-period { flex: 2; }
					.title-status { flex: 1; }
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
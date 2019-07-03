<template>
<div class='finance-projectaccounting'>
	<!-- 侧边栏 -->
	<div class="slide">
		<Navigation :isActive='num'></Navigation>			
	</div>
	<div class="main" v-if='IsForm'>
		<div class="title">项目核算</div>
		<div class="content">
			<div class="Account-list">
				<div class="title">
					<span @click='addList'>+ 添加</span>
					<input type="text" placeholder="搜索">
				</div>
				<div class="Account-content">
					<div class="content-title">
						<p class='title-Serial'>序号</p>
						<p class='title-projectname'>项目名称</p>
						<p class='title-TotalCost'>费用总计</p>
						<p class='title-operating'>操作</p>
					</div>
					<!-- 制度列表 -->
					<div class="content-main" v-for="(item, index) in AccountList" :key='index' :id='index'>
						<!-- 序号 -->
						<div class="title-Serial">
							<p>{{item.Serial}}</p>
						</div>
						<!-- 项目名称 -->
						<div class="title-projectname">
							<p>{{item.projectname}}</p>
						</div>
						<!-- 费用总计 -->
						<div class="title-TotalCost">
							<p>{{item.TotalCost}}</p>
						</div>
						<!-- 操作 -->
						<div class="title-operating">
							<span class='view'><el-button type="primary" icon="el-icon-search" @click='view'>查看</el-button></span>
							<span class='delete'><el-button type="primary" icon="el-icon-delete">删除</el-button></span>
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
		</div>
	</div>
	<!-- 添加新的项目核算表 -->
	<div class="AccountForm" v-if='!IsForm'>
		<div class="back">
			<span @click='back'>返回</span>
		</div>
		<div class="form">
			<!-- <WageForm v-on:back='receive' :formInFo='formInFo' :IsBtn='IsBtn'></WageForm> -->
			<!-- <Reimburseform v-on:back='receive' :loaninfo='loaninfo' :IsBtn='IsBtn'></Reimburseform> -->
			<AccountForm v-on:back='receive'  :IsBtn='IsBtn'></AccountForm>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
import Navigation from '../Navigation.vue'
import AccountForm from './AccountForm.vue'
export default {
	components: { Navigation, AccountForm },
	data() {
		return {
			num: 5,
			// 当前页码
			value: 1,
			// 是否跳转表格
			IsForm: true,
			// 是否显示按钮
			IsBtn: true,
			AccountList: [{Serial:'1', projectname: '太原******项目', TotalCost: '300000.00'}, {Serial:'2', projectname: '太原******项目', TotalCost: '201945.00'}],
			// 要查看的数据
			accountinfo: {}
		}
	},
	methods: {
		// 添加新的项目核算表
		addList() {
			console.log('添加新的项目核算表');
			this.IsForm = !this.IsForm;

		},
		// 返回项目核算列表
		back() {
			this.IsForm = !this.IsForm;
			this.accountinfo = {};
			this.IsBtn = true;

		},
		// 接受表单数据
		receive(data) {
			this.IsForm = data;
		},
		// 点击查看按钮，获取要查看的数据，跳转到财务报销表
		view(e) {
			console.log(e.path[4].id);
			console.log(this.AccountList[e.path[4].id]);
			this.accountinfo = this.AccountList[e.path[4].id];
			this.IsForm = !this.IsForm;
			this.IsBtn = false;
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped>
.finance-projectaccounting {
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
			display: flex;
			margin-top: 10px;
			.sort {
				flex: 1;
			}
			.Account-list {
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
						line-height: 20px;
						width: 80px;
						height: 25px;
						float: right;
					}
				}
				.Account-content {
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
					.title-Serial { flex: 1; }
					.title-projectname { flex: 3; }
					.title-TotalCost { flex: 1; }
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
			}
		}
	}
	.AccountForm {
		width: 100%;
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
</style>
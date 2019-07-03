<template>
<div class="purview-managerole">
	<div class="slide">
		<Navigation :isActive='num'></Navigation>			
		<!-- <Navigation :isActive='num'></Navigation> -->			
		<!-- <Navigation></Navigation> -->
	</div>
	<div class='main'>
		<!-- 用户管理 -->
		<div class="manageuser">
			<div class="title">角色管理</div>
			<div class='content'>
				<!-- 角色列表 -->
				<div class="staff-list">
					<div class="title">
						<span @click='addrole'>+ 添加</span>
						<input type="text" placeholder="搜索" class='search'>
					</div>
					<!-- <Waiting :staffList='staffList'></Waiting> -->
					<div class="staff-content">
						<div class="content-title">
							<p class='title-Serial'>序号</p>
							<p class='title-name'>名称</p>
							<p class='title-PrivilegeValue'>权限值</p>
							<p class='title-department'>部门</p>
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
							<!-- 权限值 -->
							<div class="title-PrivilegeValue">
								<p>{{item.PrivilegeValue}}</p>
							</div>
							<!-- 部门 -->
							<div class="title-department">
								<p>{{item.department}}</p>
							</div>
							<!-- 操作 -->
							<div class="title-operating">
								<span class='view'><el-button type="primary" icon="el-icon-setting" @click='setting'>设置</el-button></span>
								<span class='view'><el-button type="primary" icon="el-icon-edit" @click='edit'>修改</el-button></span>
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
			<div class="mask" v-if='IsSetting'>
				<div class="setting">
					<div class="title">权限管理</div>
					<div class="form">
						<div class="title">{{Role}}</div>
						<el-tree :data="data" show-checkbox node-key="id" ref="tree" highlight-current>
						</el-tree>
					</div>
					<div class="btn">
						<span @click='submit'>确认</span>
						<span class='cancel' @click='cancel'>取消</span>
					</div>
				</div>
			</div>
			<div class="mask" v-if='IsAdd'>
				<div class="addrole">
					<div class="title">添加角色</div>
					<div class="form">
						<p><span>名称</span><input type="text"></p>
						<p><span>状态</span>
							<select required>
								<option value="" disabled selected>请选择</option> 
								<option value="B01">有效</option>
								<option value="B01">无效</option>
							</select>
						</p>
						<p><span>备注</span><textarea></textarea></p>
					</div>
					<div class="btn">
						<span @click='submit1'>确认</span>
						<span class='cancel' @click='cancel1'>取消</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
import Navigation from "../Navigation.vue"
export default {
	components: { Navigation},
	data() {
		return {
			num: 7,
			// 当前页码
			value: 1,
			// 是否显示权限设置
			IsSetting: false,
			// 是否添加权限
			IsAdd: false,
			// 权限修改名称
			Role: '',
			// 修改时的数据
			editinfo: {},
			staffList: [{Serial: '1', name: '王菲', PrivilegeValue: '16', department: '研发部'}, {Serial: '2', name: '王菲', PrivilegeValue: '1', department: '研发部'}],
			// 设置表单数据
			data: [{
				id: 1,
				label: '项目管理',
				children: [{
					id: 4,
					label: '项目添加'
				}, {
					id: 5,
					label: '项目删除'
				},{
					id: 6,
					label: '项目修改'
				},{
					id: 7,
					label: '项目上传'
				}]
			}, {
				id: 2,
				label: '合同管理',
				children: [{
					id: 8,
					label: '项目添加'
				}, {
					id: 9,
					label: '项目删除'
				},{
					id: 10,
					label: '项目修改'
				},{
					id: 11,
					label: '项目上传'
				}]
			},  {
				id: 3,
				label: '内容管理',
				children: [{
					id: 12,
					label: '项目添加'
				}, {
					id: 13,
					label: '项目删除'
				},{
					id: 14,
					label: '项目修改'
				},{
					id: 15,
					label: '项目上传'
				}]
			},  {
				id: 4,
				label: '操作管理',
				children: [{
					id: 16,
					label: '项目添加'
				}, {
					id: 17,
					label: '项目删除'
				},{
					id: 18,
					label: '项目修改'
				},{
					id: 19,
					label: '项目上传'
				}]
			},  {
				id: 5,
				label: '其他操作',
				children: [{
					id: 20,
					label: '项目添加'
				}, {
					id: 21,
					label: '项目删除'
				},{
					id: 22,
					label: '项目修改'
				},{
					id: 23,
					label: '项目上传'
				}]
			}],
		}
	},
	methods: {
		// 点击设置按钮，进行权限设置
		setting(e) {
			console.log(this.staffList[e.path[4].id].name);
			this.Role = this.staffList[e.path[4].id].name;
			this.IsSetting = !this.IsSetting;
		},
		// 点击添加按钮
		addrole() {
			this.IsAdd = !this.IsAdd;
		},
		// 点击修改按钮
		edit(e) {
			console.log(this.staffList[e.path[4].id]);
			this.editinfo = this.staffList[e.path[4].id];
			this.IsAdd = !this.IsAdd;
		},
		// 权限管理设置确认按钮
		submit() {
			//发送请求，提交数据
			
			this.IsSetting = !this.IsSetting;
		},
		// 权限管理取消按钮
		cancel() {
			this.IsSetting = !this.IsSetting;
		},
		// 权限管理设置确认按钮
		submit1() {
			//发送请求，提交数据
			
			this.IsAdd = !this.IsAdd;
		},
		// 权限管理取消按钮
		cancel1() {
			this.IsAdd = !this.IsAdd;
		}


	}
}
</script>
<style type="text/css" lang='scss' scoped="">
.purview-managerole {
	display: flex;
	.main {
		flex: 1;
		position: relative;
		.title {
			line-height: 50px;
		}
		.content {
			flex: 1;
			margin-top: 10px;
			padding-right: 30px;
			.staff-list {
				border: 1px solid #ccc;
				// position: relative;
				// position: relative;
				// box-sizing: border-box;
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
					input.search {
						float: right;
						line-height: 20px;
						width: 80px;
						height: 25px;
					}
				}
				.staff-content {
					font-size: 12px;
					line-height: 40px;
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
					.title-name { flex: 3; }
					.title-PrivilegeValue { flex: 1; }
					.title-department { flex: 1; }
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
		.mask {
			position: absolute;
			left: -30px;
			top: 0;
			bottom: 0;
			right: 0;
			background-color: rgba(0, 0, 0, .0);
			z-index: 100;
			.setting,.addrole {
				position: absolute;
				left: 40%;
				top: 150px;
				border: 1px solid #ccc;
				background-color: #fff;
				width: 170px;
				font-size: 12px; 
				padding-right: 10px;
				p {
					line-height: 30px;
					span {
						display: inline-block;
						width: 50px;
						text-align: right;
						margin-right: 10px;
						font-style: normal;
					}
					input {
						width: 100px;
					}
					select {
						width: 100px;
					}
					textarea {
						width: 100px;
						height: 50px;
						resize:none;
						outline:medium;
						overflow-y: scroll;
						vertical-align: top;
					}
				}
				.title {
					// border: none;
					padding-left: 10px;
					line-height: 30px;
				}
				.btn {
					text-align: center;
					margin-bottom: 10px;
					margin-top: 10px;
					span {
						background-color: #fff;
						color: #000;
						border: 1px solid #ccc;
						border-radius: 0;
						padding: 3px 5px;
						margin-right: 30px;
						cursor: pointer;
					}
					.cancel {
						margin-right: 0;
					}
				}
			}
		}
	}
}
</style>
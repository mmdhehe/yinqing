<template>
<div class="purview-manageuser">
	<div class="slide">
		<Navigation :isActive='num'></Navigation>			
		<!-- <Navigation :isActive='num'></Navigation> -->			
		<!-- <Navigation></Navigation> -->
	</div>
	<div class="main">
		<div class="title">用户管理</div>
		<div class='content'>
			<!-- 左边框 分类 -->
			<div class="sort">
				<sort :sortList='sortList' v-on:status='receive'></sort>
			</div>
			<!-- 右边框 员工列表 -->
			<div class="staff-list">
				<div class="title">
					<span @click='adduser'>+ 添加</span>
					<input type="text" placeholder="搜索" class='search'>
				</div>
				<!-- <Waiting :staffList='staffList'></Waiting> -->
				<div class="staff-content">
					<div class="content-title">
						<p class='title-Serial'>序号</p>
						<p class='title-name'>姓名</p>
						<p class='title-department'>部门</p>
						<p class='title-email'>邮箱</p>
						<p class='title-phone'>电话</p>
						<p class='title-loginname'>登录名</p>
						<p class='title-status'>状态</p>
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
						<!-- 部门 -->
						<div class="title-department">
							<p>{{item.department}}</p>
						</div>
						<!-- 邮箱 -->
						<div class="title-email">
							<p>{{item.email}}</p>
						</div>
						<!-- 电话 -->
						<div class="title-phone">
							<p>{{item.phone}}</p>
						</div>
						<!-- 登录名 -->
						<div class="title-loginname">
							<p>{{item.loginname}}</p>
						</div>
						<!-- 状态 -->
						<div class="title-status">
							<p>{{item.status}}</p>
						</div>
						<!-- 操作 -->
						<div class="title-operating">
							<span class='view'><el-button type="primary" icon="el-icon-edit" @click='edit'>修改</el-button></span>
							<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='deleteuser'>删除</el-button></span>
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
		<div class="mask" v-if='IsNew'>
			<div class="adduser">
				<div class="title">添加用户</div>
				<div class="form">
					<p><i>姓名</i><input type="text"></p>
					<p><i>部门</i>
						<select required>
							<option value="" disabled selected>请选择</option> 
							<option value="B01">研发部</option>
							<option value="B01">财务部</option>
							<option value="B01">人事部</option>
							<option value="B01">销售部</option>
						</select>
					</p>
					<p><i>邮箱</i><input type="text"></p>
					<p><i>电话</i><input type="text"></p>
					<p><i>登录名</i><input type="text"></p>
					<p><i>密码</i><input type="text"></p>
					<p><i>状态</i>
						<select required>
							<option value="" disabled selected>请选择</option> 
							<option value="B01">有效</option>
							<option value="B01">无效</option>
						</select>
					</p>
					<p><i>备注</i>
						<textarea></textarea>
					</p>
				</div>
				<div class="btn">
					<span @click='submit'>确认</span>
					<span class='cancel' @click='cancel'>取消</span>
				</div>
			</div>
		</div>
		<div class="mask" v-if='IsDelete'>
			<div class="adduser">
				<div class="title">添加用户{{username}}</div>
				<div class="btn">
					<span @click='submit1'>确认</span>
					<span class='cancel' @click='cancel1'>取消</span>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
import Navigation from "../Navigation.vue"
import Sort from "../Common/Sort.vue"
export default {
	components: { Navigation, Sort},
	data() {
		return {
			num: 7,
			// 当前页码
			value: 1,
			// 是否添加新用户
			IsNew: false,
			// 是否删除该用户
			IsDelete: false,
			sortList: [ '研发部', '财务部', '人事部', '销售部' ],
			staffList: [{Serial: '1', name: '王菲', department: '研发部', email: '16965564@qq.com', phone: '8546627665645', loginname: '12345', status: '有效'}, {Serial: '2', name: '王菲', department: '研发部', email: '16965564@qq.com', phone: '8546627665645', loginname: '12345', status: '有效'}],
			// 要添加的用户信息
			forminfo: {},
			// 要删除的的用户信息
			delforminfo: {},
			// 删除用户的名字
			username: ''
		}
	},
	methods: {
		receive(data) {
			console.log(data);
		},
		// 添加新用户
		adduser() {
			this.IsNew = !this.IsNew;
		},
		// 点击确认按钮
		submit() {
			// 获取数据，添加新用户
			
			this.IsNew = !this.IsNew;
		},
		//点击取消按钮
		cancel() {
			this.IsNew = !this.IsNew;
		},
		// 点击修改按钮
		edit(e) {
			console.log(this.staffList[e.path[4].id]);
			this.forminfo = this.staffList[e.path[4].id];
			this.IsNew = !this.IsNew;

		},
		// 点击删除按钮
		deleteuser(e) {
			console.log(this.staffList[e.path[4].id].name);
			this.username = this.staffList[e.path[4].id].name;
			this.IsDelete = !this.IsDelete
		},
		// 点击确认删除按钮
		submit1() {
			// 发送数据，确认删除
			
			this.IsDelete = !this.IsDelete
		},
		// 点击取消删除按钮
		cancel1() {
			this.IsDelete = !this.IsDelete
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped="">
.purview-manageuser {
	display: flex;
	.main {
		flex: 1;
		position: relative;
		.title {
			line-height: 50px;
		}
		.content {
			flex: 1;
			display: flex;
			margin-top: 10px;
			padding-right: 30px;
			.sort {
				flex: 1;
			}
			.staff-list {
				flex: 5;
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
					.title-department { flex: 1; }
					.title-email { flex: 1; }
					.title-phone { flex: 1; }
					.title-loginname { flex: 1; }
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
			.adduser {
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
					i {
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
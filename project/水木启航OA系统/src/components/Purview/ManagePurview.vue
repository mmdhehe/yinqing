<!-- 权限管理 -->
<template>
<div class="purview-managepurview">
	<div class="slide">
		<Navigation :isActive='num'></Navigation>			
		<!-- <Navigation :isActive='num'></Navigation> -->			
		<!-- <Navigation></Navigation> -->
	</div>
	<div class="main">
		<div class="title">权限管理</div>
		<div class='content'>
			<!-- 左边框 分类 -->
			<div class="sort">
				<sort :sortList='sortList' v-on:status='receive'></sort>
			</div>
			<!-- 右边框 员工列表 -->
			<div class="purview-list">
				<div class="title">
					<span @click='addPrivilege'>+ 添加</span>
					<input type="text" placeholder="搜索" class='search'>
				</div>
				<!-- <Waiting :staffList='staffList'></Waiting> -->
				<div class="purview-content">
					<div class="content-title">
						<p class='title-Serial'>序号</p>
						<p class='title-PrivilegeName'>权限名称</p>
						<p class='title-type'>类型</p>
						<p class='title-status'>状态</p>
						<p class='title-operating'>操作</p>
					</div>
					<div class="content-main" v-for='(item, index) in purviewList' :key='index' :id='index'>
						<!-- 序号 -->
						<div class="title-Serial">
							<p>{{item.Serial}}</p>
						</div>
						<!-- 权限名称 -->
						<div class="title-PrivilegeName">
							<p>{{item.PrivilegeName}}</p>
						</div>
						<!-- 类型 -->
						<div class="title-type">
							<p>{{item.type}}</p>
						</div>
						<!-- 状态 -->
						<div class="title-status">
							<p>{{item.status}}</p>
						</div>
						<!-- 操作 -->
						<div class="title-operating">
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
		<div class="mask" v-if='IsForm'>
			<div class="addrole">
				<div class="title">添加权限</div>
				<div class="form">
					<p><span>权限模块</span>
						<select required v-model='formdata.PrivilegeModule'>
							<option value="" disabled selected>请选择</option> 
							<option value="项目管理">项目管理</option>
							<option value="合同管理">合同管理</option>
							<option value="内容管理">内容管理</option>
							<option value="操作管理">操作管理</option>
							<option value="其他管理">其他管理</option>
						</select>
					</p>
					<p><span>权限名称</span><input type="text" v-model='formdata.PrivilegeName'></p>
					<p><span>类型</span>
						<select required v-model='formdata.type'>
							<option value="" disabled selected>请选择</option> 
							<option value="列表">列表</option>
							<option value="按钮">按钮</option>
						</select>
					</p>
					<p><span>状态</span>
						<select required v-model='formdata.status'>
							<option value="" disabled selected>请选择</option> 
							<option value="有效">有效</option>
							<option value="无效">无效</option>
						</select>
					</p>
					<p><span>备注</span>
						<textarea v-model='formdata.Remark'></textarea>
					</p>
				</div>
				<div class="btn">
					<span @click='submit'>确认</span>
					<span class='cancel' @click='cancel'>取消</span>
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
			// 是否显示添加表格
			IsForm: false,
			sortList: [ '项目管理', '合同管理', '内容管理', '操作管理', '其他管理' ],
			purviewList: [{Serial: '1', PrivilegeName: '合同添加', type: '列表', status: '有效'}, {Serial: '2', PrivilegeName: '合同修改', type: '按钮', status: '有效'}, {Serial: '3', PrivilegeName: '强行删除', type: '列表', status: '无效'}],
			// 表单数据
			formdata: {}
		}
	},
	methods: {
		receive(data) {
			console.log(data);
		},
		// 添加新的权限
		addPrivilege() {
			console.log('添加新的权限');
			this.IsForm = !this.IsForm;
		},
		// 确认按钮
		submit() {
			// 发送请求，提交表格数据
			console.log(this.formdata);

			this.IsForm = !this.IsForm;
		},
		// 取消按钮
		cancel() {
			this.IsForm = !this.IsForm;
		},
		// 点击修改按钮
		edit(e) {
			console.log(this.purviewList[e.path[4].id]);
			this.IsForm = !this.IsForm;
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped="">
.purview-managepurview {
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
			.purview-list {
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
				.purview-content {
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
					.title-PrivilegeName { flex: 3; }
					.title-type { flex: 1; }
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
			.addrole {
				position: absolute;
				left: 40%;
				top: 150px;
				border: 1px solid #ccc;
				background-color: #fff;
				width: 400px;
				font-size: 12px; 
				padding-right: 10px;
				.form {
					overflow: hidden;
					padding-left: 10px;
					p {
						line-height: 30px;
						width: 180px;
						float: left;
						line-height: 50px;
						span {
							display: inline-block;
							width: 50px;
							margin-right: 10px;
						}
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
							width: 110px;
							height: 50px;
							resize:none;
							outline:medium;
							overflow-y: scroll;
							vertical-align: top;
							position: relative;
							left: -3px;
							margin-top: 20px;
						}
					}
				}
				.title {
					// border: none;
					padding-left: 10px;
				}
				.btn {
					text-align: center;
					margin-bottom: 10px;
					margin-top: 20px;
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
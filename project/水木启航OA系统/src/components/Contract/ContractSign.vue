<!-- 签订合同 -->
<template>
<div class="contractsign">
	<!-- 侧边栏 -->
	<div class="slide">
		<Navigation :isActive='num'></Navigation>			
		<!-- <Navigation :isActive='num'></Navigation> -->			
		<!-- <Navigation></Navigation> -->
	</div>
	<!-- 页面 -->
	<div class="content" v-if='IsForm'>
		<div class="title">签订合同</div>
		<div class="main">
			<el-tabs tab-position="left" v-model="activeName">
				<el-tab-pane label="外包合同" name='first'>
					<div class="contractlist">
						<div class="title">
							<span @click='addcontract'>+ 添加</span>
							<input type="text" placeholder="搜索" class='search'>
						</div>
						<!-- <Waiting :staffList='staffList'></Waiting> -->
						<div class="contract-content">
							<div class="content-title">
								<p class='title-Serial'>序号</p>
								<p class='title-contractname'>合同名称</p>
								<p class='title-ContractNo'>合同编码</p>
								<p class='title-UploadStaff'>上传人员</p>
								<p class='title-UploadDate'>上传时间</p>
								<p class='title-operating'>操作</p>
							</div>
							<div class="content-main" v-for='(item, index) in contractList' :key='index' :id='index'>
								<!-- 序号 -->
								<div class="title-Serial">
									<p>{{item.Serial}}</p>
								</div>
								<!-- 合同名称 -->
								<div class="title-contractname">
									<p>{{item.contractname}}</p>
								</div>
								<!-- 合同编码 -->
								<div class="title-ContractNo">
									<p>{{item.ContractNo}}</p>
								</div>
								<!-- 上传人员 -->
								<div class="title-UploadStaff">
									<p>{{item.UploadStaff}}</p>
								</div>
								<!-- 上传时间 -->
								<div class="title-UploadDate">
									<p>{{item.UploadDate}}</p>
								</div>
								<!-- 操作 -->
								<div class="title-operating">
									<span class='view'><el-button type="primary" icon="el-icon-search" @click='view'>查看</el-button></span>
									<span class='edit'><el-button type="primary" icon="el-icon-edit" @click='edit'>修改</el-button></span>
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
				</el-tab-pane>
				<el-tab-pane label="承接合同" name='second'>
					<div class="contractlist">
						<div class="title">
							<span @click='addcontract'>+ 添加</span>
							<input type="text" placeholder="搜索" class='search'>
						</div>
						<!-- <Waiting :staffList='staffList'></Waiting> -->
						<div class="contract-content">
							<div class="content-title">
								<p class='title-Serial'>序号</p>
								<p class='title-contractname'>合同名称</p>
								<p class='title-ContractNo'>合同编码</p>
								<p class='title-UploadStaff'>上传人员</p>
								<p class='title-UploadDate'>上传时间</p>
								<p class='title-operating'>操作</p>
							</div>
							<div class="content-main" v-for='(item, index) in UndertakeList' :key='index' :id='index'>
								<!-- 序号 -->
								<div class="title-Serial">
									<p>{{item.Serial}}</p>
								</div>
								<!-- 合同名称 -->
								<div class="title-contractname">
									<p>{{item.contractname}}</p>
								</div>
								<!-- 合同编码 -->
								<div class="title-ContractNo">
									<p>{{item.ContractNo}}</p>
								</div>
								<!-- 上传人员 -->
								<div class="title-UploadStaff">
									<p>{{item.UploadStaff}}</p>
								</div>
								<!-- 上传时间 -->
								<div class="title-UploadDate">
									<p>{{item.UploadDate}}</p>
								</div>
								<!-- 操作 -->
								<div class="title-operating">
									<span class='view'><el-button type="primary" icon="el-icon-search" @click='view'>查看</el-button></span>
									<span class='edit'><el-button type="primary" icon="el-icon-edit" @click='edit'>修改</el-button></span>
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
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
	<!-- 员工合同表格 -->
	<div class="form" v-if='!IsForm'>
		<div class="back"><span @click='back'>返回</span></div>
		<div class="forninfo">
			<FormContractTemplate v-on:back='recevice' :forminfo='forminfo' :IsBtn='IsBtn'></FormContractTemplate>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
import Navigation from "../Navigation.vue"
import Sort from "../Common/Sort.vue"
import FormContractTemplate from "./FormContractTemplate.vue"
export default {
	components: { Navigation, Sort, FormContractTemplate },
	data() {
		return {
			num: 6,
			// 当前显示标签页
			activeName: 'first',
			// 是否显示合同模板表格
			IsForm: true,
			// 查看表格是否可以改动
			IsBtn: true,
			// 当前页码
			value: 1,
			// 是否显示外包合同列表
			IsProbation: true,
			sortList: ['外包合同', '承接合同'],
			// 外包合同列表
			contractList: [{Serial: 1, contractname: '塔院******外包项目', ContractNo: 'A12345645433', UploadStaff: '张华', UploadDate: '2019/2/14'}],
			// 承接合同列表
			UndertakeList: [{Serial: 1, contractname: '塔院******合作项目', ContractNo: 'A12345645433', UploadStaff: '张华', UploadDate: '2019/2/14'}],
			// 要查看的数据
			forminfo: {}
		}
	},
	methods: {
		// 接收sort传递的数据
		accept(data) {
			console.log(data);
			if (data == 0) {
				this.IsProbation = true;
			} else {
				this.IsProbation = false;
			}
		},
		// 接收数据
		recevice(data) {
			console.log(data);
			this.IsForm = data;
		},
		// 添加员工合同
		addcontract() {
			this.IsForm = !this.IsForm;
			// 表格可以改动
			this.IsBtn = true;
		},
		// 返回员工合同首页
		back() {
			this.IsForm = !this.IsForm;
			// 表格可以改动
			this.IsBtn = true;
		},
		// 点击查看按钮
		view(e) {
			this.IsForm = !this.IsForm;
			console.log(e.path[4].id);
			console.log(this.contractList[e.path[4].id]);
			this.forminfo = this.contractList[e.path[4].id];
			// 表格不可以改动
			this.IsBtn = false;
		},
		// 点击修改按钮
		edit(e) {
			this.IsForm = !this.IsForm;
			console.log(e.path[4].id);
			console.log(this.contractList[e.path[4].id]);
			this.forminfo = this.contractList[e.path[4].id];
			// 表格不可以改动
			this.IsBtn = true;
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped="">
.contractsign {
	display: flex;
	.title {
		line-height: 50px;
	}
	.content {
		flex: 1;
		padding-right: 30px;
		.main {
			.contractlist {
				border: 1px solid #ccc;
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
				.contract-content {
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
					.title-contractname { flex: 1; }
					.title-ContractNo { flex: 1; }
					.title-UploadStaff { flex: 1; }
					.title-UploadDate { flex: 1; }
					.title-operating { 
						flex: 2;
						display: flex;
						padding-right: 10px;
						span {
							margin-right: 5px;
							.el-button.el-button--primary {
								padding: 2px 3px;
								border: none;
								font-size: 12px;
							}
						}
						.delete {
							.el-button.el-button--primary {
								background-color: #C6292E;
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
	}
}
</style>
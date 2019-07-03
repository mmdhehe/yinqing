<!-- 资产管理 -->
<template>
<div class="administration-rules">
	<div class="slide">
		<Navigation :isActive='num'></Navigation>			
	</div>
	<div class="main">
		<div class="page" v-if='Isshow'>
			<!-- 标题 -->
			<div class="title">资产管理</div>
			<!-- 主要内容 -->
			<div class="content">
				<el-tabs tab-position="left" style="height: 200px;" v-model="activeName">
					<el-tab-pane label="资产列表" name="first">
						<div class="asset-list">
							<div class="title">
								<span id='asset' @click='addform'>+ 添加</span>
								<input type="text" placeholder="搜索">
							</div>
							<div class="asset-content">
								<div class="content-title">
									<p class='title-Serial'>序号</p>
									<p class='title-name'>名称</p>
									<p class='title-category'>类别</p>
									<p class='title-No'>编号</p>
									<p class='title-unitprice'>单价</p>
									<p class='title-Employer'>领用人</p>
									<p class='title-status'>状态</p>
									<p class='title-operating'>操作</p>
								</div>
								<!-- 制度列表 -->
								<div class="content-main" v-for="(item, index) in assetList" :key='index' :id='index'>
									<!-- 序号 -->
									<div class="title-Serial">
										<p>{{item.Serial}}</p>
									</div>
									<!-- 名称 -->
									<div class="title-name">
										<p>{{item.name}}</p>
									</div>
									<!-- 类别 -->
									<div class="title-category">
										<p>{{item.category}}</p>
									</div>
									<!-- 编号 -->
									<div class="title-No">
										<p>{{item.No}}</p>
									</div>
									<!-- 单价 -->
									<div class="title-unitprice">
										<p>{{item.unitprice}}</p>
									</div>
									<!-- 领用人 -->
									<div class="title-Employer">
										<p>{{item.Employer}}</p>
									</div>
									<!-- 状态 -->
									<div class="title-status">
										<p>{{item.status}}</p>
									</div>
									<!-- 操作 -->
									<div class="title-operating">
										<span class='view'><el-button type="primary" icon="el-icon-search" @click="view1">查看</el-button></span>
										<span class='view'><el-button type="primary" icon="el-icon-edit">编辑</el-button></span>
										<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='deletemsg'>删除</el-button></span>
									</div>
								</div>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="资产领用" name="second">
						<div class="asset-list">
							<div class="title">
								<span id='assetuse' @click='addform'>+ 添加</span>
								<input type="text" placeholder="搜索">
							</div>
							<div class="asset-content">
								<div class="content-title">
									<p class='title-Serial'>序号</p>
									<p class='title-title'>标题</p>
									<p class='title-applicant'>申请人</p>
									<p class='title-department'>所属部门</p>
									<p class='title-applicationdate'>申请时间</p>
									<p class='title-amount'>申请数量</p>
									<p class='title-operating'>操作</p>
								</div>
								<!-- 制度列表 -->
								<div class="content-main" v-for="(item, index) in useList" :key='index' :id='index'>
									<!-- 序号 -->
									<div class="title-Serial">
										<p>{{item.Serial}}</p>
									</div>
									<!-- 标题 -->
									<div class="title-title">
										<p>{{item.title}}</p>
									</div>
									<!-- 申请人 -->
									<div class="title-applicant">
										<p>{{item.applicant}}</p>
									</div>
									<!-- 所属部门 -->
									<div class="title-department">
										<p>{{item.department}}</p>
									</div>
									<!-- 申请时间 -->
									<div class="title-applicationdate">
										<p>{{item.applicationdate}}</p>
									</div>
									<!-- 申请数量 -->
									<div class="title-amount">
										<p>{{item.amount}}</p>
									</div>
									<!-- 操作 -->
									<div class="title-operating">
										<span class='view'><el-button type="primary" icon="el-icon-search" @click="view2">查看</el-button></span>
										<span class='view'><el-button type="primary" icon="el-icon-edit">编辑</el-button></span>
										<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='deletemsg'>删除</el-button></span>
									</div>
								</div>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="资产归还" name="third">
						<div class="asset-list">
							<div class="title">
								<span id='assetreturn' @click='addform'>+ 添加</span>
								<input type="text" placeholder="搜索">
							</div>
							<div class="asset-content">
								<div class="content-title">
									<p class='title-Serial'>序号</p>
									<p class='title-title'>标题</p>
									<p class='title-applicant'>申请人</p>
									<p class='title-department'>所属部门</p>
									<p class='title-applicationdate'>申请时间</p>
									<p class='title-amount'>归还数量</p>
									<p class='title-operating'>操作</p>
								</div>
								<!-- 制度列表 -->
								<div class="content-main" v-for="(item, index) in returnList" :key='index' :id='index'>
									<!-- 序号 -->
									<div class="title-Serial">
										<p>{{item.Serial}}</p>
									</div>
									<!-- 标题 -->
									<div class="title-title">
										<p>{{item.title}}</p>
									</div>
									<!-- 申请人 -->
									<div class="title-applicant">
										<p>{{item.applicant}}</p>
									</div>
									<!-- 所属部门 -->
									<div class="title-department">
										<p>{{item.department}}</p>
									</div>
									<!-- 申请时间 -->
									<div class="title-applicationdate">
										<p>{{item.applicationdate}}</p>
									</div>
									<!-- 申请数量 -->
									<div class="title-amount">
										<p>{{item.amount}}</p>
									</div>
									<!-- 操作 -->
									<div class="title-operating">
										<span class='view'><el-button type="primary" icon="el-icon-search" @click="view3">查看</el-button></span>
										<span class='view'><el-button type="primary" icon="el-icon-edit">编辑</el-button></span>
										<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='deletemsg'>删除</el-button></span>
									</div>
								</div>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="资产采购" name="fourth">
						<div class="asset-list">
							<div class="title">
								<span id='assetpurchase' @click='addform'>+ 添加</span>
								<input type="text" placeholder="搜索">
							</div>
							<div class="asset-content">
								<div class="content-title">
									<p class='title-Serial'>序号</p>
									<p class='title-title'>标题</p>
									<p class='title-applicant'>申请人</p>
									<p class='title-department'>所属部门</p>
									<p class='title-applicationdate'>申请时间</p>
									<p class='title-amount'>归还数量</p>
									<p class='title-operating'>操作</p>
								</div>
								<!-- 制度列表 -->
								<div class="content-main" v-for="(item, index) in purchaseList" :key='index' :id='index'>
									<!-- 序号 -->
									<div class="title-Serial">
										<p>{{item.Serial}}</p>
									</div>
									<!-- 标题 -->
									<div class="title-title">
										<p>{{item.title}}</p>
									</div>
									<!-- 申请人 -->
									<div class="title-applicant">
										<p>{{item.applicant}}</p>
									</div>
									<!-- 所属部门 -->
									<div class="title-department">
										<p>{{item.department}}</p>
									</div>
									<!-- 申请时间 -->
									<div class="title-applicationdate">
										<p>{{item.applicationdate}}</p>
									</div>
									<!-- 申请数量 -->
									<div class="title-amount">
										<p>{{item.amount}}</p>
									</div>
									<!-- 操作 -->
									<div class="title-operating">
										<span class='view'><el-button type="primary" icon="el-icon-search" @click="view4">查看</el-button></span>
										<span class='view'><el-button type="primary" icon="el-icon-edit">编辑</el-button></span>
										<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='deletemsg'>删除</el-button></span>
									</div>
								</div>
							</div>
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>
		</div>
		<!-- 列表显示 -->
		<div class="form" v-if='!Isshow'>
			<div class="back" @click='back'><span>返回</span></div>
			<!-- <LearningSituation></LearningSituation> -->
			<!-- 资产添加表 -->
			<FormAddAsset v-if='IsAsset' v-on:back='receive1' :form='form' :IsBtn='IsBtn'></FormAddAsset>
			<!-- 资产领用申请表 -->
			<FormAssetUse v-if='IsAssetUse' v-on:back='receive1' :form='form' :IsBtn='IsBtn'></FormAssetUse>
			<!-- 资产归还申请表 -->
			<FormAssetReturn v-if='IsAssetReturn' v-on:back='receive1' :form='form' :IsBtn='IsBtn'></FormAssetReturn>
			<!-- 资产采购申请表 -->
			<FormAssetPurchase v-if='IsAssetPurchase' v-on:back='receive1' :form='form' :IsBtn='IsBtn'></FormAssetPurchase>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
import Navigation from "../Navigation.vue"	
import FormAddAsset from "./FormAddAsset.vue"	
import FormAssetUse from "./FormAssetUse.vue"	
import FormAssetReturn from "./FormAssetReturn.vue"	
import FormAssetPurchase from "./FormAssetPurchase.vue"	
export default {
	components: { Navigation, FormAddAsset, FormAssetUse, FormAssetReturn, FormAssetPurchase },
	data() {
		return {
			num: 1,
			// 是否显示按钮
			IsBtn: true,
			// 是否显示表单
			Isshow: true,
			// 是否显示资产添加表
			IsAsset: false,
			// 是否显示资产领用表
			IsAssetUse: false,
			// 是否显示资产归还表
			IsAssetReturn: false,
			// 是否显示资产采购表
			IsAssetPurchase: false,
			// 显示哪个标签页
			activeName: 'first',
			sortList: [ '资产列表', '资产领用', '资产归还', '资产采购' ],
			// 资产列表
			assetList: [{Serial:'1', name:'22寸显示屏', category: '电脑类', No:'DN001', unitprice: '4000', Employer: '李华', status: '正常' }, {Serial:'2', name:'22寸显示屏', category: '电脑类', No:'DN001', unitprice: '4000', Employer: '李华', status: '正常' }],
			// 资产领用
			useList: [{Serial:'1', title:'资产领用申请-李华', applicant: '李华', department:'技术部', applicationdate: '2019/5/4', amount: '1'}, {Serial:'2', title:'资产领用申请-李华', applicant: '李华', department:'技术部', applicationdate: '2019/5/4', amount: '1'}],
			// 资产归还
			returnList: [{Serial:'1', title:'资产归还申请-李华', applicant: '李华', department:'技术部', applicationdate: '2019/5/4', amount: '1'}, {Serial:'2', title:'资产归还申请-李华', applicant: '李华', department:'技术部', applicationdate: '2019/5/4', amount: '1'}],
			// 资产采购
			purchaseList: [{Serial:'1', title:'资产采购申请-李华', applicant: '李华', department:'技术部', applicationdate: '2019/5/4', amount: '1'}, {Serial:'2', title:'资产采购申请-李华', applicant: '李华', department:'技术部', applicationdate: '2019/5/4', amount: '1'}],
			title:'',
			info: [],
			// 要查看的数据
			form: {},
			
		}
	},
	methods: {
		// 点击删除按钮
		deletemsg(e) {
			// 发送请求，将该点击对象从数据库删除
		},
		// 点击添加按钮
		addform(e) {
			// console.log(e.target.id);
			this.IsBtn = true;
			this.Isshow = !this.Isshow;
			if (e.target.id == 'asset') {
				this.IsAsset = true;
				this.IsAssetUse = false;
				this.IsAssetReturn = false;
				this.IsAssetPurchase = false;
				this.activeName = 'first'
			}
			if (e.target.id == 'assetuse') {
				this.IsAsset = false;
				this.IsAssetUse = true;
				this.IsAssetReturn = false;
				this.IsAssetPurchase = false;
				this.activeName = 'second'
			}
			if (e.target.id == 'assetreturn') {
				this.IsAsset = false;
				this.IsAssetUse = false;
				this.IsAssetReturn = true;
				this.IsAssetPurchase = false;
				this.activeName = 'third'
			}
			if (e.target.id == 'assetpurchase') {
				this.IsAsset = false;
				this.IsAssetUse = false;
				this.IsAssetReturn = false;
				this.IsAssetPurchase = true;
				this.activeName = 'fourth'
			}
		},
		// 点击返回按钮
		back() {
			this.Isshow = !false;
		},
		// 接收资产添加的数据
		receive1(data) {
			// console.log(data);
			this.Isshow = data;
		},
		// 资产列表查看按钮
		view1(e) {
			this.IsBtn = false;
			this.Isshow = !this.Isshow;
			this.IsAsset = true;
			this.IsAssetUse = false;
			this.IsAssetReturn = false;
			this.IsAssetPurchase = false;
			this.activeName = 'first';
			console.log(this.assetList[e.path[4].id]);
			this.form = this.assetList[e.path[4].id];
		},
		// 资产领用查看按钮
		view2(e) {
			this.IsBtn = false;
			this.Isshow = !this.Isshow;
			this.IsAsset = false;
			this.IsAssetUse = true;
			this.IsAssetReturn = false;
			this.IsAssetPurchase = false;
			this.activeName = 'second'
			console.log(this.assetList[e.path[4].id]);
			this.form = this.assetList[e.path[4].id];
		},
		// 资产归还查看按钮
		view3(e) {
			this.IsBtn = false;
			this.Isshow = !this.Isshow;
			this.IsAsset = false;
			this.IsAssetUse = false;
			this.IsAssetReturn = true;
			this.IsAssetPurchase = false;
			this.activeName = 'second'
			console.log(this.assetList[e.path[4].id]);
			this.form = this.assetList[e.path[4].id];
		},
		// 资产采购查看按钮
		view4(e) {
			this.IsBtn = false;
			this.Isshow = !this.Isshow;
			this.IsAsset = false;
			this.IsAssetUse = false;
			this.IsAssetReturn = false;
			this.IsAssetPurchase = true;
			this.activeName = 'second'
			console.log(this.assetList[e.path[4].id]);
			this.form = this.assetList[e.path[4].id];
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped>
.administration-rules {
	display: flex;
	// padding-top: 20px;
	// padding-left: 20px;
	.main {
		flex: 1;
		padding-right: 30px;
	}
	.title {
		line-height: 50px;
	}
	.content {
		margin-top: 10px;
		.asset-list {
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
			.asset-content {
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
				// .title-name {
				// 	flex: 1;
				// 	p {
				// 		overflow: hidden; 
				// 		white-space: nowrap; 
				// 		text-overflow: ellipsis;
				// 		width: 200px;
				// 	}
				// }
				.title-Serial { flex: 1; }
				.title-name { 
					flex: 1;
					p {
						overflow: hidden; 
						white-space: nowrap; 
						text-overflow: ellipsis;
						width: 100px;
					} 
				}
				.title-title { flex: 1; }
				.title-applicant { flex: 1; }
				.title-department { flex: 1; }
				.title-applicationdate { flex: 1; }
				.title-amount { flex: 1; }
				.title-category { flex: 1; }
				.title-No { flex: 1; }
				.title-unitprice { flex: 1; }
				.title-Employer { flex: 1; }
				.title-status { flex: 1; }
				.title-operating {
					flex: 2;
					display: flex;
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
	.form {
		padding-top: 30px;
		.back {
			cursor: pointer;
			border: 1px solid #ccc;
			width: 50px;
			text-align: center;
			padding: 5px 0;
			font-size: 12px;
		}
	}
}
</style>
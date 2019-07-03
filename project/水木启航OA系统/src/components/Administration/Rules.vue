<template>
<div class="administration-rules">
	<div class="slide">
		<Navigation :isActive='num'></Navigation>			
	</div>
	<div class="main">
		<div class="page" v-if='Isshow'>
			<!-- 标题 -->
			<div class="title">规章制度</div>
			<!-- 主要内容 -->
			<div class="content">
				<el-tabs tab-position="left" v-model="activeName" @tab-click="handleClick">
					<el-tab-pane label="公司章程" name="first">
						<div class="system-list">
							<div class="title">
								<router-link tag='span' to='/addmsg'>+ 添加</router-link>
								<input type="text" placeholder="搜索">
							</div>
							<div class="system-content">
								<div class="content-title">
									<p class='title-name'>名称</p>
									<p class='title-date'>发布时间</p>
									<p class='title-vision'>版本</p>
									<p class='title-founder'>创建人</p>
									<p class='title-operating'>操作</p>
								</div>
								<!-- 制度列表 -->
								<div class="content-main" v-for="(item, index) in systemList" :key='index' :id='index'>
									<!-- 名称 -->
									<div class="title-name" @click='view'>
										<p>{{item.name}}</p>
									</div>
									<!-- 发布时间 -->
									<div class="title-date">
										<p>{{item.date}}</p>
									</div>
									<!-- 版本 -->
									<div class="title-vision">
										<p>{{item.vision}}</p>
									</div>
									<!-- 创建人 -->
									<div class="title-founder">
										<p>{{item.founder}}</p>
									</div>
									<!-- 操作 -->
									<div class="title-operating">
										<span class='view'><el-button type="primary" icon="el-icon-search" @click="views">查看</el-button></span>
										<span class='view'><el-button type="primary" icon="el-icon-edit">编辑</el-button></span>
										<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='deletemsg'>删除</el-button></span>
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
					<el-tab-pane label="差旅管理" name="second">
						<div class="system-list">
							<div class="title">
								<router-link tag='span' to='/addmsg'>+ 添加</router-link>
								<input type="text" placeholder="搜索">
							</div>
							<div class="system-content">
								<div class="content-title">
									<p class='title-name'>名称</p>
									<p class='title-date'>发布时间</p>
									<p class='title-vision'>版本</p>
									<p class='title-founder'>创建人</p>
									<p class='title-operating'>操作</p>
								</div>
								<!-- 制度列表 -->
								<div class="content-main" v-for="(item, index) in systemList" :key='index' :id='index'>
									<!-- 名称 -->
									<div class="title-name" @click='view'>
										<p>{{item.name}}</p>
									</div>
									<!-- 发布时间 -->
									<div class="title-date">
										<p>{{item.date}}</p>
									</div>
									<!-- 版本 -->
									<div class="title-vision">
										<p>{{item.vision}}</p>
									</div>
									<!-- 创建人 -->
									<div class="title-founder">
										<p>{{item.founder}}</p>
									</div>
									<!-- 操作 -->
									<div class="title-operating">
										<span class='view'><el-button type="primary" icon="el-icon-search" @click="views">查看</el-button></span>
										<span class='view'><el-button type="primary" icon="el-icon-edit">编辑</el-button></span>
										<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='deletemsg'>删除</el-button></span>
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
					<el-tab-pane label="报销管理" name="third">
						<div class="system-list">
							<div class="title">
								<router-link tag='span' to='/addmsg'>+ 添加</router-link>
								<input type="text" placeholder="搜索">
							</div>
							<div class="system-content">
								<div class="content-title">
									<p class='title-name'>名称</p>
									<p class='title-date'>发布时间</p>
									<p class='title-vision'>版本</p>
									<p class='title-founder'>创建人</p>
									<p class='title-operating'>操作</p>
								</div>
								<!-- 制度列表 -->
								<div class="content-main" v-for="(item, index) in systemList" :key='index' :id='index'>
									<!-- 名称 -->
									<div class="title-name" @click='view'>
										<p>{{item.name}}</p>
									</div>
									<!-- 发布时间 -->
									<div class="title-date">
										<p>{{item.date}}</p>
									</div>
									<!-- 版本 -->
									<div class="title-vision">
										<p>{{item.vision}}</p>
									</div>
									<!-- 创建人 -->
									<div class="title-founder">
										<p>{{item.founder}}</p>
									</div>
									<!-- 操作 -->
									<div class="title-operating">
										<span class='view'><el-button type="primary" icon="el-icon-search" @click="views">查看</el-button></span>
										<span class='view'><el-button type="primary" icon="el-icon-edit">编辑</el-button></span>
										<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='deletemsg'>删除</el-button></span>
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
					<el-tab-pane label="项目管理" name="fourth">
						<div class="system-list">
							<div class="title">
								<router-link tag='span' to='/addmsg'>+ 添加</router-link>
								<input type="text" placeholder="搜索">
							</div>
							<div class="system-content">
								<div class="content-title">
									<p class='title-name'>名称</p>
									<p class='title-date'>发布时间</p>
									<p class='title-vision'>版本</p>
									<p class='title-founder'>创建人</p>
									<p class='title-operating'>操作</p>
								</div>
								<!-- 制度列表 -->
								<div class="content-main" v-for="(item, index) in systemList" :key='index' :id='index'>
									<!-- 名称 -->
									<div class="title-name" @click='view'>
										<p>{{item.name}}</p>
									</div>
									<!-- 发布时间 -->
									<div class="title-date">
										<p>{{item.date}}</p>
									</div>
									<!-- 版本 -->
									<div class="title-vision">
										<p>{{item.vision}}</p>
									</div>
									<!-- 创建人 -->
									<div class="title-founder">
										<p>{{item.founder}}</p>
									</div>
									<!-- 操作 -->
									<div class="title-operating">
										<span class='view'><el-button type="primary" icon="el-icon-search" @click="views">查看</el-button></span>
										<span class='view'><el-button type="primary" icon="el-icon-edit">编辑</el-button></span>
										<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='deletemsg'>删除</el-button></span>
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
					<el-tab-pane label="软件安装" name="fifth">
						<div class="system-list">
							<div class="title">
								<router-link tag='span' to='/addmsg'>+ 添加</router-link>
								<input type="text" placeholder="搜索">
							</div>
							<div class="system-content">
								<div class="content-title">
									<p class='title-name'>名称</p>
									<p class='title-date'>发布时间</p>
									<p class='title-vision'>版本</p>
									<p class='title-founder'>创建人</p>
									<p class='title-operating'>操作</p>
								</div>
								<!-- 制度列表 -->
								<div class="content-main" v-for="(item, index) in systemList" :key='index' :id='index'>
									<!-- 名称 -->
									<div class="title-name" @click='view'>
										<p>{{item.name}}</p>
									</div>
									<!-- 发布时间 -->
									<div class="title-date">
										<p>{{item.date}}</p>
									</div>
									<!-- 版本 -->
									<div class="title-vision">
										<p>{{item.vision}}</p>
									</div>
									<!-- 创建人 -->
									<div class="title-founder">
										<p>{{item.founder}}</p>
									</div>
									<!-- 操作 -->
									<div class="title-operating">
										<span class='view'><el-button type="primary" icon="el-icon-search" @click="views">查看</el-button></span>
										<span class='view'><el-button type="primary" icon="el-icon-edit">编辑</el-button></span>
										<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='deletemsg'>删除</el-button></span>
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
					<el-tab-pane label="学习资料" name="sixth">
						<div class="system-list">
							<div class="title">
								<router-link tag='span' to='/addmsg'>+ 添加</router-link>
								<input type="text" placeholder="搜索">
							</div>
							<div class="system-content">
								<div class="content-title">
									<p class='title-name'>名称</p>
									<p class='title-date'>发布时间</p>
									<p class='title-vision'>版本</p>
									<p class='title-founder'>创建人</p>
									<p class='title-operating'>操作</p>
								</div>
								<!-- 制度列表 -->
								<div class="content-main" v-for="(item, index) in systemList" :key='index' :id='index'>
									<!-- 名称 -->
									<div class="title-name" @click='view'>
										<p>{{item.name}}</p>
									</div>
									<!-- 发布时间 -->
									<div class="title-date">
										<p>{{item.date}}</p>
									</div>
									<!-- 版本 -->
									<div class="title-vision">
										<p>{{item.vision}}</p>
									</div>
									<!-- 创建人 -->
									<div class="title-founder">
										<p>{{item.founder}}</p>
									</div>
									<!-- 操作 -->
									<div class="title-operating">
										<span class='view'><el-button type="primary" icon="el-icon-search" @click="views">查看</el-button></span>
										<span class='view'><el-button type="primary" icon="el-icon-edit">编辑</el-button></span>
										<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='deletemsg'>删除</el-button></span>
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
		<!-- 具体制度 -->
		<div class="specific" v-if='!Isshow'>
			<div class="back" @click='back'>
				<p>返回</p>
			</div>
			<Specific :title='title' :info='info'></Specific>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
import Navigation from "../Navigation.vue"
import Specific from './Specific.vue'
export default {
	components: { Navigation, Specific },
	data() {
		return {
			num: 1,
			// 当前页码
			value: 1,
			// 当前显示标签页
			activeName: 'first',
			sortList: [ '公司章程', '差旅管理', '报销管理', '项目管理', '软件安装', '学习资料' ],
			systemList: [{name:'公司管理制度1111111111111111111111111111111111111', date:'2019/6/8', vision:'1.1', founder:'张华'},{name:'公司管理制度文章', date:'2019/6/18', vision:'1.1', founder:'张华'}],
			title:'',
			info: [],
			Isshow: true
		}
	},
	methods: {
		// 点击标题的事件
		view(e) {
			// console.log(e.target.innerHTML);
			this.title = e.target.innerHTML;
			for (var i = 0; i < this.systemList.length; i++) {
				if(this.title == this.systemList[i].name) {
					this.info.push(this.systemList[i])
				}
			}
			this.Isshow = false;
		},
		// 点击查看按钮的事件
		views(e) {
			this.info = [];
			console.log(e.path[4].id);
			this.info.push(this.systemList[e.path[4].id]);
			this.Isshow = false;
		},
		// 点击删除按钮的事件
		deletemsg(e) {
			console.log(e.path[4].id);
			this.systemList.splice(e.path[4].id, 1)
			// 发送请求，删除数据
		},
		// 
		back() {
			this.Isshow = !false;
			this.info = [];
		},
		handleClick(tab, event) {
			// console.log(tab.label);
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
		.title {
			line-height: 50px;
		}
		.content {
			margin-top: 10px;
			.system-list {
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
				.system-content {
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
					.title-name {
						flex: 2;
						p {
							overflow: hidden; 
							white-space: nowrap; 
							text-overflow: ellipsis;
							width: 200px;
						}
					}
					.title-date {
						flex: 1;
					}
					.title-vision {
						flex: 1;
					}
					.title-founder {
						flex: 1;
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
			}
		}
		.specific {
			.back {
				cursor: pointer;
				margin-top: 30px;
				border: 1px solid #ccc;
				width: 50px;
				text-align: center;
				padding: 5px 0;
				font-size: 12px;
			}
		}
	}
}
</style>
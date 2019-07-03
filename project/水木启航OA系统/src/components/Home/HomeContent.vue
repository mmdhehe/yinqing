<template>
<div class="components-home">
	<div class="show" v-if='show'>
		<div class="one">
			<!-- 待办事项 -->
			<div class="to-do-list">
				<div class="title">待办事项</div>
				<div class="main">
					<div class="content">
						<p class="content-title">标题</p>
						<p class="content-date">时间</p>
						<p class="remind">提醒</p>
						<p class="operating">操作</p>
					</div>
					<div class="content" v-for='(item, index) in ToDoList' :key='index' :id='index'>
						<!-- 标题 -->
						<div class="content-title">
							<p class='omitted' title='点击查看'>{{item.title}}</p>
						</div>
						<!-- 时间 -->
						<div class="content-date">
							<p>{{item.date}}</p>
						</div>
						<!-- 提醒 -->
						<div class="remind">
							<p>{{item.remind}}</p>
						</div>
						<!-- 操作 -->
						<div class="operating">
							<span class='view'><el-button type="primary" icon="el-icon-search" @click='views'>查看</el-button></span>
							<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='open'>删除</el-button></span>
						</div>
					</div>			
				</div>
			</div>
			<!-- 项目管理 -->
			<div class="project-list">
				<div class="title">项目管理</div>
				<div class="main">
					<div class="content">
						<p class="content-title">项目名称</p>
						<p class="content-code">项目编码</p>
						<p class="Progress">项目进展百分比</p>
						<p class="operating">操作</p>
					</div>
					<div class="content" v-for='(item, index) in ProjectList' :key='index'>
						<!-- 项目名称 -->
						<div class="content-title">
							<p class='omitted' title='点击查看'>{{item.title}}</p>
						</div>
						<!-- 项目编码 -->
						<div class="content-code">
							<p>{{item.code}}</p>
						</div>
						<!-- 项目进展百分比 -->
						<div class="Progress">
							<p>{{item.Progress}}</p>
						</div>
						<!-- 操作 -->
						<div class="operating">
							<span class='view'><el-button type="primary" icon="el-icon-search">查看</el-button></span>
							<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='open'>删除</el-button></span>
						</div>
					</div>			
				</div>
			</div>
		</div>
		<div class="two">
			<!-- 最新公告 -->
			<div class="new-msg">
				<div class="title">
					<div class="name">最新公告</div>
					<div class="btn">
						<router-link  class="add" tag='span' to='/addmsg'>+添加</router-link>
						<span class="more">更多公告查询</span>
					</div>
				</div>
				<div class="main">
					<div class="content">
						<p class="content-title">标题</p>
						<p class="content-date">时间</p>
						<p class="publisher">发布人</p>
						<p class="operating">操作</p>
					</div>
					<div class="content" v-for='(item, index) in NewMsgList' :key='index' :id='index'>
						<!-- 标题 -->
						<div class="content-title">
							<p class='omitted' title='点击查看'>{{item.title}}</p>
						</div>
						<!-- 时间 -->
						<div class="content-date">
							<p>{{item.date}}</p>
						</div>
						<!-- 发布人 -->
						<div class="publisher">
							<p>{{item.publisher}}</p>
						</div>
						<!-- 操作 -->
						<div class="operating">
							<span class='view'><el-button type="primary" icon="el-icon-search" @click='view'>查看</el-button></span>
							<span class='view'><el-button type="primary" icon="el-icon-edit" @click='edit'>编辑</el-button></span>
							<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='open'>删除</el-button></span>
						</div>
					</div>
				</div>
			</div>
			<div class="date">
				<!-- <el-calendar v-model="value" class='calendar'>
				</el-calendar> -->
				<Calendar></Calendar>
			</div>
		</div>
		<!-- 弹框 -->
		<div class="Bullet-box">
			<!-- <div class="text">确定删除</div>
			<div class="btn">
				<span class='yes'>是</span>
				<span class='no'>否</span>
			</div> -->
		</div>
	</div>
	<!-- 点击查看要显示的页面 -->
	<div class="view"  v-if='!show'>
		<div class="back">
			<span @click='back'>返回</span>
		</div>
		<Announcement :viewinfo='viewinfo'></Announcement>
	</div>
</div>
</template>
<script type="text/javascript">
import Calendar from './Calendar.vue'
import Announcement from './Announcement.vue'
export default {
	components: { Calendar, Announcement },
	data() {
		return {
			show: true,
			ToDoList: [{title: '周一上午全体开会周一上午全体开会周一上午全体开会周一上午全体开会周一上午全体开会周一上午全体开会', date: '2019/3/4', remind: '2019/3/6前完成', text: 'sdfgha;sdhvgsdghv;loaidhygpojzhdvlkcjszdhvkxzdvbcxklju11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ghbvkljzxhbgvkjuxdfghvjxzchvbkfjdbkzdvbhfkxzf'},{title: '周一上午全体开会', date: '2019/3/4', remind: '2019/3/6前完成'}],
			NewMsgList: [{title: '公司人事部发布新人事管理制度', date: '2019/2/14', publisher: '李兰', text: '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222211111111111'},{title: '公司人事部发布新人事管理制度222', date: '2019/2/14', publisher: '李兰', text: ''}],
			ProjectList: [{title: '太原****项目', code: 'TYDF123466', Progress: '80%'}],
			value: new Date(),
			// 要查看的那条信息
			viewinfo: {}
		}
	},
	methods: {
		open(e) {
			console.log(e);
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
				}).then(() => {
					// 发送删除的请求，返回数据
					// 如果error=0，删除成功
					// 如果error不等于0，删除失败
					this.$message({
					type: 'success',
					message: '删除成功!'
				});
				}).catch(() => {
					this.$message({
					type: 'info',
					message: '已取消删除'
				});          
			});
		},
		view(e) {
			this.viewinfo = {};
			console.log(e.path[4].id);
			var id = e.path[4].id;
			this.viewinfo = this.NewMsgList[id];
			this.show = !this.show;
		},
		views(e) {
			this.viewinfo = {};
			console.log(e.path[4].id);
			var id = e.path[4].id;
			this.viewinfo = this.ToDoList[id];
			this.show = !this.show;
		},
		back() {
			this.show = !this.show;
		},
		edit() {
			// 用vuex传递数据
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped>
* {
	padding: 0;
	margin: 0;
}
.components-home {
	padding-right: 30px;
	// padding-left: 30px;
	.show {
		padding-top: 85px;
		.omitted {
			overflow: hidden; 
			white-space: nowrap; 
			text-overflow: ellipsis;
			width: 150px;
			cursor: pointer;
		}
		.one {
			display: flex;
			.to-do-list {
				width: 50%;
				margin-right: 20px;
				height: 300px;
				border: 1px solid #ccc;
				padding-top: 10px;
				padding-left: 5px;
				margin-bottom: 30px;
				.title {
					line-height: 44px;
				}
				.main {
					.content {
						display: flex;
						font-size: 12px;
						line-height: 30px;
						.content-title {
							flex: 2;
						}
						.content-date {
							flex: 1;
						}
						.remind {
							flex: 2;
						}
						.operating {
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
					}
				}
			}
			.project-list {
				flex: 1;
				height: 300px;
				border: 1px solid #ccc;
				padding-top: 10px;
				padding-left: 5px;
				margin-bottom: 30px;
				.title {
					line-height: 44px;
				}
				.main {
					.content {
						display: flex;
						font-size: 12px;
						line-height: 30px;
						.content-title {
							flex: 3;
						}
						.content-code {
							flex: 2;
						}
						.Progress {
							flex: 2;
						}
						.operating {
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
		}
		.two {
			display: flex;
			.new-msg {
				width: 50%;
				margin-right: 20px;
				height: 300px;
				border: 1px solid #ccc;
				padding-top: 10px;
				padding-left: 5px;
				.title {
					line-height: 44px;
					display: flex;
					.name {
						flex: 1;
					}
					.btn {
						font-size: 12px;
						padding-right: 10px;
						color: #fff;
						.add {
							background-color: #2DB32C;
							padding: 2px 3px;
							border-radius: 3px;
							cursor: pointer;
						}
						.more {
							background-color: #2DB32C;
							padding: 2px 3px;
							border-radius: 3px;
							cursor: pointer;
						}
					}
				}
				.content {
					display: flex;
					font-size: 12px;
					line-height: 30px;
					.content-title {
						flex: 2;
					}
					.content-date {
						flex: 1;
					}
					.publisher {
						flex: 1;
					}
					.operating {
						flex: 2;
						padding-right: 10px;
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
								margin-right: 10px;
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
			.date {
				flex: 1;
				width: 50%;
				height: 300px;
				border: 1px solid #ccc;
				padding-top: 10px;
				padding-left: 5px;
				overflow: scroll;
			}
		}
	}
	.view {
		.back {
			margin: 20px 0;
			span {
				border: 1px solid #ccc;
				font-size: 12px;
				padding: 8px 15px;
				cursor: pointer;
			}
		}
	}
}
</style>
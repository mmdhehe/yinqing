<!-- 人才库 -->
<template>
<div class="resources-talentpool">
	<div class="slide">
		<Navigation :isActive='num'></Navigation>			
	</div>
	<div class="content">
		<div class="title">人才库</div>
		<!-- 右边框 员工列表 -->
		<div class="talent-list">
			<div class="title">
				<span>+ 添加</span>
				<input type="text" placeholder="搜索">
			</div>
			<!-- <Waiting :staffList='staffList'></Waiting> -->
			<div class="talent-content">
				<div class="content-title">
					<p class='title-Serial'>序号</p>
					<p class='title-name'>姓名</p>
					<p class='title-sex'>性别</p>
					<p class='title-from'>来源</p>
					<p class='title-educat'>学历</p>
					<p class='title-position'>面试职位</p>
					<p class='title-date'>日期</p>
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
					<!-- 性别 -->
					<div class="title-name">
						<p>{{item.sex}}</p>
					</div>
					<!-- 来源 -->
					<div class="title-from">
						<p>{{item.from}}</p>
					</div>
					<!-- 学历 -->
					<div class="title-educat">
						<p>{{item.educat}}</p>
					</div>
					<!-- 面试职位 -->
					<div class="title-position">
						<p>{{item.position}}</p>
					</div>
					<!-- 日期 -->
					<div class="title-date">
						<p>{{item.date}}</p>
					</div>
					<!-- 状态 -->
					<div class="title-status">
						<p>{{item.status}}</p>
					</div>
					<!-- 操作 -->
					<div class="title-operating">
						<span class='view'><el-button type="primary" icon="el-icon-search">查看</el-button></span>
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
</div>
</template>
<script type="text/javascript">
import Navigation from '../Navigation.vue'
export default {
	components: { Navigation },
	data() {
		return {
			num: 2,
			// 当前页码
			value: 1,
			staffList: [{Serial: '1', name: '汪洋', sex: '男', from: '前程', educat: '大专', position: '研发部', date: '2018/5/2', status: '面试'},{Serial: '2', name: '汪洋', sex: '男', from: '前程', educat: '大专', position: '研发部', date: '2018/5/2', status: '未面试'}]
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
		.talent-list {
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
			.talent-content {
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
				.title-sex { flex: 1; }      
				.title-from { flex: 1; }     
				.title-educat { flex: 1; }   
				.title-position { flex: 1; } 
				.title-date { flex: 1; }     
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
}
</style>
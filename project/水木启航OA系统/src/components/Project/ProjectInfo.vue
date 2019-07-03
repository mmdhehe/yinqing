<template>
<div class='project-projectinfo'>
	<!-- 侧边栏 -->
	<div class="slide">
		<Navigation :isActive='num'></Navigation>			
	</div>
	<div class="main">
		<!-- 项目资料 -->
		<div class="projectunfo">
			<!-- 标题 -->
			<div class="title">项目资料</div>
			<div class="content">
				<!-- 左边框 分类 -->
				<div class="sort">
					<sort :sortList='sortList' v-on:status='receive'></sort>
				</div>
				<!-- 右边框 项目列表 -->
				<div class="project-list">
					<div class="title">
						<span>+ 添加</span>
						<input type="text" placeholder="搜索">
					</div>
					<!-- <Waiting :staffList='staffList'></Waiting> -->
					<div class="project-content">
						<div class="content-title">
							<p class='title-Serialnum'>序号</p>
							<p class='title-filename'>文件名</p>
							<p class='title-version'>版本号</p>
							<p class='title-Uploadtime'>上传时间</p>
							<p class='title-Uploadstaff'>上传人员</p>
							<p class='title-remark'>备注</p>
							<p class='title-operating'>操作</p>
						</div>
						<div class="content-main" v-for='(item, index) in projectList' :key='index' :id='index'>
							<!-- 序号 -->
							<div class="title-Serialnum">
								<p>{{item.Serialnum}}</p>
							</div>
							<!-- 文件名 -->
							<div class="title-filename">
								<p>{{item.filename}}</p>
							</div>
							<!-- 版本号 -->
							<div class="title-version">
								<p>{{item.version}}</p>
							</div>
							<!-- 上传时间 -->
							<div class="title-Uploadtime">
								<p>{{item.Uploadtime}}</p>
							</div>
							<!-- 上传人员 -->
							<div class="title-Uploadstaff">
								<p>{{item.Uploadstaff}}</p>
							</div>
							<!-- 备注 -->
							<div class="title-remark">
								<p>{{item.remark}}</p>
							</div>
							<!-- 操作 -->
							<div class="title-operating">
								<span class='view'><el-button type="primary" icon="el-icon-search">查看</el-button></span>
								<span class='delete'><el-button type="primary" icon="el-icon-delete">删除</el-button></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
import Sort from '../Common/Sort.vue'
import Navigation from '../Navigation.vue'
export default {
	components: { Sort, Navigation },
	data() {
		return {
			num: 3,
			sortList: [ '研发类', '应用类' ],
			projectList: [{Serialnum: '1', filename: '太原项目****需求分析', version: 'V1.2', Uploadtime: '2018/9/23', Uploadstaff: '李默', remark: '2018/5/2'}]
		}
	},
	methods: {
		receive(data) {
			console.log(data)
		},
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped>
.project-projectinfo {
	display: flex;
	.main {
		flex: 1;
		padding-right: 30px;
		.projectunfo {
			.title {
				line-height: 50px;
			}
			.content {
				display: flex;
				margin-top: 10px;
				.sort {
					flex: 1;
				}
				.project-list {
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
					.project-content {
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
						.title-Serialnum { flex: 1; }
						.title-filename { flex: 2; }
						.title-version { flex: 1; }
						.title-Uploadtime { flex: 1; }
						.title-Uploadstaff { flex: 1; }
						.title-remark { flex: 1; }
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
		}
	}
}
</style>
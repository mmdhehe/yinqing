<!-- 项目立项 -->
<template>
<div class="project-projectapproval">
	<div class="project-list" v-if='isshow'>
		<div class="project-content">
			<div class="content-title">
				<p class='project-name'>项目名称</p>
				<p class='project-code'>项目编码</p>
				<p class='project-sort'>项目类别</p>
				<p class='project-manager'>项目经理</p>
				<p class='project-date'>申请时间</p>
				<p class='project-applicant'>申请人</p>
				<p class='project-status'>状态</p>
				<p class='project-operating'>操作</p>
			</div>
			<div class="content-main" v-for='(item, index) in projectList' :key='index' :id='index'>
				<!-- 项目名称 -->
				<div class="project-name">
					<p>{{item.name}}</p>
				</div>
				<!-- 项目编码 -->
				<div class="project-code">
					<p>{{item.code}}</p>
				</div>
				<!-- 项目类别 -->
				<div class="project-sort">
					<p>{{item.sort}}</p>
				</div>
				<!-- 项目经理 -->
				<div class="project-manager">
					<p>{{item.manager}}</p>
				</div>
				<!-- 申请时间 -->
				<div class="project-date">
					<p>{{item.date}}</p>
				</div>
				<!-- 申请人 -->
				<div class="project-applicant">
					<p>{{item.applicant}}</p>
				</div>
				<!-- 状态 -->
				<div class="project-status">
					<p>{{item.status}}</p>
				</div>
				<!-- 操作 -->
				<div class="project-operating">
					<span class='view'><el-button type="primary" icon="el-icon-search" @click='view'>查看</el-button></span>
					<span class='view'><el-button type="primary" icon="el-icon-edit" @click='edit'>修改</el-button></span>
					<span class='delete'><el-button type="primary" icon="el-icon-delete" @click='delInfo'>删除</el-button></span>
				</div>
			</div>
		</div>
	</div>
	<div class="form" v-if='!isshow'>
		<div class="back" @click='addproject'>返回</div>
		<div class="project-form">
			<ProjectApplicationFrom :showinfo='showinfo' :disabled='issubmit' v-on:back='receive'></ProjectApplicationFrom>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
import ProjectApplicationFrom from './ProjectApplicationForm.vue'
export default {
	components: { ProjectApplicationFrom },
	data() {
		return {
			num: 3,
			projectList: [{name: '太原*******项目', code: 'A123456489566', sort: 'BIM应用', manager: '张华', date: '2019/2/13', applicant: '张华', status: '待审核'}],
			showinfo: {},
			isshow: true,
			issubmit: true
		}
	},
	created() {
		// 请求项目数据，放在projectList
	},
	methods: {
		addproject() {
			this.isshow = !this.isshow;
			this.showinfo = {};
			this.issubmit = true;
		},
		submit() {
			this.isshow = !this.isshow;
			// 发送请求，将表格内容提交
		},
		ShowId(data) {
			this.show = data;
		},
		receive(data) {
			console.log(data);
			this.isshow = data;
		},
		// 查看项目立项申请表
		view(e) {
			console.log(e.path[4].id);
			console.log(this.projectList[e.path[4].id].name);
			// if (projectList[e.path[4].id].name) 
			this.showinfo = this.projectList[e.path[4].id];
			if (this.showinfo != {}) {
				console.log(this.showinfo);
				this.isshow = !this.isshow;
				this.issubmit = false;
			}
		},
		// 修改项目立项表
		edit(e) {
			console.log(this.projectList[e.path[4].id]);
			this.showinfo = this.projectList[e.path[4].id];
			if (this.showinfo != {}) {
				console.log(this.showinfo);
				this.isshow = !this.isshow;
				this.issubmit = true;
			}
		},
		// 删除该条信息
		delInfo(e) {
			console.log(this.projectList[e.path[4].id]);
			// 向后端发送请求，删除该条数据
			console.log('删除成功')
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped>
.project-projectapproval {
	// padding-top: 20px;
	// padding-left: 20px;
	padding-right: 30px;
	.project-list {
		border: 1px solid #ccc;
		position: relative;
		box-sizing: border-box;
		.content-title {
			display: flex;
			border-bottom: 1px solid #ccc;
			line-height: 40px;
			font-size: 12px;
			padding: 0 20px;
		}
		.content-main {
			display: flex;
			border-bottom: 1px solid #ccc;
			line-height: 40px;
			font-size: 12px;
			padding: 0 20px;
			cursor: pointer;
		}
		.project-name {flex: 1;}
		.project-code {flex: 1;}
		.project-sort {flex: 1;}
		.project-manager {flex: 1;}
		.project-date {flex: 1;}
		.project-applicant {flex: 1;}
		.project-status {flex: 1;}
		.project-operating {
			flex: 1;
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
	.form {
		.back {
			margin-top: 30px;
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
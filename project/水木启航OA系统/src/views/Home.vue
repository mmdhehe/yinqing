<template>
<div class='page-home'>
	<!-- 侧边栏 -->
	<div class="home-slide">
		<Navigation :isActive='num'></Navigation>			
	</div>
	<!-- 右边主要内容 -->
	<div class="home-content">
		<!-- 首页展示 -->
		<HomeContent class='item'></HomeContent>
		<!-- 组织结构 -->
		<!-- <StaffPart></StafsfPart> -->
		<!-- 岗位职责 -->
		<!-- <JobResponse></JobResponse> -->
		<!-- 规章制度 -->
		<!-- <Rules></Rules> -->
		<!-- 学习记录 -->
		<!-- <Learning></Learning> -->
		<!-- 员工通讯录 -->
		<!-- <Address></Address> -->
		<!-- 员工管理 -->
		<!-- <ManageStaff></ManageStaff> -->
		<!-- 项目立项 -->
		<!-- <ProjectApproval></ProjectApproval> -->
	</div>
</div>
</template>
<script type="text/javascript">
import Navigation from "../components/Navigation.vue"
import HomeContent from "../components/Home/HomeContent.vue"
// 行政管理
import StaffPart from "../components/Administration/StaffPart.vue"   //组织结构
import JobResponse from "../components/Administration/JobResponse.vue"   //岗位职责
import Rules from "../components/Administration/Rules.vue"   //规章制度
import Address from "../components/Administration/Address.vue"   //员工通讯录
// 人力资源
import ManageStaff from "../components/Resources/ManageStaff.vue"   //员工管理
// 项目管理
import ProjectApproval from "../components/Project/ProjectApproval.vue"   //项目立项
// BIM项目
// 财务管理
// 合同管理
// 角色管理
export default {
	components: { 
		Navigation, HomeContent, StaffPart, JobResponse, Rules, Address, ManageStaff, ProjectApproval
	},
	data() {
		return {
			num: 0
		}
	},
	methods: {
		show(e) {
			this.Isshow = !this.Isshow
			console.log(e);
		}
	}
}	
</script>
<style type="text/css" lang='scss'>
* {
	padding: 0;
	margin: 0;
	// overflow-y: hidden;
}
.page-home {
	display: flex;
	// border: 1px solid #BBBBBB;
	border-bottom: none;
	.home-content {
		flex: 1;
		.item {
			// display: none;
		}
	}
}
</style>
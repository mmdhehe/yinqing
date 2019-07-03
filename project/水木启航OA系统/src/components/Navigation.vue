<template>
<div class="components-nav home-list">
	<!-- 侧边栏个人头像 -->
	<div class="user">
		<div class="user-pic">
			<img class='pic' src="../assets/pic.jpeg" alt="">
		</div>
		<div class="user-name">李莹</div>
	</div>
	<!-- 侧边栏列表 -->
	<!-- 我的首页 -->
	<div class="item">
		<router-link tag='div' to='*' class="title" id='0' @click='show'>我的首页</router-link>
		<!-- // <div class="title" id='0' @click='show'>我的首页</div> -->
	</div>
	<!-- 行政管理 -->
	<div class="item">
		<router-link tag='div' to='/StaffPart' class="title" id='1' @click='show'>行政管理</router-link>
		<div class="ops" v-bind:class='{active:1==isActive}'>
			<router-link tag='div' to='/staffpart'  class="tip" @click='jump' id='B1'>组织结构</router-link>
			<router-link tag='div' to='/JobResponse'  class="tip" @click='jump' id='B2'>岗位职责</router-link>
			<router-link tag='div' to='/Rules'  class="tip" @click='jump' id='B3'>规章制度</router-link>
			<router-link tag='div' to='/Address'  class="tip" @click='jump' id='B5'>员工通讯录</router-link>
			<router-link tag='div' to='/Asset'  class="tip" @click='jump' id='B4'>资产管理</router-link>
		</div>
	</div>
	<!-- 人力资源 -->
	<div class="item">
		<router-link tag='div' to='/managestaff' class="title" id='2' @click='show'>人事管理</router-link>
		<!-- <div class="title" id='2' @click='show'>人力资源</div> -->
		<div class="ops" v-bind:class='{active:2==isActive}'>
			<router-link tag='div' to='/managestaff'  class="tip" @click='jump' id='C1'>员工档案</router-link>
			<router-link tag='div' to='/TalentPool'  class="tip" @click='jump' id='C2'>人才库</router-link>
			<router-link tag='div' to='/ManageAttend'  class="tip" @click='jump' id='C2'>考勤管理</router-link>
			<router-link tag='div' to='/ManageBusinessTrip'  class="tip" @click='jump' id='C3'>出差管理</router-link>
			<router-link tag='div' to='/LeaveRequest'  class="tip" @click='jump' id='C3'>请假申请</router-link>

			<!-- <div class="tip" @click='jump' id='C1'>员工管理</div>
			<div class="tip" @click='jump' id='C2'>考勤管理</div>
			<div class="tip" @click='jump' id='C3'>出差管理</div> -->
		</div>
	</div>
	<!-- 项目管理 -->
	<div class="item">
		<router-link tag='div' to='/Project' class="title" id='3' @click='show'>项目管理</router-link>
		<!-- <div class="title" id='3' @click='show'>项目管理</div> -->
		<div class="ops" v-bind:class='{active:3==isActive}'>
			<router-link tag='div' to='/projectapproval'  class="tip" @click='jump' id='D1'>项目立项</router-link>
			<router-link tag='div' to='/ProjectInfo'  class="tip" @click='jump' id='D2'>项目资料</router-link>
			<router-link tag='div' to='/ProjectDo'  class="tip" @click='jump' id='D3'>项目执行</router-link>
			<router-link tag='div' to='/ProjectComplete'  class="tip" @click='jump' id='D4'>项目竣工</router-link>
			<router-link tag='div' to='/BIMFamily'  class="tip" @click='jump' id='D5'>BIM族库</router-link>

			<!-- <div class="tip" @click='jump' id='D1'>项目立项</div>
			<div class="tip" @click='jump' id='D2'>项目资料</div>
			<div class="tip" @click='jump' id='D3'>项目执行</div>
			<div class="tip" @click='jump' id='D4'>项目竣工</div>
			<div class="tip" @click='jump' id='D5'>BIM族库</div> -->
		</div>
	</div>
	<!-- BIM项目 -->
	<div class="item">
		<router-link tag='div' to='/BIM' class="title" id='4' @click='show'>BIM项目</router-link>
	</div>
	<!-- 财务管理 -->
	<!-- Payroll -->
	<div class="item">
		<router-link tag='div' to='/payroll' class="title" id='5' @click='show'>财务管理</router-link>
		<!-- <div class="title" id='5' @click='show'>财务管理</div> -->
		<div class="ops" v-bind:class='{active:5==isActive}'>
			<router-link tag='div' to='/payroll' class="tip" @click='jump' id='F1'>工资表</router-link>
			<router-link tag='div' to='/Loan' class="tip" @click='jump' id='F2'>借款申请</router-link>
			<router-link tag='div' to='/Reimburse' class="tip" @click='jump' id='F3'>财务报销</router-link>
			<router-link tag='div' to='/ProjectAccounting' class="tip" @click='jump' id='F4'>项目核算</router-link>

		<!-- 	<div class="tip" @click='jump' id='F1'>员工工资表</div>
			<div class="tip" @click='jump' id='F2'>借款申请</div>
			<div class="tip" @click='jump' id='F3'>财务报销</div>
			<div class="tip" @click='jump' id='F4'>项目核算</div> -->
		</div>
	</div>
	<!-- 合同管理 -->
	<!-- contractlist -->
	<div class="item">
		<router-link tag='div' to='/contracttemplate' class="title" id='6' @click='show'>合同管理</router-link>
		<!-- <div class="title" id='6' @click='show'>合同管理</div> -->
		<div class="ops" v-bind:class='{active:6==isActive}'>
			<router-link tag='div' to='/contracttemplate' class="tip" @click='jump' id='G1'>合同模板</router-link>
			<router-link tag='div' to='/ContractSign' class="tip" @click='jump' id='G2'>签订合同</router-link>
			<router-link tag='div' to='/Outsourcing' class="tip" @click='jump' id='G3'>外包管理</router-link>
			<router-link tag='div' to='/employeecontract' class="tip" @click='jump' id='G4'>员工合同</router-link>

			<!-- <div class="tip" @click='jump' id='G1'>合同列表</div>
			<div class="tip" @click='jump' id='G2'>签订合同</div>
			<div class="tip" @click='jump' id='G3'>外包管理</div> -->
		</div>
	</div>
	<!-- 权限管理 -->
	<!-- manageuser -->
	<div class="item">
		<router-link tag='div' to='/manageuser' class="title" id='7' @click='show'>权限管理</router-link>
		<!-- <div class="title" id='7' @click='show'>权限管理</div> -->
		<div class="ops" v-bind:class='{active:7==isActive}'>
			<router-link tag='div' to='/manageuser' class="tip" @click='jump' id='H1'>用户管理</router-link>
			<router-link tag='div' to='/ManageRole' class="tip" @click='jump' id='H2'>角色管理</router-link>
			<router-link tag='div' to='/ManagePurview' class="tip" @click='jump' id='H3'>权限管理</router-link>
			
			<!-- <div class="tip" @click='jump' id='H1'>用户管理</div>
			<div class="tip" @click='jump' id='H2'>角色管理</div>
			<div class="tip" @click='jump' id='H3'>权限管理</div> -->
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
export default {
	props: [ 'isActive' ],
	data() {
		return {
			// judge: [ false, false, false, false, false, true, false, false ],
			Isshow: true,
			// isActive: -1
			num: 0,
			id: '',
			h: 0
		}
	},
	created() {
		var width = document.documentElement.clientWidth;
		var height = document.documentElement.clientHeight;
		// console.log(111, width, height);
		this.h = height;
	},
	methods: {
		show(e) {
			// console.log(e.target.id);
			// var num = e.target.id;
			this.isActive = -1;
			// num ++;
			// console.log(e)
			// console.log(this.isActive);
		},
		jump(e) {
			this.id = e.target.id;
			// console.log(e.target.id);
			// this.$emit('ReceiveComponentId', this.id)
		}
	}
}
</script>
<style type="text/css" lang="scss">
* {
	padding: 0;
	margin: 0;
}
// 修改element-ui默认样式
.components-nav.home-list {
	width: 250px;
	margin-right: 30px;
	padding-top: 85px;
	// height: 900px;
	border-right: 1px solid #BBBBBB;
	cursor: pointer;
	text-align: center;
	line-height: 40px;
	.user {
		margin-bottom: 90px;
		.user-pic {
			width: 140px;
			height: 140px;
			border: 1px solid #ccc;
			margin: 0 auto;
			margin-bottom: 30px;
			border-radius: 50%;
			overflow: hidden;
			img {
				width: 100%;
			}
		}
		.user-name {
			text-align: center;
			font-style: 12px;
		}
	}
	.item {
		line-height: 25px;
		.title {
		}
		.ops {
			font-size: 12px;
			position: relative;
			left: 25px;
			display: none;
		}
		.active {
			display: block;
		}
		.Noactive {
			display: none;
		}
	}
}	
</style>
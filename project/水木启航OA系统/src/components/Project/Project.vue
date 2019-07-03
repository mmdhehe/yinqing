<template>
<div class='project-projectinfo'>
	<!-- 侧边栏 -->
	<div class="slide">
		<Navigation :isActive='num'></Navigation>			
	</div>
	<div class="main" v-if='IsForm'>
		<div class="title">项目管理</div>
		<div class="content">
			<!-- 左边列表 -->
			<div class="slideleft">
				<!-- 项目分类表头 -->
				<div class="classify">
					<span>分类</span>
				</div>
				<!-- 项目分类列表 -->
				<el-row class="tac">
					<el-col :span="4">
				    	<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
							<el-submenu index="1">
								<template slot="title">
									<i class="el-icon-folder"></i>
									<span>BIM项目</span>
								</template>
								<!-- BIM项目列表循环 -->
								<el-menu-item-group v-for='(item, index) in BIMproject' :key='index'>
									<el-menu-item @click='viewproject' :value='item.projectname'>{{item.projectname}}</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="2">
								<template slot="title">
									<i class="el-icon-folder"></i>
									<span>研发项目</span>
								</template>
								<el-menu-item-group v-for='(item, index) in Researchproject' :key='index'>
									<el-menu-item @click='viewproject' :value='item.projectname'>{{item.projectname}}</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="3">
								<template slot="title">
									<i class="el-icon-folder"></i>
									<span>其他项目</span>
								</template>
								<el-menu-item-group v-for='(item, index) in Otherproject' :key='index'>
									<el-menu-item @click='viewproject' :value='item.projectname'>{{item.projectname}}</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
						</el-menu>
					</el-col>
				</el-row>
			</div>
			<!-- 右边列表 -->
			<div class="slideright">
				<!-- 右边框 点击项目管理，显示首页项目列表 -->
				<div class="project-list" v-if='IsConcrete'>
					<div class="title">
						<span @click='adddaily'>+ 添加</span>
						<input type="text" placeholder="搜索">
					</div>
					<!-- <Waiting :staffList='staffList'></Waiting> -->
					<div class="project-content">
						<div class="content-title">
							<p class='title-SerialNumber'>序号</p>
							<p class='title-projectname'>项目名称</p>
							<p class='title-projectID'>项目编码</p>
							<p class='title-sort'>项目类别</p>
							<p class='title-ProjectManager'>项目经理</p>
							<p class='title-date'>添加时间</p>
							<p class='title-operating'>操作</p>
						</div>
						<div class="content-main" v-for='(item, index) in projectList' :key='index' :id='index'>
							<!-- 序号 -->
							<div class="title-SerialNumber">
								<p>{{item.SerialNumber}}</p>
							</div>
							<!-- 项目名称 -->
							<div class="title-projectname">
								<p>{{item.projectname}}</p>
							</div>
							<!-- 项目编码 -->
							<div class="title-projectID">
								<p>{{item.projectID}}</p>
							</div>
							<!-- 项目类别 -->
							<div class="title-sort">
								<p>{{item.sort}}</p>
							</div>
							<!-- 项目经理 -->
							<div class="title-ProjectManager">
								<p>{{item.ProjectManager}}</p>
							</div>
							<!-- 添加时间 -->
							<div class="title-date">
								<p>{{item.date}}</p>
							</div>
							<!-- 操作 -->
							<div class="title-operating">
								<span class='view'><el-button type="primary" icon="el-icon-search">查看</el-button></span>
								<span class='delete'><el-button type="primary" icon="el-icon-delete">删除</el-button></span>
							</div>
						</div>
					</div>
				</div>
				<!-- 右边框 点击某一具体项目，显示该项目的全部详情 -->
				<div class="concrete" v-if='!IsConcrete'>
					<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
						<!-- 第一层标签页 -->
						<el-tab-pane label="项目立项表" name="first">
							<div class="add" v-if='IsApproval'><span @click='addapproval'>添加</span>&nbsp;&nbsp;该项目还未添加项目立项表，请点击添加</div>
							<ProjectApplicationForm :showinfo='showinfo' :disabled='true' v-if='!IsApproval'></ProjectApplicationForm>
						</el-tab-pane>
						<el-tab-pane label="项目资料" name="second">
							<!-- 项目资料显示内容 -->
							<el-tabs class='card1' v-model="active1Name" type="card" @tab-click="handle1Click">
								<!-- 第二层标签页 -->
								<el-tab-pane label="图纸资料" name="first">
									<!-- 图纸资料显示内容 -->
									<div class="project-content">
										<div class="content-title">
											<p class='title-SerialNumber'>序号</p>
											<p class='title-name'>名称</p>
											<p class='title-sort'>项目类别</p>
											<p class='title-ProjectManager'>项目经理</p>
											<p class='title-date'>添加时间</p>
											<p class='title-operating'>操作</p>
										</div>
										<div class="content-main" v-for='(item, index) in DrawinginfoList' :key='index' :id='index'>
											<!-- 序号 -->
											<div class="title-SerialNumber">
												<p>{{item.SerialNumber}}</p>
											</div>
											<!-- 名称 -->
											<div class="title-name">
												<p>{{item.name}}</p>
											</div>
											<!-- 项目类别 -->
											<div class="title-sort">
												<p>{{item.sort}}</p>
											</div>
											<!-- 项目经理 -->
											<div class="title-ProjectManager">
												<p>{{item.ProjectManager}}</p>
											</div>
											<!-- 添加时间 -->
											<div class="title-date">
												<p>{{item.date}}</p>
											</div>
											<!-- 操作 -->
											<div class="title-operating">
												<span class='view'><el-button type="primary" icon="el-icon-search">查看</el-button></span>
												<span class='delete'><el-button type="primary" icon="el-icon-delete">删除</el-button></span>
											</div>
										</div>
									</div>
								</el-tab-pane>
								<el-tab-pane label="项目方案" name="second">
									<!-- 项目方案显示内容 -->
									<div class="project-content">
										<div class="content-title">
											<p class='title-SerialNumber'>序号</p>
											<p class='title-name'>名称</p>
											<p class='title-sort'>项目类别</p>
											<p class='title-ProjectManager'>项目经理</p>
											<p class='title-date'>添加时间</p>
											<p class='title-operating'>操作</p>
										</div>
										<div class="content-main" v-for='(item, index) in ProjectProposal' :key='index' :id='index'>
											<!-- 序号 -->
											<div class="title-SerialNumber">
												<p>{{item.SerialNumber}}</p>
											</div>
											<!-- 名称 -->
											<div class="title-name">
												<p>{{item.name}}</p>
											</div>
											<!-- 项目类别 -->
											<div class="title-sort">
												<p>{{item.sort}}</p>
											</div>
											<!-- 项目经理 -->
											<div class="title-ProjectManager">
												<p>{{item.ProjectManager}}</p>
											</div>
											<!-- 添加时间 -->
											<div class="title-date">
												<p>{{item.date}}</p>
											</div>
											<!-- 操作 -->
											<div class="title-operating">
												<span class='view'><el-button type="primary" icon="el-icon-search">查看</el-button></span>
												<span class='delete'><el-button type="primary" icon="el-icon-delete">删除</el-button></span>
											</div>
										</div>
									</div>
								</el-tab-pane>
								<el-tab-pane label="规范标准" name="third">
									<!-- 规范标准显示内容 -->
									<div class="project-content">
										<div class="content-title">
											<p class='title-SerialNumber'>序号</p>
											<p class='title-name'>名称</p>
											<p class='title-sort'>项目类别</p>
											<p class='title-ProjectManager'>项目经理</p>
											<p class='title-date'>添加时间</p>
											<p class='title-operating'>操作</p>
										</div>
										<div class="content-main" v-for='(item, index) in criterion' :key='index' :id='index'>
											<!-- 序号 -->
											<div class="title-SerialNumber">
												<p>{{item.SerialNumber}}</p>
											</div>
											<!-- 名称 -->
											<div class="title-name">
												<p>{{item.name}}</p>
											</div>
											<!-- 项目类别 -->
											<div class="title-sort">
												<p>{{item.sort}}</p>
											</div>
											<!-- 项目经理 -->
											<div class="title-ProjectManager">
												<p>{{item.ProjectManager}}</p>
											</div>
											<!-- 添加时间 -->
											<div class="title-date">
												<p>{{item.date}}</p>
											</div>
											<!-- 操作 -->
											<div class="title-operating">
												<span class='view'><el-button type="primary" icon="el-icon-search">查看</el-button></span>
												<span class='delete'><el-button type="primary" icon="el-icon-delete">删除</el-button></span>
											</div>
										</div>
									</div>
								</el-tab-pane>
								<el-tab-pane label="BIM模型" name="fourth">
									<!-- BIM模型显示内容 -->
									<div class="project-content">
										<div class="content-title">
											<p class='title-SerialNumber'>序号</p>
											<p class='title-name'>名称</p>
											<p class='title-sort'>项目类别</p>
											<p class='title-ProjectManager'>项目经理</p>
											<p class='title-date'>添加时间</p>
											<p class='title-operating'>操作</p>
										</div>
										<div class="content-main" v-for='(item, index) in BIMmodel' :key='index' :id='index'>
											<!-- 序号 -->
											<div class="title-SerialNumber">
												<p>{{item.SerialNumber}}</p>
											</div>
											<!-- 名称 -->
											<div class="title-name">
												<p>{{item.name}}</p>
											</div>
											<!-- 项目类别 -->
											<div class="title-sort">
												<p>{{item.sort}}</p>
											</div>
											<!-- 项目经理 -->
											<div class="title-ProjectManager">
												<p>{{item.ProjectManager}}</p>
											</div>
											<!-- 添加时间 -->
											<div class="title-date">
												<p>{{item.date}}</p>
											</div>
											<!-- 操作 -->
											<div class="title-operating">
												<span class='view'><el-button type="primary" icon="el-icon-search">查看</el-button></span>
												<span class='delete'><el-button type="primary" icon="el-icon-delete">删除</el-button></span>
											</div>
										</div>
									</div>
								</el-tab-pane>
								<el-tab-pane label="视频资料" name="fifth">
									<!-- 视频资料显示内容 -->
									<div class="project-content">
										<div class="content-title">
											<p class='title-SerialNumber'>序号</p>
											<p class='title-name'>名称</p>
											<p class='title-sort'>项目类别</p>
											<p class='title-ProjectManager'>项目经理</p>
											<p class='title-date'>添加时间</p>
											<p class='title-operating'>操作</p>
										</div>
										<div class="content-main" v-for='(item, index) in VideoMaterial' :key='index' :id='index'>
											<!-- 序号 -->
											<div class="title-SerialNumber">
												<p>{{item.SerialNumber}}</p>
											</div>
											<!-- 名称 -->
											<div class="title-name">
												<p>{{item.name}}</p>
											</div>
											<!-- 项目类别 -->
											<div class="title-sort">
												<p>{{item.sort}}</p>
											</div>
											<!-- 项目经理 -->
											<div class="title-ProjectManager">
												<p>{{item.ProjectManager}}</p>
											</div>
											<!-- 添加时间 -->
											<div class="title-date">
												<p>{{item.date}}</p>
											</div>
											<!-- 操作 -->
											<div class="title-operating">
												<span class='view'><el-button type="primary" icon="el-icon-search">查看</el-button></span>
												<span class='delete'><el-button type="primary" icon="el-icon-delete">删除</el-button></span>
											</div>
										</div>
									</div>
								</el-tab-pane>
							</el-tabs>
						</el-tab-pane>
						<el-tab-pane label="项目执行" name="third">
							<el-tabs v-model="active2Name" type="card" @tab-click="handleClick">
								<el-tab-pane label="项目个人日报" name="first">
									<!-- 项目日报显示内容 -->
									<div class="project-content">
										<div class="content-title">
											<p class='title-SerialNumber'>序号</p>
											<p class='title-name'>名称</p>
											<p class='title-employeeID'>员工编号</p>
											<p class='title-employeename'>姓名</p>
											<p class='title-date'>时间</p>
											<p class='title-operating'>操作</p>
										</div>
										<div class="content-main" v-for='(item, index) in PersonalDaily' :key='index' :id='index'>
											<!-- 序号 -->
											<div class="title-SerialNumber">
												<p>{{item.SerialNumber}}</p>
											</div>
											<!-- 名称 -->
											<div class="title-name">
												<p>{{item.name}}</p>
											</div>
											<!-- 员工编号 -->
											<div class="title-employeeID">
												<p>{{item.employeeID}}</p>
											</div>
											<!-- 姓名 -->
											<div class="title-employeename">
												<p>{{item.employeename}}</p>
											</div>
											<!-- 时间 -->
											<div class="title-date">
												<p>{{item.date}}</p>
											</div>
											<!-- 操作 -->
											<div class="title-operating">
												<span class='view'><el-button type="primary" icon="el-icon-search" @click='viewpersonal'>查看</el-button></span>
												<span class='delete'><el-button type="primary" icon="el-icon-delete">删除</el-button></span>
											</div>
										</div>
									</div>
								</el-tab-pane>
								<el-tab-pane label="项目日报" name="second">
									<!-- 项目日报显示内容 -->
									<div class="project-content">
										<div class="content-title">
											<p class='title-SerialNumber'>序号</p>
											<p class='title-name'>名称</p>
											<p class='title-employeeID'>员工编号</p>
											<p class='title-employeename'>姓名</p>
											<p class='title-date'>时间</p>
											<p class='title-operating'>操作</p>
										</div>
										<div class="content-main" v-for='(item, index) in ProjectDaily' :key='index' :id='index'>
											<!-- 序号 -->
											<div class="title-SerialNumber">
												<p>{{item.SerialNumber}}</p>
											</div>
											<!-- 名称 -->
											<div class="title-name">
												<p>{{item.name}}</p>
											</div>
											<!-- 员工编号 -->
											<div class="title-employeeID">
												<p>{{item.employeeID}}</p>
											</div>
											<!-- 姓名 -->
											<div class="title-employeename">
												<p>{{item.employeename}}</p>
											</div>
											<!-- 时间 -->
											<div class="title-date">
												<p>{{item.date}}</p>
											</div>
											<!-- 操作 -->
											<div class="title-operating">
												<span class='view'><el-button type="primary" icon="el-icon-search" @click='viewprojectdaily'>查看</el-button></span>
												<span class='delete'><el-button type="primary" icon="el-icon-delete">删除</el-button></span>
											</div>
										</div>
									</div>
								</el-tab-pane>
								<el-tab-pane label="项目进度查询" name="third">
									<div class="highchart">
										<!-- 引入报表 年度总体情况统计表 -->
										<Test :title='personaltitle1' :data='personaldata1'></Test>
										<div class="period">
											<span>上一月</span>
											<div class="block">
												 <el-date-picker v-model="value1" type="month" placeholder="选择月" @blur='selectmouth'>
												 </el-date-picker>
												<!-- <el-date-picker v-model="value1" type="mouth" placeholder="选择月" @blur='selectmouth'>
												</el-date-picker> -->
											</div>
											<span>下一月</span>
										</div>
									</div>
								</el-tab-pane>
							</el-tabs>
						</el-tab-pane>
						<el-tab-pane label="项目竣工" name="fourth">
							<div class="add" v-if='IsComplete'><span @click='addcomplete'>添加</span>&nbsp;&nbsp;该项目还未添加项目竣工表，请点击添加</div>
							<FormComplete v-if='!IsComplete'></FormComplete>
						</el-tab-pane>
					</el-tabs>
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
	<div class="form" v-if='!IsForm'>
		<div class="back"><span @click='back'>返回</span></div>
		<div class="forminfo">
			<!-- 项目添加 -->
			<ProjectAdd v-on:back='receive' v-if='IsProjectAdd'></ProjectAdd>
			<!-- 项目个人日报 -->
			<FormDaily v-if='IsPersonalDaily'></FormDaily>
			<!-- 项目日报 -->
			<FormReport v-if='IsProjectDaily'></FormReport>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
import Navigation from '../Navigation.vue'
import ProjectAdd from './ProjectAdd.vue'
import ProjectApplicationForm from './ProjectApplicationForm.vue'
import FormComplete from './FormComplete.vue'
import FormDaily from './FormDaily.vue'
import FormReport from './FormReport.vue'
import Test from '../HightChart/Test.vue'
export default {
	components: { Navigation, ProjectAdd, Test, ProjectApplicationForm, FormComplete, FormDaily, FormReport },
	data() {
		return {
			num: 3,
			// 当前页码
			value: 1,
			// 项目进度表的时间
			value1: '',
			// 项目立项表的内容
			showinfo: {},
			// 项目竣工表的内容
			completeinfo: {},
			activeName: 'first',
			active1Name: 'first',
			active2Name: 'first',
			//是否显示添加项目表格
			IsForm: true,
			// 是否显示项目具体内容
			IsConcrete: true,
			// 是否显示项目立项表
			IsApproval: true,
			// 是否显示项目竣工表
			IsComplete: true,
			// 是否显示项目添加列表
			IsProjectAdd: true,
			// 是否显示个人日报列表
			IsPersonalDaily: true,
			// 是否显示项目日报列表
			IsProjectDaily: true,
			// 首页列表
			projectList: [{SerialNumber: 1, projectname: '太原******项目', projectID: 'A123456489566', sort: 'BIM应用', ProjectManager: '张华', date: '2019/2/14'}, {SerialNumber: 2, projectname: '太原******项目', projectID: 'A123456489566', sort: 'BIM应用', ProjectManager: '张华', date: '2019/2/14'}],
			// 图纸资料
			DrawinginfoList: [{SerialNumber: 1, name: '盐通项目图纸', projectID: 'A123456489566', sort: 'BIM应用', ProjectManager: '张华', date: '2019/2/14'}, {SerialNumber: 2, name: '盐通项目图纸', projectID: 'A123456489566', sort: 'BIM应用', ProjectManager: '张华', date: '2019/2/14'}],
			// 项目方案
			ProjectProposal: [{SerialNumber: 1, name: '盐通项目方案', projectID: 'A123456489566', sort: 'BIM应用', ProjectManager: '张华', date: '2019/2/14'}, {SerialNumber: 2, name: '盐通项目方案', projectID: 'A123456489566', sort: 'BIM应用', ProjectManager: '张华', date: '2019/2/14'}],
			// 规范标准
			criterion: [{SerialNumber: 1, name: '盐通项目规范标准', projectID: 'A123456489566', sort: 'BIM应用', ProjectManager: '张华', date: '2019/2/14'}, {SerialNumber: 2, name: '盐通项目规范标准', projectID: 'A123456489566', sort: 'BIM应用', ProjectManager: '张华', date: '2019/2/14'}],
			// BIM模型
			BIMmodel: [{SerialNumber: 1, name: '盐通项目BIM模型', projectID: 'A123456489566', sort: 'BIM应用', ProjectManager: '张华', date: '2019/2/14'}, {SerialNumber: 2, name: '盐通项目BIM模型', projectID: 'A123456489566', sort: 'BIM应用', ProjectManager: '张华', date: '2019/2/14'}],
			// 视频资料
			VideoMaterial: [{SerialNumber: 1, name: '盐通项目视频资料', projectID: 'A123456489566', sort: 'BIM应用', ProjectManager: '张华', date: '2019/2/14'}, {SerialNumber: 2, name: '盐通项目视频资料', projectID: 'A123456489566', sort: 'BIM应用', ProjectManager: '张华', date: '2019/2/14'}],
			// 项目个人日报 
			PersonalDaily: [{SerialNumber: 1, name: '盐通项目', employeeID: 'A123456489566', employeename: '张华', date: '2019/2/14'}],
			// 项目日报 
			ProjectDaily: [{SerialNumber: 1, name: '盐通项目', employeeID: 'A123456489566', employeename: '张华', date: '2019/2/14'}, {SerialNumber: 2, name: '盐通项目', employeeID: 'A123456489566', employeename: '李默', date: '2019/2/14'}],
			// BIM项目列表
			BIMproject: [{projectname: '盐通高速铁路BIM应用项目'}, {projectname: '高速铁路BIM应用项目'}],
			// 研发项目列表
			Researchproject: [{projectname: '管理系统项目'}, {projectname: '高速铁路BIM应用项目'}],
			// 其他项目
			Otherproject: [{projectname: '其他项目'}, {projectname: '其他2项目'}],
			personaltitle1: '太原项目进度查看',
			personaltitle2: '2019年4月总体情况统计表',
			personaldata1: [ ['在职', 9], ['简历筛选', 3], ['面试', 4], ['新入职', 7], ['离职', 3] ],
			personaldata2: [ ['在职', 2], ['简历筛选', 2], ['面试', 3], ['新入职', 7], ['离职', 3] ]
		}
	},
	methods: {
		handleOpen(key, keyPath) {
			// console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			// console.log(key, keyPath);
		},
		handleClick(tab, event) {
			// console.log(tab, event);
		},
		handle1Click(tab, event) {
			// console.log(tab, event);
		},
		// 添加新项目
		adddaily() {
			this.IsForm = !this.IsForm;
		},
		// 返回项目管理首页
		back() {
			this.IsForm = !this.IsForm;
		},
		// 接收数据
		receive(data) {
			// console.log(data);
			this.IsForm = data;
		},
		// 查看某一单一项目
		viewproject(e) {
			// console.log(111,e.$attrs.value);
			this.IsConcrete = false;
			this.activeName = 'first';
			// 获取点击项目的项目编码，向后台发送请求，返回该项目的项目立项表的内容
			// 判断该项目的项目立项表是否为空，若为空显示空，若不为空显示该项目的项目立项表
			// 若为空
			// this.IsApproval = true;
			// 若不为空，将获取到的数据存在this.showinfo
			// this.IsApproval = false;
			// 获取点击项目的项目编码，向后台发送请求，返回该项目的项目竣工表的内容
			// 判断该项目的项目竣工表是否为空，若为空显示空，若不为空显示该项目的项目竣工表
			// 若为空
			// this.IsComplete = true;
			// 若不为空，将获取到的数据存在this.completeinfo
			// this.IsComplete = false;
		},
		// 点击添加项目立项表
		addapproval() {
			this.IsApproval = false;
			this.showinfo = {};
		},
		// 点击添加项目竣工表
		addcomplete() {
			this.IsComplete = false;
		},
		// 查看项目个人日报
		viewpersonal() {
			this.IsForm = false;
			this.IsProjectAdd = false;
			this.IsPersonalDaily = true;
			this.IsProjectDaily = false;
		},
		// 查看项目日报
		viewprojectdaily() {
			this.IsForm = false;
			this.IsProjectAdd = false;
			this.IsPersonalDaily = false;
			this.IsProjectDaily = true;
		},
		// 选择年，失去焦点触发
		selectmouth() {
			this.personaltitle1 = "进度查看";
			console.log(this.personaltitle1)
		}
	}
}
</script>
<style type="text/css" lang='scss'>
.project-projectinfo {
	display: flex;
	.main {
		flex: 1;
		.title {
			line-height: 50px;
		}
		.content {
			display: flex;
			margin-top: 10px;
			font-size: 12px;
			padding-right: 40px;
			.slideleft {
				width: 220px;
				border: 1px solid #ccc;
				margin-right: 30px;
				.classify {
					border-bottom: 1px solid #ccc;
					line-height: 40px;
					padding-left: 10px;
				}
				.el-col-4 {
					width: 100%;
					.el-submenu .el-menu-item {
						height: 20px;
						line-height: 20px;
					}
					.el-menu-item-group__title {
						padding: 0;
					}
					.el-submenu__title {
						height: 30px;
						line-height: 30px;
					}
					.el-menu-item-group__title {
						padding-left: 0;
					}
				}				
			}
			.slideright {
				flex: 1;
				border: 1px solid #ccc;
				position: relative;
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
					.title-SerialNumber { flex: 1; }
					.title-projectname { flex: 2; }
					.title-name { flex: 1; }
					.title-projectID { flex: 2; }
					.title-employeeID { flex: 1; }
					.title-sort { flex: 1; }
					.title-ProjectManager { flex: 1; }
					.title-date { flex: 1; }
					.title-employeename { flex: 1; }
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
				.project-list {
					border: 1px solid #ccc;
					// position: relative;
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
				}
				.concrete {
					.highchart {
						display: flex;
						padding-top: 30px;
						position: relative;
						.period {
							// position: absolute;
							// bottom: 30px;
							// right: 30px;
							display: flex;
							// height: 40px;
							span {
								// border: 1px solid #ccc;
								font-size: 12px;
								padding: 5px 10px;
								margin: 5px 10px;
							}
						}
					}
					.el-tabs.el-tabs--card.el-tabs--top {
						.el-tabs__header {
							margin: 0;
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
				.add {
					// position: absolute;
					// top: 13px;
					// right: 20px;
					padding: 20px 20px;
					span {
						cursor: pointer;
						border: 1px solid #ccc;
						padding: 5px 8px;
						background-color: #2DB32C;
						color: #fff;
						border-radius: 4px;
					}
				}
			}
		}
	}
	.form {
		width: 100%;
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
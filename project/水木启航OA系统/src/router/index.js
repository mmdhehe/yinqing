import Vue from 'vue'
import Router from 'vue-router'
// 主页
import Home from '../views/Home'
// 登陆页面
import Login from '../views/Login'


// 行政管理
import StaffPart from '../components/Administration/StaffPart.vue' 
import JobResponse from '../components/Administration/JobResponse.vue' 
import Rules from '../components/Administration/Rules.vue' 
import Address from '../components/Administration/Address.vue'
import Asset from '../components/Administration/Asset.vue'
//添加公告 
import AddMsg from '../components/Administration/AddMsg.vue' 
// 人力资源
import ManageStaff from '../components/Resources/ManageStaff.vue' 
import ManageAttend from '../components/Resources/ManageAttend.vue' 
import ManageBusinessTrip from '../components/Resources/ManageBusinessTrip.vue' 
import TalentPool from '../components/Resources/TalentPool.vue' 
import LeaveRequest from '../components/Resources/LeaveRequest.vue' 
// 项目管理
import Project from '../components/Project/Project.vue' 
import ProjectApproval from '../components/Project/ProjectApproval.vue' 
import ProjectInfo from '../components/Project/ProjectInfo.vue' 
import ProjectDo from '../components/Project/ProjectDo.vue' 
import ProjectComplete from '../components/Project/ProjectComplete.vue' 
import BIMFamily from '../components/Project/BIM.vue' 
// BIM项目
import BIM from '../components/BIM/BIM.vue' 
// 财务管理
import Payroll from '../components/Finance/Payroll.vue' 
import Loan from '../components/Finance/Loan.vue' 
import Reimburse from '../components/Finance/Reimburse.vue' 
import ProjectAccounting from '../components/Finance/ProjectAccounting.vue' 
// 合同管理
import ContractSign from '../components/Contract/ContractSign.vue' 
import Outsourcing from '../components/Contract/Outsourcing.vue' 
import Contracttemplate from '../components/Contract/Contracttemplate.vue' 
import Employeecontract from '../components/Contract/Employeecontract.vue' 
// 权限管理
import ManageUser from '../components/Purview/ManageUser.vue' 
import ManageRole from '../components/Purview/ManageRole.vue' 
import ManagePurview from '../components/Purview/ManagePurview.vue' 



// import Test from '../components/HightChart/test.vue' 



Vue.use(Router)

export default new Router({
  routes: [
  
  // 登陆
  	{
      path: '/login',
      name: 'Login',
      component: Login
    },
    // 行政管理
    {
      path: '/Asset',
      name: 'Asset',
      component: Asset
    },
    {
      path: '/staffpart',
      name: 'StaffPart',
      component: StaffPart
    },
    {
      path: '/JobResponse',
      name: 'JobResponse',
      component: JobResponse
    },
    {
      path: '/Rules',
      name: 'Rules',
      component: Rules
    },
    {
      path: '/Address',
      name: 'Address',
      component: Address
    },
    // 添加公告
    {
      path: '/AddMsg',
      name: 'AddMsg',
      component: AddMsg
    },
    // 人力资源
    {
      path: '/LeaveRequest',
      name: 'LeaveRequest',
      component: LeaveRequest
    },
    {
      path: '/TalentPool',
      name: 'TalentPool',
      component: TalentPool
    },
     {
      path: '/managestaff',
      name: 'ManageStaff',
      component: ManageStaff
    },
     {
      path: '/ManageAttend',
      name: 'ManageAttend',
      component: ManageAttend
    },
     {
      path: '/ManageBusinessTrip',
      name: 'ManageBusinessTrip',
      component: ManageBusinessTrip
    },
    // 项目管理
    {
      path: '/Project',
      name: 'Project',
      component: Project
    },
    {
      path: '/projectapproval',
      name: 'ProjectApproval',
      component: ProjectApproval
    },
    {
      path: '/ProjectInfo',
      name: 'ProjectInfo',
      component: ProjectInfo
    },
    {
      path: '/ProjectDo',
      name: 'ProjectDo',
      component: ProjectDo
    },
    {
      path: '/ProjectComplete',
      name: 'ProjectComplete',
      component: ProjectComplete
    },
    {
      path: '/BIMFamily',
      name: 'BIMFamily',
      component: BIMFamily
    },
    // BIM
    {
      path: '/BIM',
      name: 'BIM',
      component: BIM
    },
    // 财务管理
    {
      path: '/payroll',
      name: 'Payroll',
      component: Payroll
    },
    {
      path: '/Loan',
      name: 'Loan',
      component: Loan
    },
    {
      path: '/Reimburse',
      name: 'Reimburse',
      component: Reimburse
    },
    {
      path: '/ProjectAccounting',
      name: 'ProjectAccounting',
      component: ProjectAccounting
    },
    // 合同管理
    {
      path: '/employeecontract',
      name: 'Employeecontract',
      component: Employeecontract
    },
    {
      path: '/contracttemplate',
      name: 'Contracttemplate',
      component: Contracttemplate
    },
     {
      path: '/ContractSign',
      name: 'ContractSign',
      component: ContractSign
    },
     {
      path: '/Outsourcing',
      name: 'Outsourcing',
      component: Outsourcing
    },
    // 权限管理
    {
      path: '/manageuser',
      name: 'ManageUser',
      component: ManageUser
    },
    {
      path: '/ManageRole',
      name: 'ManageRole',
      component: ManageRole
    },
    {
      path: '/ManagePurview',
      name: 'ManagePurview',
      component: ManagePurview
    },
  // 首页默认路由
    {
      path: '*',
      name: 'Home',
      component: Home
    }
  ]
})

<template>
<div class="Administration-address">
	<div class="slide">
		<Navigation :isActive='num'></Navigation>			
	</div>
	<div class="main">
		<!-- 标题 -->
		<div class="title">员工通讯录</div>
		<!-- 主要内容 -->
		<div class="content">
			<el-tabs tab-position="left" v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="研发部" name="first">
					<div class="address-list">
						<div class="title">
							<span>+ 添加</span>
							<input type="text" placeholder="搜索">
						</div>
						<div class="employee-card">
							<!-- 某个员工的信息卡片 -->
							<div class="card" v-for="(item, index) in StaffInfo" :key="index">
								<div class="pic"><img :src="item.url" alt=""></div>
								<div class="info">
									<p class="name">{{item.name}}</p>
									<p>部门：{{item.department}}</p>
									<p>员工编号：{{item.number}}</p>
									<p>固定电话：{{item.fixphone}}</p>
									<p>移动电话：{{item.mobile}}</p>
									<p>邮箱地址：{{item.email}}</p>
								</div>
							</div>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="财务部" name="second">
					<div class="address-list">
						<div class="title">
							<span>+ 添加</span>
							<input type="text" placeholder="搜索">
						</div>
						<div class="employee-card">
							<!-- 某个员工的信息卡片 -->
							<div class="card" v-for="(item, index) in StaffInfo" :key="index">
								<div class="pic"><img :src="item.url" alt=""></div>
								<div class="info">
									<p class="name">{{item.name}}</p>
									<p>部门：{{item.department}}</p>
									<p>员工编号：{{item.number}}</p>
									<p>固定电话：{{item.fixphone}}</p>
									<p>移动电话：{{item.mobile}}</p>
									<p>邮箱地址：{{item.email}}</p>
								</div>
							</div>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="人事部" name="third">
					<div class="address-list">
						<div class="title">
							<span>+ 添加</span>
							<input type="text" placeholder="搜索">
						</div>
						<div class="employee-card">
							<!-- 某个员工的信息卡片 -->
							<div class="card" v-for="(item, index) in StaffInfo" :key="index">
								<div class="pic"><img :src="item.url" alt=""></div>
								<div class="info">
									<p class="name">{{item.name}}</p>
									<p>部门：{{item.department}}</p>
									<p>员工编号：{{item.number}}</p>
									<p>固定电话：{{item.fixphone}}</p>
									<p>移动电话：{{item.mobile}}</p>
									<p>邮箱地址：{{item.email}}</p>
								</div>
							</div>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="销售部" name="fourth">
					<div class="address-list">
						<div class="title">
							<span>+ 添加</span>
							<input type="text" placeholder="搜索">
						</div>
						<div class="employee-card">
							<!-- 某个员工的信息卡片 -->
							<div class="card" v-for="(item, index) in StaffInfo" :key="index">
								<div class="pic"><img :src="item.url" alt=""></div>
								<div class="info">
									<p class="name">{{item.name}}</p>
									<p>部门：{{item.department}}</p>
									<p>员工编号：{{item.number}}</p>
									<p>固定电话：{{item.fixphone}}</p>
									<p>移动电话：{{item.mobile}}</p>
									<p>邮箱地址：{{item.email}}</p>
								</div>
							</div>
						</div>
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
import Navigation from "../Navigation.vue"
import Sort from '../Common/Sort.vue'
export default {
	components: { Navigation, Sort },
	data() {
		return {
			num: 1,
			// 当前标签页
			activeName: 'first',
			StaffInfo: [{name: '李华', department: '研发部', number: '123596421', fixphone: '010-1891237', mobile: '17712585459', email: '11235695785@163.com', url: '../../assets/pic.jpeg'}, {name: '李华', department: '研发部', number: '123596421', fixphone: '010-1891237', mobile: '17712585459', email: '11235695785@163.com', url: '../../assets/pic.jpeg'}, {name: '李华', department: '研发部', number: '123596421', fixphone: '010-1891237', mobile: '17712585459', email: '11235695785@163.com', url: '../../assets/pic.jpeg'}, {name: '李华', department: '研发部', number: '123596421', fixphone: '010-1891237', mobile: '17712585459', email: '11235695785@163.com', url: '../../assets/pic.jpeg'}, {name: '李华', department: '研发部', number: '123596421', fixphone: '010-1891237', mobile: '17712585459', email: '11235695785@163.com', url: '../../assets/pic.jpeg'}, {name: '李华', department: '研发部', number: '123596421', fixphone: '010-1891237', mobile: '17712585459', email: '11235695785@163.com', url: '../../assets/pic.jpeg'}, {name: '李华', department: '研发部', number: '123596421', fixphone: '010-1891237', mobile: '17712585459', email: '11235695785@163.com', url: '../../assets/pic.jpeg'}, {name: '李华', department: '研发部', number: '123596421', fixphone: '010-1891237', mobile: '17712585459', email: '11235695785@163.com', url: '../../assets/pic.jpeg'}, {name: '李华', department: '研发部', number: '123596421', fixphone: '010-1891237', mobile: '17712585459', email: '11235695785@163.com', url: '../../assets/pic.jpeg'}, {name: '李华', department: '研发部', number: '123596421', fixphone: '010-1891237', mobile: '17712585459', email: '11235695785@163.com', url: '../../assets/pic.jpeg'}, {name: '李华', department: '研发部', number: '123596421', fixphone: '010-1891237', mobile: '17712585459', email: '11235695785@163.com', url: '../../assets/pic.jpeg'}, {name: '李华', department: '研发部', number: '123596421', fixphone: '010-1891237', mobile: '17712585459', email: '11235695785@163.com', url: '../../assets/pic.jpeg'}, {name: '李华', department: '研发部', number: '123596421', fixphone: '010-1891237', mobile: '17712585459', email: '11235695785@163.com', url: '../../assets/pic.jpeg'}, {name: '李华', department: '研发部', number: '123596421', fixphone: '010-1891237', mobile: '17712585459', email: '11235695785@163.com', url: '../../assets/pic.jpeg'}, {name: '李华', department: '研发部', number: '123596421', fixphone: '010-1891237', mobile: '17712585459', email: '11235695785@163.com', url: '../../assets/pic.jpeg'}, {name: '李华', department: '研发部', number: '123596421', fixphone: '010-1891237', mobile: '17712585459', email: '11235695785@163.com', url: '../../assets/pic.jpeg'}],
			isshow: true
		}
	},
	methods: {
		handleClick(tab, event) {
			// console.log(tab.label);
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped>
.Administration-address {
	// padding-top: 20px;
	// padding-left: 20px;
	display: flex;
	.main {
		flex: 1;
		padding-right: 30px;
	}
	.title {
		line-height: 50px;
	}
	.content {
		display: flex;
		margin-top: 10px;
		.sort {
			flex: 1;
		}
		.address-list {
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
					// cursor: pointer;
					background-color: #fff;
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
			.employee-card {
				padding: 20px 0 20px 50px;
				overflow: scroll;
				height: 600px;
				.card {
					width: 40%;
					float: left;
					border: 1px solid #ccc;
					padding: 20px 0 0 20px;
					margin-bottom: 20px;
					margin-right: 50px;
					display: flex;
					.pic {
						width: 50px;
						height: 50px;
						border: 1px solid #ccc;
						border-radius: 50%;
						margin-right: 10px;
						overflow: hidden;
						img {
							width: 100%;
							height: 100%;
						}
					}
					.info {
						font-size: 12px;
						padding-bottom: 20px;
						line-height: 20px;
						.name {
							font-size: 14px;
							font-weight: bold;
						}
					}
				}
			}
		}
	}
}
</style>
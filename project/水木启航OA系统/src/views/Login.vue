<template>
	<div class='page-login'>
		<div class="content">
			<div class="logo">
				<h1>水木启航科技</h1>
			</div>
			<div class='common user'>
				<i class="el-icon-user"></i><input type="text" placeholder="请输入用户名"@blur='checkbox' v-model='data.username'>
			</div>
			<div class='common password'>
				<i class="el-icon-key"></i><input type="text" placeholder="请输入密码"@blur='checkbox' v-model='data.password'>
			</div>
			<div class='common submit' @click="submit">
				确定
			</div>
			<div v-if='error'>
				<div class='popbox'>用户名或密码错误</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
	data() {
		return {
			data: { username: '', password: '' },
			error: ''
		}
	},
	methods: {
		submit() {

    		this.$router.push({path: '/home'})

			// this.error = !this.error;
			// 发送请求，判断是否登陆成功
			// 登录
			// this.$http
			// 	// post请求
			// 	.post('/login', this.data)
			// 	// 监听数据返回
			// 	.then(({ data }) => {
			// 		console.log(data)
			// 		// // 如果登录成功
			// 		// if (data.errno === 0) {
						
			// 		// } else {
			// 		// 	// 提示用户
			// 		// 	alert(data.msg)
			// 		// }
			// 	})
		},
		checkbox(e) {
			console.log(e.path);
			// 判断是否为空
			if(e.path[0].value.length <= 0) {
				// console.log("不能为空哦！");
				alert("不能为空哦！");
			}
		}
	}
}
</script>
<style type="text/css" lang='scss' scoped>
.page-login {
	width: 100%;
	.content {
		width: 300px;
		margin: 50px auto;
		.logo {
			width: 308px;
			height: 244px;
			background: url('../assets/LOGO.png') no-repeat center center;
			background-size: 220px;
			h1 {
				text-indent: -9999999em;
				overflow: hidden;
			}
		}
		.common {
			line-height: 50px;
			width: 100%;
			background-color: #C5CAE3;
			border: 1px solid #ccc;
			margin-top: 30px;
			// display: flex;
			i {
				width: 50px;
				border-right: 2px solid #aaa;
				margin-right: 10px;
				text-align: center;
				font-size: 28px;
				line-height: 50px;
			}
			input {
				border: none;
				background-color: #C5CAE3;
				outline: none;
				font-size: 16px;
			}
		}
		.user {
		}
		.password {

		}
		.submit {
			text-align: center;
			cursor: pointer;
			font-weight: bold;
		}
	}
}	
</style>
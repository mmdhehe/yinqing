<template>
<div class="addmsg">
	<div class="slide">
		<Navigation :isActive='num'></Navigation>			
	</div>
	<div class="content">
		<div class="back" @click='back'>
			<span>返回</span>
		</div>
		<div class="table">
			<table class='form-info' border="1" cellspacing="0" cellpadding="0">
				<tr class='one'>
					<td colspan="6"><input type="text" placeholder="添加标题" v-model='data.title'></td>
				</tr>
				<tr>
					<td>发布日期</td>
					<td v-model='data.date'>{{date}}</td>
					<td>发布人员</td>
					<td><input type="text" v-model='data.publisher'></td>
					<td>类型</td>
					<td>
						<select required>
							<option value="" disabled selected></option> 
							<option value="B01">通知公告</option>
							<option value="B02">新闻资讯</option>
							<option value="B03">行业动态</option>
						</select>
					</td>
				</tr>
				<tr>
					<td colspan="6"><textarea name="" id="" cols="30" rows="30" placeholder="添加正文" v-model='data.text'></textarea></td>
				</tr>
			</table>
		</div>
		<div class="submit" @click='submit'>
			<span>发布</span>
		</div>
	</div>
</div>
</template>
<style type="text/css" lang='scss' scoped>
.addmsg {
	display: flex;
	input {
		border: none;
		outline:medium;
		width: 80%;
		padding: 0 10px;
		text-align: center;
	}
	select {
		border: none;
		width: 100%;
		outline:medium;
		text-align: center;
		text-align-last: center;
	}
	textarea {
		box-sizing: border-box;
		padding: 10px;
		border: none;
		width: 100%;
		height: 100%;
		resize:none;
		display: block;
		outline:medium;
		overflow-y: scroll;
	}
	.content {
		flex: 1;
		padding: 20px;
		.back {
			margin-bottom: 30px;
			span {
				font-size: 12px;
				padding: 10px 20px;
				border: 1px solid #ccc;
			}
		}
		.table {
			padding: 0 100px;
			text-align: center;
			margin-bottom: 30px;
			.form-info {
				width: 100%;
				line-height: 50px;
				.one {
					input {
						font-size: 16px;
					}
				}
			}
		}
		.submit {
			text-align: center;
			color: #fff;
			font-size: 12px;
			cursor: pointer;
			span {
				background-color: #3F51B5;
				padding: 10px 20px;
				border-radius: 5px;
			}
		}
	}
}
</style>
<script type="text/javascript">
import Navigation from "../Navigation.vue"	
export default {
	components: { Navigation },
	data() {
		return {
			num: 0,
			date: '',
			data: {
				title: '',
				date: '',
				publisher: '',
				text: ''
			}
		}
	},
	created() {
		var date = new Date;
		var year = date.getFullYear();
		var mouth = date.getMonth() + 1;
		var day = date.getDate();
		// console.log(year);
		this.date = year + '/' + mouth + '/' + day;

	},
	methods: {
		back() {
			this.$router.go(-1);
		},
		submit() {
			// 提交数据，成功后返回上一级,携带数据data
			this.$router.go(-1);
		}
	}
}
</script>

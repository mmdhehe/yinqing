<template>
<div class="administration-staffpart">
	<div class="slide">
		<Navigation :isActive='num'  v-on:ReceiveComponentId='ShowId'></Navigation>			
	</div>
	<div class='content'>
		<!-- 组织结构 -->
		<div class="staffpart" id='B1'>
			<div class="title">组织结构</div>
			<div class="organization">
				<TreeChart :json="data" @click-node="clickNode" />
				<div class="operate">
					<div><span>添加</span></div>
					<div><span>删除</span></div>
					<div><span>编辑</span></div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
import Navigation from "../Navigation.vue"
import TreeChart from "./TreeChart.vue";
export default {
	components: { Navigation, TreeChart },
	data() {
		return {
			num: 1,
			show: 'B1',
			// landscape: [],
			data: {
				position: '董事长',
				name: '李多人',
				image_url: "https://static.refined-x.com/avat.jpg",
				children: [
					{
						position: '总经理',
						name: '钱多员',
						image_url: "https://static.refined-x.com/avat2.jpg",
						children: [
							{
								position: '总管经理',
								name: '李晓彤',
								image_url: "https://static.refined-x.com/avat.jpg"
							},
							{
								position: '市场经理',
								name: '李晓彤',
								image_url: "https://static.refined-x.com/avat1.jpg"
							},
							{
								position: '财务经理',
								name: '李晓彤',
								image_url: "https://static.refined-x.com/avat2.jpg"
							},
							{
								position: '技术总监',
								name: '李晓彤',
								image_url: "https://static.refined-x.com/avat2.jpg"
							},
							{
								position: '研发经理',
								name: '李晓彤',
								image_url: "https://static.refined-x.com/avat2.jpg"
							}
						]
					}
				]
			}
		}
	},
	methods: {
		ShowId(data) {
			console.log(data);
			this.show = data;	
		},
		clickNode: function(node){
	      // eslint-disable-next-line
	      console.log(node);

	    }
	}
}
</script>
<style type="text/css" lang='scss' scoped>
.administration-staffpart {
	display: flex;
	.content {
		flex: 1;
		.staffpart {
			.title {
				line-height: 50px;
			}
			.organization {
				width: 100%;
				// display: flex;
				position: relative;
				.operate {
					position: absolute;
					right: 50px;
					bottom: 50%;
				}
			}
		}
	}
}
</style>
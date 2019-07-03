<!-- 待面试 -->
<template>
<div class="component-waiting">
	<div class="staff-content">
		<div class="content-title">
			<p class='title-name'>姓名</p>
			<p class='title-sex'>性别</p>
			<p class='title-from'>来源</p>
			<p class='title-educat'>学历</p>
			<p class='title-position'>面试职位</p>
			<p class='title-date'>日期</p>
			<p class='title-Referrer'>推荐人</p>
			<p class='title-operating'>操作</p>
		</div>
		<div class="content-main" v-for='(item, index) in staffList' :key='index'>
			<!-- 姓名 -->
			<div class="title-name">
				<p>{{item.name}}</p>
			</div>
			<!-- 性别 -->
			<div class="title-name">
				<p>{{item.sex}}</p>
			</div>
			<!-- 来源 -->
			<div class="title-from">
				<p>{{item.from}}</p>
			</div>
			<!-- 学历 -->
			<div class="title-educat">
				<p>{{item.educat}}</p>
			</div>
			<!-- 面试职位 -->
			<div class="title-position">
				<p>{{item.position}}</p>
			</div>
			<!-- 日期 -->
			<div class="title-date">
				<p>{{item.date}}</p>
			</div>
			<!-- 推荐人 -->
			<div class="title-Referrer">
				<p>{{item.Referrer}}</p>
			</div>
			<!-- 操作 -->
			<div class="title-operating">
				<p>查看</p>
			</div>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
export default {
	props: [ 'staffList' ]
}
</script>
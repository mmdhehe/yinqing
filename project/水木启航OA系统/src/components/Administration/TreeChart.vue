<template>
	<div class="TreeChart">
		<table v-if="treeData.name">
			<tr>
				<td :colspan="treeData.children ? treeData.children.length * 2 : 1" :class="{parentLevel: treeData.children, extend: treeData.children && treeData.extend}">
					<div :class="{node: true, hasMate: treeData.mate}">
						<div class="person" slot="reference" @click="$emit('click-node', treeData)">
							<div class="avat">
								<img :src="treeData.image_url" />
								<!-- <span><i class='el-icon-circle-plus-outline'></i></span> -->
								<span><i class='el-icon-remove-outline'></i></span>
							</div>
							<div class="position"><input type="text" :value='treeData.position'></div>
							<div class="name"><input type="text" :value='treeData.name'></div>
						</div>
					</div>
					<div class="extend_handle" v-if="treeData.children" @click="toggleExtend(treeData)"></div>
				</td>
			</tr>
			<tr v-if="treeData.children && treeData.extend">
				<td v-for="(children, index) in treeData.children" :key="index" colspan="2" class="childLevel">
					<TreeChart :json="children" @click-node="$emit('click-node', $event)"/>
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
  name: "TreeChart",
  props: ["json"],
  data() {
    return {
      treeData: {},
      value: 1
    }
  },
  watch: {
    json: {
      handler: function(Props){
        let extendKey = function(jsonData){
          jsonData.extend = (jsonData.extend===void 0 ? true: !!jsonData.extend);
          if(Array.isArray(jsonData.children)){
            jsonData.children.forEach(c => {
              extendKey(c)
            })
          }
          return jsonData;
        }
        if(Props){
          this.treeData = extendKey(Props);
        }
      },
      immediate: true
    }
  },
  methods: {
    toggleExtend: function(treeData){
      treeData.extend = !treeData.extend;
      console.log(111,treeData);
      this.$forceUpdate();
    },
    add: function(e) {
    	console.log(e)
    },
	handleRemove(file, fileList) {
		console.log(file, fileList);
	},
	handlePictureCardPreview(file) {
		this.dialogImageUrl = file.url;
		this.dialogVisible = true;
	}
  }
}
</script>

<style type="text/css" lang='scss'>
.TreeChart {
	table{
	    border-collapse: separate!important;
	    border-spacing: 0!important;
	    width: 100px;
	}
	td{
	    position: relative;
	     vertical-align: top;
	     padding:0 0 50px 0;
	    text-align: center;
	     }

	.extend_handle{
		position: absolute;
		left:50%;
		bottom:30px;
		width:10px;
		height: 10px;
		padding:10px;
		transform: translate3d(-15px,0,0);
		cursor: pointer;
	}
	.extend_handle:before{
		content:"";
		display: block;
		width:100%;
		height: 100%;
		box-sizing: border-box;
		border:2px solid;
		border-color:#000 #000 transparent transparent;   
		transform: rotateZ(135deg);
		transform-origin: 50% 50% 0;
		transition: transform ease 300ms;
	}
	.extend_handle:hover:before{
		border-color:#333 #333 transparent transparent;
	}
	.extend .extend_handle:before{
		transform: rotateZ(-45deg);
	}

	.extend::after{
		content: "";
		position: absolute;
		left:50%;
		bottom:15px;
		height:15px;
		border-left:2px solid #000;
		transform: translate3d(-1px,0,0)}
	.childLevel::before{
		content: "";
		position: absolute;
		left:50%;
		bottom:100%;
		height:15px;
		border-left:2px solid #000;
		transform: translate3d(-1px,0,0)}
	.childLevel::after{
		content: "";
		position: absolute;
		left:0;
		right:0;
		top:-15px;
		border-top:2px solid #000;
	}
	.childLevel:first-child:before, .childLevel:last-child:before{
		display: none;
	}
	.childLevel:first-child:after{
		left:50%;
		height:15px;
		border:2px solid;
		border-color:#000 transparent transparent #000;
		border-radius: 0 0 0 0;
		transform: translate3d(1px,0,0)}
	.childLevel:last-child:after{
		right:50%;
		height:15px;
		border:2px solid;
		border-color:#000 #000 transparent transparent;
		border-radius: 0 0 0 0;
		transform: translate3d(-1px,0,0)}
	.childLevel:first-child.childLevel:last-child::after{
		left:auto;
		border-radius: 0;
		border-color:transparent #000 transparent transparent;
		transform: translate3d(1px,0,0)}
	.node{
		position: relative;
		display: inline-block;
		width: 13em;
		box-sizing: border-box;
		text-align: center;
	 }
	.node .person{
		position: relative;
		display: inline-block;
		z-index: 2;
		width:6em;
		// overflow: hidden;
		cursor: pointer;
		input {
			width: 70px;
			text-align: center;
		}
	 }
	.node .person .avat{
		display: block;
		width:70px;
		height: 90px;
		margin:auto;
		// overflow:hidden;
		background:#fff;
		border:1px solid #000;
		box-sizing: border-box;
		position: relative;
		span {
			position: absolute;
			right: -25px;
			top: 0;
		}
	}
	.node .person .avat img{
		width:100%;
		height: 100%;
	}
	.node .person .name{
		font-size: 12px;
		line-height: 12px;
		margin-bottom: 5px;
		overflow: hidden;
		width:100%;
	}
	.node .person .position{
		font-size: 14px;
		line-height: 14px;
		margin: 10px 0 5px;
		// overflow: hidden;
		width:100%;
	}
	.node.hasMate::after{
		content: "";
		position: absolute;
		left:2em;
		right:2em;
		top:2em;
		border-top:2px solid #000;
		z-index: 1;
	}
	.node.hasMate .person:last-child{
		margin-left:1em;
	}

	.landscape{
		transform:translate(-100%,0) rotate(-90deg);
		transform-origin: 100% 0;
	}
	.landscape .node{
		text-align: left;
		height: 8em;
		width:8em;
	}
	.landscape .person{
		position: relative;
		transform: rotate(90deg);
		padding-left: 4.5em;
		height: 4em;
		top:4em;
		left: -1em;
	}
	.landscape .person .avat{
		position: absolute;
		left: 0;
	}
	.landscape .person .name{
		height: 4em;
		line-height: 4em;
	 }
	.landscape .hasMate{
		position: relative;
	}
	.landscape .hasMate .person{
		position: absolute;
	}
	.landscape .hasMate .person:first-child{
		left:auto;
		right:-4em;
	 }
	.landscape .hasMate .person:last-child{
		left: -4em;
		margin-left:0;
	}
}
</style>

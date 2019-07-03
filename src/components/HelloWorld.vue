<template>
  <div class="hello">
		<GoHome></GoHome>
		<test></test>

    <mt-swipe :auto="2000">
      <mt-swipe-item>你瞅啥！</mt-swipe-item>
      <mt-swipe-item>瞅你咋地！</mt-swipe-item>
      <mt-swipe-item>再瞅一个试试！</mt-swipe-item>
      <mt-swipe-item>试试就试试！</mt-swipe-item>
    </mt-swipe>
    <div class="data">
		
		</div>

		<select class="select" v-model="msg">
			<option class="option" selected>
				请选择
			</option>
			<option class="option">
				返回
			</option>
		</select>

    <div class="mui-content">
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
					</div>
				</div>
			</div>

      <div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>

      <div class="mui-card">
				<div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(./../../../static/images/cbd.jpg)"></div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>Posted on January 18, 2016</p>
						<p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link">Like</a>
					<a class="mui-card-link">Read more</a>
				</div>
			</div>

      <div class="mui-card">
				<div class="mui-card-header mui-card-media">
					<img src="../../static/images/cbd.jpg" />
					<div class="mui-media-body">
						小M
						<p>发表于 2016-06-30 15:30</p>
					</div>
					<!--<img class="mui-pull-left" src="../images/logo.png" width="34px" height="34px" />
					<h2>小M</h2>
					<p>发表于 2016-06-30 15:30</p>-->
				</div>
				<div class="mui-card-content" >
					<img src="../../static/images/cbd.jpg" alt="" width="100%"/>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link">Like</a>
					<a class="mui-card-link">Comment</a>
					<a class="mui-card-link">Read more</a>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import GoHome from '@/components/Tools/GoHome'
import test from '@/components/Tools/test'

import Vue from 'vue';
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
  name: 'HelloWorld',
  data () {
    return {
			msg: '     \n        Welcome to Your Vue.js App    \n    \n    ',
    	}
	},
	mounted () {
		var option = document.querySelector(".option")
		// console.log("option1:",option.innerHTML)
		// var str = "        \n  \n    0123456789  \n"
		// document.querySelector(".data").innerHTML = str
		// console.log(str.length)
		// console.log("11111111111",str.trim())
		// console.log("11111111111",str.trim().length)
	},
	components: {
		GoHome,
		test
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello .select{
	width: 100px;
	height:40px;
	background: #ddd;
	border:solid 1px blue;
}

.mint-swipe{
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}
.mint-swipe-items-wrap{
    overflow: hidden;
    position: relative;
    height: 100%;
}
.mint-swipe-item:nth-child(1){
  line-height: 200px;
  background: rgb(172, 233, 122);
}
.mint-swipe-item:nth-child(2){
  background: rgb(105, 149, 231);
  line-height: 200px;
}
.mint-swipe-item:nth-child(3){
  background: rgb(247, 153, 12);
  line-height: 200px;
}
.mint-swipe-item:nth-child(4){
  background: rgb(95, 238, 195);
  line-height: 200px;
}
</style>

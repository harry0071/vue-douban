<template>
  <mu-container style="padding:70px 10px 10px;">
  	<mu-circular-progress :size="46" color="success" style="margin: 0 auto;display: block;" v-show="list == null"></mu-circular-progress>
    <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;" raised v-if="list != null">
      <mu-card-media>
        <img :src="list.images.small">
      </mu-card-media>
      <mu-card-title :title="list.title" :sub-title="list.rating.average | zero"></mu-card-title>
      <p class="info">导演：<span v-for="director in list.directors"> {{director.name}} </span></p>
      <p class="info">主演：<span v-for="cast in list.casts"> {{cast.name}} </span></p>
      <p class="info">类型：<span v-for="genre in list.genres"> {{genre}} </span></p>
      <h2 class="movie-title">{{list.title}}的剧情简介</h2>
      <mu-card-text>
      	{{list.summary}}
      </mu-card-text>
    </mu-card>
  </mu-container>
</template>

<script>
	import mixin from 'js/mixin';
	export default {
		name:'Detail',
		mixins:[mixin],
		data(){
			return {
				list:null,
			}
		},
		created(){
			this.getLists();
		},
		methods:{
			getLists(){
				this.$jsonp(`https://api.douban.com/v2/movie/subject/${this.$route.query.id}`)
				.then(data => {
					this.list = Object.assign({}, this.list, data);
				});
			},
		},
	}
</script>

<style>
	.info{
		font-size: 14px;
		padding: 0 16px;

	}
	.movie-title{
		font-size: 1.4em;
		color: #4caf50;
		padding: 16px 16px 0;
		margin-bottom: -10px;
	}
	.mu-card-text{
		text-indent: 2em;
	}
</style>

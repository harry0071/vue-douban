<template>
  <mu-container style="padding:70px 10px 0;">
    <mu-load-more :loading="loading" @load="load" :loaded-all="allLoaded">
      <mu-grid-list :cols="3">
        <mu-grid-tile v-for="(list,index) in lists" :key="index" style="height: auto">
          <img :src="list.images.small">
          <span slot="title">{{list.title}}</span>
          <span slot="subTitle">
            <b>{{list.rating.average | zero}}</b>
          </span>
        </mu-grid-tile>
      </mu-grid-list>
    </mu-load-more>
    <!-- <p v-show="allLoaded" class="bottom">我是有底线的</p> -->
  </mu-container>
</template>

<script>
  import mixin from 'js/mixin.js';
  let timer = null;
  export default {
    data() {
      return {
        allLoaded: true,
      }
    },
  	mixins:[mixin],
  	computed:{
  		search(){
  			return this.$root.search;
  		},
  	},
  	watch:{
  		search(newVal){
  			clearTimeout(timer);
  			timer = setTimeout(()=>{
  				this.getLists();
  			},600);
  		}
  	},
  	methods: {
  		getLists() {
  			return this.$jsonp('https://api.douban.com/v2/movie/search', {
  					count: 18,
  					q:this.search
  				})
  				.then(data => {
  					this.lists = data.subjects;
  				})
  				.catch(err => {
  					document.write(err.statusText)
  				})
  		},
  	}
  }
</script>

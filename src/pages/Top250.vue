<template>
  <mu-container style="padding:70px 10px;">
    <mu-circular-progress :size="46" color="success" style="margin: 0 auto;display: block;" v-show="!lists.length"></mu-circular-progress>
    <mu-load-more :loading="loading" @load="load" :loaded-all="allLoaded">
      <mu-grid-list :cols="3">
        <mu-grid-tile v-for="(list,index) in lists" :key="index" style="height: auto" @click="$router.push({name:'detail',query:{id:list.id}})">
          <img :src="list.images.small">
          <span slot="title">{{list.title}}</span>
          <span slot="subTitle">
            <b>{{list.rating.average | zero}}</b>
          </span>
        </mu-grid-tile>
      </mu-grid-list>
    </mu-load-more>
    <p v-show="allLoaded" class="bottom">我是有底线的</p>
  </mu-container>
</template>

<script>
  import mixin from 'js/mixin.js';
  export default {
  	mixins:[mixin],
    created() {
      this.getLists();
    },
  	methods: {
  		getLists() {
  			return this.$jsonp('https://api.douban.com/v2/movie/top250', {
  					count: 12,
  					start: this.start,
  				})
  				.then(data => {
  					if (!data.subjects.length) {
  						this.allLoaded = true;
  						return;
  					}
  					this.lists = this.lists.concat(data.subjects);
  					this.total = data.total;
  					this.start = this.start+12;
  				})
  				.catch(err => {
  					document.write(err.statusText)
  				})
  		},
  	}
  }
</script>
<template>
  <mu-container style="padding:70px 10px;">
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
    <p v-show="allLoaded" class="bottom">我是有底线的</p>
  </mu-container>
</template>

<script>
  import jsonp from 'jsonp';
  import mixin from 'js/mixin.js';
  export default {
    mixins:[mixin],
    data() {
      return {
        allLoaded: true,
      }
    },
    methods: {
      getLists() {
        return this.$jsonp('https://api.douban.com/v2/movie/us_box')
          .then(data => {
            const lists = data.subjects;
            lists.forEach(list => {
              this.lists = this.lists.concat(list.subject);
            });
          })
          .catch(err => {
            document.write(err.statusText)
          })
      },
    }
  }
</script>
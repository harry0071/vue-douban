<template>
  <mu-container style="padding:70px 10px 10px;">
    <mu-circular-progress :size="46" color="success" style="margin: 0 auto;display: block;" v-if="!list || !comments"></mu-circular-progress>
    <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;" raised v-else>
      <mu-card-media>
        <img :src="list.images.small">
      </mu-card-media>
      <mu-card-title :title="list.title" :sub-title="list.rating.average | zero"></mu-card-title>
      <p class="info">导演：
        <span v-for="(director,i) in list.directors"> {{director.name}}
          <span v-if="i<list.directors.length-1">/</span>
        </span>
      </p>
      <p class="info">主演：
        <span v-for="(cast,i) in list.casts"> {{cast.name}}
          <span v-if="i<list.casts.length-1">/</span>
        </span>
      </p>
      <p class="info">又名：
        <span v-for="(aka,i) in list.aka"> {{aka}}
          <span v-if="i<list.aka.length-1">/</span>
        </span>
      </p>
      <p class="info">类型：
        <span v-for="(genre,i) in list.genres"> {{genre}}
          <span v-if="i<list.genres.length-1">/</span>
        </span>
      </p>
      <p class="info">上映日期：
        <span v-for="(pubdate,i) in comments.subject.pubdates"> {{pubdate}}
          <span v-if="i<comments.subject.pubdates.length-1">/</span>
        </span>
      </p>
      <p class="info">片长：
        <span v-for="(duration,i) in comments.subject.durations"> {{duration}}
          <span v-if="i<comments.subject.durations.length-1">/</span>
        </span>
      </p>
      <h2 class="movie-title">{{list.title}}的剧情简介</h2>
      <mu-card-text>
        {{list.summary}}
      </mu-card-text>
      <h2 class="movie-title">精彩短评</h2>
      <mu-list textline="three-line" v-if="comments.comments.length">
        <template v-for="(comment,i) in comments.comments">
          <mu-list-item avatar :ripple="false" button>
            <mu-list-item-action>
              <mu-avatar>
                <img :src="comment.author.avatar">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>{{comment.author.name}}</mu-list-item-title>
              <mu-list-item-sub-title>
                <span class="star-color">{{comment.rating.value | star}}</span>
                <br> {{comment.content}}
              </mu-list-item-sub-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-divider v-if="i<comments.comments.length-1"></mu-divider>
        </template>
      </mu-list>
      <p class="movie-title" v-else>暂无短评</p>
      <!-- 长评 -->
      <Reviews/>
    </mu-card>
  </mu-container>
</template>
<script>
  import mixin from 'js/mixin';
  import Reviews from 'cp/Reviews.vue';
  export default {
    name: 'Detail',
    mixins: [mixin],
    components:{
      Reviews
    },
    data() {
      return {
        list: null,
        comments: null,
      }
    },
    created() {
      this.getLists();
      this.getComments();
    },
    methods: {
      getLists() {
        this.$jsonp(`https://api.douban.com/v2/movie/subject/${this.$route.query.id}`)
          .then(data => {
            this.list = data;
          });
      },
      getComments() {
        this.$jsonp(`https://api.douban.com/v2/movie/subject/${this.$route.query.id}/comments`, {
            apikey: '0b2bdeda43b5688921839c8ecb20399b',
            count: 6
          })
          .then(data => {
            this.comments = data;
          });
      },
    },
    filters: {
      star(value) {
        return '★'.repeat(value) + '☆'.repeat(5 - value) + ' ' + value + '分';
      }
    },
  }
</script>
<style>
  .info {
      font-size: 14px;
      padding: 0 16px;
  }

  .movie-title {
      font-size: 1.2em;
      color: #4caf50;
      padding: 16px 16px 0;
      margin-bottom: -10px;
  }

  .star-color {
      color: rgb(224, 144, 21);
  }

  .mu-card-text {
      text-indent: 2em;
  }

  .mu-list.mu-list-three-line .mu-item-sub-title {
      -webkit-line-clamp: unset;
  }

  .mu-list-three-line .mu-item {
      height: 100%;
  }

  .mu-item.has-avatar {
      position: relative;
  }

  .mu-avatar {
      position: absolute;
      top: 1.4em;
  }

  .mu-item-title {
      font-size: 14px;
      height: 22px;
      line-height: 32px;
  }

  .mu-item-wrapper {
      cursor: inherit;
  }

  .mu-item-wrapper.hover {
      background: inherit;
  }
</style>

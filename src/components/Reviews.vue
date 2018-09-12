<template>
  <div>
    <h2 class="movie-title" style="margin-bottom: 2px;">精彩长评</h2>
    <template v-if="reviews.length">
      <mu-expansion-panel v-for="review in reviews" :key="review.id" :expand="panel === review.id" @change="toggle(review.id)">
        <div slot="header">
          <p class="review-title">
            {{review.title}}
          </p>
          <mu-avatar style="position:static;">
            <img :src="review.author.avatar">
          </mu-avatar>
          <div style="display: inline-block;margin-left: 8px;">
            <p>{{review.author.name}}</p>
            <p class="star-color">{{review.rating.value | star}}</p>
          </div>
        </div>
        {{review.content}}
      </mu-expansion-panel>
    </template>
    <p class="movie-title" style="margin: -16px 0 0 0;" v-else>暂无长评</p>
  </div>
</template>
<script>
  export default {
  	data() {
  		return {
  			reviews: [],
  			panel: ''
  		}
  	},
  	created() {
  		this.getReviews();
  	},
  	methods: {
  		getReviews() {
  			this.$jsonp(`https://api.douban.com/v2/movie/subject/${this.$route.query.id}/reviews`, {
  				apikey: '0b2bdeda43b5688921839c8ecb20399b',
  				count: 6
  			}).then(({
  				reviews
  			}) => {
  				this.reviews = reviews;
  			});
  		},
  		toggle(panel) {
  			this.panel = panel === this.panel ? '' : panel;
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
  .review-title {
      font-weight: bold;
      margin-bottom: 4px;
  }
</style>

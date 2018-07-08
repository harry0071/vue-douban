<template>
  <mu-appbar style="width: 100%;position:fixed;top:0;" :color="color">
    <span v-if="seen">豆瓣电影</span>
    <mu-button icon slot="right" :to="{name:'search'}" style="text-decoration:none;" v-if="seen">
      <mu-icon size=32 value="search"></mu-icon>
    </mu-button>
    <mu-button icon slot="left" @click="$router.back()" v-if="!seen">
      <mu-icon value="keyboard_arrow_left" size=42></mu-icon>
    </mu-button>
    <mu-text-field :value="search" @input="handleInput($event)" placeholder="请搜索电影" full-width color="white" v-if="!seen"></mu-text-field>
  </mu-appbar>
</template>

<script>
  export default {
    props:['search'],
  	data() {
  		return {
  			color: 'success',
  		}
  	},
  	computed: {
  		seen() {
  			if (this.$route.name == 'search') {
  				return false;
  			} else {
  				return true;
  			}
  		}
  	},
    methods:{
      handleInput(val){
        this.$emit('searchMovie',val);
      }
    }
  }
</script>

<style>
	.mu-text-field-input{
		margin-top: 1.4em;
	}
</style>

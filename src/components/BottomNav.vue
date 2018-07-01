<template>
  <div style="position:fixed;bottom:0;width:100%;box-shadow: 0px 0px 2px #a4a4a4;">
    <mu-bottom-nav :color="color" :value="$route.name">
      <mu-bottom-nav-item value="home" title="正在热映" icon="whatshot" @click.native="$router.push({name:'home'})"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="top250" title="Top250" icon="insert_chart" @click.native="$router.push({name:'top250'})"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="us" title="北美榜" icon="movie" @click.native="$router.push({name:'us'})"></mu-bottom-nav-item>
    </mu-bottom-nav>
  </div>
</template>

<script>
	export default {
		props:['active'],
		data(){
			return {
				color:'success',
			}
		},
	}
</script>
<template>
  <mu-appbar style="width: 100%;position:fixed;top:0;" :color="color">
    豆瓣电影
    <mu-button icon slot="right" :to="{name:'us'}" style="text-decoration:none;">
      <mu-icon size=32 value="search"></mu-icon>
    </mu-button>
  </mu-appbar>
</template>

<script>
	export default {
		data(){
			return {
				color:'success',
			}
		},
	}
</script>
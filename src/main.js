import 'css/reset.css';

import Vue from 'vue';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'css/style.css';
Vue.use(MuseUI);

import router from './router/index.js';

import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

import TopBar from 'cp/TopBar.vue';
import BottomNav from 'cp/BottomNav.vue';

Vue.config.productionTip = false

new Vue({
	el: '#app',
	router,
	components:{
		TopBar,
		BottomNav
	},
	data:{search:''},
	computed:{
		seen(){
			if (this.$route.name == 'search' || this.$route.name == 'detail') {
				return false;
			} else {
				return true;
			}
		}
	},
	methods:{
		searchMovie(val){
			this.search = val;
		}
	},
})

import 'css/reset.css';

import Vue from 'vue';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui-message/dist/muse-ui-message.css';
import Message from 'muse-ui-message';
Vue.use(Message);

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
	components: {
		TopBar,
		BottomNav
	},
	created() {
		if (document.documentElement.clientWidth > 768) {
			this.$confirm('您似乎正在使用PC端，是否跳转到手机预览模式？', '提示', {
				type: 'warning'
			}).then(({
				result
			}) => {
				if (result) {
					location.href = 'http://harry0071.coding.me/device-mock/?color=green&site=http://harry0071.coding.me/douban'
				}
			})
		}
	},
	data: {
		search: ''
	},
	computed: {
		seen() {
			if (this.$route.name == 'search' || this.$route.name == 'detail') {
				return false;
			} else {
				return true;
			}
		}
	},
	methods: {
		searchMovie(val) {
			this.search = val;
		}
	},
})

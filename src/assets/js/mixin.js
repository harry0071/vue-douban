const mixin = {
	data() {
      return {
        loading: false,
        lists: [],
        start: 0,
        allLoaded: false,
        total: 0,
      }
    },
	filters: {
      zero(value) {
        const int = Math.floor(value / 2);
        return value ? '★'.repeat(int) + '☆'.repeat(5 - int) + ' ' + value.toFixed(1) + '分' : '暂无评分';
      },
    },
    created() {
      this.getLists();
    },
    methods:{
    load() {
        this.loading = true;
        this.getLists().then(() => this.loading = false);
      }
    },
};
export default mixin;
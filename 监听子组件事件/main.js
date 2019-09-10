new Vue({
    el: '#blog-posts-events-demo',
    data: {
        posts: [/* ... */],
        postFontSize: 1
    },
    methods: {
        onEnlargeText: function (enlargeAmount) {
            this.postFontSize +=enlargeAmount
        }
    }
});
Vue.component('blog-post', {
    props: ['post'],
    template: `
    <button v-on:click="$emit('enlarge-text',0.1)">
        Enlarge text
      </button>
  `
});
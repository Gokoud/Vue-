var app = new Vue ({
    el:'#app',
    data:{
        math: 90,
        physics: 80,
        english: 80,
    },
    computed: {//计算属性有缓存
        sum: function() {
            return this.math + this.physics + this.english;
        },
        average: function () {
            return Math.round(this.sum / 3 )
        }
    }
});
var example2 = new Vue ({
    el: '#example-2',
    data: {
        name: 'Vue.js'
    },
    //在methods方法中定义方法
    methods: {
        greet: function (event) {
            //this在方法里指向当前Vue实例
            alert('Hello'+ this.name + '!')
            //event是原生DOM事件
            if (event) {
                alert(event.target.tagName)
            }
        }
    }
})

example2.greet()


var example3 = new Vue ({
    el: '#example-3',
    methods_1: {
        say: function (message) {
            alert(message)
        }
    },
    methods: {
        warn: function (message,event) {
            if(event) event.preventDefault()
            alert(message)
        }
    }
})

// Vue.component('alert');
var Alert = {
    template: '<button @click="on_click">弹出来</button>',
        methods: {
    on_click: function () {
        alert('yo.');
    }
    }
};
new Vue({
    el: '#seg1',
    components: {
        alert:Alert
    }
});

new Vue({
    el: '#seg2'

});
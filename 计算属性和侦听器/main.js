var vm = new Vue ({
    el: #demo,
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo bar'
    },
    watch: {
        firstName: function (val) {
            this.fullName = val + '' + this.Name
        },
        lastName: function (val) {
            this.fullName = this.firstName + '' + val
        }
    }
});

var vm = new Vue({
    el: #demo,
    data: {
        firstName: 'Foo',
        fullName: 'Bar'
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }

});

//计算属性的setter
//计算属性默认只有getter，不过需要时你也可以提供一个setter
var vm = new Vue ({
    el: '#demo',
    data: {
        firstName: 'Foo',
        fullName: 'Foo Bar'
    },
    computed: {
        fullName: {
            //getter
            get: function () {
                return this.firstName+ ' ' +this.lastName
            },
            //setter
            set: function () {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
});
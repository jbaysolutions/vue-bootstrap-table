Vue.config.debug = true;
Vue.config.devtools = true;

import VueBootstrapTable from './VueBootstrapTable.vue';

new Vue({
    el: '#app',
    components: {
        VueBootstrapTable,
    },
    data: {
        showFilter: true,
        showPicker: true,
        columns: [
            {
                title:"id",
            },
            {
                title:"name",
            }
        ],
        values: [
            {
                "id": 1,
                "name": "john",
            },
            {
                "id": 2,
                "name": "mary",
            }
        ]
    },
    ready: function () {
    },
    methods: {
        addItem: function() {
            var self = this;
            var item = {
                "id" : this.values.length + 1,
                "name": "name " + (this.values.length+1)
            };
            this.values.push(item);
        },
        toggleFilter: function() {
            this.showFilter = !this.showFilter;
        },
        togglePicker: function() {
            this.showPicker = !this.showPicker;
        }
    },
});
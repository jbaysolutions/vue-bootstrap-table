Vue.config.debug = true;
Vue.config.devtools = true;

import VueBootstrapTable from './VueBootstrapTable.vue';

new Vue({
    el: '#app',
    components: {
        VueBootstrapTable,
    },
    data: {
        logging: [],
        showFilter: true,
        showPicker: true,
        paginated: true,
        columns: [
            {
                title: "id",
            },
            {
                title: "name",
                visible: true,
                editable: true,
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
            },
            {
                "id": 3,
                "name": "jack",
            },
            {
                "id": 4,
                "name": "joe",
            },
            {
                "id": 5,
                "name": "ana",
            },
            {
                "id": 6,
                "name": "rita",
            },
            {
                "id": 7,
                "name": "mario",
            },
            {
                "id": 8,
                "name": "luigi",
            },
            {
                "id": 9,
                "name": "mickey",
            },
            {
                "id": 10,
                "name": "donald",
            },
            {
                "id": 11,
                "name": "juliet",
            }

        ]
    },
    ready: function () {
    },
    methods: {
        addItem: function () {
            var self = this;
            var item = {
                "id": this.values.length + 1,
                "name": "name " + (this.values.length + 1)
            };
            this.values.push(item);
        },
        toggleFilter: function () {
            this.showFilter = !this.showFilter;
        },
        togglePicker: function () {
            this.showPicker = !this.showPicker;
        },
        togglePagination: function () {
            this.paginated = !this.paginated;
        }
    },
    events: {
        cellDataModifiedEvent: function( originalValue, newValue, columnTitle, entry) {
            this.logging.push("Original Value : " + originalValue +
                         " | New Value : " + newValue +
                         " | Column : " + columnTitle +
                         " | Complete Entry : " +  entry );
        },
    },
});
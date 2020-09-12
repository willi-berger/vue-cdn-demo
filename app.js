// app.js
// vue.js cdn based version of empoyee tutorial app from turorial https://www.taniarascia.com/getting-started-with-vue/



Vue.component('employee-list-item',{
    template:'<tr><td>{{employee.firstName}}</td><td>{{employee.lastName}}</td></tr>',
    props: ['employee'],
})

Vue.component('employee-list', {
    props:['employees'],
})


var app = new Vue({
    el: '#app',
    data: {
        message:"Hello vue!!",
        employees:[
            {id: 0, firstName:'Willi', lastName: 'Berger1'},
            {id: 1, firstName:'Willi', lastName: 'Berger2'},
            {id: 2, firstName:'Willi', lastName: 'Berger3'},
        ],
    },
})


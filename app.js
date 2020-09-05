// app.js
// vue.js cdn based version of empoyee tutorial app from turorial https://www.taniarascia.com/getting-started-with-vue/



Vue.component('employee-list-item',{
    template:'<tr><td>{{employee.firstName}}</td><td>{{employee.lastName}}</td></tr>',
    props: ['employee'],
})

Vue.component('employee-list', {
    template: `
        <table>
        <thead>
            <tr><td>First name</td><td>Last name</td></tr>
        </thead>
        <tbody>
            <employee-list-item
                v-for="employee in employees"
                v-bind:employee="employee"
                v-bind:key="employee.id">
            </employee-list-item>
        </tbody>
        </table>
    `,
    props:['employees'],
})


var app = new Vue({
    el: '#app',
    data: {
        message:"Hello vue!!",
        employees:[
            {id: 0, firstName:'Willi', lastName: 'Berger'},
            {id: 1, firstName:'Willi', lastName: 'Berger'},
            {id: 2, firstName:'Willi', lastName: 'Berger'},
        ],
    },
})


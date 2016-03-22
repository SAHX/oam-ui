/**
 * Created by tangjiang on 16/3/19.
 */
import Vue from '../lib/vue.min'
import VueRouter from '../lib/vue-router.min'

Vue.use(VueRouter);

import App from '../views/index.vue'
import Editor from '../views/Editor.vue'
import Button from '../views/Button.vue'
import Form from '../views/Form.vue'
import Table from '../views/Table.vue'

window.router = new VueRouter({
    hashbang: true
});
router.map({
    '/':{
        component:{
            template: '<h1>欢迎登录OAM-UI</h1>'
        }
    },
    '/editor':{
        component: Editor
    },
    '/button':{
        component: Button
    },
    '/form':{
        component: Form
    },
    '/table':{
        component: Table
    }
});


router.start(App, '#app');
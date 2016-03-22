
<template>
    <li>
        <a class="tooltip-tip" href="#">
            <i class="{{icon}}"></i>
            <span>{{name}}</span>
        </a>
        <ul>
            <li v-for="item in listArray">
                <a v-link="{path:item.url}">{{ item.name }}</a>
            </li>
        </ul>
    </li>
</template>
<style>

</style>
<script>
    /**
     * 参数:
     *  [icon] String eg. 'fa fa-desktop'
     *  [name] String eg. '用户管理';
     *  [listAttay] Array eg. [{url:'/a/b',name:'用户列表'},{...},...]
     */
    export default{
        data(){
            return {
                name:'',
                listArray:[]
            }
        },

        props: {
            icon:{
                type:String,
                required: true
            },
            name:{
                type:String,
                required: true
            },
            listArray:Array
        }

    }
</script>
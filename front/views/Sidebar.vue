<template>
    <div id="skin-select">
        <!--  隐藏边栏按钮 -->
        <a id="toggle">
            <span class="fa fa-exchange"></span>
        </a>
        <!--  End of 隐藏边栏按钮 -->

        <div class="skin-part">
            <div id="tree-wrap">

                <!-- Profile -->
                <div class="profile">
                    <img alt="" class="" src="/static/img/logo.png">
                    <h3>OAM-UI<small>0.1</small></h3>
                </div>
                <!-- End of Profile -->

                <!-- Menu sidebar begin-->
                <div class="side-bar">
                    <ul id="menu-showhide" class="topnav slicknav">
                        <li class="has-form bg-white">
                            <div class="dark"></div>
                            <input class="input-top" type="text" placeholder="功能搜索,如:发帖...">
                        </li>
                        <li>
                            <a id="menu-select" class="tooltip-tip" v-link="'/'">
                                <i class="fa fa-home fa-fw"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>

                        <sidebar-list-item :icon="ui.icon" :name="ui.name" :list-array="ui.listArray"></sidebar-list-item>
                        <sidebar-list-item :icon="system.icon" :name="system.name" :list-array="system.listArray"></sidebar-list-item>

                    </ul>
                </div>
                <!-- end of Menu sidebar  -->

            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import SidebarListIterm from '../components/SidebarListItem.vue'
    export default{
        data(){
            return{// SidebarListIterm 组件所需要的数据,具体参数见 /components/SidebarListItem.vue 里
                ui:{
                    icon:'fa fa-desktop',
                    name:'UI 展示',
                    listArray:[
                        {url:'/editor',name:'富文本编辑器'},
                        {url:'/button',name:'按钮'},
                        {url:'/form',name:'表单'},
                        {url:'/table',name:'表格'}
                    ]
                },
                system:{
                    icon:'fa fa-cog',
                    name:'系统管理',
                    listArray:[
                        {url:'/system/list',name:'系统设置'},
                        {url:'/system/list',name:'系统维护'}
                    ]
                }
            }
        },
        components:{
            'sidebar-list-item':SidebarListIterm
        }
    }
</script>
<template>
    <div class="off-canvas-wrap" data-offcanvas>
        <!-- right sidebar wrapper -->
        <div class="inner-wrap">
            <sidebar></sidebar>
            <div class="wrap-fluid" id="paper-bg">
                <top-nav></top-nav>
                <router-view></router-view>
                <footer>
                    <div id="footer">Copyright &copy; 2016 <a href="#">OAM-UI</a></div>
                </footer>
            </div>
            <!-- End of Container Begin -->
        </div>
        <!-- end paper bg -->
    </div>
    <!-- end of off-canvas-wrap -->
    <!-- end of inner-wrap -->
</template>
<style>

</style>
<script>
    import Sidebar from './Sidebar.vue'
    import TopNav from './TopNav.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
            'sidebar':Sidebar,
            'topNav':TopNav
        }
    }
</script>
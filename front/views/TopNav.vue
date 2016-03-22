<template>
    <!-- top nav -->
    <div class="top-bar-nest">
        <nav class="top-bar" data-topbar role="navigation" data-options="is_hover: false">
            <section class="top-bar-section ">
                <!-- Left Nav Section -->
                <ul class="left">

                    <!-- Search | has-form wrapper -->
                    <li class="has-form bg-white">
                        <div class="row collapse">

                            <div class="large-12 columns">
                                <div class="dark_top"> </div>
                                <input class="input-top" type="text" placeholder="search">
                            </div>
                        </div>
                    </li>
                </ul>

                <ul class="right">
                    <li class=" has-dropdown bg-white">
                        <a class="bg-white" href="#"><img alt="" class="admin-pic img-circle" src="/static/img/avatar.jpeg"><span class="admin-pic-text text-gray">Hi, Admin </span>
                        </a>

                        <ul class="dropdown dropdown-nest profile-dropdown">

                            <li>
                                <i class="fa fa-user fa-fw"></i>
                                <a href="#">
                                    <h4>Profile<span class="text-aqua fontello-record" ></span></h4>
                                </a>
                            </li>
                            <li>
                                <i class="fa fa-folder-open-o fa-fw"></i>
                                <a href="#">
                                    <h4>Account<span class="text-blue fontello-record" ></span></h4>
                                </a>
                            </li>
                            <li>
                                <i class="fa fa-sign-out fa-fw"></i>
                                <a href="#">
                                    <h4>Logout<span class="text-dark-blue fontello-record" ></span></h4>
                                </a>
                            </li>

                            <!--<li class="active right">-->
                            <!--<a href="#">-->
                            <!--<div class="label bg-white">More</div>-->
                            <!--</a>-->
                            <!--</li>-->
                        </ul>
                    </li>
                    <li class="bg-white">
                        <a class="right-off-canvas-toggle bg-white text-gray" href="#"><span style="font-size:13px" class="fa fa-list fa-fw" ></span></a>
                    </li>
                </ul>
            </section>
        </nav>
    </div>
</template>
<style>

</style>
<script>

    export default{
        data(){
            return{

            }
        },
        components:{

        }
    }
</script>
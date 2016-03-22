<template>

    <!-- breadcrumbs -->
    <ul class="breadcrumbs">
        <li><a href="#"><span class="fa fa-home fa-fw"></span></a>
        </li>
        <li>Dashboard
        </li>
    </ul>
    <!-- end of breadcrumbs -->

    <!-- Container Begin -->
    <div class="row no-pad">

        <div class="large-12 columns">
            <div class="box bg-white">


                <!-- /.box-header -->
                <div class="box-body pad-forty" style="display: block;">
                    <!-- Editor -->
                    <div class="row">
                        <div class="large-3 columns">
                            <p><strong>Trumbowyg-JQuery轻量级文本编辑器</strong>
                            </p>
                            <p><a href="http://alex-d.github.io/Trumbowyg/">Trumbowyg</a> a lightweight WYSIWYG editor Trumbony is a light, translatable and customisable jQuery plugin. Beautiful design, generates semantic code, comes with a powerful API.</p>
                        </div>
                        <div class="large-9 columns">
                            <div id="wiwiq-editor">
                                <h4>Trumbowyg 的富文本编辑器</h4>
                                <p>
                                    内容在这里展示
                                </p>

                            </div>
                        </div>
                    </div>
                    <!-- end of Editor -->
                </div>
                <!-- end .timeline -->
            </div>
            <!-- box -->
        </div>
    </div>
    <!-- End of Container Begin -->
</template>
<style>
@import "../lib/text-editor/dist/ui/trumbowyg.css";
</style>
<script>

    import trumbowyg from '../lib/text-editor/dist/trumbowyg.min'
    export default{
        data(){
            return{

            }
        },
        components:{

        },
        ready(){
            (function($) {
                "use strict";

                /** Default editor configuration **/
                $('#wiwiq-editor').trumbowyg();


            })(jQuery);
        }
    }
</script>
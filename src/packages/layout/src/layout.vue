<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/1/23
Time: 23:48-->
<template>
  <div class="ms-layout" :style="[layoutStyle]">
    <div ref="ms_layout_north" class="ms-north" >
      <div></div>
      <slot name="north"></slot>
    </div>
    <div class="ms-middle" :style="[middleStyleCompute]">
      <div ref="ms_layout_east" class="ms-east" :style="[eastStyleCompute]">
        <slot name="east"></slot>
      </div>
      <div class="ms-center" :style="[centerStyleCompute]">
        <slot></slot>
      </div>
      <div ref="ms_layout_west" class="ms-west" :style="[westStyleCompute]">
        <slot name="west"></slot>
      </div>
    </div>
    <div ref="ms_layout_south" class="ms-south">
      <slot name="south"></slot>
    </div>
  </div>
</template>
<script>
    export default {
        name:'ms-layout',
        data(){
            return {
              componentReady:false
            }
        },
        computed:{
            layoutStyle:function(){
                let me = this;
                if(me.componentReady){
                    let style = {};
                    let windowHeight = $(window).height();
                    Object.assign(style,{height:windowHeight+"px"});
                    return style;
                }
            },
            middleHeightCompute:function () {
                let me = this;
                if(me.componentReady){
                    let middleHeight =  $(window).height();
                    if(me.$refs["ms_layout_north"]){
                        middleHeight = middleHeight - me.$refs["ms_layout_north"].offsetHeight;
                    }
                    if(me.$refs["ms_layout_south"]){
                        middleHeight = middleHeight - me.$refs["ms_layout_south"].offsetHeight;
                    }
                    return middleHeight;
                }
                return 0;
            },
            centerWidthCompute:function () {
              let me = this;
              if(me.componentReady){
                let centerWidth = $(me.$el).width();
                if(me.$refs["ms_layout_east"]){
                    centerWidth = centerWidth - me.$refs["ms_layout_east"].offsetWidth;
                }
                if(me.$refs["ms_layout_west"]){
                    centerWidth = centerWidth - me.$refs["ms_layout_west"].offsetWidth;
                }
                return centerWidth;
              }
              return 0;
            },
            middleStyleCompute:function () {
              let me = this;
              if(me.componentReady){
                let style = {};
                Object.assign(style,{height:me.middleHeightCompute+"px"})
                return style;
              }
            },
            eastStyleCompute:function () {
                let me = this;
                if(me.componentReady){
                    let style = {};
                    Object.assign(style,{height:me.middleHeightCompute+"px"});
                    return style;
                }
            },
            centerStyleCompute:function () {
                let me = this;
                if(me.componentReady){
                    let style = {};
                    Object.assign(style,{height:me.middleHeightCompute+"px"});
                    Object.assign(style,{width:me.centerWidthCompute+"px"});
                    if(me.$refs["ms_layout_east"]){
                        Object.assign(style,{left:me.$refs["ms_layout_east"].offsetWidth+"px"});
                    }
                    return style;
                }
            },
            westStyleCompute:function () {
                let me = this;
                if(me.componentReady){
                    let style = {};
                    Object.assign(style,{height:me.middleHeightCompute+"px"});
                    return style;
                }
            }
        },
        mounted(){
          let me = this;
          me.componentReady = true;
        },
        updated(){
          let me = this;
        },
        methods:{

        },
        components: {
        }
    }
</script>
<style>

</style>

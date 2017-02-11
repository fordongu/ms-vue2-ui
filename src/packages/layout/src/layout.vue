<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/1/23
Time: 23:48-->
<template>
  <div class="ms-layout" :style="[layoutStyle]">
    <div v-if="north" ref="ms_layout_north" class="ms-north" >
      <slot name="north"></slot>
    </div>
    <div class="ms-middle" :style="[middleStyleCompute]">
      <div v-if="east" ref="ms_layout_east" class="ms-east" :style="[eastStyleCompute]">
        <slot name="east"></slot>
      </div>
      <div class="ms-center" :style="[centerStyleCompute]">
        <slot></slot>
      </div>
      <div v-if="west" ref="ms_layout_west" class="ms-west" :style="[westStyleCompute]">
        <slot name="west"></slot>
      </div>
    </div>
    <div v-if="south" ref="ms_layout_south" class="ms-south">
      <slot name="south"></slot>
    </div>
  </div>
</template>
<script>
    export default {
        name:'ms-layout',
        data(){
            return {
              componentReady:false,
              north:false,
              south:false,
              east:false,
              west:false,
              windowHeight:($(window).height()),
              centerWidth:0
            }
        },
        computed:{
            layoutStyle:function(){
                let me = this;
                if(me.componentReady){
                    let style = {};
                    //let windowHeight = $(window).height();
                    Object.assign(style,{height:me.windowHeight+"px"});
                    return style;
                }
            },
            middleHeightCompute:function () {
                let me = this;
                if(me.componentReady){
                    let middleHeight =  me.windowHeight;
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
                let centerWidth = me.centerWidth?me.centerWidth:$(me.$el).width();
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
        beforeMount(){
          let me = this;
          if(this.$slots.north){
            me.north = true;
          }
          if(this.$slots.south){
            me.south = true;
          }
          if(this.$slots.east){
            me.east = true;
          }
          if(this.$slots.west){
            me.west = true;
          }
        },
        mounted(){
          let me = this;
          me.componentReady = true;

          $(window).resize(function(){
            me.windowHeight = $(window).height();
            me.centerWidth = $(me.$el).width();
          });
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

<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/2/9
Time: 21:46-->
<template>
  <div class="panel panel-default ms-panel" :style="[panelStyleCompute]">
    <div v-if="heading"  class="panel-heading">
      <slot name="heading"></slot>
    </div>
    <div v-if="tbar">
      <slot name="tbar"></slot>
    </div>
    <div ref="ms_panel_body"  :style="[bodyStyleCompute]">
      <slot></slot>
    </div>
    <div v-if="fbar">
      <slot name="fbar"></slot>
    </div>
    <div v-if="footer" class="panel-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
    import "ms-jquery-resize";
    export default {
      name:'ms-panel',
      props:{
        "layout":{
          type:String
        },
        "width":{
        },
        "height":{},
        "resize":{
          type:Function
        }
      },
      data(){
        return {
          "componentReady":false,
          "panelHeight":this.height,
          "panelWidth":this.width,
          "bodyWidth":0, //
          "bodyHeight":0, //
          "mainHeightStyle":{},
          "heading":false,
          "tbar":false,
          "fbar":false,
          "footer":false
        }
      },
      computed:{
        "panelStyleCompute":function(){
          let me = this;
          if(me.componentReady){
            let style = {};
            if(me.panelHeight){
              Object.assign(style,{height:me.panelHeight+'px'});
            }
            if(me.panelWidth){
              Object.assign(style,{width:me.panelWidth+'px'});
            }
            return style;
          }
        },
        "bodyStyleCompute":function(){
          let me = this;
          if(me.componentReady){
            let style = {};
            if(me.bodyHeight){
              Object.assign(style,{height:me.bodyHeight+'px'});
            }
            return style;
          }
        }
      },
      watch:{
        "panelWidth":{
          handler:function(newVal,oldVal){
            let me = this;
            if(newVal){
                me.$nextTick(function(){
                  me.bodyWidth = $(me.$refs["ms_panel_body"]).width();
                  me.panelResize();
                });
            }
          },
          immediate: true
        },
        "panelHeight":{
          handler:function(newVal,oldVal){
            let me = this;
            if(newVal){
              me.$nextTick(function(){
                me.bodyHeight = me.getBodyHeight();
                me.panelResize();
              });
            }
          },
          immediate: true
        }
      },
      beforeMount(){
        let me = this;
        if(me.$slots.heading){
          me.heading = true;
        }
        if(me.$slots.tbar){
          me.tbar = true;
        }
        if(me.$slots.fbar){
          me.fbar = true;
        }
        if(me.$slots.footer){
          me.footer = true;
        }
      },
      mounted(){
        let me = this;
        me.componentReady = true;
        if(me.layout == "fit"){
          if(me.$el.parentElement){
            me.panelWidth = $(me.$el.parentElement).width();
            me.panelHeight = $(me.$el.parentElement).height();
          }
          $(me.$el.parentElement).resize(function(){
            me.panelWidth = $(me.$el.parentElement).width();
            me.panelHeight = $(me.$el.parentElement).height();
          });
        }
      },
      methods:{

        getBodyHeight(){ //获取panel中，除去其他部分之后留给body的高度
          let me = this;
          if(me.componentReady){
            let height = $(me.$el).height();
            let siblings = $(me.$refs['ms_panel_body']).siblings();
            _.forEach(siblings,function(item){
              height = height-item.offsetHeight;
              //console.log(item.clientHeight+"|"+$(item).height()+"|"+item.offsetHeight);
            });
            return height;
          }
        },
        panelResize(){
          let me = this;
          debugger;
          if(me.resize){

            me.resize(me.bodyWidth,me.bodyHeight);
          }
        }
      },
      components: {
      }
    }
</script>
<style>

</style>

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
    <div v-if="tools" class="panel-body">
      <slot name="tools"></slot>
    </div>
    <div ref="ms_panel_main"  :style="[mainHeightStyle]">
      <slot></slot>
    </div>
    <div v-if="footer" class="panel-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
    import globalEvents from "../../global/GlobalEvents.js";
    export default {
      name:'ms-panel',
      props:{
        "layout":{
          type:String
        },
        "width":{
        },
        "height":{}
      },
      data(){
        return {
          "componentReady":false,
          "panelHeight":this.height,
          "panelWidth":this.width,
          "mainHeightStyle":{},
          "heading":false,
          "tools":false,
          "footer":false
        }
      },
      computed:{
        "panelStyleCompute":function(){
          let me = this;
          if(me.componentReady){
            let style = {};
            if(me.layout == "fit"){
              Object.assign(style,{height:me.panelHeight+'px',width:me.panelWidth+'px'});
            }
            me.$nextTick(function(){
              me.setMainHeightStyle();
            });
            return style;
          }
        },
        "mainStyleCompute":function(){
          let me = this;
          if(me.componentReady){
            let style = {};
            if(me.panelHeight){
              let height = $(me.$el).height();
              let siblings = $(me.$refs['ms_panel_main']).siblings();
              _.forEach(siblings,function(item){
                height = height-item.offsetHeight;
                console.log(item.clientHeight+"|"+$(item).height()+"|"+item.offsetHeight);
              });
              Object.assign(style,{height:height+'px'});
            }
            return style;
          }
        }
      },
      watch:{

      },
      beforeMount(){
        let me = this;
        if(me.$slots.heading){
          me.heading = true;
        }
        if(me.$slots.tools){
          me.tools = true;
        }
        if(me.$slots.footer){
          me.footer = true;
        }
      },
      mounted(){
        let me = this;
        me.componentReady = true;
        me.initSize();
        $(window).resize(function(){
          if(me.layout == "fit"){
              me.setPanelSize($(me.$el.parentElement).width(),$(me.$el.parentElement).height());
          }
        });
      },
      methods:{
        initSize(){
          let me = this;
          if(me.layout == "fit"){
              me.setPanelSize($(me.$el.parentElement).width(),$(me.$el.parentElement).height());
          }
        },
        setPanelSize(width,height){
          let me = this;
          if(width){
            me.panelWidth = width;
          }if(height){
            me.panelHeight = height;
          }
        },
        setMainHeightStyle(){
          let me = this;
          if(me.componentReady){
            let height = $(me.$el).height();
            let siblings = $(me.$refs['ms_panel_main']).siblings();
            _.forEach(siblings,function(item){
              height = height-item.offsetHeight;
              console.log(item.clientHeight+"|"+$(item).height()+"|"+item.offsetHeight);
            });
            me.mainHeightStyle = {height:height+'px'};
            me.$nextTick(function(){
              globalEvents.$emit("ms-resize");
            });
          }
        }
      },
      components: {
      }
    }
</script>
<style>

</style>

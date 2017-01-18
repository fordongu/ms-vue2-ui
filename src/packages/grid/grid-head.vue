<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:31-->
<template>
  <div class="ms-grid-head" :class="{'ms-scroll-space':needScrollSpace}" :style="[scrollStyleCompute]" >
    <table class="table table-bordered" :style="[widthStyleCompute]" >
      <colgroup>
        <ms-grid-col v-for="(col,index) in cols" :col="col"  />
      </colgroup>
      <thead>
      <tr v-for="(columnRow,rowIndex) in headColumns"
          is="ms-grid-head-row"
          :head-columns="headColumns"
          :head-row-index="rowIndex"
          :column-row="columnRow"
          :max-column-level="maxColumnLevel"
          :max-head-height="maxHeadHeight"
          :ms-grid-id="msGridId"
          :ms-grid-head-id="msGridHeadId"
          :allocated-height="allocatedHeight">
      </tr>
      </thead>
    </table>
  </div>
</template>
<script>
    import PropsMixin from "./mixins/PropsMixin";
    import MethodsMixin from "./mixins/MethodsMixin";
    import LifecycleMixin from "./mixins/LifecycleMixin";

    import MsGridHeadRow from "./grid-head-row.vue";
    import MsGridCol from "./grid-col.vue";

    import bus from "./GridEvents";
    export default {
      name:'ms-grid-head',
      mixins:[PropsMixin,MethodsMixin,LifecycleMixin],
      props:{
        headColumns:{
          type:Array
        },
        cols:{
          type:Array
        },
        maxColumnLevel:{
          type:Number
        },
        maxHeadHeight:{
            type:Number,
            default(){
                return 0;
            }
        },
      },
      data(){
        return {
          msGridHeadId:_.uniqueId("ms_grid_head_"),
          allocatedHeight:0,
          needScrollSpace:false
        }
      },
      computed:{
        widthStyleCompute:function(){
          let me = this;
          if( me.componentReady && me.scrollX ){
            let style = {};
            if(me.needScrollSpace){
              Object.assign(style,{width:(me.width-15)+"px"});
            }else {
              Object.assign(style,{width:me.width+"px"});
            }
            return style;
          }
        },
        scrollStyleCompute:function(){
          let me = this;
          if( me.componentReady && me.scrollX ){
            return {overflowX:'hidden'};
          }
        }
      },
      created(){
        let me = this;
        bus.$on('ms-grid-scroll-space',function(gridId,needSpace){
           if(me.msGridId == gridId && me.position == "center"){
            me.needScrollSpace = needSpace;
           }
        });
        bus.$on('ms-grid-body-scroll',function(gridId,e){
          if(gridId==me.msGridId && me.$el){
            me.$el.scrollLeft = e.target.scrollLeft;
          }
        });
        bus.$on('ms-grid-head-row-ready',function(gridId,gridHeadId,height){
            if(gridId==me.msGridId && gridHeadId==me.msGridHeadId){
                me.allocatedHeight += height;
            }
        });
      },
      methods:{

      },
      mounted(){
        let me = this;

        bus.$emit('ms-grid-head-height',me.msGridId,me.$el.clientHeight);
      },
      components: {
        MsGridHeadRow,
        MsGridCol
      }
    }
</script>
<style>

</style>

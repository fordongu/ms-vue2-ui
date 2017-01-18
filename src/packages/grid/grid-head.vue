<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Date: 2017/1/13
Time: 09:31-->
<template>
  <div :style="[scrollStyleCompute]" >
    <table class="ms-grid-head table table-bordered" :style="[widthStyleCompute]" >
      <colgroup>
        <ms-grid-col v-for="(col,index) in cols" :col="col"  />
      </colgroup>
      <thead>
      <tr v-for="(columnRow,rowIndex) in headColumns">
        <td v-for="(column,cellIndex) in columnRow"
            is="ms-grid-head-item"
            :column="column"
            :max-column-level="maxColumnLevel">
        </td>
      </tr>
      </thead>
    </table>
  </div>
</template>
<script>
    import PropsMixin from "./mixins/PropsMixin";
    import MethodsMixin from "./mixins/MethodsMixin";
    import LifecycleMixin from "./mixins/LifecycleMixin";

    import MsGridHeadItem from "./grid-head-item.vue";
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
        }
      },
      data(){
        return {
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
        })
      },
      methods:{

      },
      mounted(){
        let me = this;
        bus.$on('ms-grid-body-scroll',function(gridId,e){
          if(gridId==me.msGridId && me.$el){
            me.$el.scrollLeft = e.target.scrollLeft;
          }
        });
      },
      components: {
        MsGridHeadItem,
        MsGridCol
      }
    }
</script>
<style>

</style>

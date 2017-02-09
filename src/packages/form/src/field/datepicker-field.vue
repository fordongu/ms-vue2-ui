<!--
Created by Bane.Shi.
Copyright MoenSun
User: Bane.Shi
Blog: http://blog.fengxiaotx.com/
Date: 2017/2/9
Time: 10:53-->
<template>
  <div class="ms-form-datepicker-field">
    <input type="text" class="form-control" v-model="showText" :placeholder="placeholder" @focus="showPicker">
    <i class="glyphicon glyphicon-calendar"></i>
    <div v-if="pickerShow" class="ms-picker-box">
      <ms-datepicker v-model="fieldValue" :change="change"/>
    </div>
  </div>
</template>
<script>
    import moment from "moment";
    import {Datepicker} from "../../../picker/index";
    export default {
      name:'ms-form-datepicker-field',
      props:{
        value:{
          type:[String,Date]
        },
        "placeholder":{
          type:String
        },
        "format":{
          type:String,
          default(){
            return "YYYY-MM-DD";
          }
        }
      },
      data(){
        return {
          "eventNamespace":_.uniqueId(".ms_date_field_click_"),
          "pickerShow":false,
          "fieldValue":null,
        }
      },
      computed:{
        showText:{
          get:function(){
            let me = this;
            if(me.fieldValue){
              return moment(me.fieldValue).format(me.format);
            }
          },
          set:function(v){}
        }
      },
      watch:{
        "value":{
          handler:function(newVal,oldVal){
            let me = this;
            me.fieldValue = newVal;
          },
          immediate:true
        }
      },
      mounted(){
        let me = this;
        me.clickOn();
      },
      beforeDestroy(){
        let me = this;
        me.clickOff();
      },
      methods:{
        "clickOn":function(){
          let me = this;
          $(document).on('click'+me.eventNamespace,function(e){
            let el = me.$el;
            if(!el.contains(e.target)){
              me.pickerShow = false;
            }
          });
        },
        "clickOff":function(){
            let me = this;
            $(document).off('click'+me.eventNamespace);
        },
        showPicker(){
          let me = this;
          me.pickerShow = true;
        },
        change(date){
          let me = this;
          me.pickerShow = false;
          me.fieldValue = date;
          console.log(moment(date).format("YYYY-MM-DD"));
        }
      },
      components: {
        MsDatepicker:Datepicker
      }
    }
</script>
<style>

</style>

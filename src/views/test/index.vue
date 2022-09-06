<template>
  <el-button type="primary" @click="btn_change">{{a}}</el-button>
</template>

<script>
import {mytest} from '@/api/test'
export default {
    data(){
        return{
            a:[
                {
                    id:1,
                    phone:"123"
                },
                {
                    id:2,
                    phone:"123"
                }
            ]

        }
    },
    methods:{
        btn_change(){
            mytest().then((res)=>{
                console.log(res)
            })
            let c=this.a.filter((item)=>{
                console.log("item=",item)
                if(item.phone.includes("5")){
                    return item;
                }
            })
            console.log("c=",c)
        }
    }
}
</script>

<style>

</style>
<template>
    <div>
        <div  @click="substrict" class="left">-</div>
        <div class="middle">{{initCount}}</div>
        <div @click="add"  class="right">+</div>
    </div>
</template>

<style scoped>
.left,
.right,
.middle {
  border: 1px solid rgba(92, 92, 92, 0.3);
  width: 25px;
  height: 30px;
  display: inline-block;
  text-align: center;
  line-height: 30px;
}
.middle {
  width: 30px;
  margin: 0 2px;
}
</style>


<script>
    export default{
        props:{
            goodsId:{
               Type: String,
               required: true
            },
             
            count:{
               Type: Number,
               default: 1
            }

        },

        data(){
          return {
            initCount:0
          }
        },

        created() {
            this.initCount = this.count
        },

        methods:{
            substrict(){
                if(this.initCount === 1) return

                this.initCount--

                this.notify()
            },

            add(){
                this.initCount++

                this.notify()
            },

            notify(){
                this.$emit('goodsCountChange',{
                    goodsId: this.goodsId,
                    count: this.initCount
                })         
            }
        }
    }
    
</script>


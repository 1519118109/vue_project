<template>
    <div>
        这是index界面===访问成功
        <br>
        姓名：{{name}}

        <hr>
        <div>这是一个组件
            <button @click="pushData">按钮</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data:function () {
            return{
                name:'小明',
            }
        },
        methods:{
            pushData() {
                // 当点击按钮时，向状态机中数组添加一个元素
                this.$store.commit('add_data', 100)
            },
        }
    }
</script>

<style scoped>
    div {
        color: green;
    }
</style>

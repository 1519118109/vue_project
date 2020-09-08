<template>
    <div>
        这是index界面===访问成功
        <br>
        姓名：{{name}}
    </div>
</template>

<script>
    export default {
        name: "index",
        data:function () {
            return{
                name:'小明',
            }
        }
    }
</script>

<style scoped>
    div {
        color: green;
    }
</style>

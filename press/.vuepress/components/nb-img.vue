<template>
    <div>
        <img class="img-transform" src="./2020-01-13-202519.jpg"
            usemap="#Map"></img>
        <map name="Map">
            <area shape="circle" href="javascript:alert('haha')" coords="10,150,50">
        </map>
    </div>
</template>
<script>
export default {
    name:'nb-img'
}
</script>
<style>
.img-transform{
    transform: rotate(90deg);
    height: 200px;
    margin-top: 80px;
    margin-bottom:80px;
}
</style>
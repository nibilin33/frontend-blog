<template>
    <div></div>
</template>
<script lang="ts">
import {List} from './entity/list';
export default {
    created(){
        let t = new List();
        t.fetchData();
    }
    
}
</script>
<style lang="scss" scoped>

</style>
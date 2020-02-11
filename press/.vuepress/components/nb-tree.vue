<template>
    <div>
    <div v-for="(it,index) in list">
        <span :style="{'margin-left':it.level*1.5+'rem'}"></span>{{it.name}}
    </div>
    </div>
</template>
<script>
import { Tree } from './tree.js';
const data = require('./users.json').data;
export default {
    name:'nb-tree',
    data() {
        return {
            list: new Tree(data).flattern(),
        };
    }, 
}
</script>
<template>
    <div>
        <div>
            NEW tree
            <div id="newTree">
            </div>
        </div>
        <div>
            OLD tree
            <div id="oldTree"> 
            </div>
        </div>
    </div>
</template>
<script>
class Node {
    constructor(data) {
        this.tagName = data.tagName;
        this.data = data.firstChild.data;
        this.children = [];
    }
}
const oldTreeList = {
    tagName: 'div',
    data:'1',
    children: [
        {
            tagName: 'div',
            data: 2,
            children: [
                {
                    tagName: 'span',
                    data: 3,
                },
                {
                    tagName: 'span',
                    data: 4,
                },
                {
                    tagName: 'span',
                    data: 5,
                },
            ]
        }
    ]
}
const newTreeList = {
    tagName: 'div',
    data:'1',
    children: [
        {
            tagName: 'div',
            data: 2,
            children: [
                {
                    tagName: 'span',
                    data: 3,
                },
                {
                    tagName: 'span',
                    data: 5,
                },
                {
                    tagName: 'span',
                    data: 4,
                },
            ]
        }
    ]
}
export default {
    data() {
        return {
            treeData: {},
        };
    },
    mounted(){
        this.diff();
    },
    methods: {
        toJsObject(node) {

        },
        dfsWalk(node) {
            if(node.childNodes) {
                this.dfsWalk(node)
            }
        },
        diff() {
            for(let prop in newTreeList) {
                
            }
            
        },
        sameNode(first,second){
            return first.isEqualNode(second);
        }
    }
}
</script>
<style scoped>
div{
    text-indent: 1rem;
}
</style>
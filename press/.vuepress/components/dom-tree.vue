<template>
    <div>
        <div>
            NEW tree
            <div id="newTree">
                1
                <div>
                    2<br/>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                </div>
            </div>
        </div>
        <div>
            OLD tree
            <div id="oldTree"> 
                1
                <div>2<br/>
                        <span>4</span>
                        <span>5</span>
                        <span>3</span>
                        <span>6</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        this.diff();
    },
    methods: {
        diff() {
            const newTree = document.getElementById('newTree');
            const oldTree = document.getElementById('oldTree');
            console.log(newTree.childNodes,oldTree);
            console.log(this.sameNode(newTree,oldTree));
        },
        sameNode(first,second){
            return first.isSameNode(second);
        }
    }
}
</script>
<style scoped>
div{
    text-indent: 1rem;
}
</style>
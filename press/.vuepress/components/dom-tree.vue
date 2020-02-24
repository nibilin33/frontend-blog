<template>
    <div>
        <div>
            NEW tree
            <div id="newTree">
                1
                <div>
                    2
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
                <div>2
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
            console.log(newTree.children,oldTree);
        }
    }
}
</script>
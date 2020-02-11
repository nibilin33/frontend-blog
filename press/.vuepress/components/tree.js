class Node {
    id = null;
    name = null;
    parentId = null;
    children = [];
    level = 0;
    constructor(data) {
        this.update(data);
    }
    update(data) {
        this.name = data.name;
        this.id = data.id;
        this.parentId = data.parentId;
    }
}

export class Tree {
    root = [];
    lookup = {};
    rows = [];
    constructor(data) {
        for(let i=0;i<data.length;i++) {
            let _item = data[i];
            let id = _item.id;
            let parentId = _item.parentId;
            let item = new Node(data[i]);
            if(this.lookup[id]) {
                this.lookup[id].update(data[i]);
            }else {
              this.lookup[id] = item;
            }
            if(!parentId) {
                this.root.push(this.lookup[id]);
            }else{
                if(this.lookup[parentId]) {
                    this.lookup[parentId].children.push(this.lookup[id]);
                }else{
                    this.lookup[parentId] = new Node({});
                }
            }
        }
    }
    flatternChildren(parent,nodes) {
        if(!nodes.length) {
            return;
        }
        nodes.forEach((item)=>{
            item.level = parent.level + item.level + 1;
            this.rows.push(item);
            this.flatternChildren(item,item.children);
        })
    }
    flattern() {
        for( let i=0; i< this.root.length;i++) {
            let node = this.root[i];
            this.rows.push(node);
            this.flatternChildren(node,node.children);
        }
        return this.rows;
    }
}
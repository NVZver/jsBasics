const tree = {
    value: 3,
    children: [{
            value: 1,
            children: []
        }, {
            value: 2,
            children: [{
                value: 1,
            }, {
                value: 4,
                children: [{
                    value: 1,
                    children: []
                }]
            }]
        }, {
            value: 3,
            children: [{
                value: 1
            }]
        }
    ]
};

// result = 16

function sumTree(tree) {
    let sum = 0;
    sum += tree.value;
    if (tree.children) {
        tree.children.forEach(child => {
            sum += sumTree(child);
        });
    }
    return sum;

    // return tree.children ? tree.children.reduce((child) => tree.value + sumTree(child)) : tree.value;
}

function sumTrue(tree) {
    return tree.children ? tree.children.reduce((summ, child)=> summ + sumTrue(child), tree.value) : tree.value;
}

//console.log(sumTree(tree));
console.log(sumTrue(tree));

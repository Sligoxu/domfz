window.dom = {
    // create(string) {
    //     const container = document.createElement('template')
    //     container.innerHTML = string.trim()
    //     console.log(container)
    //     return container.content.firstChild
    // },
    // after(node, node2) {
    //     node.parentNode.insertBefore(node2, node.nextSibling)
    //     //node2插入到node的下一个节点的前面===node2放到node的后面
    // },
    // before(node, node2) {
    //     node.parentNode.insertBefore(node2, node)
    // },
    // append(parent, node) {
    //     parent.appendChild(node)
    // },
    // wrap(node, parent) {
    //     dom.before(node, parent)
    //     dom.append(parent, node)
    // },
    // remove(node) {
    //     node.parentNode.removeChild(node)
    //     return node
    // },
    // empty(node) {
    //     const { childNodes } = node
    //     //const {childNodes} = node.childNodes的简写
    //     const array = []
    //     let x = node.firstChild
    //     while (x) {
    //         array.push(dom.remove(node.firstChild))
    //         x = node.firstChild
    //     }
    //     return array
    // },
    // attr(node, name, value) {
    //     if (arguments.length === 3) {//重载
    //         node.setAttribute(name, value)
    //     } else if (arguments.length === 2) {
    //         return node.getAttribute(name)
    //     }
    // },
    // text(node, string) {//适配
    //     if (arguments.length === 2) {
    //         if ('innerText' in node) {
    //             node.innerText = string
    //         } else {
    //             node.textContent = string
    //         }
    //     } else if (arguments.length === 1) {
    //         if ('innerText' in node) {
    //             return node.innerText
    //         } else {
    //             return node.textContent
    //         }
    //     }
    // },
    // html(node, string) {
    //     if (arguments.length === 2) {
    //         node.innerHTML = string
    //     } else if (arguments.length === 1) {
    //         return node.innerHTML
    //     }
    // },
    style(node, name, value) {
        if (arguments.length === 3) {
            //dom.style(test,'color','red')
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {//类型判定
                //dom.style(test,'name')
                return node.style[name]
            } else if (name instanceof Object) {//类型判定
                //dom.style(test,{...})
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },
    // class:{
    //     add(node,className){
    //         node.classList.add(className)
    //     },
    //     remove(node,className){
    //         node.classList.remove(className)
    //     },
    //     has(node,className){
    //         return node.classList.contains(className)
    //     }
    // },
    // on(node,eventName,fn){
    //     node.addEventListener(eventName,fn)
    // },
    // off(node,eventName,fn){
    //     node.removeEventListener(eventName,fn)
    // },
    find(selector,scope){
        return (scope || document).querySelectorAll(selector)
    },
    // parent(node){
    //     return node.parentNOde
    // },
    children(node){
        return node.children
    },
    // siblings(node){
    //     Array.from(node.parentNode.children).filter(n=>n!==node)
    // },
    // next(node){
    //     let x = node.nextSibling
    //     while(x && x.nodeType ===3){
    //         x = x.nextSibling
    //     }
    //     return x
    // },
    // previous(node){
    //     let x = node.perviousSibling
    //     while(x && x.nodeType ===3){
    //         x = x.perviousSibling
    //     }
    //     return x
    // },
    each(nodeList,fn){
        for(let i =0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    },
    // index(node){
    //     const list = dom.children(node.parentNode)
    //     let i
    //     for(i = 0;i<list.length;i++){
    //         if(list[i]===node){
    //             break
    //         }
    //     }
    //     return i
    // }
}
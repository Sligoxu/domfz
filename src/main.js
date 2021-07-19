// const div = dom.create('<div>newDiv</div>')
// console.log(div)

// dom.after(test,div)

// const div3 = dom.create('<div id = "parent"></div>')
// dom.wrap(test,div3)

// const nodes = dom.empty(window.empty)
// console.log (nodes)

// dom.attr(test,'title','I am sligo')
// const title = dom.attr(test,'title')
// console.log(`title:${title}`)

// dom.text(test,'这是新的内容')
// dom.text(test)

dom.style(test,{border:'1px solid red',color:'blue'})
console.log(dom.style(test,'border'))
dom.style(test,'border','1px solid black')

// dom.class.add(test,'red')
// dom.class.remove(test,'red')
// console.log(dom.class.has(test,'blue'))

// const fn = ()=>{
//     console.log('点击了')
// }
// dom.on(test,'click',fn)
// dom.off(test,'click',fn)

const testDiv = dom.find('#test')[0]
console.log(testDiv)

// console.log(dom.parent(test))

const t = dom.find('#travel')[0]
dom.each(dom.children(t),(n)=>dom.style(n,'color','red'))
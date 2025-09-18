const arr = [1,2,3,,5]

for (const itr of arr)
{
    // console.log(itr)
}

const map = new Map()
map.set('pr','joshi')
map.set('qr','oshi')
map.set('sr','jshi')
map.set('tr','johi')

// console.log(map)

for (const [itr,itr2] of map)
{
//  ÷   console.log(itr , itr2)
}



// const myarr = ['praj','johi','sef','seg','rsdg']
// myarr.forEach( (val) => { 
//     console.log(val)
// })


const myCoding = [
    {
        languageName :"javascript",
        languageFileName : "js"
    },
    {
        languageName :"java",
        languageFileName : "jv"
    },
    {
        languageName :"c++",
        languageFileName : "cpp"
    }

]


myCoding.forEach( (it,idx,arr)=>{

    
})


// console.log(store);





const coding = [ 1,2,3,4,5,6,7,8,9]
const val= []
 coding.forEach((item)=>{
   val.push(item)

})


// const val = coding.filter((item)=>
//     {
//         return item > 5

//     })

console.log("val is ", val)

const books = [
    {title : 'Book 1' , genre : 'History' , publish : 2009, edition: 2010},
    {title : 'Book 2' , genre : 'chemistry' , publish : 2007, edition: 2011},
    {title : 'Book 3' , genre : 'History' , publish : 2006, edition: 2012},
    {title : 'Book 4' , genre : 'physics' , publish : 2005, edition: 2013},
    {title : 'Book 5' , genre : 'History' , publish : 2004, edition: 2014},
    {title : 'Book 6' , genre : 'maths' , publish : 2003, edition: 2015}
]

const userBooks = books.filter((bk) => {
    return (bk.genre==='History')
}
)
console.log("userBooks is",userBooks)
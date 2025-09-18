// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async task completed successfully")
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log("Promise Consumed")
// })
// =================Passing Data to resolve==========================

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username:"Prajjwal",email:"test@pj.com"})
//     },1000)
// }).then((data)=>{
//     console.log(data)
// })
// =================Rejection ==========================

// const promise4 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error= true;
//         if(!error)
//         {
//             resolve({username:"Prajjal",email:"pj@jp"})
//         }
//         else
//         {
//             reject('Error:Something Went Wrong')
//         }
//     },1000)
// }).then((data)=>{
//     console.log("data is",data);
//     return data.username
// }).then((data2)=>{
//     console.log("data2",data2);

// }).catch((error)=>{
//     console.log(error)

// }).finally(()=>{
//     console.log("Promise is resolved")
// })


//========== Async/await============

// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//                 let error= false;
//                 if(!error)
//                 {
//                     resolve({username:"Prajjal",email:"pj@jp"})
//                 }
//                 else
//                 {
//                     reject('Error:Something Went Wrong')
//                 }
//             },1000)
// });

// async function consumePromiseFive(){
//     const response = await promise
//     console.log("Async await is called")
// }
// consumePromiseFive()
// =========================async call with fetch=======================
// async function getAllUsers(){
//     try{
//   const response = await fetch('https://jsonplaceholder.typicode.com/users#')
//   const data = await response.json()
//   console.log(data)
//     }
//     catch(error){
//         console.log(error)
//     }

// }
// getAllUsers()

const value = fetch('https://jsonplaceholder.typicode.com/users#').then((data)=>{

    console.log("YES i am there",data)
    return data.json()
}).then((data)=>{
    console.log("dta is ",data)
}).catch((error)=>{
    console.log("I am the error")
})

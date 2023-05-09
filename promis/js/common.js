// const promis1 = new Promise((resolve, reject) => {
//   const data = true;

//   if (data) {
//     resolve('success')
//   } else {
//     reject('error')
//   }
// })

// promis1
// .then(data => {console.log(data)})
// .catch(error => {console.log(error)})
// .finally(() => {console.log('finally')})

function myPromis() {
  return new Promise((resolve, reject) => {
    const data = true;

    if (data) {
      resolve('success')
    } else {
      reject('error')
    }
  })

}

myPromis()
  .then(data =>  console.log(data) )
  .catch(error =>  console.log(error) )
  .finally(() =>  console.log('finally') )
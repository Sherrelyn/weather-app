//setTimeout (() => {
    console.log('Two seconds are up!')
//}, 2000)

//const names = ['Shee', 'Sheweren', 'Sheeshee']
//const shortNames = names.filter(() => {
 //   return name.length <= 4
//})

//const geocode = (address, callback) => {
  // setTimeout (() => {
    //const data = {
      //  latitude: 0,
        //longitude: 0
    //}

    //callback(data)
   //}, 2000)
//}

//const data = geocode('Philadelphia', (data) => {
  //  console.log(data)
//})

const add = (a, b, callback) => {
    setTimeout (() => {
        callback (a + b )
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})
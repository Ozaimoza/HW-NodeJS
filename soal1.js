var dimention = require('./dimensi')

// Persegi
let S = 15

// Persegi Panjang
let L = 15
let W = 8

// Luas dan Keling Persegi
console.log(`Luas Persegi Adalah ${dimention.A_square(S)}`)
console.log(`Keliling Persegi Adalah ${dimention.P_square(S)} \n`)

// Luas dan Keliling Persegi Panjang
console.log(`Luas Persegi Panjang Adalah ${dimention.A_rectangle(L, W)}`)
console.log(`Keliling Persegi Panjang Adalah ${dimention.P_rectangle(L, W)} `)
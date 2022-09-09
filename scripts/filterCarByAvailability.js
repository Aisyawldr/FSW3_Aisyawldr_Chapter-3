function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  //Menampilkan hasil output sebelum di filter
  console.log("Sebelum FilterCarByAvailability :");  
  console.table(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  // Membuat sebuah variabel panjang untuk menentukan panjang array
  const long = cars.length;

  for (i = 0; i < long; i++){
    if(cars[i].available === true){
      result.push(cars[i]);
      console.log("Cars ke-" + i + " Available, PUSH");
    }
    else{
      console.log("Cars ke-"+ i + " Unavailable, SKIP")
    }
  }

  //Penjelasan code
  /*
  Membuat perulangan dengan ketentuan i=0, maka perulanhan dimulai dari 0
  i < long : berarti i kecil dari variabel long yang mana variabel long untuk menentukan banyak array
  Pada kondisi if, jika variabel cars itu bernilai Available, maka akan memanggil atau mengeluarkan ouput result dengan nilai Available, PUSH.
  Jika kondisinya else / salah maka akan keluar output Unavailable, SKIP
  */

  //Menampilkan hasil output setelah di filter
  console.log("Sesudah FilterCarByAvailability :");  
  console.table(result);
  
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
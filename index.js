function tampilNama(nama, durasi) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (nama === "") {
        reject("Nama tidak boleh kosong!");
      } else {
        resolve(nama);
      }
    }, durasi);
  });
}

tampilNama("John", 1500)
  .then((nama) => {
    console.log(nama);
    return tampilNama("Ed", 2000);
  })
  .then((nama) => {
    console.log(nama);
    return tampilNama("Jane", 500);
  })
  .then((nama) => {
    console.log(nama);
  })
  .catch((pesan) => {
    console.log("Error:", pesan);
  });

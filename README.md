```javascript
tampilNama("John", 1500)
```
> - menjalankan fungsi tampilNama yang diberi delay 1,5 detik
> - jika nama tidak kosong maka promise berhasil dan membawa nama return
``` javascript
  .then((nama) => {
    console.log(nama);
    return tampilNama("Ed", 2000);
  })
```
> - then pertama menerima promise sebelumnya yang membawa nama jhon
> - console.log menmpilkan nama jhon 
> - return tampilNama("ed", 2000); mengirim nama ed untuk diproses di .then kedua

```javascript
  .then((nama) => {
    console.log(nama);
    return tampilNama("Jane", 500);
  })
```
> - then kedua ini menerima nama ed dengan delay 2 detik
> - setelah berhasil nama ed di tampilkan ke console.log
> - mengirm nama jane untuk diproses di then ketiga 

```javascript
  .then((nama) => {
    console.log(nama);
  })
  ```
> - then ketiga menerima nama jane yg diproses selama 0,5 detik
> - promise menampilkan nama jane ke console

```javascript
  .catch((pesan) => {
    console.log("Error:", pesan);
  });
  ```
> jika error atau nama nya kosong maka akan menampilkan pesan error yg sudah di buat di dalam function promise

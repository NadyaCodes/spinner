const spinnerArray = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ']

let time = 100;
for (let i = 0; i < spinnerArray.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinnerArray[i]);
  }, time);
  time += 200;
}

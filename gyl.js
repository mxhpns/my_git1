let i = 1000;

while i > 0{
  setTimeout(() => {
    console.log(i + " - 7");
  }, 100);
  i -= 7;
}

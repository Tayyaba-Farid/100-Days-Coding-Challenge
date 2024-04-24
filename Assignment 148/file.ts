function handleErrors(
  callback: (error: Error | null, data?: string) => void
): void {
  let error = new Error("There is some error found");
  let data = "There is some data found";

  if ((Math.random() > 0.5)) {
    callback(error);
  } else {
    callback(null, data);
  }
}

handleErrors((error, data) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(data);
  }
});

function DetailsValidation(Id, errorId) {
  let Name = document.querySelector(Id).value;

  if (Name === "") {
    let errorSpan = document.querySelector(errorId);
    errorSpan.style.display = "block";
    setTimeout(() => {
      errorSpan.style.display = "none";
    }, 2000);
    return "No Name";
  }
  return Name;
}
export default DetailsValidation;

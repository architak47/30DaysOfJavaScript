let score = 85; 

switch (true) {
  case (score >= 90):
    console.log("A");
    break;
  case (score >= 80):
    console.log("B");
    break;
  case (score >= 70):
    console.log("C");
    break;
  case (score >= 60):
    console.log("D");
    break;
  case (score >= 60):
    console.log("E");
    break;
  case (score < 50):
    console.log("F");
    break;
  default:
    console.log("Invalid score");
}

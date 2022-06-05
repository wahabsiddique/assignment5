//  Chapter 17-20

// QUESTION-01

var names = [[],[],[]];

// QUESTION-02

var arr = [];
arr.push([0,1,2,3]);
arr.push([1,0,1,2]);
arr.push([2,1,0,1]);
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++)    {
        document.write(arr[i][j] + " ");
    }
    document.write("<br>");
} 

// QUESTION-03

for(i=1;i<=10;i++){
    document.write(i);
    document.write("<br>");
}

// QUESTION-04

var num = +prompt("Enter A Number To Show Its Multiplication Table: ");
var len = +prompt("Enter The Length Of Table: ")

for(i=1;i<=len;i++){
    document.write(num+" x "+i+" = "+(num*i));
    document.write("<br>")
}

// QUESTION-05

var arr = ["apple", "banana", "mango","orange","strawberry"];

for( i = 0; i < arr.length; i++){
    document.write(arr[i]);
    document.write("<br>")

  }
document.write("---------------------------- <br>")
for(i = 0;i < arr.length; i++ ){
    document.write("Index of "+arr[i]+" is "+i);
    document.write("<br>")

}  

// QUESTION-06
document.write("<h3>Counting: </h3>")
for(i=1;i<=15;i++){
    document.write(i," ");
    // document.write("<br>")
}


document.write("<br>")
document.write("<h3>Reverse: </h3>")
for (i = 10; i > 0; i--){
    document.write(i," ");
  }


document.write("<br>")
document.write("<h3>Even: </h3>")   
for(let i=0;i<=20;i+=2){
    document.write(i," ");
}


document.write("<br>")
document.write("<h3>Odd: </h3>")   
for(i=1;i<=20;i+=2){
    document.write(i," ")
}

// QUESTION-07

var deserts = prompt("What do you want to any desert: ");

var a = ["cake","apple pie","pineapple pastry","fundge cake","chips","patties"];
for(i=0;i<=a.length;i++){
    if(deserts==a[i]){
        alert(deserts+" is available at index "+i);
        break
    }



    else{
        alert("Sorry! Not in Menu");
    }
}

// QUESTION-08

var a = [24,53,78,91,12];
b = 24
for(i=0;i<=a.length;i++){
    if (a[i]>b){
        b = a[i];
    }
}
document.write(b+" is the largest number");

// QUESTION-09

var a = [24,53,78,91,12];

b = 24
for(i=0;i<=a.length;i++){
    if (a[i]<b){
        b = a[i];
    }
}
document.write(b+" is the smallest number");

// QUESTION-10

for(i=1;i<=20;i++){
    document.write(5*i,",")
}
// Triangle
let firstAngle = document.getElementById("a1") 
let SecondAngle = document.getElementById("a2") 
let thirdAngle = document.getElementById("a3") 
let triangle = document.getElementById("tri")
let dispaly = document.getElementById('angle')

triangle.addEventListener('click',()=>{
    let sum = Number(firstAngle.value) + Number(SecondAngle.value) + Number(thirdAngle.value)

    if(Number(firstAngle.value)<0 ||Number(SecondAngle.value)<0 ||Number(thirdAngle.value)<0){
        dispaly.textContent = 'Invalid Input'
    }
    else if (sum != 180){
    dispaly.textContent = 'Not a Valid Triangle'
    }
    else{
        if (SecondAngle.value == 90){
            dispaly.textContent = "This Triangle is Right Angle Triangle"
        }else{
            dispaly.textContent = "This is a valid triangle "
        }
    }
})


// Hypotenuse
let sideOne = document.getElementById('a')
let sideTwo = document.getElementById('b')
let hypo = document.getElementById('hypo')
let dispaly2 = document.getElementById('output')

hypo.addEventListener("click",()=>{
    if(Number(sideTwo.value)<0 ||Number(sideOne.value)<0){
        dispaly2.textContent ='Invalid Input'
    }
    else{
    let ans = Math.sqrt(Number(sideTwo.value)**2+Number(sideOne.value)**2);
    dispaly2.textContent =`Hypotenuse of Triangle is ${ans}`}
})

// Area
let base = document.getElementById('base');
let height = document.getElementById('height')
let area = document.getElementById('area')
let ans= document.getElementById('ans')
area.addEventListener("click",()=>{
    if( (Number(base.value)<0||Number(height.value) <0) ){
        ans.textContent ='Invalid Input'
    }else{
    let res =0.5*(Number(base.value)*Number(height.value))
    ans.textContent =`Area of a triangle is ${res}`
}
})
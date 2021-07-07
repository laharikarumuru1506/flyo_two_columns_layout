const inputBtn=document.getElementById("input-btn");
const labelText=document.getElementById("label-text");
const submitBtn=document.getElementById("btn");

const inputBtnFree=document.getElementById("input-btn-free");
const labelTextFree=document.getElementById("label-text-free");
const submitBtnFree=document.getElementById("submit-btn-free");

let regx=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z{2,8}]).([a-z{2,8}])?$/;

submitBtn.addEventListener("click",function(){
  validate();
});

submitBtnFree.addEventListener("click",function(){
  console.log("clicked");
  validateFree();
});

function validate(){
  console.log("entered");
if(!regx.test(inputBtn.value)){
  inputBtn.style.borderColor="indianred";
  labelText.style.visibility="visible";
}
}

function validateFree(){
if(!regx.test(inputBtnFree.value)){
  inputBtnFree.style.borderColor="indianred";
  labelTextFree.style.visibility="visible";
}
}
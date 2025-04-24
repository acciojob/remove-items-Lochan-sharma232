//your JS code here. If required

let color=document.getElementById("colorSelect");
let  btn1=document.querySelector("input");
btn1.addEventListener("click",()=>{
	if(color.selectedIndex!=-1){
		color.remove(color.selectedIndex)
	}
})
	
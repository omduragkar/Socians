var addpostbtn = document.getElementById("addpostbtn");
var closepostbtn = document.getElementById("closepostbtn");
console.log("hello");
var sectionpostcreate = document.getElementById("sectionpostcreate");
addpostbtn.addEventListener('click', function()
{
    // var sectionpostcreate = document.getElementById("sectionpostcreate");
    sectionpostcreate.style.display= "block";
    closepostbtn.style.display="inline-block"
    addpostbtn.style.display="none";
})
closepostbtn.addEventListener('click', function()
{
    sectionpostcreate.style.display= "none";
    closepostbtn.style.display="none";
    addpostbtn.style.display="inline-block";
});
var opencomments =document.getElementsByClassName("opencomments");
for(let i=0;i<opencomments.length;i++)
{
    opencomments[i].addEventListener('click',function()
    {
        document.getElementsByClassName("commentsection")[i].style.display="block";
        document.getElementsByClassName("cancelcommentbtn")[i].style.display="inline-block";
        opencomments[i].style.display="none";
    })
}
var closecomments =document.getElementsByClassName("cancelcommentbtn");
for(let i=0;i<closecomments.length;i++)
{
    closecomments[i].addEventListener('click',function()
    {
        document.getElementsByClassName("cancelcommentbtn")[i].style.display="none";
        document.getElementsByClassName("commentsection")[i].style.display="none";
        opencomments[i].style.display="none";
        opencomments[i].style.display="inline-block";
    })
}
$(document).ready(function(){
 $("#parentNext").click(() => {
   document.getElementById("mainpage").scrollIntoView();
   $("#appId").removeClass("stepper-active");
   $("#parentId").addClass("stepper-active ");

//    $(".mainstepper").attr("style", "height: 2060px");

   // $("#motherDiv").addClass(" slide-in-right animation fast");

   // $("#childDiv").addClass(" slide-out-left animation fast");
   $("#parentDiv").attr("style", "display:block");

   $("#appDiv").attr("style", "display:none");
   $("#appId").addClass("stepper-completed");

//    console.log("something is happening")
 });

 $("#prevApp").click(() => {
   document.getElementById("mainpage").scrollIntoView();
   $("#parentId").removeClass("stepper-active");
   $("#appId").addClass("stepper-active ");

   //    $(".heightstepper").attr("style", "height: 2010px");

   // $("#motherDiv").addClass(" slide-in-right animation fast");

   // $("#childDiv").addClass(" slide-out-left animation fast");
   $("#appDiv").attr("style", "display:block");

   $("#parentDiv").attr("style", "display:none");
   $("#appId").addClass("stepper-completed");

   //    console.log("something is happening")
 });

 $("#infoNext").click(() => {
   document.getElementById("mainpage").scrollIntoView();
   $("#parentId").removeClass("stepper-active");
   $("#infoId").addClass("stepper-active ");

   //    $(".heightstepper").attr("style", "height: 2010px");

   // $("#motherDiv").addClass(" slide-in-right animation fast");

   // $("#childDiv").addClass(" slide-out-left animation fast");
   $("#infoDiv").attr("style", "display:block");

   $("#parentDiv").attr("style", "display:none");
   $("#parentId").addClass("stepper-completed");

   //    console.log("something is happening")
 });

 $("#infodecNext").click(() => {
   document.getElementById("mainpage").scrollIntoView();
   $("#infoId").removeClass("stepper-active");
   $("#infodecId").addClass("stepper-active ");

   //    $(".heightstepper").attr("style", "height: 2010px");

   // $("#motherDiv").addClass(" slide-in-right animation fast");

   // $("#childDiv").addClass(" slide-out-left animation fast");
   $("#infodecDiv").attr("style", "display:block");

   $("#infoDiv").attr("style", "display:none");
   $("#infoId").addClass("stepper-completed");

   //    console.log("something is happening")
 });

 $("#prevParent").click(() => {
   document.getElementById("mainpage").scrollIntoView();
   $("#infoId").removeClass("stepper-active");
   $("#parentId").addClass("stepper-active ");

   //    $(".heightstepper").attr("style", "height: 2010px");

   // $("#motherDiv").addClass(" slide-in-right animation fast");

   // $("#childDiv").addClass(" slide-out-left animation fast");
   $("#parentDiv").attr("style", "display:block");

   $("#infoDiv").attr("style", "display:none");
//    $("#parentId").addClass("stepper-completed");

   //    console.log("something is happening")
 });

 $("#prevInfo").click(() => {
   document.getElementById("mainpage").scrollIntoView();
   $("#infodecId").removeClass("stepper-active");
   $("#infoId").addClass("stepper-active ");

   //    $(".heightstepper").attr("style", "height: 2010px");

   // $("#motherDiv").addClass(" slide-in-right animation fast");

   // $("#childDiv").addClass(" slide-out-left animation fast");
   $("#infoDiv").attr("style", "display:block");

   $("#infodecDiv").attr("style", "display:none");
//    $("#parentId").addClass("stepper-completed");

   //    console.log("something is happening")
 });
   
})
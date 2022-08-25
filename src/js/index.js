$(document).ready(function () {
  $("#parentNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#appId").removeClass("stepper-active");
    $("#parentId").addClass("stepper-active ");
    //    $(".mainstepper").attr("style", "height: 2060px");
    $("#appDiv").attr("style", "display:none");
    $("#parentDiv").attr("style", "display:block");
    $("#appId").addClass("stepper-completed");
    // $(".mainstepper").attr("style", "height: ");
  });

  $("#prevApp").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#parentId").removeClass("stepper-active");
    $("#appId").addClass("stepper-active ");

    $("#parentDiv").attr("style", "display:none");
    $("#appDiv").attr("style", "display:block");
    $("#appId").addClass("stepper-completed");
  });

  $("#infoNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#parentId").removeClass("stepper-active");
    $("#infoId").addClass("stepper-active ");

    $("#parentDiv").attr("style", "display:none");
    $("#infoDiv").attr("style", "display:block");
    $("#parentId").addClass("stepper-completed");
  });

  $("#infodecNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#infoId").removeClass("stepper-active");
    $("#infodecId").addClass("stepper-active ");

    $("#infoDiv").attr("style", "display:none");
    $("#infodecDiv").attr("style", "display:block");
    $("#infoId").addClass("stepper-completed");
  });

  $("#prevParent").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#infoId").removeClass("stepper-active");
    $("#parentId").addClass("stepper-active ");

    $("#infoDiv").attr("style", "display:none");
    $("#parentDiv").attr("style", "display:block");
  });

  $("#prevInfo").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#infodecId").removeClass("stepper-active");
    $("#infoId").addClass("stepper-active ");

    $("#infodecDiv").attr("style", "display:none");
    $("#infoDiv").attr("style", "display:block");
  });

  $("#prevInfodec").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#sumId").removeClass("stepper-active");
    $("#infoId").addClass("stepper-active ");

    $("#sumDiv").attr("style", "display:none");
    $("#infoDiv").attr("style", "display:block");
  });

  $("#sumNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#infoId").removeClass("stepper-active");
    $("#sumId").addClass("stepper-active ");
    
    $("#infoDiv").attr("style", "display:none");
    $("#sumDiv").attr("style", "display:block");
    $("#infoId").addClass("stepper-completed");
    $(".mainstepper").attr("style", "height: 5060px");

  });

  
});

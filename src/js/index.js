$(document).ready(function () {
  $("#parentNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#appId").removeClass("stepper-active");
    $("#parentId").addClass("stepper-active ");
    //    $(".mainstepper").attr("style", "height: 2060px");
    $("#parentDiv").attr("style", "display:block");
    $("#appDiv").attr("style", "display:none");
    $("#appId").addClass("stepper-completed");
    // $(".mainstepper").attr("style", "height: ");
  });

  $("#prevApp").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#parentId").removeClass("stepper-active");
    $("#appId").addClass("stepper-active ");

    $("#appDiv").attr("style", "display:block");
    $("#parentDiv").attr("style", "display:none");
    $("#appId").addClass("stepper-completed");
  });

  $("#infoNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#parentId").removeClass("stepper-active");
    $("#infoId").addClass("stepper-active ");

    $("#infoDiv").attr("style", "display:block");
    $("#parentDiv").attr("style", "display:none");
    $("#parentId").addClass("stepper-completed");
  });

  $("#infodecNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#infoId").removeClass("stepper-active");
    $("#infodecId").addClass("stepper-active ");

    $("#infodecDiv").attr("style", "display:block");
    $("#infoDiv").attr("style", "display:none");
    $("#infoId").addClass("stepper-completed");
  });

  $("#prevParent").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#infoId").removeClass("stepper-active");
    $("#parentId").addClass("stepper-active ");

    $("#parentDiv").attr("style", "display:block");
    $("#infoDiv").attr("style", "display:none");
  });

  $("#prevInfo").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#infodecId").removeClass("stepper-active");
    $("#infoId").addClass("stepper-active ");

    $("#infoDiv").attr("style", "display:block");
    $("#infodecDiv").attr("style", "display:none");
  });

  $("#prevInfodec").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#sumId").removeClass("stepper-active");
    $("#infodecId").addClass("stepper-active ");

    $("#infodecDiv").attr("style", "display:block");
    $("#sumDiv").attr("style", "display:none");
  });

  $("#sumNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#infodecId").removeClass("stepper-active");
    $("#sumId").addClass("stepper-active ");
    $("#sumDiv").attr("style", "display:block");

    $("#infodecDiv").attr("style", "display:none");
    $("#infodecId").addClass("stepper-completed");
    $(".mainstepper").attr("style", "height: 5060px");

  });

  
});

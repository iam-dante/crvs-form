function next(rmId, adId, shDv, hiDv) {
  document.getElementById("mainpage").scrollIntoView();
  $(rmId).removeClass("stepper-active");
  $(adId).addClass("stepper-active ");

  $(shDv).attr("style", "display:block");
  $(hiDv).attr("style", "display:hide");
  $(rmId).addClass("stepper-completed");
}

function prev(rmId, adId, shDv, hiDv) {
  document.getElementById("mainpage").scrollIntoView();
  $(rmId).removeClass("stepper-active");
  $(adId).addClass("stepper-active ");

  $(shDv).attr("style", "display:block");
  $(hiDv).attr("style", "display:hide");
  $(rmId).addClass("stepper-completed");
}

$(document).ready(function () {
  // Birth stepper controlers
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

    $("#sumDiv").attr("style", "display:block");
    $("#infoDiv").attr("style", "display:none");
    $("#infoId").addClass("stepper-completed");
    // $(".mainstepper").attr("style", "height: 5060px");
  });

  // Death stepper controlers
  $("#infor-deathNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#deceasedId").removeClass("stepper-active");
    $("#info-desId").addClass("stepper-active ");

    $("#info-desDiv").attr("style", "display:block");
    $("#deceasedDiv").attr("style", "display:none");
    $("#deceasedId").addClass("stepper-completed");
  });

  $("#prevDeceased").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#info-desId").removeClass("stepper-active");
    $("#deceasedId").addClass("stepper-active ");

    $("#deceasedDiv").attr("style", "display:block");
    $("#info-desDiv").attr("style", "display:none");
    // $("#deceasedIdId").addClass("stepper-completed");
  });

  $("#sum-deathNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#info-desId").removeClass("stepper-active");
    $("#sum-deathId").addClass("stepper-active ");

    $("#sum-deathDiv").attr("style", "display:block");
    $("#info-desDiv").attr("style", "display:none");
    $("#info-desId").addClass("stepper-completed");
  });

  $("#prevInfoDeath").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#sum-deathId ").removeClass("stepper-active");
    $("#info-desId").addClass("stepper-active ");

    $("#info-desDiv").attr("style", "display:block");
    $("#sum-deathDiv ").attr("style", "display:none");
    $("#info-desId").addClass("stepper-completed");
  });

  $("#inforUpNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#appId").removeClass("stepper-active");
    $("#infoId").addClass("stepper-active ");
    //    $(".mainstepper").attr("style", "height: 2060px");
    $("#infoDiv").attr("style", "display:block");
    $("#appDiv").attr("style", "display:none");
    $("#appId").addClass("stepper-completed");
    // $(".mainstepper").attr("style", "height: ");
  });

  $("#prevUpParent").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    $("#infoId").removeClass("stepper-active");
    $("#appId").addClass("stepper-active ");
    //  $(".mainstepper").attr("style", "height: 2060px");
    $("#appDiv").attr("style", "display:block");
    $("#infoDiv").attr("style", "display:none");
    $("#appId").addClass("stepper-completed");
    // $(".mainstepper").attr("style", "height: ");
  });

  //Marriage
  $("#brideNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#brideId").addClass("stepper-active");
    $("#groomId").removeClass("stepper-active");

    // $(".heightstepper").attr("style", "height: 1100px");

    $("#brideDiv").attr("style", "display: block");
    $("#groomDiv").attr("style", "display: none");
    $("#groomId").addClass("stepper-completed");
  });

  $("#prevGroom").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#groomId").addClass("stepper-active");
    $("#brideId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1600px");

    $("#groomDiv").attr("style", "display: block");
    $("#brideDiv ").attr("style", "display: none");
  });

  $("#prevBride").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#brideId").addClass("stepper-active");
    $("#witId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1600px");

    $("#brideDiv").attr("style", "display: block");
    $("#witDiv ").attr("style", "display: none");
  });

  $("#witNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#witId").addClass("stepper-active");
    $("#brideId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 400px");

    $("#witDiv").attr("style", "display: block");
    $("#brideDiv").attr("style", "display: none");
    $("#brideId").addClass("stepper-completed");
  });

  $("#marrSumNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#marrSumId").addClass("stepper-active");
    $("#witId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 400px");

    $("#marrSumDiv").attr("style", "display: block");
    $("#witDiv").attr("style", "display: none");
    $("#witId").addClass("stepper-completed");
  });

  $("#prevWit").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#witId").addClass("stepper-active");
    $("#marrSumId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1600px");

    $("#witDiv").attr("style", "display: block");
    $("#marrSumDiv ").attr("style", "display: none");
  });

  $("#attmarrNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#attmarrId").addClass("stepper-active");
    $("#witId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 400px");

    $("#attmarrDiv").attr("style", "display: block");
    $("#witDiv").attr("style", "display: none");
    $("#witId").addClass("stepper-completed");
  });

  //Adoption
  $("#adoFatherNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#adoFatherId").addClass("stepper-active");
    $("#childId").removeClass("stepper-active");

    // $(".heightstepper").attr("style", "height: 1100px");

    $("#adoFatherDiv").attr("style", "display: block");
    $("#childDiv").attr("style", "display: none");
    $("#childId").addClass("stepper-completed");
  });

  $("#prevadoChild").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#childId").addClass("stepper-active");
    $("#adoFatherId").removeClass("stepper-active");

    // $(".heightstepper").attr("style", "height: 1100px");

    $("#childDiv").attr("style", "display: block");
    $("#adoFatherDiv").attr("style", "display: none");
    $("#adoFatherId").addClass("stepper-completed");
  });

  $("#adoMotherNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#adoMotherId").addClass("stepper-active");
    $("#adoFatherId").removeClass("stepper-active");

    // $(".heightstepper").attr("style", "height: 1100px");

    $("#adoMotherDiv").attr("style", "display: block");
    $("#adoFatherDiv").attr("style", "display: none");
    $("#adoFatherId").addClass("stepper-completed");
  });

  $("#prevadoFather").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#adoFatherId ").addClass("stepper-active");
    $("#adoMotherId").removeClass("stepper-active");

    // $(".heightstepper").attr("style", "height: 1100px");

    $("#adoFatherDiv").attr("style", "display: block");
    $("#adoMotherDiv").attr("style", "display: none");
    $("#adoMotherId").addClass("stepper-completed");
  });

  $("#adoSumNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#adoSumId ").addClass("stepper-active");
    $("#adoMotherId").removeClass("stepper-active");

    // $(".heightstepper").attr("style", "height: 1100px");

    $("#adoSumDiv").attr("style", "display: block");
    $("#adoMotherDiv").attr("style", "display: none");
    $("#adoMotherId").addClass("stepper-completed");
  });

  $("#prevadoMother").click(() => {
    document.getElementById("mainpage").scrollIntoView();

    $("#adoMotherId").addClass("stepper-active");
    $("#adoSumId").removeClass("stepper-active");

    // $(".heightstepper").attr("style", "height: 1100px");

    $("#adoMotherDiv").attr("style", "display: block");
    $("#adoSumDiv").attr("style", "display: none");
    $("#adoMotherId").addClass("stepper-completed");
  });
});

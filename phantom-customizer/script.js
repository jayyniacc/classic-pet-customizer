let eyeIndex = 1;
let accessoryIndex = 1;

// ---------- BODY ----------
function loadBody() {
  const body = document.getElementById("body");
  const shine = document.getElementById("bodyShine");

  body.src = "assets/body/body_01.png";
  shine.src = "assets/body/body_shine_01.png";
}

// ---------- LEGS ----------
function loadLegs() {
  const top = document.getElementById("topLeg");
  const bottom = document.getElementById("bottomLeg");

  top.src = "assets/legs/top_leg_01.png";
  bottom.src = "assets/legs/bottom_leg_01.png";
}

// ---------- EYES ----------
function updateEyes() {
  const white = document.getElementById("eyeWhite");
  const iris = document.getElementById("iris");
  const sparkle = document.getElementById("eyeSparkle");

  const id = String(eyeIndex).padStart(2, "0");

  white.src = `assets/eyes/eye_white_${id}.png`;
  iris.src = `assets/eyes/iris_${id}.png`;
  sparkle.src = `assets/eyes/eye_sparkle_${id}.png`;

  document.getElementById("eyeFold").src =
    "assets/eyes/eye_fold_1.png";

  document.getElementById("stitch1").src =
    "assets/eyes/phantom stitches_black_01.png";

  document.getElementById("stitch2").src =
    "assets/eyes/phantom stitches_black_02.png";
}

function nextEyes() {
  eyeIndex++;
  if (eyeIndex > 6) eyeIndex = 1;
  updateEyes();
}

// ---------- ACCESSORIES ----------
function nextAccessory() {
  const acc = document.getElementById("accessory");

  const types = [
    "accessories_glow",
    "accessories_freckles",
    "accessories_lightning"
  ];

  const type = types[accessoryIndex % types.length];

  acc.src = `assets/accessories/${type}_${String(accessoryIndex).padStart(2, "0")}.png`;

  accessoryIndex++;
  if (accessoryIndex > 2) accessoryIndex = 1;
}

// ---------- INIT ----------
function init() {
  loadBody();
  loadLegs();
  updateEyes();
}

init();

const accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].onclick = function () {
    this.classList.toggle("active");

    let color = this.nextElementSibling;

    if (color.style.maxHeight) {
      color.style.maxHeight = null;
    } else {
      color.style.maxHeight = color.scrollHeight + "px";
    }
  };
}

const colors = [
  {
    colorName: "red",
    colorElement: document.getElementById("colorRed"),
    colorArray: [
      "#ffebee",
      "#ffcdd2",
      "#ef9a9a",
      "#e57373",
      "#ef5350",
      "#f44336",
      "#e53935",
      "#d32f2f",
      "#c62828",
      "#b71c1c",
      "#ff8a80",
      "#ff5252",
      "#ff1744",
      "#d50000",
    ],
    spanColors: "black-white",
  },
  {
    colorName: "pink",
    colorElement: document.getElementById("colorPink"),
    colorArray: [
      "#fce4ec",
      "#f8bbd0",
      "#f48fb1",
      "#f06292",
      "#ec407a",
      "#e91e63",
      "#d81b60",
      "#c2185b",
      "#ad1457",
      "#880e4f",
      "#ff80ab",
      "#ff4081",
      "#f50057",
      "#c51162",
    ],
    spanColors: "black-white",
  },
  {
    colorName: "purple",
    colorElement: document.getElementById("colorPurple"),
    colorArray: [
      "#f3e5f5",
      "#e1bee7",
      "#ce93d8",
      "#ba68c8",
      "#ab47bc",
      "#9c27b0",
      "#8e24aa",
      "#7b1fa2",
      "#6a1b9a",
      "#4a148c",
      "#ea80fc",
      "#e040fb",
      "#d500f9",
      "#aa00ff",
    ],
    spanColors: "black-white",
  },
  {
    colorName: "deep-purple",
    colorElement: document.getElementById("colorDeepPurple"),
    colorArray: [
      "#ede7f6",
      "#d1c4e9",
      "#b39ddb",
      "#9575cd",
      "#7e57c2",
      "#673ab7",
      "#5e35b1",
      "#512da8",
      "#4527a0",
      "#311b92",
      "#b388ff",
      "#7c4dff",
      "#651fff",
      "#6200ea",
    ],
    spanColors: "black-white",
  },
  {
    colorName: "indigo",
    colorElement: document.getElementById("colorIndigo"),
    colorArray: [
      "#e8eaf6",
      "#c5cae9",
      "#9fa8da",
      "#7986cb",
      "#5c6bc0",
      "#3f51b5",
      "#3949ab",
      "#303f9f",
      "#283593",
      "#1a237e",
      "#8c9eff",
      "#536dfe",
      "#3d5afe",
      "#304ffe",
    ],
    spanColors: "black-white",
  },
  {
    colorName: "blue",
    colorElement: document.getElementById("colorBlue"),
    colorArray: [
      "#e3f2fd",
      "#bbdefb",
      "#90caf9",
      "#64b5f6",
      "#42a5f5",
      "#2196f3",
      "#1e88e5",
      "#1976d2",
      "#1565c0",
      "#0d47a1",
      "#82b1ff",
      "#448aff",
      "#2979ff",
      "#2962ff",
    ],
    spanColors: "black-white",
  },
  {
    colorName: "cyan",
    colorElement: document.getElementById("colorCyan"),
    colorArray: [
      "#e0f7fa",
      "#b2ebf2",
      "#80deea",
      "#4dd0e1",
      "#26c6da",
      "#00bcd4",
      "#00acc1",
      "#0097a7",
      "#00838f",
      "#006064",
      "#84ffff",
      "#18ffff",
      "#00e5ff",
      "#00b8d4",
    ],
    spanColors: "black-white",
  },
  {
    colorName: "teal",
    colorElement: document.getElementById("colorTeal"),
    colorArray: [
      "#e0f2f1",
      "#b2dfdb",
      "#80cbc4",
      "#4db6ac",
      "#26a69a",
      "#009688",
      "#00897b",
      "#00796b",
      "#00695c",
      "#004d40",
      "#a7ffeb",
      "#64ffda",
      "#1de9b6",
      "#00bfa5",
    ],
    spanColors: "black-white",
  },
  {
    colorName: "green",
    colorElement: document.getElementById("colorGreen"),
    colorArray: [
      "#e8f5e9",
      "#c8e6c9",
      "#a5d6a7",
      "#81c784",
      "#66bb6a",
      "#4caf50",
      "#43a047",
      "#388e3c",
      "#2e7d32",
      "#1b5e20",
      "#b9f6ca",
      "#69f0ae",
      "#00e676",
      "#00c853",
    ],
    spanColors: "black-white",
  },
  {
    colorName: "light-green",
    colorElement: document.getElementById("colorLightGreen"),
    colorArray: [
      "#f1f8e9",
      "#dcedc8",
      "#c5e1a5",
      "#aed581",
      "#9ccc65",
      "#8bc34a",
      "#7cb342",
      "#689f38",
      "#558b2f",
      "#33691e",
      "#ccff90",
      "#b2ff59",
      "#76ff03",
      "#64dd17",
    ],
    spanColors: "black-white",
  },
  {
    colorName: "lime",
    colorElement: document.getElementById("colorLime"),
    colorArray: [
      "#f9fbe7",
      "#f0f4c3",
      "#e6ee9c",
      "#dce775",
      "#d4e157",
      "#cddc39",
      "#c0ca33",
      "#afb42b",
      "#9e9d24",
      "#827717",
      "#f4ff81",
      "#eeff41",
      "#c6ff00",
      "#aeea00",
    ],
    spanColors: "black",
  },
  {
    colorName: "yellow",
    colorElement: document.getElementById("colorYellow"),
    colorArray: [
      "#fffde7",
      "#fff9c4",
      "#fff59d",
      "#fff176",
      "#ffee58",
      "#ffeb3b",
      "#fdd835",
      "#fbc02d",
      "#f9a825",
      "#f57f17",
      "#ffff8d",
      "#ffff00",
      "#ffea00",
      "#ffd600",
    ],
    spanColors: "black",
  },
  {
    colorName: "orange",
    colorElement: document.getElementById("colorOrange"),
    colorArray: [
      "#fff3e0",
      "#ffe0b2",
      "#ffcc80",
      "#ffb74d",
      "#ffa726",
      "#ff9800",
      "#fb8c00",
      "#f57c00",
      "#ef6c00",
      "#e65100",
      "#ffd180",
      "#ffab40",
      "#ff9100",
      "#ff6d00",
    ],
    spanColors: "black",
  },
  {
    colorName: "brown",
    colorElement: document.getElementById("colorBrown"),
    colorArray: [
      "#efebe9",
      "#d7ccc8",
      "#bcaaa4",
      "#a1887f",
      "#8d6e63",
      "#795548",
      "#6d4c41",
      "#5d4037",
      "#4e342e",
      "#3e2723",
    ],
    spanColors: "black-white",
  },
  {
    colorName: "grey",
    colorElement: document.getElementById("colorGrey"),
    colorArray: [
      "#fafafa",
      "#f5f5f5",
      "#eeeeee",
      "#e0e0e0",
      "#bdbdbd",
      "#9e9e9e",
      "#757575",
      "#616161",
      "#424242",
      "#212121",
    ],
    spanColors: "black-white",
  },
  {
    colorName: "blue-grey",
    colorElement: document.getElementById("colorBlueGrey"),
    colorArray: [
      "#eceff1",
      "#cfd8dc",
      "#b0bec5",
      "#90a4ae",
      "#78909c",
      "#607d8b",
      "#546e7a",
      "#455a64",
      "#37474f",
      "#263238",
    ],
    spanColors: "black-white",
  },
];

let idsText = [];
let idsButton = [];
let idsToast = [];

function renderColors(colorName, colorElement, colorArray, spanColors) {
  for (let i = 0; i < colorArray.length; i++) {
    let color;

    switch (spanColors) {
      case "black":
        color = "#263238";
        break;
      case "white":
        color = "#fff";
        break;
      case "black-white":
        color = i < 5 ? "#263238" : "#fff";
        break;
      case "white-black":
        color = i < 5 ? "#fff" : "#263238";
        break;
      default:
        color = "#263238";
        break;
    }

    colorElement.innerHTML += `
    <div class="${colorName} ${colorName}-${(i + 1) * 10}" style="background-color: ${colorArray[i]}; color: ${color}">
      <span>${colorName}-${(i + 1) * 10}</span>
      <span>${colorArray[i]}</span>
      <textarea id="input-${colorName}-${(i + 1) * 10}">${colorArray[i]}</textarea>
      <i id="copy-${colorName}-${(i + 1) * 10}" class="img-copy fa fa-clipboard" aria-hidden="true" style="color: ${color}"></i>
      <div class="toast-container">
        <span id="toast-${colorName}-${(i + 1) * 10}" class="toast">Copiado!</span>
      </div>
    </div>
    `;

    idsText.push(`input-${colorName}-${(i + 1) * 10}`);
    idsButton.push(`copy-${colorName}-${(i + 1) * 10}`);
    idsToast.push(`toast-${colorName}-${(i + 1) * 10}`);
  }
}

for (let i = 0; i < colors.length; i++) {
  renderColors(
    colors[i].colorName,
    colors[i].colorElement,
    colors[i].colorArray,
    colors[i].spanColors
  );
}

for (let i = 0; i < idsText.length; i++) {
  let copyText = document.getElementById(`${idsText[i]}`);
  let copyButton = document.getElementById(`${idsButton[i]}`);
  let copyToast = document.getElementById(`${idsToast[i]}`);
  
  copyButton.addEventListener("click", function () {
    let text = copyText.value;

    copyToClipboard(text);

    copyToast.style.display = 'inline-block';

    setTimeout(function () {
      copyToast.style.display = 'none';
    }, 1000);
  });
  
  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Copiado para a área de transferência.");
    } catch (error) {
      console.error("Erro ao copiar o texto: ", error);
    }
  }
}

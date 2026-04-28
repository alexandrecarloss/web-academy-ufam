const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const stories = {
  pt: {
    storyText:
      "Era uma noite :clima:, com :temp: graus lá fora e sons de :som:. :personagem: só queria :acao1:, mas teve um :pressagio: e percebeu que a atividade de JavaScript deveria ser entregue até :prazo:. Desesperado, ele precisaria converter :peso: libras em quilos antes que :eventoFinal:.",

    clima: ["fria e chuvosa", "sombria e misteriosa", "gelada digna de filme de terror"],
    temp: ["21", "13", "7"],
    som: ["trovões dramáticos", "latidos suspeitos", "um vizinho cantando mal"],
    personagem: ["Cacique", "O Dev Sonolento", "Mestre do Bug"],
    acao1: ["dormir por 12 horas", "hibernar igual um urso", "sumir do mundo"],
    pressagio: ["mal presságio", "bug existencial", "alerta espiritual do JavaScript"],
    prazo: ["meia-noite", "23:59 em ponto", "o último segundo possível"],
    peso: ["300", "150", "999"],
    eventoFinal: [
      "o Wi-Fi caísse",
      "o VS Code travasse",
      "o computador começasse a atualizar sozinho",
      "galinhas com braços comessassem a invadir sua casa"
    ]
  },

  en: {
    storyText:
      "It was a :climate: night, with :temp: degrees outside and sounds of :sound:. :character: just wanted to :action1:, but suddenly had a :omen: and realized the JavaScript assignment was due at :deadline:. In panic, they had to convert :weight: pounds into kilos before :finalEvent:.",

    climate: ["cold and rainy", "dark and spooky", "freezing like a horror movie"],
    temp: ["21", "13", "7"],
    sound: ["dramatic thunder", "suspicious barking", "a neighbor singing badly"],
    character: ["Cacique", "The Sleepy Dev", "Bug Master"],
    action1: ["sleep for 12 hours", "hibernate like a bear", "disappear from reality"],
    omen: ["bad omen", "JavaScript nightmare", "cosmic bug warning"],
    deadline: ["midnight", "11:59 PM sharp", "the very last second"],
    weight: ["300", "150", "999"],
    finalEvent: [
      "the Wi-Fi died",
      "VS Code crashed",
      "the computer started updating",
      "chickens with arms started invading your house"
    ]
  }
};

randomize.addEventListener("click", result);

function result() {
  const lang = document.querySelector('input[name="lang"]:checked').value;
  const data = stories[lang];

  let newStory = data.storyText;

  function replace(tag, array) {
    newStory = newStory.replace(`:${tag}:`, randomValueFromArray(array));
  }

  if (lang === "pt") {
    replace("clima", data.clima);
    replace("temp", data.temp);
    replace("som", data.som);
    if (customName.value !== "") {
      const name = customName.value;
      newStory = newStory.replace(":personagem:", name);
    } else {
      replace("personagem", data.personagem);
    }
    replace("acao1", data.acao1);
    replace("pressagio", data.pressagio);
    replace("prazo", data.prazo);
    replace("peso", data.peso);
    replace("eventoFinal", data.eventoFinal);
  }

  if (lang === "en") {
    replace("climate", data.climate);
    replace("temp", data.temp);
    replace("sound", data.sound);
    if (customName.value !== "") {
      const name = customName.value;
      newStory = newStory.replace(":character:", name);
    } else {
      replace("character", data.character);
    }
    replace("action1", data.action1);
    replace("omen", data.omen);
    replace("deadline", data.deadline);
    replace("weight", data.weight);
    replace("finalEvent", data.finalEvent);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}

function fahrenheightToCelsius(F) {
  return Math.round((F - 32) * 5 / 9);
}

function poundsToStone(P) {
  return Math.round(P / 14);
}

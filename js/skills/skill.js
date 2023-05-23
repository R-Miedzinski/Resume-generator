const skills = document.querySelectorAll(".s-skills__skills-item");

skills.forEach((skill) => {
  const lvl = `${(skill.getAttribute("level") / 5.0) * 100}%`;
  const name = skill.getAttribute("name");

  let lvlNum;
  const bar = `width: ${lvl}`;

  const native = skill.getAttribute("native");
  console.log(!native);
  if (!native) {
    console.log("hello");
    lvlNum = skill.getAttribute("level");
  } else {
    lvlNum = "native";
  }

  skill.innerHTML = `<span class="s-skills__skill-name">${name}</span>
                      <span class="s-skills__skill-lvl-bar">
                      <span class="s-skills__skill-lvl-bar--empty">&nbsp;</span>
                      <span class="s-skills__skill-lvl-bar--full s-skills__skill-lvl-bar--full-${lvlNum}" style="${bar}">&nbsp;</span>
                      
                      </span>`;
});

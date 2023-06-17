let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('estudiante del tecnologico de estudios superiores de ecatepec ,estudio contaduria publica .')
  .pauseFor(200)
  .deleteChars(10)
  .start();

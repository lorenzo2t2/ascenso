/* Unidades extra A2 y B1. Explicaciones en español. */
PRE['a2-cont']=[['at the moment','ahora mismo'],['right now','en este momento'],['wait','esperar'],['rain','llover'],['listen','escuchar']];
PRE['a2-wh']=[['who','quién'],['where','dónde'],['when','cuándo'],['why','por qué'],['how often','con qué frecuencia']];
PRE['b1-cond']=[['as soon as','en cuanto'],['unless','a menos que'],['if','si'],['miss','perder (un tren)'],['pass','aprobar']];
U.push(
{id:'a2-cont',l:'A2',t:'Presente continuo',teach:`
<p><b>Presente continuo:</b> lo que ocurre <b>ahora mismo</b> o un plan cercano. Se forma con <b>am / is / are + verbo-ing</b>.</p>
<table><tr><td><b>Afirmativa</b></td><td><span class="ex">I am reading a book.</span></td></tr>
<tr><td><b>Negativa</b></td><td><span class="ex">She isn't working today.</span></td></tr>
<tr><td><b>Pregunta</b></td><td><span class="ex">Are you listening to me?</span></td></tr>
<tr><td><b>Marcas de tiempo</b></td><td>now, at the moment, right now, today<br><span class="ex">It is raining at the moment.</span></td></tr>
<tr><td><b>Ojo</b></td><td>Verbos de estado (know, like, want) no suelen usarse en continuo: <span class="ex">I know the answer.</span></td></tr></table>`,q:[
{k:'mc',p:'Be quiet! The baby ___.',o:['sleeps','is sleeping','sleep','are sleeping'],a:1,e:'Acción que ocurre ahora mismo: is + sleeping.'},
{k:'mc',p:'What ___ you doing?',o:['is','are','do','does'],a:1,e:'Con you se usa are: What are you doing?'},
{k:'mc',p:'I ___ a new phone at the moment.',o:['am wanting','want','wanting','am want'],a:1,e:'Want es verbo de estado: se usa en presente simple, no en continuo.'},
{k:'gap',p:'They ___ (play) football in the park now.',a:['are playing'],e:'Sujeto plural: are + verbo-ing.'},
{k:'gap',p:'She ___ (not/watch) TV right now.',a:["isn't watching","is not watching"],e:'Negativa: isn\'t + verbo-ing.'},
{k:'gap',p:'He is ___ (run) very fast. Escribe la forma con -ing.',a:['running'],e:'Verbo corto terminado en consonante: duplica la n (run → running).'},
{k:'ro',p:'Ordena las palabras para formar una pregunta.',w:['Are','you','listening','to','music'],a:'Are you listening to music',e:'Pregunta: Are + sujeto + verbo-ing + resto.'},
{k:'dic',s:'It is raining at the moment.',p:'Escucha y escribe la frase.',a:['It is raining at the moment',"It's raining at the moment"],e:'Is + raining: acción en este momento.'}]},

{id:'a2-wh',l:'A2',t:'Preguntas con who, where, when, why y how',teach:`
<p><b>Palabras interrogativas:</b> van al principio de la pregunta, seguidas de <b>do/does/did</b> o del verbo <b>be</b>.</p>
<table><tr><td><b>Who</b></td><td>persona<br><span class="ex">Who is your teacher?</span></td></tr>
<tr><td><b>Where / When</b></td><td>lugar y tiempo<br><span class="ex">Where do you live? · When does it start?</span></td></tr>
<tr><td><b>Why</b></td><td>causa; se responde con because<br><span class="ex">Why are you late?</span></td></tr>
<tr><td><b>How + palabra</b></td><td>how often, how much, how many, how long<br><span class="ex">How often do you swim?</span></td></tr></table>`,q:[
{k:'mc',p:'___ do you live? — In Valencia.',o:['Who','Where','When','Why'],a:1,e:'La respuesta es un lugar, así que Where.'},
{k:'mc',p:'___ is your birthday? — On 5th May.',o:['Where','Who','When','How'],a:2,e:'La respuesta es una fecha: When.'},
{k:'mc',p:'___ are you laughing? — Because it is funny.',o:['Why','Who','How','Where'],a:0,e:'Because responde a Why.'},
{k:'mc',p:'___ often do you go to the gym? — Twice a week.',o:['What','How','When','Where'],a:1,e:'How often = con qué frecuencia.'},
{k:'gap',p:'___ many brothers do you have? (How/What)',a:['How'],e:'How many + sustantivo plural: ¿cuántos?'},
{k:'ro',p:'Ordena las palabras para formar una pregunta.',w:['Where','does','she','work'],a:'Where does she work',e:'Palabra interrogativa + does + sujeto + verbo base.'},
{k:'dic',s:'Why are you late today?',p:'Escucha y escribe la frase.',a:['Why are you late today'],e:'Why + are + sujeto: pregunta con be.'}]},

{id:'b1-cond',l:'B1',t:'Primer condicional y oraciones de tiempo',teach:`
<p><b>Primer condicional:</b> situaciones reales o muy posibles en el futuro.</p>
<table><tr><td><b>Estructura</b></td><td>If + presente simple, will + verbo base<br><span class="ex">If it rains, we will stay at home.</span></td></tr>
<tr><td><b>Unless</b></td><td>= if … not<br><span class="ex">Unless you hurry, you will miss the train.</span></td></tr>
<tr><td><b>Tiempo (when, as soon as, before, after)</b></td><td>tampoco llevan will detrás<br><span class="ex">I'll call you as soon as I arrive.</span></td></tr>
<tr><td><b>Error típico</b></td><td>No se dice «If it will rain»: tras if va presente.</td></tr></table>`,q:[
{k:'mc',p:'If she ___ hard, she will pass the exam.',o:['will study','studies','studied','is studying'],a:1,e:'Tras if se usa presente simple, nunca will.'},
{k:'mc',p:'I will phone you as soon as I ___ home.',o:['will get','get','got','am getting'],a:1,e:'Tras as soon as también va presente simple.'},
{k:'mc',p:'___ you hurry, you will miss the bus.',o:['If','Unless','When','Because'],a:1,e:'Unless = a menos que: Unless you hurry = if you don\'t hurry.'},
{k:'gap',p:'If it ___ (rain) tomorrow, we will cancel the picnic.',a:['rains'],e:'Presente simple con it: rains.'},
{k:'gap',p:'We ___ (go) to the beach if the weather is nice.',a:['will go',"'ll go"],e:'Resultado: will + verbo base.'},
{k:'kw',p:'Hurry up or you will be late. → UNLESS: ___ you will be late.',a:['Unless you hurry up'],e:'Unless equivale a if … not: Unless you hurry up = si no te das prisa.'},
{k:'ro',p:'Ordena las palabras para formar una frase.',w:['If','you','help','me','I','will','thank','you'],a:'If you help me I will thank you',e:'If + presente, will + verbo base.'},
{k:'dic',s:'I will call you as soon as I arrive.',p:'Escucha y escribe la frase.',a:['I will call you as soon as I arrive',"I'll call you as soon as I arrive"],e:'As soon as + presente simple, no will.'}]}
);

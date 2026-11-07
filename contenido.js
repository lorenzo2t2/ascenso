/* ================= CONTENIDO =================
 Cada unidad: explicación breve (teach) + ejercicios con explicación de cada respuesta.
 Tipos: mc, gap, wf (word formation), kw (transformación), ro (ordenar), lis (escucha), read (lectura). */
const LV={A2:{n:'A2 · Key',d:'Frases sencillas sobre temas muy cotidianos.'},
B1:{n:'B1 · Preliminary',d:'Comunicación básica en situaciones cotidianas.'},
B2:{n:'B2 · First',d:'Argumentar con fluidez y entender textos complejos.'},
C1:{n:'C1 · Advanced',d:'Uso flexible y preciso en contextos académicos y profesionales.'},
C2:{n:'C2 · Proficiency',d:'Dominio casi nativo: matiz, registro e implicaturas.'}};
const U=[
{id:'b1-gram',l:'B1',t:'Gramática clave',teach:`
<p><b>Tres estructuras que más se confunden en B1:</b></p>
<table><tr><td><b>Segundo condicional</b></td><td>If + pasado simple, would + infinitivo<br><span class="ex">If I had more time, I would learn Italian.</span></td></tr>
<tr><td><b>since / for</b></td><td>since + momento de inicio; for + duración<br><span class="ex">since 2019 · for five years</span></td></tr>
<tr><td><b>Estilo indirecto</b></td><td>El orden vuelve a ser afirmativo, sin do/did<br><span class="ex">He asked where I lived.</span></td></tr>
<tr><td><b>be used to + -ing</b></td><td>estar acostumbrado a<br><span class="ex">I'm used to getting up early.</span></td></tr></table>`,
 q:[
 {k:'gap',p:'If I ___ more time, I would learn Italian.',a:['had'],e:'Segundo condicional: If + pasado simple, would + infinitivo.'},
 {k:'mc',p:'She has lived here ___ 2019.',o:['for','since','from','during'],a:1,e:'«since» + punto de inicio; «for» + duración.'},
 {k:'mc',p:"I'm not used to ___ up so early.",o:['get','getting','got','be get'],a:1,e:'«be used to» + gerundio (-ing).'},
 {k:'gap',p:'The report ___ (write) by the time you arrive.',a:['will have been written','will be written'],e:'Pasiva en futuro: will have been + participio.'},
 {k:'mc',p:'He asked me where ___.',o:['did I live','I lived','do I live','I do live'],a:1,e:'Estilo indirecto: orden de oración afirmativa.'},
 {k:'ro',p:'Ordena la frase',w:'have you ever been to London ?'.split(' '),a:'have you ever been to London ?',e:'Present perfect en pregunta: have + sujeto + participio.'}]},
{id:'b1-voc',l:'B1',t:'Vocabulario y falsos amigos',teach:`
<p>Un error típico de hispanohablantes es traducir palabra por palabra. Aprende <b>colocaciones</b> (palabras que van juntas) y vigila los <b>falsos amigos</b>:</p>
<table><tr><td><b>actually</b></td><td>= en realidad (no «actualmente», que es <i>currently</i>)</td></tr>
<tr><td><b>embarrassed</b></td><td>= avergonzado (no «embarazada», que es <i>pregnant</i>)</td></tr>
<tr><td><b>make / do</b></td><td><span class="ex">make an appointment, make a mistake · do homework, do the shopping</span></td></tr>
<tr><td><b>borrow / lend</b></td><td>borrow = tomar prestado · lend = prestar</td></tr>
<tr><td><b>advice</b></td><td>incontable: <span class="ex">some advice</span>, nunca «an advice» ni «advices»</td></tr></table>`,
 q:[
 {k:'mc',p:'The opposite of "borrow" is…',o:['lend','steal','win','spend'],a:0,e:'Borrow = tomar prestado; lend = prestar.'},
 {k:'mc',p:'I need to ___ an appointment with the dentist.',o:['do','make','take','have to'],a:1,e:'Colocación: make an appointment.'},
 {k:'gap',p:'Could you give me some ___ (advice) about universities?',a:['advice'],e:'«advice» es incontable: sin «a/an» ni plural.'},
 {k:'mc',p:'"Fed up" means…',o:['hungry','tired of something','very full','angry at food'],a:1,e:'Fed up with = harto de.'},
 {k:'wf',p:'He is a very ___ person. (RELY)',a:['reliable'],e:'rely → reliable (adjetivo).'},
 {k:'mc',p:'"Actually" in English means…',o:['actualmente','en realidad','finalmente','exactamente'],a:1,e:'Falso amigo: actually = en realidad; actualmente = currently.'},
 {k:'mc',p:'"I was embarrassed" means…',o:['Estaba embarazada','Me dio vergüenza','Estaba enfadado','Estaba cansado'],a:1,e:'Falso amigo: embarrassed = avergonzado.'}]},
{id:'b1-lis',l:'B1',t:'Estrategias de escucha',teach:`
<p><b>Cómo escuchar en el examen:</b></p>
<ul><li>Lee las preguntas <b>antes</b> de oír el audio y subraya qué te piden (hora, motivo, lugar…).</li>
<li>La respuesta casi nunca usa las mismas palabras: se <b>parafrasea</b> (<span class="ex">half past nine = 9:30</span>).</li>
<li>Cuidado con los <b>distractores</b>: suelen mencionarse varias opciones y el hablante se corrige.</li>
<li>Al terminar, lee la transcripción y localiza lo que no entendiste: así se entrena el oído.</li></ul>`,
 q:[
 {k:'lis',s:'The train to Manchester leaves at half past nine from platform four.',p:'¿A qué hora sale el tren?',o:['9:00','9:30','10:30','4:00'],a:1,e:'Half past nine = 9:30.'},
 {k:'lis',s:"I'd rather stay at home tonight because I'm feeling a bit under the weather.",p:'¿Por qué se queda en casa?',o:['Hace mal tiempo','Está algo enfermo','Tiene trabajo','Está de vacaciones'],a:1,e:'Under the weather = encontrarse mal.'},
 {k:'lis',s:"Could you turn the music down? I'm trying to concentrate on my homework.",p:'¿Qué pide el hablante?',o:['Subir la música','Bajar la música','Apagar la luz','Ayuda con los deberes'],a:1,e:'Turn down = bajar el volumen.'}]},
{id:'b2-gram',l:'B2',t:'Gramática avanzada',teach:`
<table><tr><td><b>Tercer condicional invertido</b></td><td>Had + sujeto + participio, would have + participio<br><span class="ex">Had I known, I would have left earlier.</span></td></tr>
<tr><td><b>Verbo + gerundio</b></td><td>suggest, enjoy, avoid, admit, regret + -ing<br><span class="ex">She suggested postponing the meeting.</span></td></tr>
<tr><td><b>wish + past perfect</b></td><td>lamentar el pasado<br><span class="ex">I wish I had studied harder.</span></td></tr>
<tr><td><b>Pasiva impersonal</b></td><td>It is said that… / He is said to be…<br><span class="ex">He is said to be a genius.</span></td></tr>
<tr><td><b>Relativas no restrictivas</b></td><td>con comas, usa which/who (nunca that)</td></tr></table>`,
 q:[
 {k:'mc',p:'Had I known about the delay, I ___ earlier.',o:['would leave','would have left','had left','will leave'],a:1,e:'Inversión del tercer condicional.'},
 {k:'mc',p:'She suggested ___ the meeting.',o:['to postpone','postponing','postpone','to postponing'],a:1,e:'suggest + gerundio.'},
 {k:'kw',p:'"I regret not studying harder." → I wish I ___ harder. (STUDIED)',a:['had studied'],e:'wish + past perfect para lamentar el pasado.'},
 {k:'gap',p:'By next June, she ___ (work) here for ten years.',a:['will have been working','will have worked'],e:'Futuro perfecto continuo/simple.'},
 {k:'mc',p:'The film, ___ was directed by a newcomer, won three awards.',o:['that','which','what','who'],a:1,e:'Relativa no restrictiva: which (con comas).'},
 {k:'kw',p:'"People say he is a genius." → He ___ a genius. (SAID)',a:['is said to be'],e:'Pasiva impersonal: is said to be.'}]},
{id:'b2-use',l:'B2',t:'Use of English',teach:`
<p><b>Word formation:</b> identifica primero la categoría gramatical que falta (sustantivo, adjetivo, adverbio, verbo) y luego decide si necesita prefijo negativo.</p>
<table><tr><td>implement → <b>implementation</b></td><td>-tion / -ment / -ness forman sustantivos</td></tr>
<tr><td>popular → <b>unpopular</b></td><td>un-, in-, im-, dis-, ir-: sentido contrario</td></tr></table>
<p><b>Phrasal verbs frecuentes:</b> put up with (soportar), set up (establecer), call off (cancelar), run out of (quedarse sin), carry out (llevar a cabo).</p>`,
 q:[
 {k:'wf',p:'The ___ of the new law was criticised. (IMPLEMENT)',a:['implementation'],e:'implement → implementation (sustantivo).'},
 {k:'wf',p:'It was an ___ decision. (POPULAR)',a:['unpopular'],e:'popular → unpopular.'},
 {k:'mc',p:"He couldn't ___ with the noise any longer.",o:['put up','keep up','give up','make up'],a:0,e:'Put up with = soportar.'},
 {k:'mc',p:'The company decided to ___ its operations abroad.',o:['carry out','set up','take off','call off'],a:1,e:'Set up = establecer; call off = cancelar.'},
 {k:'gap',p:'We ran ___ of milk, so I went to the shop.',a:['out'],e:'Run out of = quedarse sin.'}]},
{id:'b2-read',l:'B2',t:'Comprensión lectora',teach:`
<ul><li>Lee el texto una vez completo para la <b>idea general</b> antes de mirar las preguntas.</li>
<li>La opción correcta <b>parafrasea</b> el texto; la incorrecta suele repetir palabras literales pero cambia el sentido.</li>
<li>Localiza la frase exacta que justifica tu respuesta. Si no puedes señalarla, es una suposición.</li></ul>`,
 q:[
 {k:'read',x:'Remote working has changed how companies think about offices. Many firms now offer "hybrid" contracts, where staff spend two or three days at home. Supporters say it improves work–life balance; critics argue that it weakens team spirit and makes it harder for newcomers to learn from colleagues.',p:'¿Cuál es la postura de los críticos?',o:['Mejora el equilibrio personal','Debilita la cohesión y el aprendizaje de los recién llegados','Reduce los salarios','Elimina las oficinas'],a:1,e:'El texto: «weakens team spirit… harder for newcomers to learn».'},
 {k:'read',x:'The author argues that social media, despite its reputation for superficiality, has revived interest in long-form reading: book recommendations circulate faster than ever, and communities form around shared titles.',p:'La idea central del autor es que las redes sociales…',o:['destruyen la lectura','han impulsado el interés por leer','solo sirven para publicidad','sustituyen a las bibliotecas'],a:1,e:'«despite its reputation… has revived interest in long-form reading».'}]},
{id:'c1-gram',l:'C1',t:'Estructuras de C1',teach:`
<p><b>Inversión tras expresiones negativas o restrictivas</b> (verbo auxiliar antes del sujeto):</p>
<table><tr><td>Not only / Never / Rarely</td><td><span class="ex">Not only did he arrive late, but…</span></td></tr>
<tr><td>Hardly / Scarcely … when</td><td><span class="ex">Hardly had we entered when the alarm went off.</span></td></tr>
<tr><td>Not until</td><td><span class="ex">Not until it was too late did he realise.</span></td></tr></table>
<p><b>It's (high) time + pasado:</b> <span class="ex">It is high time we took action.</span> · <b>In spite of</b> + sustantivo o -ing.</p>`,
 q:[
 {k:'mc',p:'Not only ___ late, but he also forgot the documents.',o:['he arrived','did he arrive','he did arrive','arrived he'],a:1,e:'Inversión tras expresión negativa al inicio.'},
 {k:'mc',p:'It is high time we ___ the problem seriously.',o:['take','took','will take','have taken'],a:1,e:"It's (high) time + pasado."},
 {k:'kw',p:'"He only realised the danger when it was too late." → Not until it ___ too late did he realise the danger. (WAS)',a:['was'],e:'Not until + cláusula, luego inversión en la principal.'},
 {k:'kw',p:'"Despite her protests, they sold the house." → In spite of her ___ , the house was sold. (OBJECTED)',a:['objecting','having objected'],e:'In spite of + sustantivo/gerundio.'},
 {k:'mc',p:'Hardly ___ the building when the alarm went off.',o:['we had entered','had we entered','we entered','did we entered'],a:1,e:'Hardly… when + past perfect invertido.'}]},
{id:'c1-voc',l:'C1',t:'Léxico y colocaciones',teach:`
<p>En C1 se evalúa la <b>precisión léxica</b>: la palabra correcta suele venir impuesta por la colocación, no por el significado.</p>
<table><tr><td>mounting <b>pressure</b></td><td>presión creciente (no «weight»)</td></tr>
<tr><td>a <b>plethora</b> of</td><td>una abundancia de</td></tr>
<tr><td><b>ambivalent</b> about</td><td>con sentimientos encontrados</td></tr>
<tr><td>notorious <b>for</b></td><td>conocido (negativamente) por</td></tr></table>
<p>Anota siempre la palabra <b>con su preposición y compañeros habituales</b>.</p>`,
 q:[
 {k:'mc',p:'The government faces mounting ___ to resign.',o:['pressure','weight','stress','load'],a:0,e:'Colocación: mounting pressure.'},
 {k:'mc',p:'A ___ of evidence supports the theory.',o:['plethora','plenty','large','crowd'],a:0,e:'A plethora of = abundancia de.'},
 {k:'wf',p:'The results were ___ with previous studies. (CONSISTENT)',a:['inconsistent'],e:'consistent → inconsistent.'},
 {k:'mc',p:'She was ___ about the offer, unsure whether to accept.',o:['ambivalent','indifferent','adamant','oblivious'],a:0,e:'Ambivalent = con sentimientos encontrados.'},
 {k:'mc',p:"He's notorious ___ never meeting deadlines.",o:['for','of','by','at'],a:0,e:'Notorious for.'}]},
{id:'c1-lis',l:'C1',t:'Escucha avanzada',teach:`
<p>En C1 el hablante suele <b>matizar o negar</b> lo que parece decir. Escucha la actitud, no solo la información.</p>
<ul><li><span class="ex">I wouldn't go so far as to call it…</span> → no lo dice tan fuerte.</li>
<li><span class="ex">Had X been…, it might have…</span> → hipótesis sobre el pasado: no ocurrió.</li></ul>`,
 q:[
 {k:'lis',s:"I wouldn't go so far as to call it a failure, but it certainly fell short of our expectations.",p:'¿Qué opina el hablante?',o:['Fue un éxito total','Fue un fracaso rotundo','No fue un fracaso, pero decepcionó','No tiene opinión'],a:2,e:'Fell short of expectations, pero sin llamarlo failure.'},
 {k:'lis',s:'Had the committee been better informed, it might well have reached a different conclusion.',p:'¿Qué implica?',o:['El comité decidió bien','El comité no estaba bien informado','El comité cambió de opinión','Nadie dijo nada'],a:1,e:'Tercer condicional invertido: no estaban bien informados.'}]},
{id:'c2-gram',l:'C2',t:'Precisión y matiz',teach:`
<table><tr><td><b>Were it not for…</b></td><td>= si no fuera por… <span class="ex">Were it not for your help, we would have failed.</span></td></tr>
<tr><td><b>might / could have + participio</b></td><td>posibilidad pasada <span class="ex">She might have misread it.</span></td></tr>
<tr><td><b>as though + pasado</b></td><td>irreal en presente <span class="ex">He spoke as though he knew everything.</span></td></tr>
<tr><td><b>whose</b></td><td>posesivo relativo para personas y cosas</td></tr></table>`,
 q:[
 {k:'mc',p:'Scarcely ___ the speech when the audience erupted.',o:['he had finished','had he finished','he finished','did he finished'],a:1,e:'Scarcely… when con inversión.'},
 {k:'mc',p:'"Were it not for your help, we ___ failed." Elige la forma correcta.',o:['would have','will have','had','would'],a:0,e:'Were it not for + would have + participio.'},
 {k:'kw',p:'"It is possible that she misread the instructions." → She ___ the instructions. (MIGHT)',a:['might have misread'],e:'Deducción pasada: might have + participio.'},
 {k:'mc',p:'The proposal, ___ merits are debatable, was approved.',o:['whose','which','that','of which the'],a:0,e:'whose = posesivo relativo.'},
 {k:'mc',p:'He spoke as though he ___ the whole truth.',o:['knew','knows','had known','would know'],a:0,e:'As though + pasado (irreal en presente).'}]},
{id:'c2-reg',l:'C2',t:'Registro y matices',teach:`
<p>En C2 debes elegir el <b>registro</b> correcto (formal/informal) y entender <b>modismos</b> y tono irónico.</p>
<table><tr><td>tongue-in-cheek</td><td>en broma, irónico</td></tr>
<tr><td>not hold water</td><td>no sostenerse (un argumento)</td></tr>
<tr><td>mealy-mouthed</td><td>evasivo, que no habla claro</td></tr></table>
<p>Formal: <span class="ex">I would like to take this opportunity to express my gratitude.</span> · Informal: <span class="ex">Thanks a lot!</span></p>`,
 q:[
 {k:'mc',p:'Which is the most formal?',o:["I'd like to take this opportunity to express my gratitude.",'Thanks a lot, mate.','Cheers for that!','Ta very much.'],a:0,e:'Registro formal: take this opportunity to express…'},
 {k:'mc',p:'"His remarks were tongue-in-cheek" means…',o:['He was angry','He was being ironic/not serious','He was lying','He was shy'],a:1,e:'Tongue-in-cheek = en broma, irónico.'},
 {k:'mc',p:'"Her argument doesn\'t hold water" means…',o:["It's very clear","It's not logical or convincing","It's too long","It's emotional"],a:1,e:'Not hold water = no se sostiene.'},
 {k:'wf',p:'The ___ of the evidence cast doubt on the verdict. (RELIABLE)',a:['unreliability'],e:'reliable → unreliability.'},
 {k:'mc',p:'A "mealy-mouthed" answer is…',o:['honest and direct','evasive and unwilling to speak plainly','very loud','poetic'],a:1,e:'Mealy-mouthed = evasivo.'}]},
{id:'b1-tenses',l:'B1',t:'Tiempos verbales',teach:`
<table><tr><td><b>Pasado simple / continuo</b></td><td>La acción en curso se interrumpe con el pasado simple<br><span class="ex">I was watching TV when the phone rang.</span></td></tr>
<tr><td><b>Present perfect</b></td><td>Experiencias y acciones que llegan al presente<br><span class="ex">She has been to Paris three times.</span></td></tr>
<tr><td><b>will / going to</b></td><td>going to = plan o predicción con evidencia<br><span class="ex">Look at those clouds! It's going to rain.</span></td></tr>
<tr><td><b>used to</b></td><td>hábito pasado que ya no existe<br><span class="ex">I used to play outside every day.</span></td></tr>
<tr><td><b>Primer condicional</b></td><td>If + presente, will + infinitivo</td></tr></table>`,
 q:[
 {k:'mc',p:'I ___ TV when the phone rang.',o:['watched','was watching','have watched','watch'],a:1,e:'Pasado continuo para la acción en curso interrumpida.'},
 {k:'mc',p:'She ___ to Paris three times.',o:['went','has been','was','is going'],a:1,e:'Present perfect para experiencias: has been to.'},
 {k:'mc',p:'Look at those clouds! It ___ rain.',o:['will','is going to','is','rains'],a:1,e:'going to: predicción basada en evidencia presente.'},
 {k:'gap',p:'When I was a child, I ___ to play outside every day.',a:['used'],e:'used to + infinitivo: hábito pasado.'},
 {k:'mc',p:'I ___ him since Monday.',o:["haven't seen","didn't see","don't see","wasn't seeing"],a:0,e:'since + present perfect.'},
 {k:'gap',p:'Right now, they ___ (study) for the exam.',a:['are studying'],e:'Presente continuo: acción en este momento.'},
 {k:'mc',p:'If it rains tomorrow, we ___ at home.',o:['stay','will stay','would stay','stayed'],a:1,e:'Primer condicional: If + presente, will + infinitivo.'},
 {k:'ro',p:'Ordena la frase',w:'she has been working here since 2020 .'.split(' '),a:'she has been working here since 2020 .',e:'Present perfect continuo + since + año.'}]},
{id:'b1-prep',l:'B1',t:'Preposiciones',teach:`
<table><tr><td><b>Tiempo</b></td><td>at + hora (<span class="ex">at 6 o'clock</span>) · on + día (<span class="ex">on Monday</span>) · in + mes/año (<span class="ex">in 1998</span>)</td></tr>
<tr><td><b>arrive</b></td><td>arrive at + lugar concreto · arrive in + ciudad/país</td></tr>
<tr><td><b>Adjetivo + preposición</b></td><td>interested <b>in</b>, good <b>at</b>, afraid <b>of</b>, fond <b>of</b>, keen <b>on</b></td></tr>
<tr><td><b>Verbo + preposición</b></td><td>wait <b>for</b>, depend <b>on</b>, listen <b>to</b>, look <b>at</b></td></tr></table>`,
 q:[
 {k:'mc',p:'The meeting is ___ Monday morning.',o:['at','on','in','by'],a:1,e:'on + días de la semana.'},
 {k:'mc',p:"I'll see you ___ 6 o'clock.",o:['at','on','in','for'],a:0,e:'at + hora.'},
 {k:'mc',p:'She was born ___ 1998.',o:['at','on','in','from'],a:2,e:'in + año.'},
 {k:'mc',p:"I'm interested ___ photography.",o:['in','on','at','for'],a:0,e:'interested in.'},
 {k:'mc',p:'He is very good ___ maths.',o:['at','in','on','with'],a:0,e:'good at.'},
 {k:'gap',p:'We arrived ___ the airport two hours early.',a:['at'],e:'arrive at + lugar concreto; arrive in + ciudad o país.'},
 {k:'mc',p:'She is afraid ___ spiders.',o:['of','from','about','with'],a:0,e:'afraid of.'},
 {k:'gap',p:"I'm waiting ___ the bus.",a:['for'],e:'wait for.'}]},
{id:'b2-phrasal',l:'B2',t:'Phrasal verbs',teach:`
<table><tr><td>look up</td><td>buscar información</td></tr><tr><td>take off</td><td>despegar / quitarse</td></tr>
<tr><td>come up with</td><td>idear, proponer</td></tr><tr><td>take after</td><td>parecerse a (un familiar)</td></tr>
<tr><td>call off</td><td>cancelar</td></tr><tr><td>give up</td><td>rendirse, dejar de</td></tr>
<tr><td>get on with</td><td>llevarse bien con</td></tr></table>
<p>Aprende cada phrasal verb <b>dentro de una frase</b>; el significado casi nunca se deduce de las partes.</p>`,
 q:[
 {k:'mc',p:'Can you ___ this word in the dictionary?',o:['look up','look after','look for it','look at up'],a:0,e:'Look up = buscar (una palabra).'},
 {k:'mc',p:'The plane ___ at 8 a.m.',o:['took off','took out','took over','took in'],a:0,e:'Take off = despegar.'},
 {k:'mc',p:'We need to ___ with a solution by Friday.',o:['come up','get along','break down','turn off'],a:0,e:'Come up with = idear.'},
 {k:'mc',p:'She ___ her grandmother; they have the same eyes.',o:['takes after','takes up','takes on','takes off'],a:0,e:'Take after = parecerse a un familiar.'},
 {k:'mc',p:'The match was ___ because of the storm.',o:['called off','called up','called in','called for'],a:0,e:'Call off = cancelar.'},
 {k:'gap',p:"I can't ___ up my mind between the two jobs.",a:['make'],e:'Make up your mind = decidirse.'},
 {k:'mc',p:'He finally ___ smoking last year.',o:['gave up','gave in','gave out','gave away'],a:0,e:'Give up + gerundio = dejar de.'},
 {k:'mc',p:'I get ___ well with my colleagues.',o:['on','up','off','in'],a:0,e:'Get on well with = llevarse bien con.'}]},
{id:'b2-wf',l:'B2',t:'Formación de palabras',teach:`
<p>Pregúntate primero <b>qué categoría falta</b> (sustantivo, adjetivo, adverbio, verbo) y después si el sentido pide un <b>prefijo negativo</b>.</p>
<table><tr><td>Sustantivos</td><td>-tion, -ment, -ness, -ity, -ance/-ence</td></tr>
<tr><td>Adjetivos</td><td>-able, -ful, -ive, -ous, -al, -ing/-ed</td></tr>
<tr><td>Adverbios</td><td>-ly (enthusiastic → enthusiastically)</td></tr>
<tr><td>Negativos</td><td>un-, in-, im-, il-, ir-, dis-</td></tr></table>`,
 q:[
 {k:'wf',p:'Her ___ to the project was outstanding. (CONTRIBUTE)',a:['contribution'],e:'Sustantivo: contribute → contribution.'},
 {k:'wf',p:'He spoke ___ about his experience. (ENTHUSIASM)',a:['enthusiastically'],e:'Adverbio: enthusiasm → enthusiastically.'},
 {k:'wf',p:'The film was surprisingly ___. (ENTERTAIN)',a:['entertaining'],e:'Adjetivo: entertain → entertaining.'},
 {k:'wf',p:'It is ___ to predict the weather here. (POSSIBLE)',a:['impossible'],e:'Prefijo negativo: im- delante de p.'},
 {k:'wf',p:'The ___ of the building took two years. (CONSTRUCT)',a:['construction'],e:'Sustantivo: construct → construction.'},
 {k:'wf',p:'It was ___ of him to leave the door open. (RESPONSIBLE)',a:['irresponsible'],e:'Prefijo negativo ir- delante de r.'},
 {k:'wf',p:'Their ___ with the service was obvious. (SATISFY)',a:['dissatisfaction'],e:'Sentido negativo + sustantivo: dissatisfaction.'},
 {k:'wf',p:'The company made a ___ profit this year. (CONSIDER)',a:['considerable'],e:'Adjetivo: consider → considerable.'}]},
{id:'b2-lis',l:'B2',t:'Escucha: hipótesis y causa',teach:`
<p>En B2 aparecen <b>causas</b> (owing to, because of), <b>condiciones</b> (unless, provided that) y <b>hipótesis irreales</b> (I'd have called, but…). Escucha qué <b>no</b> ocurrió y por qué.</p>`,
 q:[
 {k:'lis',s:"The conference has been moved from Tuesday to Thursday owing to the speaker's illness.",p:'¿Por qué se cambió la fecha?',o:['Mal tiempo','Enfermedad del ponente','Falta de público','Error de reserva'],a:1,e:"Owing to = debido a; the speaker's illness."},
 {k:'lis',s:"I'd have called you earlier, but my phone ran out of battery.",p:'¿Por qué no llamó antes?',o:['Se olvidó','No tenía batería','Estaba ocupado','No tenía el número'],a:1,e:'Ran out of battery = se quedó sin batería.'},
 {k:'lis',s:"Unless we leave now, we'll miss the last train.",p:'¿Qué pasará si no salen ya?',o:['Llegarán pronto','Perderán el último tren','Cogerán un taxi','Irán andando'],a:1,e:'Unless = a menos que (if not).'}]},
{id:'c1-read',l:'C1',t:'Lectura: inferencia y actitud',teach:`
<ul><li>En C1 muchas preguntas piden <b>inferir</b> la actitud del autor (escéptica, crítica, elogiosa), no localizar un dato.</li>
<li>Palabras de actitud: <i>admittedly, arguably, regrettably, ostensibly, unduly</i>.</li>
<li>Descarta opciones <b>demasiado extremas</b> (always, never, completely) salvo que el texto lo diga.</li></ul>`,
 q:[
 {k:'read',x:'Admittedly, the new policy has reduced waiting times in some hospitals. Yet critics point out that these gains were achieved largely by redirecting resources from preventive care, a trade-off that, arguably, will prove costly in the long run.',p:'¿Cuál es la actitud del autor hacia la política?',o:['Totalmente a favor','Reconoce un logro pero duda de su coste futuro','La rechaza por completo','Es indiferente'],a:1,e:'«Admittedly… Yet… arguably costly»: reconoce y matiza.'},
 {k:'read',x:'Far from being a mere technical upgrade, the platform ostensibly offers users greater control over their data. In practice, however, the settings are so deeply buried that few people ever change them.',p:'¿Qué sugiere «ostensibly»?',o:['Que es verdad y comprobado','Que lo aparente no coincide con la realidad','Que es muy costoso','Que es opcional'],a:1,e:'Ostensibly = aparentemente; «In practice, however» lo contradice.'},
 {k:'read',x:'The study found no evidence that homework improves attainment in primary schools, though it did note a modest benefit in secondary education. The authors caution against drawing sweeping conclusions from a single dataset.',p:'¿Qué concluye prudentemente el estudio?',o:['Los deberes son inútiles siempre','Los deberes ayudan algo en secundaria, no hay pruebas en primaria','Los deberes mejoran todo','Hay que prohibirlos'],a:1,e:'«no evidence» en primaria, «modest benefit» en secundaria; «caution» ante conclusiones generales.'}]},
{id:'c1-idioms',l:'C1',t:'Modismos y expresiones',teach:`
<table><tr><td>beat around the bush</td><td>andarse por las ramas</td></tr>
<tr><td>a blessing in disguise</td><td>un mal que resulta bueno</td></tr>
<tr><td>the tip of the iceberg</td><td>solo una pequeña parte visible de un problema mayor</td></tr>
<tr><td>bite the bullet</td><td>afrontar algo desagradable con valentía</td></tr>
<tr><td>once in a blue moon</td><td>muy rara vez</td></tr>
<tr><td>cut corners</td><td>hacer algo a medias para ahorrar</td></tr></table>`,
 q:[
 {k:'mc',p:'"Stop beating around the bush" means…',o:['Stop running','Get to the point','Be quiet','Go outside'],a:1,e:'Beat around the bush = andarse por las ramas.'},
 {k:'mc',p:'Losing that job turned out to be a ___ in disguise.',o:['blessing','problem','lesson','risk'],a:0,e:'A blessing in disguise.'},
 {k:'mc',p:'The scandal is only the ___ of the iceberg.',o:['top','tip','edge','head'],a:1,e:'The tip of the iceberg.'},
 {k:'mc',p:'I hate going to the dentist, but I\'ll just have to ___ the bullet.',o:['bite','shoot','catch','take'],a:0,e:'Bite the bullet = afrontarlo.'},
 {k:'mc',p:'"We see each other once in a blue moon" means…',o:['every month','very rarely','every night','never'],a:1,e:'Once in a blue moon = muy rara vez.'},
 {k:'mc',p:'The builders ___ corners to save money, and the wall collapsed.',o:['cut','turned','took','rounded'],a:0,e:'Cut corners = hacer mal por ahorrar.'}]},
{id:'c1-use',l:'C1',t:'Transformaciones (key word)',teach:`
<p>Debes reescribir la frase con la palabra dada, <b>sin cambiarla</b>, usando de 2 a 5 palabras. Identifica la estructura que se pide: pasiva, condicional, inversión, estilo indirecto…</p>`,
 q:[
 {k:'kw',p:'"I haven\'t seen her for a week." → The last time ___ a week ago. (SAW)',a:['i saw her'],e:'The last time + pasado simple.'},
 {k:'kw',p:'"Please don\'t smoke here." → You ___ smoke here. (MUST)',a:['must not',"mustn't"],e:'Prohibición: must not.'},
 {k:'kw',p:'"They say the company is losing money." → The company ___ losing money. (SAID)',a:['is said to be'],e:'Pasiva impersonal: is said to be + -ing.'},
 {k:'kw',p:'"Although she was tired, she kept working." → ___ tired, she kept working. (SPITE)',a:['in spite of being'],e:'In spite of + gerundio.'},
 {k:'kw',p:'"I\'m sure he forgot." → He ___ forgotten. (MUST)',a:['must have'],e:'Deducción pasada: must have + participio.'},
 {k:'kw',p:'"Someone cleans the office every day." → The office ___ every day. (CLEANED)',a:['is cleaned'],e:'Pasiva en presente simple.'}]},
{id:'c2-vocab',l:'C2',t:'Léxico avanzado',teach:`
<table><tr><td>ubiquitous</td><td>omnipresente</td></tr><tr><td>ephemeral</td><td>efímero</td></tr>
<tr><td>exacerbate</td><td>agravar</td></tr><tr><td>candid</td><td>sincero, franco</td></tr>
<tr><td>mitigate</td><td>mitigar, atenuar</td></tr><tr><td>scrupulous</td><td>escrupuloso</td></tr>
<tr><td>cogent</td><td>convincente (argumento)</td></tr></table>`,
 q:[
 {k:'mc',p:'Smartphones have become ___: you see them everywhere.',o:['ubiquitous','ephemeral','scrupulous','reluctant'],a:0,e:'Ubiquitous = omnipresente.'},
 {k:'mc',p:'Fame can be ___; it vanishes quickly.',o:['ephemeral','cogent','candid','tenacious'],a:0,e:'Ephemeral = efímero.'},
 {k:'mc',p:'The new tax will only ___ the housing crisis.',o:['exacerbate','alleviate','dismiss','foresee'],a:0,e:'Exacerbate = agravar.'},
 {k:'mc',p:'Her ___ remarks surprised the committee, who expected diplomacy.',o:['candid','ephemeral','ubiquitous','frugal'],a:0,e:'Candid = franco, sin rodeos.'},
 {k:'mc',p:'Measures were taken to ___ the environmental damage.',o:['mitigate','aggravate','provoke','ignore'],a:0,e:'Mitigate = atenuar.'},
 {k:'mc',p:'He is ___ about keeping accurate records.',o:['scrupulous','careless','indifferent','oblivious'],a:0,e:'Scrupulous = meticuloso y honesto.'},
 {k:'mc',p:'She presented a ___ argument that convinced everyone.',o:['cogent','vague','trivial','tentative'],a:0,e:'Cogent = convincente.'}]},
{id:'c2-use',l:'C2',t:'Transformaciones avanzadas',teach:`
<p>En C2 las transformaciones combinan <b>inversión, subjuntivo y estructuras impersonales</b>. Revisa: <i>Little did…, Not until…, It is believed to…, I'd prefer it if…</i></p>`,
 q:[
 {k:'kw',p:'"She had no idea that the plan would fail." → Little ___ that the plan would fail. (KNOW)',a:['did she know'],e:'Little + inversión: Little did she know.'},
 {k:'kw',p:'"People believe that the painting is a forgery." → The painting is ___ a forgery. (BELIEVED)',a:['believed to be'],e:'Pasiva impersonal: is believed to be.'},
 {k:'kw',p:'"I would rather you didn\'t tell anyone." → I\'d ___ you didn\'t tell anyone. (PREFER)',a:['prefer it if'],e:"I'd prefer it if + pasado."},
 {k:'kw',p:'"No matter how hard he tried, he couldn\'t open it." → However ___ , he couldn\'t open it. (HARD)',a:['hard he tried'],e:'However + adjetivo + sujeto + verbo.'},
 {k:'kw',p:'"It was only after the meeting that I understood." → Not ___ the meeting did I understand. (UNTIL)',a:['until after'],e:'Not until after + inversión en la principal.'}]},
{id:'c2-read',l:'C2',t:'Lectura: matiz y tono',teach:`
<p>En C2 se piden <b>tono, implicaturas e ironía</b>. Pregúntate: ¿qué quiere que sienta el lector aunque no lo diga?</p>`,
 q:[
 {k:'read',x:'The minister\'s statement was a masterclass in saying nothing at length. Each sentence, polished and sonorous, circled the question without ever landing on it.',p:'¿Cuál es el tono del autor?',o:['Admirativo sin reservas','Irónico y crítico','Neutro e informativo','Compasivo'],a:1,e:'«masterclass in saying nothing» es sarcasmo: la declaración no dijo nada.'},
 {k:'read',x:'It would be tempting to dismiss the findings as a statistical quirk. That the effect recurs across four independent samples, however, suggests something more stubborn than coincidence.',p:'¿Qué sugiere el autor?',o:['Es una casualidad','El efecto parece real y persistente','Los datos son erróneos','No se puede concluir nada'],a:1,e:'«however… more stubborn than coincidence»: apoya que el efecto es real.'}]},
{id:'c2-lis',l:'C2',t:'Escucha: implicaturas',teach:`
<p>En C2 lo importante suele ser lo <b>implícito</b>: eufemismos, ironía, rechazo cortés. Pregúntate qué quiere decir realmente el hablante.</p>`,
 q:[
 {k:'lis',s:"Well, it's certainly an ambitious proposal. I'm sure the board will give it all the attention it deserves.",p:'¿Qué insinúa el hablante?',o:['Que le encanta la propuesta','Que probablemente no la considera buena','Que la aprobará sin dudar','Que no la ha leído'],a:1,e:'«All the attention it deserves» es irónico: poca atención merece.'},
 {k:'lis',s:"I don't suppose you'd happen to know where I might find a decent plumber at this hour?",p:'¿Cuál es el registro?',o:['Muy formal y distante','Cortés e indirecto','Agresivo','Tajante'],a:1,e:'«I don\'t suppose you\'d happen to…» es una petición muy indirecta y cortés.'},
 {k:'lis',s:"With the benefit of hindsight, one might argue that the decision was, if not wrong, then at least premature.",p:'¿Cómo valora la decisión el hablante?',o:['Fue perfecta','Fue prematura, quizá errónea','Fue tardía','No opina'],a:1,e:'«if not wrong, then at least premature»: crítica atenuada.'}]}
];
const WRITING={
A2:{tasks:['Escribe un correo corto a un amigo sobre tu fin de semana (50–70 palabras).','Describe a tu familia (50–70 palabras).'],min:50,max:70,phrases:['I like… because…','On Saturday I usually…','My brother is taller than me.','Would you like to come?'],model:'Hi Sam, thanks for your email. At the weekend I usually visit my grandparents and we have lunch together.'},
B1:{tasks:['Escribe un correo informal a un amigo invitándole a tu cumpleaños (100–120 palabras).','Describe tu fin de semana ideal (100–120 palabras).'],min:100,max:120,
 phrases:['I\'m writing to invite you to…','It would be great if you could…','Let me know if you can come.','First of all… / Also… / Finally…'],
 model:'Hi Laura, I\'m writing to invite you to my birthday party on Saturday 14th at my house. We\'ll start at seven o\'clock and there will be food and music. It would be great if you could come early to help me with the decorations! Let me know if you can make it. Bye for now, Marta.'},
B2:{tasks:['Ensayo: «¿Deberían prohibirse los móviles en las aulas?» (140–190 palabras).','Reseña de una película o serie reciente (140–190 palabras).'],min:140,max:190,
 phrases:['It is often argued that…','On the one hand… On the other hand…','Furthermore, / Moreover, / In addition,','Having considered both sides, I believe…'],
 model:'It is often argued that mobile phones should be banned in classrooms. On the one hand, they distract students and make it harder to concentrate. On the other hand, they can be useful tools for research and for learning languages. Having considered both sides, I believe schools should regulate their use rather than ban them completely.'},
C1:{tasks:['Informe formal sobre el impacto del turismo masivo en una ciudad (220–260 palabras).','Ensayo a favor o en contra de la semana laboral de cuatro días (220–260 palabras).'],min:220,max:260,
 phrases:['The aim of this report is to…','It is widely acknowledged that…','This has given rise to…','In light of the above, it is recommended that…'],
 model:'The aim of this report is to assess the impact of mass tourism on the city. It is widely acknowledged that tourism brings substantial revenue; however, this has given rise to rising rents and overcrowding in the historic centre. In light of the above, it is recommended that the council introduce visitor limits.'},
C2:{tasks:['Crítica razonada sobre el papel de la IA en la creatividad, con registro formal y matices (280–320 palabras).','Discurso persuasivo ante un público académico sobre el valor del multilingüismo (280–320 palabras).'],min:280,max:320,
 phrases:['One could be forgiven for assuming that…','Be that as it may,','This is by no means to suggest that…','Ultimately, the crux of the matter is…'],
 model:'One could be forgiven for assuming that artificial intelligence threatens human creativity. Be that as it may, history suggests that new tools rarely replace artists; they redefine what art can be. This is by no means to suggest that the concerns are unfounded. Ultimately, the crux of the matter is who retains authorship.'}};
const SPEAK={A2:['Preséntate: nombre, edad y dónde vives.','Describe tu rutina de un día normal.','¿Qué comida te gusta y por qué?'],B1:['Háblame de tu familia y de dónde vives.','Describe una foto de unas vacaciones: qué se ve y qué están haciendo.','¿Qué haces normalmente los fines de semana?'],
B2:['Compara dos fotos de personas trabajando: una en oficina y otra desde casa. ¿Cuál preferirías?','Con un compañero, decidid qué actividad es mejor para un grupo de estudiantes extranjeros.','¿Crees que viajar es la mejor forma de aprender sobre otras culturas?'],
C1:['Habla 2 minutos sobre: «¿Hasta qué punto la tecnología nos hace más aislados?»','Discute y llega a una decisión: ¿cómo debería una ciudad reducir el tráfico?','¿Qué responsabilidad tienen las empresas con el medio ambiente?'],
C2:['Expón y defiende una postura matizada sobre la educación bilingüe obligatoria.','Responde a: «Algunos opinan que el éxito depende más de la suerte que del esfuerzo».','Analiza el papel de los medios en la formación de la opinión pública.']};
const RUBRIC=['Contenido: respondí a todos los puntos de la tarea','Organización: párrafos claros y conectores variados','Léxico: variedad y precisión, sin repetir palabras','Gramática: estructuras variadas y corrección','Registro adecuado al tipo de texto'];
const SRUBRIC=['Hablé sin pausas largas ni muletillas excesivas','Usé conectores y ideas ordenadas','Variedad de vocabulario y estructuras','Pronunciación y entonación comprensibles','Respondí a la tarea con ejemplos'];

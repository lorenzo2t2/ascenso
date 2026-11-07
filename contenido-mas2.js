/* Contenido adicional B2, C1 y C2. Explicaciones en español. */
PRE['b2-cond']=[['would have','habría'],['if only','ojalá'],['regret','lamentar'],['unless','a menos que'],['otherwise','de lo contrario']];
PRE['b2-ded']=[['must have','debe de haber'],['can\'t have','no puede haber'],['might have','podría haber'],['obviously','evidentemente'],['evidence','prueba']];
PRE['c1-mix']=[['had I known','de haberlo sabido'],['were it not for','de no ser por'],['should you need','si necesitara'],['mixed conditional','condicional mixto'],['hypothetical','hipotético']];
PRE['c1-part']=[['having finished','tras terminar'],['being tired','estando cansado'],['participle','participio'],['clause','oración subordinada'],['concise','conciso']];
PRE['c2-form']=[['henceforth','de ahora en adelante'],['pursuant to','conforme a'],['furthermore','además'],['shall','deberá (formal)'],['hereby','por la presente']];
PRE['c2-lit']=[['eerie','inquietante'],['grim','sombrío'],['murmur','murmullo'],['glimpse','vislumbrar'],['wander','vagar']];
U.push(
{id:'b2-cond',l:'B2',t:'Condicionales 2 y 3 y wish',teach:`
<p><b>Condicionales irreales:</b> hablan de lo que no es cierto o no ocurrió.</p>
<table><tr><td><b>Segundo</b></td><td>If + pasado simple, would + verbo base (presente irreal)<br><span class="ex">If I had more money, I would travel more.</span></td></tr>
<tr><td><b>Tercero</b></td><td>If + pasado perfecto, would have + participio (pasado irreal)<br><span class="ex">If she had studied, she would have passed.</span></td></tr>
<tr><td><b>wish</b></td><td>wish + pasado (presente) · wish + had + participio (pasado)<br><span class="ex">I wish I lived by the sea. · I wish I had listened.</span></td></tr>
<tr><td><b>Ojo</b></td><td>Con «I/he/she» tras if se usa <i>were</i> en registro formal: <span class="ex">If I were you, I would apologise.</span></td></tr></table>`,q:[
{k:'mc',p:'If I ___ rich, I would buy a boat.',o:['am','was/were','would be','had been'],a:1,e:'Segundo condicional: pasado simple (was/were) en la oración con if.'},
{k:'mc',p:'If he had left earlier, he ___ the train.',o:['would catch','would have caught','had caught','caught'],a:1,e:'Tercer condicional: would have + participio.'},
{k:'mc',p:'I wish I ___ more time yesterday.',o:['have','had','had had','would have'],a:2,e:'Lamentación sobre el pasado: wish + had + participio (had had).'},
{k:'gap',p:'If I ___ (know) her number, I would call her.',a:['knew'],e:'Segundo condicional: if + pasado simple.'},
{k:'gap',p:'We ___ (not/miss) the plane if we had left on time.',a:["wouldn't have missed","would not have missed"],e:'Tercer condicional negativo: wouldn\'t have + participio.'},
{k:'kw',p:'I don\'t have a car, so I can\'t drive to work. → WISH: I ___ a car.',a:['wish I had'],e:'Deseo irreal sobre el presente: wish + pasado simple.'},
{k:'dic',s:'If I had known, I would have told you.',p:'Escucha y escribe la frase.',a:['If I had known I would have told you'],e:'Tercer condicional.'}]},

{id:'b2-ded',l:'B2',t:'Deducción con verbos modales',teach:`
<p><b>Modales de deducción:</b> el grado de certeza cambia el modal.</p>
<table><tr><td><b>Casi seguro (sí)</b></td><td>must + verbo base / must have + participio<br><span class="ex">He must be tired. · She must have left.</span></td></tr>
<tr><td><b>Posible</b></td><td>might / may / could<br><span class="ex">It might rain later.</span></td></tr>
<tr><td><b>Casi seguro (no)</b></td><td>can't / couldn't (have)<br><span class="ex">That can't be true.</span></td></tr>
<tr><td><b>Pasado</b></td><td>modal + have + participio<br><span class="ex">They might have missed the bus.</span></td></tr></table>`,q:[
{k:'mc',p:'The lights are off. They ___ be at home.',o:['must','can\'t','should','would'],a:1,e:'Luces apagadas: es casi seguro que no están (can\'t be).'},
{k:'mc',p:'She is not answering. She ___ have forgotten her phone.',o:['might','shall','will','ought'],a:0,e:'Posibilidad en el pasado: might have + participio.'},
{k:'mc',p:'He has worked for 14 hours. He ___ exhausted.',o:['can\'t be','must be','might not be','shouldn\'t be'],a:1,e:'Deducción casi segura: must be.'},
{k:'gap',p:'The keys aren\'t here. I ___ have left them at work. (quizá)',a:['might','may','could'],e:'Posibilidad: might/may/could + have + participio.'},
{k:'gap',p:'You ___ be joking! That is impossible. (no puede ser)',a:["can't","cannot"],e:'Imposible: can\'t.'},
{k:'ro',p:'Ordena las palabras para formar una frase.',w:['They','must','have','arrived','by','now'],a:'They must have arrived by now',e:'must have + participio: deducción sobre el pasado.'},
{k:'dic',s:'He can\'t have forgotten the meeting.',p:'Escucha y escribe la frase.',a:["He can't have forgotten the meeting","He cannot have forgotten the meeting"],e:'Can\'t have + participio = no puede haber olvidado.'}]},

{id:'c1-mix',l:'C1',t:'Condicionales mixtos y formales',teach:`
<p><b>Mezclas y variantes C1:</b></p>
<table><tr><td><b>Pasado → presente</b></td><td>If + had + participio, would + verbo base<br><span class="ex">If I had taken that job, I would be rich now.</span></td></tr>
<tr><td><b>Inversión</b></td><td>Sin if: Had I known… · Were it not for… · Should you need…<br><span class="ex">Had I known, I would have called.</span></td></tr>
<tr><td><b>Otras conjunciones</b></td><td>provided (that), as long as, otherwise, but for<br><span class="ex">But for your help, we would have failed.</span></td></tr></table>`,q:[
{k:'mc',p:'___ I known about the traffic, I would have left earlier.',o:['Had','If','Would','Should'],a:0,e:'Inversión del tercer condicional: Had + sujeto + participio.'},
{k:'mc',p:'If she ___ studied medicine, she would be a doctor now.',o:['has','had','would have','were'],a:1,e:'Condicional mixto: if + had + participio, would + base.'},
{k:'mc',p:'___ you need any help, please call me.',o:['Should','Had','Were','Did'],a:0,e:'Should + sujeto + verbo base: forma formal de if you need.'},
{k:'gap',p:'But ___ your advice, I would have made a mistake. (de no ser por)',a:['for'],e:'But for + nombre = de no ser por.'},
{k:'kw',p:'If you had not helped us, we would have failed. → WERE IT NOT FOR / BUT FOR… ___ , we would have failed.',a:['But for your help'],e:'But for + nombre equivale a if it hadn\'t been for.'},
{k:'dic',s:'Had I known, I would have acted differently.',p:'Escucha y escribe la frase.',a:['Had I known I would have acted differently'],e:'Inversión formal.'}]},

{id:'c1-part',l:'C1',t:'Oraciones de participio',teach:`
<p><b>Participios para escribir de forma concisa:</b></p>
<table><tr><td><b>-ing (a la vez)</b></td><td>Walking down the street, I met Anna.<br><span class="ex">Feeling tired, she went to bed.</span></td></tr>
<tr><td><b>Having + participio (antes)</b></td><td><span class="ex">Having finished the report, he left.</span></td></tr>
<tr><td><b>Pasivo</b></td><td><span class="ex">Written in 1950, the book is still popular.</span></td></tr>
<tr><td><b>Regla</b></td><td>El sujeto del participio debe ser el mismo que el de la oración principal.</td></tr></table>`,q:[
{k:'mc',p:'___ the exam, she went out to celebrate.',o:['Finishing','Having finished','Finished','Finish'],a:1,e:'La acción terminó antes: having + participio.'},
{k:'mc',p:'___ in 1920, the house needs repairs.',o:['Building','Built','Having build','Being build'],a:1,e:'Participio pasivo: Built (= que fue construida).'},
{k:'mc',p:'Which sentence is correct?',o:['Walking to work, the rain started.','Walking to work, I got wet in the rain.','Walk to work, I got wet.','Walking to work, got wet.'],a:1,e:'El sujeto de walking debe ser I, no the rain.'},
{k:'gap',p:'___ (feel) ill, he stayed at home. Escribe la forma correcta.',a:['Feeling'],e:'Acción simultánea o causa: -ing.'},
{k:'kw',p:'After she had read the letter, she cried. → ___ the letter, she cried.',a:['Having read'],e:'After + pasado perfecto = Having + participio.'},
{k:'dic',s:'Having finished the report, he went home.',p:'Escucha y escribe la frase.',a:['Having finished the report he went home'],e:'Having finished = tras terminar.'}]},

{id:'c2-form',l:'C2',t:'Registro formal y académico',teach:`
<p><b>Formalidad:</b> más pasiva, nominalización y conectores sofisticados.</p>
<table><tr><td><b>Sustituciones</b></td><td>get → obtain · show → demonstrate · need → require · buy → purchase<br><span class="ex">Applicants are required to submit a CV.</span></td></tr>
<tr><td><b>Conectores formales</b></td><td>furthermore, nevertheless, consequently, whereas, pursuant to<br><span class="ex">The results were inconclusive; nevertheless, the trial continued.</span></td></tr>
<tr><td><b>Impersonal</b></td><td>It is widely believed that… · It has been argued that…</td></tr>
<tr><td><b>Evitar</b></td><td>Contracciones y expresiones coloquiales en textos formales.</td></tr></table>`,q:[
{k:'mc',p:'The most formal way to say «We need your ID» is…',o:['We need your ID.','Please provide proof of identity.','Show us your ID.','We want your ID.'],a:1,e:'Provide proof of identity es la formulación más formal.'},
{k:'mc',p:'___ , the committee rejected the proposal. (conclusión formal)',o:['So','Consequently','Anyway','Plus'],a:1,e:'Consequently = en consecuencia, conector formal.'},
{k:'mc',p:'Which is more formal?',o:['The company bought new offices.','The company purchased new premises.','The company got new places.','The company picked up new offices.'],a:1,e:'Purchase y premises son léxico formal.'},
{k:'gap',p:'It has been ___ that the policy is flawed. (se ha argumentado)',a:['argued'],e:'Estructura impersonal: It has been argued that…'},
{k:'kw',p:'Some people think prices will fall. → IT: ___ that prices will fall.',a:['It is thought','It is believed','It is widely believed'],e:'Impersonal formal: It is thought/believed that…'},
{k:'dic',s:'Applicants are required to submit a detailed proposal.',p:'Escucha y escribe la frase.',a:['Applicants are required to submit a detailed proposal'],e:'Are required to = están obligados a.'}]},

{id:'c2-lit',l:'C2',t:'Léxico descriptivo y literario',teach:`
<p><b>Vocabulario de ambiente</b> frecuente en lecturas literarias y periodísticas.</p>
<table><tr><td><b>Sensaciones</b></td><td>eerie (inquietante), serene (sereno), grim (sombrío), desolate (desolado)</td></tr>
<tr><td><b>Movimiento</b></td><td>stroll (pasear), stumble (tropezar), linger (demorarse), wander (vagar)</td></tr>
<tr><td><b>Mirar</b></td><td>glimpse (vislumbrar), glance (echar un vistazo), gaze (mirar fijamente), peer (escudriñar)</td></tr>
<tr><td><b>Sonidos</b></td><td>murmur (murmullo), whisper, rumble (retumbar), echo</td></tr></table>`,q:[
{k:'mc',p:'The house felt ___: nobody had lived there for years.',o:['eerie','cheerful','crowded','busy'],a:0,e:'Eerie = inquietante.'},
{k:'mc',p:'She caught a brief ___ of the sea between the hills.',o:['gaze','glimpse','stare','peer'],a:1,e:'Glimpse = visión fugaz; gaze y stare son miradas prolongadas.'},
{k:'mc',p:'He ___ through the old market with no destination in mind.',o:['sprinted','wandered','stumbled','rumbled'],a:1,e:'Wander = vagar sin rumbo.'},
{k:'gap',p:'The thunder ___ in the distance. (retumbaba)',a:['rumbled'],e:'Rumble = retumbar.'},
{k:'gap',p:'A ___ of voices came from the next room. (murmullo)',a:['murmur'],e:'Murmur = murmullo.'},
{k:'lis',s:'The desolate village lay silent under a grim grey sky, and only the faint echo of footsteps could be heard.',p:'¿Cómo es el ambiente descrito?',o:['Alegre y ruidoso','Triste y silencioso','Caluroso y animado','Moderno y limpio'],a:1,e:'Desolate, silent, grim: ambiente triste y silencioso.'},
{k:'dic',s:'A faint murmur drifted across the eerie silence.',p:'Escucha y escribe la frase.',a:['A faint murmur drifted across the eerie silence'],e:'Murmur = murmullo; eerie = inquietante.'}]}
);

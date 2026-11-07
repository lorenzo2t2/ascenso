/* Nivel A2 (Key). Explicaciones en español. */
U.push(
{id:'a2-basic',l:'A2',t:'Presente simple y rutina',teach:`
<p><b>Presente simple:</b> hábitos, rutinas y hechos. Con <b>he / she / it</b> el verbo añade <b>-s</b>.</p>
<table><tr><td><b>Afirmativa</b></td><td><span class="ex">She works in a bank.</span></td></tr>
<tr><td><b>Negativa</b></td><td>don't / doesn't + verbo base<br><span class="ex">He doesn't like coffee.</span></td></tr>
<tr><td><b>Pregunta</b></td><td>Do / Does + sujeto + verbo base<br><span class="ex">Do you live here?</span></td></tr>
<tr><td><b>Adverbios</b></td><td>always, usually, often, sometimes, never van antes del verbo<br><span class="ex">I usually get up at seven.</span></td></tr></table>`,q:[
{k:'mc',p:'She ___ to school by bus.',o:['go','goes','going','is go'],a:1,e:'Con she/he/it el verbo añade -s: goes.'},
{k:'mc',p:'___ you like pizza?',o:['Does','Do','Are','Is'],a:1,e:'Con you/I/we/they la pregunta se forma con Do.'},
{k:'mc',p:'My brother ___ football on Sundays.',o:['play','plays','playing','does play'],a:1,e:'Brother = he, así que el verbo lleva -s: plays.'},
{k:'gap',p:'He ___ (not/play) tennis on Mondays.',a:["doesn't play","does not play"],e:'Con he/she/it el auxiliar es does: doesn\'t (o does not) + verbo base, sin -s. «Do not / don\'t» solo va con I, you, we, they.'},
{k:'gap',p:'___ she work here? (Do/Does)',a:['Does'],e:'She necesita Does; el verbo work vuelve a la forma base.'},
{k:'gap',p:'I ___ (always/drink) tea in the morning. Escribe solo: always drink',a:['always drink'],e:'El adverbio de frecuencia va antes del verbo: I always drink.'},
{k:'ro',p:'Ordena las palabras para formar una frase.',w:['I','get','up','at','seven'],a:'I get up at seven',e:'Orden básico: sujeto + verbo + complemento de tiempo.'},
{k:'ro',p:'Ordena las palabras para formar una pregunta.',w:['Does','he','live','in','London'],a:'Does he live in London',e:'Pregunta: Does + sujeto + verbo base + resto.'},
{k:'dic',s:'My sister works in a hospital.',p:'Escucha y escribe la frase.',a:['My sister works in a hospital'],e:'Sister = she, por eso works lleva -s.'},
{k:'mc',p:'Elige la frase correcta.',o:['She don\'t like fish.','She doesn\'t likes fish.','She doesn\'t like fish.','She not like fish.'],a:2,e:'Con doesn\'t el verbo va en base: like, sin -s.'}]},

{id:'a2-past',l:'A2',t:'Pasado simple',teach:`
<p><b>Pasado simple:</b> acciones terminadas en el pasado.</p>
<table><tr><td><b>Regulares</b></td><td>verbo + -ed<br><span class="ex">I watched a film yesterday.</span></td></tr>
<tr><td><b>Irregulares</b></td><td>go → went, have → had, see → saw, buy → bought, eat → ate<br><span class="ex">We went to Madrid last year.</span></td></tr>
<tr><td><b>Negativa y pregunta</b></td><td>didn't / Did + verbo base<br><span class="ex">Did you see him? · I didn't see him.</span></td></tr></table>`,q:[
{k:'mc',p:'Yesterday I ___ a new phone.',o:['buy','buyed','bought','buys'],a:2,e:'Buy es irregular: bought.'},
{k:'mc',p:'They ___ to the cinema last night.',o:['go','went','goed','gone'],a:1,e:'Go es irregular: went.'},
{k:'mc',p:'___ you enjoy the party?',o:['Do','Did','Were','Have'],a:1,e:'Pregunta en pasado: Did + sujeto + verbo base.'},
{k:'gap',p:'We ___ (watch) a film on Saturday.',a:['watched'],e:'Verbo regular: añade -ed.'},
{k:'gap',p:'She ___ (not/eat) breakfast this morning.',a:["didn't eat","did not eat"],e:'Negativa en pasado: didn\'t + verbo base (eat, no ate).'},
{k:'gap',p:'I ___ (see) Tom at the station.',a:['saw'],e:'See es irregular: saw.'},
{k:'ro',p:'Ordena las palabras para formar una frase.',w:['We','visited','our','grandparents','yesterday'],a:'We visited our grandparents yesterday',e:'Sujeto + verbo en pasado + complemento + tiempo.'},
{k:'dic',s:'I didn\'t go to work yesterday.',p:'Escucha y escribe la frase.',a:["I didn't go to work yesterday","I did not go to work yesterday"],e:'Tras didn\'t el verbo va en base: go.'},
{k:'mc',p:'Elige la frase correcta.',o:['He didn\'t went home.','He didn\'t go home.','He not went home.','He doesn\'t go home yesterday.'],a:1,e:'Didn\'t ya marca el pasado; el verbo se queda en base: go.'}]},

{id:'a2-voc',l:'A2',t:'Vocabulario cotidiano',teach:`
<p><b>Palabras muy frecuentes</b> de la vida diaria.</p>
<table><tr><td><b>Familia</b></td><td>aunt (tía), uncle (tío), cousin (primo/a), grandparents (abuelos)</td></tr>
<tr><td><b>Casa</b></td><td>kitchen (cocina), bedroom (dormitorio), fridge (nevera), stairs (escaleras)</td></tr>
<tr><td><b>Comida</b></td><td>breakfast (desayuno), lunch (comida), dinner (cena), vegetables (verduras)</td></tr>
<tr><td><b>Falsos amigos</b></td><td>actually = en realidad (no «actualmente"); library = biblioteca (no «librería")</td></tr></table>`,q:[
{k:'mc',p:'Your mother\'s sister is your ___.',o:['uncle','aunt','cousin','niece'],a:1,e:'Aunt = tía.'},
{k:'mc',p:'We keep milk in the ___.',o:['fridge','stairs','bedroom','garden'],a:0,e:'Fridge = nevera.'},
{k:'mc',p:'I borrowed a book from the ___.',o:['bookshop','library','market','library shop'],a:1,e:'Library = biblioteca (falso amigo: no es librería, que es bookshop).'},
{k:'mc',p:'Actually, I don\'t like football. «Actually» significa…',o:['actualmente','en realidad','siempre','también'],a:1,e:'Actually = en realidad. Actualmente se dice currently o nowadays.'},
{k:'gap',p:'The meal you eat in the evening is ___.',a:['dinner'],e:'Dinner = cena.'},
{k:'gap',p:'You sleep in the ___. (b…)',a:['bedroom'],e:'Bedroom = dormitorio.'},
{k:'gap',p:'Carrots and potatoes are ___.',a:['vegetables'],e:'Vegetables = verduras.'},
{k:'dic',s:'My cousin lives near the library.',p:'Escucha y escribe la frase.',a:['My cousin lives near the library'],e:'Cousin = primo/a; library = biblioteca.'}]},

{id:'a2-comp',l:'A2',t:'Comparativos y superlativos',teach:`
<p><b>Comparar</b> dos cosas y <b>destacar</b> la mejor o la peor.</p>
<table><tr><td><b>Adjetivo corto</b></td><td>-er / the -est<br><span class="ex">taller than · the tallest</span></td></tr>
<tr><td><b>Adjetivo largo</b></td><td>more … than / the most …<br><span class="ex">more expensive than · the most expensive</span></td></tr>
<tr><td><b>Irregulares</b></td><td>good → better → the best; bad → worse → the worst</td></tr>
<tr><td><b>Igualdad</b></td><td>as … as<br><span class="ex">He is as tall as me.</span></td></tr></table>`,q:[
{k:'mc',p:'My house is ___ than yours.',o:['big','bigger','biggest','more big'],a:1,e:'Adjetivo corto + -er (con duplicación de g): bigger.'},
{k:'mc',p:'This is the ___ film I have ever seen.',o:['good','better','best','most good'],a:2,e:'Good es irregular: good → better → the best.'},
{k:'mc',p:'Planes are ___ than trains.',o:['more fast','faster','fastest','more faster'],a:1,e:'Fast es corto: faster. No se usa more con adjetivos cortos.'},
{k:'gap',p:'Paris is ___ (expensive) than Madrid.',a:['more expensive'],e:'Adjetivo largo: more + adjetivo + than.'},
{k:'gap',p:'He is the ___ (tall) boy in the class.',a:['tallest'],e:'Superlativo de adjetivo corto: the + -est.'},
{k:'gap',p:'Today is ___ (bad) than yesterday.',a:['worse'],e:'Bad es irregular: bad → worse → the worst.'},
{k:'ro',p:'Ordena las palabras para formar una frase.',w:['She','is','as','tall','as','me'],a:'She is as tall as me',e:'Igualdad: as + adjetivo + as.'},
{k:'dic',s:'This is the most interesting book.',p:'Escucha y escribe la frase.',a:['This is the most interesting book'],e:'Interesting es largo: the most + adjetivo.'}]},

{id:'a2-future',l:'A2',t:'Futuro y planes',teach:`
<p><b>Tres formas de hablar del futuro:</b></p>
<table><tr><td><b>be going to</b></td><td>planes ya decididos<br><span class="ex">I'm going to visit my aunt.</span></td></tr>
<tr><td><b>will</b></td><td>decisiones al momento y predicciones<br><span class="ex">I'll help you. · It will rain.</span></td></tr>
<tr><td><b>Presente continuo</b></td><td>citas ya organizadas<br><span class="ex">We are meeting at six.</span></td></tr></table>`,q:[
{k:'mc',p:'Look at those clouds! It ___ rain.',o:['is going to','will to','goes','going'],a:0,e:'Hay una señal clara ahora (nubes): be going to.'},
{k:'mc',p:'Phone is ringing. «I ___ answer it.»',o:['am going to','will','am','go to'],a:1,e:'Decisión tomada en el momento: will.'},
{k:'mc',p:'Tomorrow I ___ my dentist at ten. (cita organizada)',o:['see','am seeing','will saw','seeing'],a:1,e:'Cita ya organizada: presente continuo.'},
{k:'gap',p:'We ___ (go) to the beach next week. (plan) Usa be going to.',a:['are going to go'],e:'Plan decidido: are going to + verbo base.'},
{k:'gap',p:'I think it ___ (be) sunny tomorrow. (will)',a:['will be',"'ll be"],e:'Predicción con think: will + verbo base.'},
{k:'ro',p:'Ordena las palabras para formar una frase.',w:['She','is','going','to','study','medicine'],a:'She is going to study medicine',e:'Sujeto + be + going to + verbo base.'},
{k:'dic',s:'I will call you tomorrow.',p:'Escucha y escribe la frase.',a:['I will call you tomorrow',"I'll call you tomorrow"],e:'Will + verbo base, sin to.'}]},

{id:'a2-lis',l:'A2',t:'Escucha: situaciones del día a día',teach:`
<p><b>Estrategia:</b> antes de escuchar, lee la pregunta y las opciones. Fíjate en <b>números, horas, precios y lugares</b>. Puedes escuchar de nuevo y más despacio.</p>
<table><tr><td><b>Horas</b></td><td>half past two = 2:30 · quarter to six = 5:45</td></tr>
<tr><td><b>Precios</b></td><td>fifteen pounds fifty = £15.50</td></tr></table>`,q:[
{k:'lis',s:'The film starts at quarter to eight, so let\'s meet at seven thirty.',p:'¿A qué hora empieza la película?',o:['7:15','7:30','7:45','8:15'],a:2,e:'Quarter to eight = 7:45. Las 7:30 es la hora de quedar.'},
{k:'lis',s:'That will be twelve pounds fifty, please.',p:'¿Cuánto cuesta?',o:['£2.50','£12.15','£12.50','£50.12'],a:2,e:'Twelve pounds fifty = £12.50.'},
{k:'lis',s:'I\'m sorry, I can\'t come on Friday. I have a dentist appointment.',p:'¿Por qué no puede ir?',o:['Está enfermo','Va al dentista','Trabaja','Viaja'],a:1,e:'Dentist appointment = cita con el dentista.'},
{k:'lis',s:'Could you tell me the way to the station? Turn left at the bank and it\'s on your right.',p:'¿Dónde gira a la izquierda?',o:['En la estación','En el banco','En el parque','En la escuela'],a:1,e:'Turn left at the bank = gira a la izquierda en el banco.'},
{k:'lis',s:'The weather will be cold tomorrow, with some rain in the afternoon.',p:'¿Qué tiempo hará mañana?',o:['Calor y sol','Frío con lluvia por la tarde','Nieve','Viento por la mañana'],a:1,e:'Cold + rain in the afternoon.'},
{k:'dic',s:'Can I have a coffee and a sandwich, please?',p:'Escucha y escribe la frase.',a:['Can I have a coffee and a sandwich please'],e:'Can I have… es una forma muy habitual de pedir.'}]},

{id:'a2-read',l:'A2',t:'Lectura: textos cortos',teach:`
<p><b>Estrategia:</b> lee primero las preguntas, luego busca en el texto las palabras clave. No necesitas entender cada palabra: busca la idea principal y los datos concretos.</p>`,q:[
{k:'read',x:'Hi Anna! I\'m writing from Edinburgh. The weather is cold but the city is beautiful. Yesterday we visited the castle and today we are going shopping. Tomorrow we are taking the train to Glasgow. See you on Sunday! Love, Mia',p:'¿Qué hicieron ayer?',o:['Fueron de compras','Visitaron el castillo','Cogieron el tren','Fueron a Glasgow'],a:1,e:'«Yesterday we visited the castle». Las compras son hoy y el tren, mañana.'},
{k:'read',x:'Hi Anna! I\'m writing from Edinburgh. The weather is cold but the city is beautiful. Yesterday we visited the castle and today we are going shopping. Tomorrow we are taking the train to Glasgow. See you on Sunday! Love, Mia',p:'¿Cuándo verá Mia a Anna?',o:['Mañana','El sábado','El domingo','Hoy'],a:2,e:'«See you on Sunday» = nos vemos el domingo.'},
{k:'read',x:'NOTICE: The library is open Monday to Friday from 9 am to 6 pm and on Saturday from 10 am to 2 pm. It is closed on Sundays. Students can borrow up to five books for two weeks.',p:'¿Cuántos libros puede llevarse un estudiante?',o:['Dos','Cinco','Diez','Catorce'],a:1,e:'«up to five books» = hasta cinco libros. Two weeks es la duración del préstamo.'},
{k:'read',x:'NOTICE: The library is open Monday to Friday from 9 am to 6 pm and on Saturday from 10 am to 2 pm. It is closed on Sundays. Students can borrow up to five books for two weeks.',p:'¿Abre la biblioteca el domingo?',o:['Sí, de 9 a 6','Sí, de 10 a 2','No','Solo para estudiantes'],a:2,e:'«closed on Sundays» = cerrada los domingos.'}]}
,

{id:'a2-modal',l:'A2',t:'Can, must, should y have to',teach:`
<p><b>Verbos modales:</b> van seguidos del verbo base, sin <b>to</b> ni <b>-s</b>.</p>
<table><tr><td><b>can / can't</b></td><td>habilidad o permiso<br><span class="ex">She can swim. · Can I open the window?</span></td></tr>
<tr><td><b>must</b></td><td>obligación fuerte<br><span class="ex">You must wear a seatbelt.</span></td></tr>
<tr><td><b>should</b></td><td>consejo<br><span class="ex">You should drink more water.</span></td></tr>
<tr><td><b>have to</b></td><td>obligación externa; sí lleva -s con he/she<br><span class="ex">He has to work on Saturday.</span></td></tr></table>`,q:[
{k:'mc',p:'She ___ speak three languages.',o:['can','cans','can to','is can'],a:0,e:'Can no cambia con she y va con el verbo base.'},
{k:'mc',p:'You ___ smoke in the hospital. It is forbidden.',o:['should','mustn\'t','can','have'],a:1,e:'Mustn\'t expresa prohibición.'},
{k:'mc',p:'I have a headache. — You ___ see a doctor.',o:['should','must to','can','are'],a:0,e:'Para dar un consejo se usa should.'},
{k:'mc',p:'He ___ get up early on weekdays.',o:['have to','has to','must to','haves to'],a:1,e:'Have to con he/she cambia a has to.'},
{k:'gap',p:'___ I borrow your pen? (pedir permiso)',a:['Can','Could','May'],e:'Para pedir permiso se usa Can / Could / May + sujeto.'},
{k:'gap',p:'We ___ (not/have) to wear a uniform.',a:["don't have","do not have"],e:'La negativa de have to usa don\'t have to (no es necesario).'},
{k:'ro',p:'Ordena las palabras para formar una frase.',w:['You','should','go','to','bed','early'],a:'You should go to bed early',e:'Should + verbo base, sin to.'},
{k:'dic',s:'You must show your passport.',p:'Escucha y escribe la frase.',a:['You must show your passport'],e:'Must + verbo base.'}]},

{id:'a2-prep',l:'A2',t:'Preposiciones de tiempo y lugar',teach:`
<p><b>Tiempo:</b> <b>at</b> + hora · <b>on</b> + día · <b>in</b> + mes, año, estación o parte del día.</p>
<table><tr><td><b>at</b></td><td><span class="ex">at seven o'clock · at night · at the weekend</span></td></tr>
<tr><td><b>on</b></td><td><span class="ex">on Monday · on 5th May · on my birthday</span></td></tr>
<tr><td><b>in</b></td><td><span class="ex">in June · in 2020 · in the morning · in winter</span></td></tr>
<tr><td><b>Lugar</b></td><td>in (dentro), on (sobre), at (punto concreto), next to (al lado de), between (entre)</td></tr></table>`,q:[
{k:'mc',p:'My class starts ___ nine o\'clock.',o:['in','on','at','to'],a:2,e:'Con horas se usa at.'},
{k:'mc',p:'I was born ___ 1998.',o:['on','at','in','of'],a:2,e:'Con años se usa in.'},
{k:'mc',p:'We have a party ___ Saturday.',o:['in','on','at','by'],a:1,e:'Con días de la semana se usa on.'},
{k:'mc',p:'The cat is ___ the table. (debajo)',o:['under','over','between','next'],a:0,e:'Under = debajo de.'},
{k:'gap',p:'I usually study ___ the morning.',a:['in'],e:'Con partes del día (morning, afternoon, evening) se usa in; ojo: at night.'},
{k:'gap',p:'The bank is ___ to the post office. (al lado)',a:['next'],e:'Next to = al lado de.'},
{k:'gap',p:'See you ___ the weekend!',a:['at'],e:'En inglés británico: at the weekend (en EE. UU.: on the weekend).'},
{k:'dic',s:'The meeting is on Monday at ten.',p:'Escucha y escribe la frase.',a:['The meeting is on Monday at ten'],e:'On + día, at + hora.'}]},

{id:'a2-there',l:'A2',t:'There is / are y cantidades',teach:`
<p><b>There is</b> + singular o incontable · <b>There are</b> + plural.</p>
<table><tr><td><b>Afirmativa</b></td><td><span class="ex">There is a park near my house. · There are two bedrooms.</span></td></tr>
<tr><td><b>Negativa / pregunta</b></td><td><span class="ex">There isn't any milk. · Are there any shops?</span></td></tr>
<tr><td><b>Contables</b></td><td>many, a few → <span class="ex">There aren't many chairs.</span></td></tr>
<tr><td><b>Incontables</b></td><td>much, a little → <span class="ex">There isn't much time.</span></td></tr></table>`,q:[
{k:'mc',p:'___ a supermarket near here?',o:['Is there','Are there','There is','Have'],a:0,e:'Pregunta en singular: Is there…?'},
{k:'mc',p:'There ___ three books on the shelf.',o:['is','are','be','has'],a:1,e:'Books es plural: there are.'},
{k:'mc',p:'We haven\'t got ___ money.',o:['many','much','a few','these'],a:1,e:'Money es incontable: much (en negativas).'},
{k:'mc',p:'How ___ people are there in your family?',o:['much','many','few','lot'],a:1,e:'People es contable: how many.'},
{k:'gap',p:'There ___ (not/be) any eggs in the fridge.',a:["aren't","are not","isn't","is not"],e:'Con any se usa la negativa; eggs es plural: there aren\'t.'},
{k:'ro',p:'Ordena las palabras para formar una pregunta.',w:['Are','there','any','shops','here'],a:'Are there any shops here',e:'Are there + any + sustantivo plural.'},
{k:'dic',s:'There are many people in the park.',p:'Escucha y escribe la frase.',a:['There are many people in the park'],e:'People es plural: there are.'}]}
);

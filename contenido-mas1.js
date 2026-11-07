/* Contenido adicional A2 y B1. Explicaciones en español. */
PRE['a2-pron']=[['me','me / a mí'],['mine','mío'],['their','su (de ellos)'],['our','nuestro'],['yours','tuyo']];
PRE['a2-adv']=[['quickly','rápidamente'],['carefully','con cuidado'],['badly','mal'],['well','bien'],['hardly ever','casi nunca']];
PRE['a2-shop']=[['receipt','recibo'],['size','talla'],['try on','probarse'],['change','cambio'],['discount','descuento']];
PRE['b1-rel']=[['who','que (personas)'],['which','que (cosas)'],['whose','cuyo'],['where','donde'],['that','que']];
PRE['b1-pass']=[['was built','fue construido'],['is made of','está hecho de'],['invented','inventado'],['by','por (agente)'],['damage','daños']];
PRE['b1-rep']=[['say','decir'],['tell','decir (a alguien)'],['ask','preguntar'],['told me','me dijo'],['explain','explicar']];
PRE['b1-health']=[['healthy','sano'],['symptom','síntoma'],['recover','recuperarse'],['injury','lesión'],['diet','dieta']];
PRE['b1-ing']=[['enjoy','disfrutar'],['decide','decidir'],['avoid','evitar'],['want','querer'],['promise','prometer']];
U.push(
{id:'a2-pron',l:'A2',t:'Pronombres y posesivos',teach:`
<p><b>Cuatro series de palabras</b> que no hay que confundir:</p>
<table><tr><td><b>Sujeto</b></td><td>I, you, he, she, it, we, they<br><span class="ex">She lives in Madrid.</span></td></tr>
<tr><td><b>Objeto</b></td><td>me, you, him, her, it, us, them<br><span class="ex">Can you help me?</span></td></tr>
<tr><td><b>Adjetivo posesivo</b></td><td>my, your, his, her, its, our, their + nombre<br><span class="ex">This is our house.</span></td></tr>
<tr><td><b>Pronombre posesivo</b></td><td>mine, yours, his, hers, ours, theirs (sin nombre)<br><span class="ex">The red car is mine.</span></td></tr></table>`,q:[
{k:'mc',p:'Maria is my friend. I like ___.',o:['she','her','hers','herself'],a:1,e:'Tras el verbo like necesitamos el pronombre objeto: her.'},
{k:'mc',p:'This is not your book. It is ___.',o:['my','me','mine','I'],a:2,e:'Sin nombre detrás se usa el pronombre posesivo: mine.'},
{k:'mc',p:'They love ___ new flat.',o:['they','them','their','theirs'],a:2,e:'Delante de un nombre va el adjetivo posesivo: their.'},
{k:'gap',p:'Tom and I are friends. ___ play tennis together.',a:['We','we'],e:'Tom and I = nosotros: pronombre sujeto we.'},
{k:'gap',p:'Can you give ___ the keys? (a nosotros)',a:['us'],e:'Pronombre objeto de we: us.'},
{k:'gap',p:'That coat is not ___ (yo). It belongs to her.',a:['mine'],e:'Posesivo sin nombre: mine.'},
{k:'ro',p:'Ordena las palabras para formar una frase.',w:['Their','teacher','gives','them','homework'],a:'Their teacher gives them homework',e:'Their (posesivo) + nombre; them (objeto) tras el verbo.'},
{k:'dic',s:'The blue bag is hers, not mine.',p:'Escucha y escribe la frase.',a:['The blue bag is hers not mine'],e:'Hers y mine son pronombres posesivos.'}]},

{id:'a2-adv',l:'A2',t:'Adverbios de modo y frecuencia',teach:`
<p><b>Adverbios de modo</b> dicen cómo se hace algo: casi siempre adjetivo + <b>-ly</b>.</p>
<table><tr><td><b>Formación</b></td><td>quick → quickly · careful → carefully<br><span class="ex">She drives carefully.</span></td></tr>
<tr><td><b>Irregulares</b></td><td>good → <b>well</b> · fast → fast · hard → hard<br><span class="ex">He speaks English well.</span></td></tr>
<tr><td><b>Frecuencia</b></td><td>always, usually, often, sometimes, hardly ever, never<br><span class="ex">I hardly ever eat meat.</span></td></tr>
<tr><td><b>Posición</b></td><td>antes del verbo, pero después de <b>be</b><br><span class="ex">He is always late.</span></td></tr></table>`,q:[
{k:'mc',p:'He speaks English very ___.',o:['good','goodly','well','best'],a:2,e:'El adverbio de good es well.'},
{k:'mc',p:'She is ___ late for class.',o:['never','ever','hardly','no'],a:0,e:'Never va después de be y significa nunca.'},
{k:'mc',p:'Drive ___, the road is wet.',o:['careful','carefully','care','carefulness'],a:1,e:'Adverbio de modo: careful + ly.'},
{k:'gap',p:'He runs very ___. (quick)',a:['quickly'],e:'Adjetivo quick + ly = quickly.'},
{k:'gap',p:'She works ___ . (hard) Es igual que el adjetivo.',a:['hard'],e:'Hard es adjetivo y adverbio (hardly significa casi no).'},
{k:'ro',p:'Ordena las palabras para formar una frase.',w:['I','usually','get','up','at','seven'],a:'I usually get up at seven',e:'El adverbio de frecuencia va antes del verbo.'},
{k:'dic',s:'She always speaks very clearly.',p:'Escucha y escribe la frase.',a:['She always speaks very clearly'],e:'Clearly = claramente; always va antes del verbo.'}]},

{id:'a2-shop',l:'A2',t:'Comprar y comer fuera',teach:`
<p><b>Frases útiles</b> para tiendas y restaurantes:</p>
<table><tr><td><b>Pedir</b></td><td><span class="ex">Can I have a coffee, please?</span> · <span class="ex">I'd like the chicken.</span></td></tr>
<tr><td><b>Preguntar precio</b></td><td><span class="ex">How much is this jacket?</span></td></tr>
<tr><td><b>Ropa</b></td><td><span class="ex">Can I try it on?</span> · <span class="ex">Do you have a larger size?</span></td></tr>
<tr><td><b>Pagar</b></td><td><span class="ex">Can I pay by card?</span> · <span class="ex">Keep the change.</span></td></tr></table>`,q:[
{k:'mc',p:'In a restaurant, a polite way to order is…',o:['Give me a pizza.','I would like a pizza, please.','I want pizza now.','Pizza.'],a:1,e:'I would like… please es la forma cortés.'},
{k:'mc',p:'«Can I try it on?» significa…',o:['¿Puedo probármelo?','¿Puedo pagarlo?','¿Puedo devolverlo?','¿Puedo llevármelo gratis?'],a:0,e:'Try on = probarse ropa.'},
{k:'mc',p:'«Keep the change» significa…',o:['Cambia el billete','Quédese con el cambio','Dame el recibo','Es gratis'],a:1,e:'Keep the change = quédese con la vuelta.'},
{k:'gap',p:'How ___ is this T-shirt? (precio)',a:['much'],e:'How much + is = ¿cuánto cuesta?'},
{k:'gap',p:'Can I pay ___ card? (con tarjeta)',a:['by'],e:'Con medio de pago se usa by: by card, by cash.'},
{k:'lis',s:'Hello, I would like two coffees and a chocolate cake, please. How much is that? — That will be nine pounds fifty.',p:'¿Cuánto cuesta en total?',o:['£9.15','£9.50','£19.50','£5.90'],a:1,e:'Nine pounds fifty = £9.50.'},
{k:'dic',s:'Do you have this shirt in a larger size?',p:'Escucha y escribe la frase.',a:['Do you have this shirt in a larger size'],e:'Larger size = una talla más grande.'}]},

{id:'b1-rel',l:'B1',t:'Oraciones de relativo',teach:`
<p><b>Relativos:</b> unen dos ideas y evitan repetir el nombre.</p>
<table><tr><td><b>who / that</b></td><td>personas<br><span class="ex">The man who lives next door is a doctor.</span></td></tr>
<tr><td><b>which / that</b></td><td>cosas<br><span class="ex">This is the book which I told you about.</span></td></tr>
<tr><td><b>whose</b></td><td>posesión<br><span class="ex">She is the girl whose bag was stolen.</span></td></tr>
<tr><td><b>where / when</b></td><td>lugar y tiempo<br><span class="ex">That is the café where we met.</span></td></tr>
<tr><td><b>Ojo</b></td><td>No se repite el sujeto: «the man who he lives» es un error.</td></tr></table>`,q:[
{k:'mc',p:'The woman ___ called you is my aunt.',o:['which','who','whose','where'],a:1,e:'Con personas se usa who (o that).'},
{k:'mc',p:'This is the shop ___ I bought my shoes.',o:['who','which','where','whose'],a:2,e:'Where sustituye a un lugar.'},
{k:'mc',p:'He is the boy ___ father is a pilot.',o:['who','whose','which','that'],a:1,e:'Whose indica posesión (su padre).'},
{k:'gap',p:'The film ___ we saw yesterday was great. (which/that)',a:['which','that'],e:'Para cosas: which o that.'},
{k:'gap',p:'I know a man ___ speaks six languages.',a:['who','that'],e:'Para personas: who o that.'},
{k:'ro',p:'Ordena las palabras para formar una frase.',w:['The','book','that','I','read','was','boring'],a:'The book that I read was boring',e:'Relativo + sujeto + verbo dentro de la oración principal.'},
{k:'dic',s:'That is the restaurant where we had dinner.',p:'Escucha y escribe la frase.',a:['That is the restaurant where we had dinner'],e:'Where introduce un lugar.'}]},

{id:'b1-pass',l:'B1',t:'La voz pasiva',teach:`
<p><b>Pasiva:</b> se destaca lo que recibe la acción. <b>be + participio</b>.</p>
<table><tr><td><b>Presente</b></td><td>is / are + participio<br><span class="ex">English is spoken all over the world.</span></td></tr>
<tr><td><b>Pasado</b></td><td>was / were + participio<br><span class="ex">The bridge was built in 1890.</span></td></tr>
<tr><td><b>Agente</b></td><td>by + quien hace la acción (si importa)<br><span class="ex">The letter was written by my grandfather.</span></td></tr>
<tr><td><b>Cuándo usarla</b></td><td>Cuando no se sabe quién actúa o no importa: <span class="ex">My phone was stolen.</span></td></tr></table>`,q:[
{k:'mc',p:'The Mona Lisa ___ by Leonardo da Vinci.',o:['painted','was painted','is painting','paints'],a:1,e:'Pasado + agente: was + participio (painted).'},
{k:'mc',p:'Spanish ___ in many countries.',o:['speaks','is spoken','spoke','are spoken'],a:1,e:'Presente pasivo con sujeto singular: is spoken.'},
{k:'mc',p:'These cars ___ in Germany.',o:['make','are made','is made','made'],a:1,e:'Sujeto plural: are + participio.'},
{k:'gap',p:'The window ___ (break) yesterday.',a:['was broken'],e:'Pasado pasivo: was + broken.'},
{k:'gap',p:'Cheese ___ (make) from milk.',a:['is made'],e:'Presente pasivo: is made.'},
{k:'kw',p:'Someone stole my bike. → My bike ___ .',a:['was stolen'],e:'Pasivo sin agente: was stolen.'},
{k:'ro',p:'Ordena las palabras para formar una frase.',w:['The','room','is','cleaned','every','day'],a:'The room is cleaned every day',e:'is + participio, con complemento de tiempo al final.'},
{k:'dic',s:'The castle was built in the twelfth century.',p:'Escucha y escribe la frase.',a:['The castle was built in the twelfth century'],e:'Was built = fue construido.'}]},

{id:'b1-rep',l:'B1',t:'Estilo indirecto básico',teach:`
<p><b>Estilo indirecto:</b> contamos lo que dijo otra persona. Los tiempos «retroceden» un paso.</p>
<table><tr><td><b>Presente → pasado</b></td><td>«I am tired» → He said he <b>was</b> tired.</td></tr>
<tr><td><b>Pasado → pasado perfecto</b></td><td>«I saw her» → He said he <b>had seen</b> her.</td></tr>
<tr><td><b>will → would</b></td><td>«I will call» → She said she <b>would</b> call.</td></tr>
<tr><td><b>say / tell</b></td><td>say + (that); tell + persona<br><span class="ex">He told me he was busy.</span></td></tr>
<tr><td><b>Preguntas</b></td><td>if / whether, sin inversión<br><span class="ex">She asked if I was ready.</span></td></tr></table>`,q:[
{k:'mc',p:'«I live in Paris.» → She said she ___ in Paris.',o:['lives','lived','live','is living'],a:1,e:'Presente simple pasa a pasado simple.'},
{k:'mc',p:'He ___ me that he was tired.',o:['said','told','spoke','asked'],a:1,e:'Tell lleva persona directa (told me); say no.'},
{k:'mc',p:'«Will you help me?» → She asked ___.',o:['if I would help her','will I help her','if will I help','would I help'],a:0,e:'Pregunta indirecta con if y orden normal; will pasa a would.'},
{k:'gap',p:'«We are late.» → They said they ___ late. (be)',a:['were'],e:'Presente de be pasa a was/were.'},
{k:'gap',p:'«I have finished.» → He said he ___ finished. (have)',a:['had'],e:'Presente perfecto pasa a pasado perfecto.'},
{k:'kw',p:'«I will call you.» → She said she ___ call me.',a:['would'],e:'will pasa a would.'},
{k:'dic',s:'She told me that she was very tired.',p:'Escucha y escribe la frase.',a:['She told me that she was very tired'],e:'Told me that… = me dijo que…'}]},

{id:'b1-health',l:'B1',t:'Vocabulario: salud y estilo de vida',teach:`
<p><b>Salud:</b> palabras muy útiles para hablar de bienestar.</p>
<table><tr><td><b>Cuerpo</b></td><td>headache (dolor de cabeza), sore throat (dolor de garganta), fever (fiebre)</td></tr>
<tr><td><b>Medicina</b></td><td>prescription (receta), cure (cura), treatment (tratamiento)</td></tr>
<tr><td><b>Hábitos</b></td><td>balanced diet (dieta equilibrada), exercise (hacer ejercicio), get enough sleep</td></tr>
<tr><td><b>Falsos amigos</b></td><td>constipated = estreñido (no «constipado»; se dice <i>have a cold</i>)</td></tr></table>`,q:[
{k:'mc',p:'You should see a doctor if you have a high ___.',o:['fever','recipe','prescription','diet'],a:0,e:'Fever = fiebre.'},
{k:'mc',p:'«Tengo un resfriado» se dice…',o:['I am constipated.','I have a cold.','I am cold.','I have a flu cold.'],a:1,e:'Have a cold = estar resfriado; constipated significa estreñido.'},
{k:'mc',p:'The doctor gave me a ___ for antibiotics.',o:['prescription','recipe','receipt','cure'],a:0,e:'Prescription = receta médica; recipe = receta de cocina.'},
{k:'gap',p:'A ___ diet includes fruit and vegetables. (equilibrada)',a:['balanced'],e:'Balanced diet = dieta equilibrada.'},
{k:'gap',p:'It takes weeks to ___ from a serious injury. (recuperarse)',a:['recover'],e:'Recover from = recuperarse de.'},
{k:'lis',s:'I have a sore throat and a headache, so I am going to stay in bed and drink plenty of water.',p:'¿Qué síntomas tiene?',o:['Fiebre y tos','Dolor de garganta y de cabeza','Dolor de estómago','Resfriado y fiebre'],a:1,e:'Sore throat = dolor de garganta; headache = dolor de cabeza.'},
{k:'dic',s:'You should get enough sleep and eat a balanced diet.',p:'Escucha y escribe la frase.',a:['You should get enough sleep and eat a balanced diet'],e:'Should = consejo.'}]},

{id:'b1-ing',l:'B1',t:'Gerundio o infinitivo',teach:`
<p><b>Depende del verbo anterior:</b></p>
<table><tr><td><b>+ -ing</b></td><td>enjoy, avoid, finish, mind, suggest, keep<br><span class="ex">I enjoy reading.</span></td></tr>
<tr><td><b>+ to + infinitivo</b></td><td>want, decide, hope, plan, promise, learn<br><span class="ex">She decided to leave.</span></td></tr>
<tr><td><b>Los dos, cambia el sentido</b></td><td>stop + -ing (dejar de) / stop + to (parar para)<br><span class="ex">He stopped smoking.</span></td></tr>
<tr><td><b>Tras preposición</b></td><td>siempre -ing<br><span class="ex">She is good at singing.</span></td></tr></table>`,q:[
{k:'mc',p:'I enjoy ___ music.',o:['to listen','listening','listen','to listening'],a:1,e:'Enjoy va seguido de -ing.'},
{k:'mc',p:'She decided ___ a new job.',o:['looking for','to look for','look for','looked for'],a:1,e:'Decide va seguido de to + infinitivo.'},
{k:'mc',p:'He is interested ___ languages.',o:['to learn','in learning','learning','in learn'],a:1,e:'Tras preposición se usa -ing: in learning.'},
{k:'gap',p:'We want ___ (go) to the cinema tonight.',a:['to go'],e:'Want + to + infinitivo.'},
{k:'gap',p:'Would you mind ___ (open) the window?',a:['opening'],e:'Mind + -ing.'},
{k:'ro',p:'Ordena las palabras para formar una frase.',w:['He','promised','to','call','me','later'],a:'He promised to call me later',e:'Promise + to + infinitivo.'},
{k:'dic',s:'I really enjoy learning new languages.',p:'Escucha y escribe la frase.',a:['I really enjoy learning new languages'],e:'Enjoy + -ing.'}]}
);

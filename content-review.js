/* Revisión lingüística y explicaciones que faltaban en el temario. */
(()=>{
 const get=id=>U.find(u=>u.id===id);
 get('a2-there').q[4].a=["aren't","are not"];
 get('a2-basic').q[2].o[3]='is play';
 get('a2-basic').q[5].p='I ___ (always/drink) tea in the morning. Coloca el adverbio y conjuga el verbo.';
 get('b1-gram').q[3]={k:'gap',p:'She ___ (live) in this town since 2021. Usa el present perfect simple.',a:['has lived'],e:'Una situación que empezó en 2021 y continúa: has + participio (lived).'};
 get('b1-gram').q[5].w=['Have','you','ever','been','to','London'];get('b1-gram').q[5].a='Have you ever been to London';
 get('b1-tenses').q[7].w=['She','has','been','working','here','since','2020'];get('b1-tenses').q[7].a='She has been working here since 2020';
 get('b1-ing').q[0].p='I enjoy ___ to music.';
 get('b2-use').q[1].p='Nobody supported it: it was an ___ decision. (POPULAR)';
 get('c1-voc').q[2].p='The results contradicted earlier findings: they were ___ with previous studies. (CONSISTENT)';
 get('c1-gram').q[3].p='Despite the fact that she objected, they sold the house. → In spite of her ___, the house was sold. (OBJECTING)';
 get('c1-gram').q[3].a=['objecting','having objected'];
 get('c1-use').q[1].p='Smoking is forbidden here. → You ___ smoke here. (MUST)';
 get('c1-mix').q[4].p='If you had not helped us, we would have failed. → ___, we would have failed. Empieza por BUT FOR y completa el hueco.';
 get('b2-ded').q[0].p="Both of them are standing beside me in Madrid. They ___ be at their home in Rome now.";
 get('c1-use').teach=get('c1-use').teach.replace('de 2 a 5 palabras','el número de palabras indicado en cada tarea');
 const add=(id,title,body,en,es,note)=>EXP[id].push([title,body,[[en,es]],note]);
 add('b1-gram','Present perfect: una situación que continúa','Usa <b>have/has + participio</b> para una situación que empezó antes y continúa. Ever pregunta por experiencias.','Have you ever visited Oxford?','¿Has visitado Oxford alguna vez?','She has lived aquí significa que todavía vive aquí.');
 add('b1-gram','Preguntar por experiencias','En una pregunta de experiencia, el orden es <b>Have/Has + persona + ever + participio</b>. No añadas did.','Has your brother ever worked abroad?','¿Ha trabajado tu hermano alguna vez en el extranjero?');
 add('b1-voc','Describir personas y estados de ánimo','<b>Reliable</b> significa fiable. <b>Fed up with</b> expresa estar harto de algo. Apréndelos con una frase.','She is reliable, but she is fed up with waiting.','Ella es fiable, pero está harta de esperar.');
 add('b2-gram','Verbos seguidos de -ing','Suggest, enjoy y avoid suelen ir con <b>verbo + -ing</b>. El segundo verbo expresa la actividad propuesta, disfrutada o evitada.','They suggested taking a short break.','Propusieron hacer un descanso breve.');
 add('b2-gram','Duración hasta un momento futuro','Usa <b>will have been + -ing</b> para destacar cuánto tiempo llevará una actividad en un momento futuro. Con work también puede encajar will have worked.','By May, I will have been teaching here for six years.','En mayo llevaré seis años enseñando aquí.');
 add('c1-gram','Despite e in spite of','Tras <b>despite / in spite of</b> coloca un nombre o una forma en -ing. Si quieres una frase completa, usa the fact that.','In spite of feeling tired, he stayed.','A pesar de sentirse cansado, se quedó.');
 add('c2-gram','Scarcely... when: sucesión inmediata','En un registro formal, <b>Scarcely had + sujeto + participio... when</b> indica que algo ocurrió en cuanto terminó otra cosa.','Scarcely had we sat down when the lights went out.','Apenas nos habíamos sentado cuando se apagaron las luces.');
 add('c2-reg','Formar un nombre abstracto','Para hablar de la falta de fiabilidad se usa <b>unreliability</b>. Reliable → reliability; añade un- para el sentido negativo.','The unreliability of the figures undermined the report.','La falta de fiabilidad de las cifras debilitó el informe.');
 add('b1-tenses','Lo que ocurre ahora','Si una acción está sucediendo ahora, usa <b>am/is/are + -ing</b>. No uses el presente simple de una rutina.','They are preparing dinner right now.','Están preparando la cena ahora mismo.');
 add('b1-tenses','Condición futura posible','Después de <b>if</b> usa presente; en el resultado puedes usar will + verbo base.','If it snows, we will stay indoors.','Si nieva, nos quedaremos dentro.');
 add('b2-phrasal','Make up your mind','<b>Make up your mind</b> es una expresión fija: decidirse. El posesivo cambia según la persona.','He cannot make up his mind.','No consigue decidirse.');
 add('b1-art','Some y any','Usa some en afirmativas y ofrecimientos; any es habitual en negativas y preguntas.','Would you like some soup?','¿Te apetece un poco de sopa?');
 add('b2-passive','Contar afirmaciones','Al contar lo que alguien dijo, normalmente los tiempos retroceden: am/is → was; will → would. Cambia tomorrow por the next day si cambió la referencia temporal.','He said he would send it the next day.','Dijo que lo enviaría al día siguiente.');
 add('a2-comp','Comparar cosas iguales','Usa <b>as + adjetivo + as</b> para decir tan... como. Aquí no añadas -er ni more.','My bag is as heavy as yours.','Mi bolsa es tan pesada como la tuya.');
 // Cada explicación sin práctica recibe una pregunta de aplicación propia.
 const append=(id,q)=>{const u=get(id);u.q.push(q);return u.q.length-1};
 CURRICULUM['a2-past'][2][1].push(append('a2-past',{k:'gap',p:'They ___ (be) at the museum yesterday.',a:['were'],e:'En pasado, be con they se convierte en were.'}));
 CURRICULUM['a2-there'][1][1].push(append('a2-there',{k:'mc',p:"There isn't ___ rice left. (elige la forma habitual de una negativa)",o:['any','a','an','many'],a:0,e:'Rice es incontable; en negativas usamos any rice.'}));
 CURRICULUM['a2-pron'][4][1].push(append('a2-pron',{k:'gap',p:"This is my sister's coat. The coat belongs to my ___.",a:['sister'],e:"Sister's expresa que algo pertenece a tu hermana."}));
 CURRICULUM['b1-ing'][2][1].push(append('b1-ing',{k:'mc',p:'I remembered ___ the door, so I went back and locked it.',o:['to lock','locking','lock','locked'],a:0,e:'Remember to do: acordarse de hacer una acción pendiente. Remember doing: recordar haberla hecho.'}));
 // La última fase de escucha aplica las estrategias, sin añadir un bloque de lectura vacío.
 CURRICULUM['b1-lis']=[[[0,1,2,3],[0,1,2]]];
})();

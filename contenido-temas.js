/* Temas añadidos en la versión 1.1: se suman al banco de contenido.js */
U.push(
{id:'b1-modals',l:'B1',t:'Verbos modales',teach:`
<table><tr><td><b>must / have to</b></td><td>obligación · <span class="ex">You must wear a seatbelt.</span></td></tr>
<tr><td><b>mustn't</b></td><td>prohibición · <span class="ex">You mustn't park here.</span></td></tr>
<tr><td><b>don't have to</b></td><td>no es necesario (no está prohibido) · <span class="ex">We don't have to go to school.</span></td></tr>
<tr><td><b>should</b></td><td>consejo · <span class="ex">You should go to bed early.</span></td></tr>
<tr><td><b>could / can</b></td><td>habilidad y peticiones corteses · <span class="ex">Could you help me?</span></td></tr>
<tr><td><b>might</b></td><td>posibilidad · <span class="ex">It might rain.</span></td></tr>
<tr><td><b>must / can't</b></td><td>deducción · <span class="ex">He must be at home. / He can't be at home.</span></td></tr></table>`,
 q:[
 {k:'mc',p:"You ___ wear a seatbelt. It's the law.",o:['must','might','could','would'],a:0,e:'must = obligación.'},
 {k:'mc',p:"You ___ park here. It's forbidden.",o:["mustn't","don't have to","needn't","couldn't"],a:0,e:"mustn't = prohibición (don't have to = no es necesario)."},
 {k:'mc',p:'Tomorrow is a holiday, so we ___ go to school.',o:["don't have to","mustn't","can't","shouldn't"],a:0,e:"don't have to = no es obligatorio."},
 {k:'mc',p:'You look tired. You ___ go to bed early.',o:['should','must not','might not','could not'],a:0,e:'should = consejo.'},
 {k:'mc',p:'___ you help me with this box, please?',o:['Could','Must','Might','Ought'],a:0,e:'Could you…? = petición educada.'},
 {k:'mc',p:'It ___ rain later, so take an umbrella.',o:['might','must','have to',"needn't"],a:0,e:'might = posibilidad.'},
 {k:'gap',p:'When I was young, I ___ swim very well. (can)',a:['could'],e:'could = habilidad en el pasado.'},
 {k:'mc',p:'He ___ be at home; his car is outside.',o:['must',"can't","mustn't","needn't"],a:0,e:'must = deducción positiva (estoy casi seguro).'}]},
{id:'b1-art',l:'B1',t:'Artículos y cuantificadores',teach:`
<table><tr><td><b>a / an</b></td><td>a + sonido consonante · an + sonido vocal<br><span class="ex">a book · an umbrella · an hour</span></td></tr>
<tr><td><b>the</b></td><td>algo concreto o único: <span class="ex">the sun, the piano</span></td></tr>
<tr><td><b>much / many</b></td><td>much + incontable · many + contable</td></tr>
<tr><td><b>a few / few</b></td><td>a few = unos pocos (positivo) · few = casi ninguno (negativo)</td></tr>
<tr><td><b>a little / little</b></td><td>igual, con incontables</td></tr>
<tr><td><b>some / any</b></td><td>some en afirmativas y ofrecimientos · any en negativas y preguntas</td></tr></table>`,
 q:[
 {k:'mc',p:'I need ___ umbrella.',o:['a','an','the','some'],a:1,e:'an delante de sonido vocal.'},
 {k:'mc',p:'How ___ money do you have?',o:['many','much','few','a few'],a:1,e:'money es incontable → much.'},
 {k:'mc',p:"There aren't ___ chairs in the room.",o:['any','some','much','a little'],a:0,e:'any en negativas.'},
 {k:'mc',p:'She has ___ friends, so she often feels lonely.',o:['few','a few','a little','little'],a:0,e:'few = casi ninguno (sentido negativo).'},
 {k:'mc',p:"I have ___ time, so let's have a coffee.",o:['a little','a few','few','many'],a:0,e:'time es incontable; a little = algo de (positivo).'},
 {k:'gap',p:'___ sun rises in the east.',a:['the'],e:'the + elemento único.'},
 {k:'mc',p:'My sister plays ___ piano.',o:['the','a','an','some'],a:0,e:'the + instrumento musical.'},
 {k:'mc',p:'Would you like ___ tea?',o:['some','any','a','many'],a:0,e:'some en ofrecimientos.'}]},
{id:'b1-read',l:'B1',t:'Lectura básica',teach:`
<ul><li>Lee el texto <b>entero</b> una vez, sin diccionario, para captar la idea general.</li>
<li>Subraya <b>quién, qué, cuándo y por qué</b>.</li>
<li>Para responder, busca la frase del texto que lo dice con otras palabras.</li></ul>`,
 q:[
 {k:'read',x:'Last summer, Tom and his sister spent two weeks in a small village in Scotland. The weather was cold and rainy, but they enjoyed walking in the hills and meeting local people. Tom says he would like to go back next year, preferably in July.',p:'¿Qué le gustaría hacer a Tom?',o:['Cambiar de destino','Volver a Escocia el próximo año','Quedarse en casa','Viajar en invierno'],a:1,e:'«he would like to go back next year».'},
 {k:'read',x:"Dear Anna, thanks for your invitation to the party on Saturday. Unfortunately, I won't be able to come because I have to work until nine. I'm really sorry! Could we meet for lunch on Sunday instead? Best wishes, Clara.",p:'¿Por qué no puede ir Clara?',o:['Está enferma','Tiene que trabajar','Está de viaje','No le gusta la fiesta'],a:1,e:'«I have to work until nine».'},
 {k:'read',x:'The library opens at 9 a.m. on weekdays and at 10 a.m. on Saturdays. It is closed on Sundays. Students can borrow up to five books for three weeks.',p:'¿Cuántos libros puede llevarse un estudiante?',o:['Tres','Cinco','Diez','Ninguno'],a:1,e:'«up to five books» = hasta cinco.'}]},
{id:'b1-dic',l:'B1',t:'Dictado',teach:`
<p>El <b>dictado</b> entrena a la vez el oído y la ortografía. Escucha, escribe lo que oigas y compara con la transcripción. Puedes repetir el audio y usar la velocidad lenta. No importan las mayúsculas ni la puntuación.</p>`,
 q:[
 {k:'dic',s:"I usually have breakfast at seven o'clock.",p:'Escucha y escribe la frase.',a:["I usually have breakfast at seven o'clock."],e:'Hábitos: adverbio de frecuencia antes del verbo principal.'},
 {k:'dic',s:'Could you tell me how to get to the station?',p:'Escucha y escribe la frase.',a:['Could you tell me how to get to the station?'],e:'Pregunta indirecta: orden afirmativo tras «how».'},
 {k:'dic',s:'She has been learning English for three years.',p:'Escucha y escribe la frase.',a:['She has been learning English for three years.'],e:'Present perfect continuo + for.'},
 {k:'dic',s:'We are going to visit our grandparents next weekend.',p:'Escucha y escribe la frase.',a:['We are going to visit our grandparents next weekend.'],e:'going to para planes.'}]},
{id:'b1-travel',l:'B1',t:'Vocabulario: viajes y trabajo',teach:`
<table><tr><td>book a flight / a room</td><td>reservar un vuelo / una habitación</td></tr>
<tr><td>delayed / cancelled</td><td>retrasado / cancelado</td></tr>
<tr><td>luggage · passport · customs</td><td>equipaje · pasaporte · aduana</td></tr>
<tr><td>apply for a job</td><td>solicitar un empleo</td></tr>
<tr><td>CV · interview · salary</td><td>currículum · entrevista · sueldo</td></tr>
<tr><td>boss · colleague</td><td>jefe · compañero de trabajo</td></tr></table>`,
 q:[
 {k:'mc',p:'We need to ___ our flight at least a month before.',o:['book','hire','rent out','pick'],a:0,e:'book a flight = reservar un vuelo.'},
 {k:'mc',p:'Our flight was ___ because of the fog, so we waited two hours.',o:['delayed','booked','packed','missed'],a:0,e:'delayed = retrasado.'},
 {k:'mc',p:'I have an interview tomorrow, so I need to update my ___.',o:['CV','menu','ticket','receipt'],a:0,e:'CV = currículum.'},
 {k:'mc',p:'She earns a good ___ as a nurse.',o:['salary','prize','fee','tip'],a:0,e:'salary = sueldo.'},
 {k:'mc',p:'My ___ is very strict; he checks everything we do.',o:['boss','guest','neighbour','passenger'],a:0,e:'boss = jefe.'},
 {k:'mc',p:'Remember to show your ___ at passport control.',o:['passport','receipt','recipe','pillow'],a:0,e:'passport = pasaporte.'},
 {k:'gap',p:"I'm going to ___ for a job at the new hotel. (apply)",a:['apply'],e:'apply for a job = solicitar un empleo.'},
 {k:'mc',p:'I missed my train, so I had to ___ a taxi.',o:['take','make','do','get on'],a:0,e:'take a taxi = coger un taxi.'}]},
{id:'b2-link',l:'B2',t:'Conectores',teach:`
<table><tr><td><b>Contraste</b></td><td>although / even though + cláusula · despite / in spite of + sustantivo o -ing · however (nueva frase) · whereas = mientras que</td></tr>
<tr><td><b>Adición</b></td><td>moreover, furthermore, in addition</td></tr>
<tr><td><b>Consecuencia</b></td><td>therefore, consequently, as a result</td></tr>
<tr><td><b>Condición</b></td><td>provided that · unless · otherwise (si no)</td></tr>
<tr><td><b>Finalidad</b></td><td>so that, in order to</td></tr></table>`,
 q:[
 {k:'mc',p:'___ it was raining, we went for a walk.',o:['Although','Despite','However','Because'],a:0,e:'Although + sujeto + verbo.'},
 {k:'mc',p:'___ the rain, we went for a walk.',o:['Although','Despite','However','Even though'],a:1,e:'Despite + sustantivo.'},
 {k:'mc',p:'The hotel was cheap. ___, it was very clean.',o:['Moreover','Whereas','Unless','Although'],a:0,e:'Moreover = además.'},
 {k:'mc',p:'He studied hard; ___, he passed with high marks.',o:['consequently','however','whereas','unless'],a:0,e:'consequently = en consecuencia.'},
 {k:'mc',p:'You can borrow the car ___ you drive carefully.',o:['provided that','whereas','despite','otherwise'],a:0,e:'provided that = siempre que (condición).'},
 {k:'mc',p:"Take a coat; ___, you'll be cold.",o:['otherwise','moreover','although','therefore'],a:0,e:'otherwise = si no, de lo contrario.'},
 {k:'mc',p:'My brother loves sport, ___ I prefer reading.',o:['whereas','despite','unless','so that'],a:0,e:'whereas = mientras que (contraste).'},
 {k:'mc',p:'He went to bed early ___ he could get up at five.',o:['so that','although','however','despite'],a:0,e:'so that = para que (finalidad).'}]},
{id:'b2-passive',l:'B2',t:'Pasiva, causativa y estilo indirecto',teach:`
<table><tr><td><b>Pasiva</b></td><td>be + participio · <span class="ex">The bridge was built in 1990.</span></td></tr>
<tr><td><b>Pasiva continua</b></td><td><span class="ex">The house is being painted.</span></td></tr>
<tr><td><b>Causativa</b></td><td>have + objeto + participio (alguien lo hace por ti) · <span class="ex">I had my car repaired.</span></td></tr>
<tr><td><b>Estilo indirecto</b></td><td>los tiempos retroceden: will → would, is → was · <span class="ex">He said he would call me the next day.</span></td></tr>
<tr><td><b>told + persona + to</b></td><td><span class="ex">He told me to close the window.</span></td></tr></table>`,
 q:[
 {k:'mc',p:'The bridge ___ in 1990.',o:['was built','built','is built','has built'],a:0,e:'Pasiva en pasado simple.'},
 {k:'mc',p:'I had my car ___ yesterday.',o:['repaired','repair','repairing','to repair'],a:0,e:'have + objeto + participio.'},
 {k:'kw',p:'"They are painting the house." → The house ___ painted. (BEING)',a:['is being'],e:'Pasiva en presente continuo: is being + participio.'},
 {k:'mc',p:'She said she ___ tired.',o:['was','is','has been','will be'],a:0,e:'Estilo indirecto: is → was.'},
 {k:'kw',p:'"I will call you tomorrow," he said. → He said he ___ me the next day. (CALL)',a:['would call'],e:'will → would en estilo indirecto.'},
 {k:'mc',p:'He told me ___ the window.',o:['to close','close','closing','that close'],a:0,e:'told + persona + to + infinitivo.'},
 {k:'gap',p:'The letter ___ (send) yesterday. It should arrive soon.',a:['was sent'],e:'Pasiva en pasado simple.'},
 {k:'kw',p:'"Someone stole my wallet." → My wallet ___ . (STOLEN)',a:['was stolen','has been stolen'],e:'Pasiva: was/has been + participio.'}]},
{id:'b2-topics',l:'B2',t:'Vocabulario: medio ambiente y tecnología',teach:`
<table><tr><td>renewable energy</td><td>energía renovable</td></tr><tr><td>global warming</td><td>calentamiento global</td></tr>
<tr><td>carbon footprint</td><td>huella de carbono</td></tr><tr><td>recycle · landfill</td><td>reciclar · vertedero</td></tr>
<tr><td>download · update</td><td>descargar · actualizar</td></tr><tr><td>password · device</td><td>contraseña · dispositivo</td></tr></table>`,
 q:[
 {k:'mc',p:'Solar and wind are examples of ___ energy.',o:['renewable','nuclear','fossil','heavy'],a:0,e:'renewable = renovable.'},
 {k:'mc',p:'Burning fossil fuels contributes to global ___.',o:['warming','heating up','weather','cooling'],a:0,e:'global warming.'},
 {k:'mc',p:'We should ___ paper and plastic instead of throwing them away.',o:['recycle','waste','pollute','ignore'],a:0,e:'recycle = reciclar.'},
 {k:'mc',p:'Your ___ is the amount of CO2 you produce.',o:['carbon footprint','landfill','habitat','harvest'],a:0,e:'carbon footprint = huella de carbono.'},
 {k:'mc',p:'Please ___ the latest version of the app.',o:['download','upload to','dial','record'],a:0,e:'download = descargar.'},
 {k:'mc',p:'For security, choose a strong ___.',o:['password','landfill','habitat','species'],a:0,e:'password = contraseña.'},
 {k:'mc',p:'You can use any ___, such as a phone or a tablet.',o:['device','species','harvest','landfill'],a:0,e:'device = dispositivo.'},
 {k:'wf',p:'The ___ of new technology has changed our lives. (DEVELOP)',a:['development'],e:'develop → development (sustantivo).'}]},
{id:'b2-dic',l:'B2',t:'Dictado',teach:`
<p>Escucha atentamente las <b>formas débiles</b> (have, would, to) y las contracciones: en inglés hablado casi no se pronuncian, pero hay que escribirlas.</p>`,
 q:[
 {k:'dic',s:'If I had known about the problem, I would have called you.',p:'Escucha y escribe la frase.',a:['If I had known about the problem, I would have called you.'],e:'Tercer condicional.'},
 {k:'dic',s:'She suggested going to the cinema after the lesson.',p:'Escucha y escribe la frase.',a:['She suggested going to the cinema after the lesson.'],e:'suggest + gerundio.'},
 {k:'dic',s:'Neither of the two options seems entirely satisfactory.',p:'Escucha y escribe la frase.',a:['Neither of the two options seems entirely satisfactory.'],e:'neither of + verbo en singular.'},
 {k:'dic',s:'The meeting has been postponed until further notice.',p:'Escucha y escribe la frase.',a:['The meeting has been postponed until further notice.'],e:'Pasiva en present perfect.'}]},
{id:'c1-emph',l:'C1',t:'Énfasis: oraciones hendidas',teach:`
<table><tr><td><b>It was … that/who</b></td><td><span class="ex">It was my brother who broke the window.</span></td></tr>
<tr><td><b>What … is/was</b></td><td><span class="ex">What I need is a good night's sleep.</span></td></tr>
<tr><td><b>All I …</b></td><td><span class="ex">All I ask is a little patience.</span></td></tr>
<tr><td><b>It was not until … that</b></td><td><span class="ex">It was not until midnight that the guests left.</span></td></tr></table>
<p>Sirven para poner el foco en una información concreta.</p>`,
 q:[
 {k:'mc',p:'It was my brother ___ broke the window.',o:['who','whom','what','which'],a:0,e:'It was + persona + who.'},
 {k:'mc',p:"___ I need is a good night's sleep.",o:['What','That','Which','It'],a:0,e:'What I need is… (oración hendida).'},
 {k:'mc',p:'___ was in 2015 that they moved to Madrid.',o:['It','That','What','There'],a:0,e:'It was + complemento + that.'},
 {k:'mc',p:'All I ask ___ a little patience.',o:['is','are','has','be'],a:0,e:'All I ask is…'},
 {k:'mc',p:'The thing that surprised me most ___ how quiet it was.',o:['was','were','is being','has'],a:0,e:'The thing that… was…'},
 {k:'mc',p:'It was not until midnight ___ the guests left.',o:['that','when','which','who'],a:0,e:'It was not until… that…'},
 {k:'mc',p:'What he did ___ apologise.',o:['was','were','is being','had'],a:0,e:'What he did was (to) apologise.'}]},
{id:'c1-acad',l:'C1',t:'Vocabulario académico',teach:`
<table><tr><td>suggest · imply</td><td>sugerir · implicar</td></tr><tr><td>evidence</td><td>pruebas (incontable)</td></tr>
<tr><td>undermine</td><td>socavar, debilitar</td></tr><tr><td>substantiate</td><td>fundamentar con datos</td></tr>
<tr><td>predominantly</td><td>principalmente</td></tr><tr><td>notion</td><td>noción, idea</td></tr>
<tr><td>subsequent</td><td>posterior</td></tr></table>`,
 q:[
 {k:'mc',p:'The study ___ that diet affects mood.',o:['suggests','discusses to','explains for','tells to'],a:0,e:'suggest + that.'},
 {k:'mc',p:'There is little ___ to support this claim.',o:['evidence','prove','argument of','fact for'],a:0,e:'evidence es incontable.'},
 {k:'mc',p:'The new data ___ the original hypothesis.',o:['undermines','underlines to','undergoes','undertakes'],a:0,e:'undermine = socavar.'},
 {k:'mc',p:'Researchers need to ___ their claims with data.',o:['substantiate','substitute','subscribe','subsidise'],a:0,e:'substantiate = fundamentar con pruebas.'},
 {k:'mc',p:'The audience was ___ made up of students.',o:['predominantly','previously','precisely','presumably'],a:0,e:'predominantly = principalmente.'},
 {k:'mc',p:'The ___ of free will is debated by philosophers.',o:['notion','motion','potion','lotion'],a:0,e:'notion = noción, concepto.'},
 {k:'mc',p:'This ___ evidence suggests otherwise.',o:['subsequent','subsequently','subsequence','subsequents'],a:0,e:'Adjetivo delante del sustantivo.'},
 {k:'wf',p:'The results were ___ of the original theory. (SUPPORT)',a:['supportive'],e:'support → supportive (adjetivo).'}]},
{id:'c1-dic',l:'C1',t:'Dictado',teach:`
<p>En C1 las frases son largas y con <b>inversiones</b>. Divide mentalmente en bloques y escribe cada bloque antes de pasar al siguiente.</p>`,
 q:[
 {k:'dic',s:'Not only did the project exceed expectations, but it also came in under budget.',p:'Escucha y escribe la frase.',a:['Not only did the project exceed expectations, but it also came in under budget.'],e:'Inversión tras «Not only».'},
 {k:'dic',s:'Hardly anyone realised how serious the situation had become.',p:'Escucha y escribe la frase.',a:['Hardly anyone realised how serious the situation had become.'],e:'Hardly anyone = casi nadie.'},
 {k:'dic',s:'She would have accepted the offer had she been given more time.',p:'Escucha y escribe la frase.',a:['She would have accepted the offer had she been given more time.'],e:'Tercer condicional invertido.'}]},
{id:'c2-conn',l:'C2',t:'Cohesión y conectores formales',teach:`
<table><tr><td><b>albeit</b></td><td>aunque (+ adjetivo/adverbio) · <span class="ex">risky, albeit successful</span></td></tr>
<tr><td><b>nonetheless</b></td><td>no obstante</td></tr><tr><td><b>hence</b></td><td>de ahí, por eso</td></tr>
<tr><td><b>notwithstanding</b></td><td>a pesar de (+ sustantivo)</td></tr>
<tr><td><b>whereby</b></td><td>según el cual, mediante el cual</td></tr>
<tr><td><b>insofar as</b></td><td>en la medida en que</td></tr><tr><td><b>thereby</b></td><td>con lo cual</td></tr></table>`,
 q:[
 {k:'mc',p:'The plan was risky, ___ ultimately successful.',o:['albeit','whereas','notwithstanding','hence'],a:0,e:'albeit + adjetivo = aunque.'},
 {k:'mc',p:'The results were disappointing. ___, the team remained optimistic.',o:['Nonetheless','Hence','Thereby','Insofar'],a:0,e:'Nonetheless = no obstante.'},
 {k:'mc',p:'Costs rose sharply; ___, prices had to increase.',o:['hence','albeit','nonetheless','whereby'],a:0,e:'hence = por eso.'},
 {k:'mc',p:'___ the objections, the project went ahead.',o:['Notwithstanding','Albeit','Hence','Whereas'],a:0,e:'Notwithstanding + sustantivo.'},
 {k:'mc',p:'They introduced a system ___ employees can work from anywhere.',o:['whereby','hence','albeit','nonetheless'],a:0,e:'whereby = mediante el cual.'},
 {k:'mc',p:'The theory is valid only ___ as it applies to small samples.',o:['insofar','whereby','hence','albeit'],a:0,e:'insofar as = en la medida en que.'},
 {k:'mc',p:'He signed the contract, ___ securing the deal.',o:['thereby','albeit','hence','whereas'],a:0,e:'thereby + -ing = con lo cual.'}]},
{id:'c2-idioms',l:'C2',t:'Modismos y expresiones avanzadas',teach:`
<table><tr><td>a double-edged sword</td><td>algo con ventajas e inconvenientes</td></tr>
<tr><td>the elephant in the room</td><td>un problema evidente que todos evitan</td></tr>
<tr><td>read between the lines</td><td>entender lo implícito</td></tr>
<tr><td>on thin ice</td><td>en una situación arriesgada</td></tr>
<tr><td>a storm in a teacup</td><td>mucho ruido por nada</td></tr>
<tr><td>turn a blind eye</td><td>hacer la vista gorda</td></tr>
<tr><td>a pyrrhic victory</td><td>victoria que cuesta demasiado</td></tr></table>`,
 q:[
 {k:'mc',p:'"Social media is a double-edged sword" means it has…',o:['only advantages','both advantages and disadvantages','no effect','a very sharp design'],a:1,e:'Double-edged sword = pros y contras.'},
 {k:'mc',p:'"Nobody mentioned the elephant in the room" means…',o:['a large animal','an obvious problem that everyone avoids discussing','a funny joke','an expensive item'],a:1,e:'The elephant in the room = problema evidente que se evita.'},
 {k:'mc',p:'"You have to read between the lines" means…',o:['read slowly','understand the hidden meaning','skip lines','read aloud'],a:1,e:'Read between the lines = entender lo implícito.'},
 {k:'mc',p:'After missing three deadlines, he is on thin ___.',o:['ice','water','paper','glass'],a:0,e:'On thin ice = en terreno peligroso.'},
 {k:'mc',p:'"It\'s a storm in a teacup" means…',o:['a serious crisis','a big fuss over something unimportant','a weather warning','a tea party'],a:1,e:'Storm in a teacup = mucho ruido por nada.'},
 {k:'mc',p:'The manager chose to turn a ___ eye to the late arrivals.',o:['blind','closed','shut','false'],a:0,e:'Turn a blind eye = hacer la vista gorda.'},
 {k:'mc',p:'"A pyrrhic victory" is a victory that…',o:['was easy','comes at too great a cost','is celebrated','was unexpected'],a:1,e:'Pyrrhic victory = victoria pírrica.'}]},
{id:'c2-dic',l:'C2',t:'Dictado',teach:`
<p>En C2 el dictado incluye <b>registro formal</b> y estructuras poco frecuentes. Fíjate en las preposiciones y colocaciones: <i>incumbent upon, insofar as, were it not for</i>.</p>`,
 q:[
 {k:'dic',s:'Insofar as the evidence permits, one can only conclude that the policy has failed.',p:'Escucha y escribe la frase.',a:['Insofar as the evidence permits, one can only conclude that the policy has failed.'],e:'Insofar as = en la medida en que.'},
 {k:'dic',s:'Were it not for her persistence, the project would never have been completed.',p:'Escucha y escribe la frase.',a:['Were it not for her persistence, the project would never have been completed.'],e:'Were it not for + would have.'},
 {k:'dic',s:'It is incumbent upon the committee to ensure that every voice is heard.',p:'Escucha y escribe la frase.',a:['It is incumbent upon the committee to ensure that every voice is heard.'],e:'Incumbent upon = es obligación de.'}]}
);
/* Orden de la ruta: B1 → B2 → C1 → C2 (las unidades nuevas se mezclan por nivel en la interfaz) */

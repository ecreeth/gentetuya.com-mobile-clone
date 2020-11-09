import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {dateToHumans} from '../utils';

const DATA = [
  {
    id: 73761,
    date: '2020-11-08T20:11:18',
    modified: '2020-11-08T20:13:18',
    status: 'publish',
    link:
      'https://www.gentetuya.com/el-ex-presidente-george-w-bush-felicito-a-joe-biden-por-su-triunfo-en-las-elecciones-y-destaco-los-logros-de-donald-trump/',
    title: {
      rendered:
        'El ex presidente George W. Bush felicitó a Joe Biden por su triunfo en las elecciones y destacó los logros de Donald Trump',
    },
    content: {
      rendered:
        '\n<p>El ex presidente de Estados Unidos,&nbsp;<strong>George W. Bush, felicitó este domingo a Joe Biden y a su compañera de fórmula Kamala Harris por su triunfo en las elecciones, y destacó los logros de Donald Trump&nbsp;</strong>durante sus cuatro años de gobierno.</p>\n\n\n\n<p>“Acabo de hablar con el presidente electo de los Estados Unidos, Joe Bide. Le extendí mis cálidas felicitaciones y le agradecí el mensaje patriótico que entregó anoche. También llamé a Kamala Harris para felicitarla por su histórica elección a la vicepresidencia”, expresó el ex mandatario (2001-2009) en un comunicado.</p>\n\n\n\n<p><mark><strong>“Aunque tenemos diferencias políticas, sé que Joe Biden es un buen hombre, que ha ganado su oportunidad de liderar y unificar nuestro país.</strong></mark>&nbsp;El Presidente electo reiteró que mientras se postuló como demócrata, gobernará para todos los estadounidenses. Le ofrecí lo mismo que le ofrecí al Presidente Trump y a Obama: mis oraciones por su éxito, y mi promesa de ayudar en todo lo que pueda”, agregó.</p>\n\n\n\n<p>Por su parte, también destacó la gestión de Trump, y aseguró que las voces de sus seguidores seguirán siendo escuchadas por los republicanos.<img alt="El comunicado del ex presidente George W. Bush" height="3034" src="https://www.infobae.com/new-resizer/J3FTjq-pqDjlPS8Ic0TcUd1HqBk=/420x630/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/DO2DJA5K5BG6XGQYF6PLBG3BCY.jpg" width="1920">El comunicado del ex presidente George W. Bush</p>\n\n\n\n<p><strong>“Quiero felicitar al presidente Trump y a sus seguidores por una campaña muy reñida. Se ha ganado los votos de más de 70 millones de estadounidenses -un logro político extraordinario-. Han hablado y sus voces seguirán siendo escuchadas por los republicanos electos en todos los niveles de gobierno”</strong>, escribió el ex presidente republicano.</p>\n\n\n\n<p><a href="https://www.infobae.com/america/eeuu/2020/11/08/joe-biden-en-su-primer-discurso-como-presidente-electo-de-eeuu-la-gente-de-esta-nacion-ha-hablado-y-nos-otorgo-una-victoria-clara-con-la-mayor-cantidad-de-votos-jamas-alcanzada-en-una-eleccion/" target="_blank" rel="noreferrer noopener">Biden brindó este sábado por la noche su primer discurso tras la victoria en las urnas frente a Trump</a>.&nbsp;<strong>“La gente de esta nación ha hablado y nos otorgó una victoria clara con la mayor cantidad de votos jamás alcanzada en una elección, 74 millones de votos”,</strong>&nbsp;afirmó.<img alt="El presidente electo de EEUU, Joe Biden, durante un discurso en Wilmington, el sábado por la noche (EFE/Jim Lo Scalzo)" height="3305" src="https://www.infobae.com/new-resizer/FGiaUAuQN5kfLRWJIY9kvLhG_5c=/420x280/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/FLAI4XS46JBG7C5RR5CIUP73OE.jpg" width="4959">El presidente electo de EEUU, Joe Biden, durante un discurso en Wilmington, el sábado por la noche (EFE/Jim Lo Scalzo)</p>\n\n\n\n<p>“Busqué la Presidencia para restaurar el alma de América, para reconstruir la columna vertebral de esta nación -la clase media-, y para hacer que EEUU sea respetado en todo el mundo de nuevo”, señaló el líder demócrata desde un escenario en Wilmington, la ciudad de Delaware donde reside.</p>\n\n\n\n<p>El líder del partido demócrata se refirió en su discurso a los seguidores del actual presidente de EEUU: “Ustedes, que apoyan a Trump, entiendo que estén decepcionados. Yo he perdido un par de veces. Pero ahora démonos un chance<strong>. Es hora de bajar la temperatura, de vernos otra vez, de dejar de tratar a nuestros oponentes como enemigos. No lo son. Es hora de sanar”.</strong></p>\n\n\n\n<p>Biden hizo un llamado para dejar atrás la tensiones que han dejado las recientes elecciones en las que hubo que esperar hasta cuatro días para conocer cuál de los candidatos contaba con los electores suficientes para hacerse con la Casa Blanca, a pesar de que en algunos estados aún no se conocer el resultado final y en otros se hará un reconteo de los votos.</p>\n\n\n\n<p><strong>“Hagamos que esta sombría era de demonización en EEUU empiece a terminar aquí y ahora. Soy un demócrata orgulloso, pero gobernaré como presidente estadounidense para todos”</strong>, aseguró Biden.</p>\n<!-- AddThis Advanced Settings generic via filter on the_content --><!-- AddThis Share Buttons generic via filter on the_content -->',
    },
    excerpt: {
      rendered:
        '<p>El ex presidente de Estados Unidos,&nbsp;George W. Bush, felicitó este domingo a Joe Biden y a su compañera de fórmula Kamala Harris por su triunfo en las elecciones, y destacó los logros de Donald Trump&nbsp;durante sus cuatro años de gobierno. “Acabo de hablar con el presidente electo de los Estados Unidos, Joe Bide. Le extendí [&hellip;]<!-- AddThis Advanced Settings generic via filter on get_the_excerpt --><!-- AddThis Share Buttons generic via filter on get_the_excerpt --></p>\n',
    },
    author: 3,
    jetpack_featured_media_url:
      'https://www.gentetuya.com/wp-content/uploads/2020/11/Screenshot_20201108-161229_Chrome.jpg',
  },
  {
    id: 73758,
    date: '2020-11-08T16:26:21',
    modified: '2020-11-08T16:26:23',
    status: 'publish',
    link:
      'https://www.gentetuya.com/guatemala-al-menos-150-muertos-por-eta-mientras-continuan-las-busquedas/',
    title: {
      rendered:
        'Guatemala: Al menos 150 muertos por Eta, mientras continúan las búsquedas',
    },
    content: {
      rendered:
        '\n<p>Unas<strong>&nbsp;150 personas murieron</strong>&nbsp;o están desaparecidas en una aldea indígena del norte de&nbsp;<strong>Guatemala</strong>&nbsp;tras un deslave provocado por el devastador paso del<strong>&nbsp;ciclón Eta&nbsp;</strong>por Centroamérica, informó este viernes el gobierno de ese país.</p>\n\n\n\n<p>Un deslizamiento de tierra sepultó cerca de 150 viviendas de la aldea Quejá, en el municipio norteño de San Cristóbal Verapaz, y se teme que gran parte de sus ocupantes murieron, dijo el&nbsp;<strong>presidente, Alejandro Giammattei</strong>.</p>\n\n\n\n<p>“Calculamos que entre <strong>fallecidos y</strong> <strong>desaparecidos</strong> las cifras no oficiales nos arrojan más o menos 150 muertos”, indicó el mandatario en rueda de prensa.</p>\n\n\n\n<p>Una brigada del Ejército llegó este viernes a la aldea Quejá para las tareas de&nbsp;<strong>búsqueda</strong>&nbsp;de los damnificados y llevar ayuda a los sobrevivientes. Giammattei detalló que no fue hasta ayer en la tarde que “miembros de la quinta brigada del&nbsp;<strong>Ejército</strong>&nbsp;que arribaron a Quejá y tuvieron que hacer el recorrido por la montaña, a pie, para poder llegar”, dada las condiciones del clima en el país centroamericano, donde continúa la lluvia al norte y este del país.</p>\n\n\n\n<p>Además, en las aldeas aledañas Chapenal y Saquixim hay en suma 120 personas evacuadas y un centenar de viviendas inundadas, además de “mucha gente que aún no quiere salir de casa”, como indicó el presidente.</p>\n\n\n\n<p>Según el mandatario, hay unas 2.500 personas que han perdido todas sus pertenencias en el sector de las tres aldeas cercanas a San Cristóbal Verapaz “y aún continúan los derrumbes”.</p>\n\n\n\n<figure><iframe allowfullscreen="true" class="" src="https://platform.twitter.com/embed/index.html?dnt=true&amp;embedId=twitter-widget-1&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1324946371267399680&amp;lang=es&amp;origin=https%3A%2F%2Fwww.tn8.tv%2Famerica-latina%2F524591-guatemala-150-muertos-eta-continuan-busquedas%2F&amp;theme=light&amp;widgetsVersion=ed20a2b%3A1601588405575&amp;width=550px"></iframe></figure>\n\n\n\n<p>Los&nbsp;<strong>muertos</strong>&nbsp;de Guatemala se suman a una veintena registrados en los demás países del istmo por el paso de Eta, que el martes arremetió con furia contra el Caribe Norte de&nbsp;<strong>Nicaragua</strong>&nbsp;como&nbsp;<strong>huracán</strong>&nbsp;<strong>categoría 4</strong>.</p>\n\n\n\n<p>La región continuó sufriendo este viernes los efectos del temporal, con&nbsp;<strong>lluvias</strong>&nbsp;y neblina en algunas zonas, mientras las autoridades evalúan la devastación que dejó el ciclón desde Guatemala hasta Panamá, antes de dirigirse nuevamente al&nbsp;<strong>Caribe</strong>.</p>\n\n\n\n<p><strong>Te puede interesar:&nbsp;&nbsp;<a href="https://tn8.tv/america-latina/524478-eta-salvador-fallecido-1990-evacuados/">Eta se aleja de El Salvador dejando un fallecido y 1.990 evacuados</a></strong></p>\n\n\n\n<p>El ciclón salió del norte de Honduras la tarde del jueves convertido en depresión tropical y volvió al Caribe, donde podría fortalecerse nuevamente a tormenta tropical mientras avanza hacia&nbsp;<strong>Cuba</strong>, según proyecciones del Centro Nacional de Huracanes (NHC) de Estados Unidos.</p>\n\n\n\n<p>Autoridades cubanas comenzaron a prepararse para contener el&nbsp;<strong>impacto</strong>&nbsp;del ciclón este domingo.&nbsp;</p>\n\n\n\n<p>En total, la depresión tropical Eta ha afectado a 75 mil personas en&nbsp;<strong>Guatemala</strong>&nbsp;según las cifras que ofreció el mandatario este mediodía en su comparecencia ante los medios de comunicación.</p>\n\n\n\n<figure><iframe allowfullscreen="true" class="" src="https://platform.twitter.com/embed/index.html?dnt=true&amp;embedId=twitter-widget-2&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1324868207413514243&amp;lang=es&amp;origin=https%3A%2F%2Fwww.tn8.tv%2Famerica-latina%2F524591-guatemala-150-muertos-eta-continuan-busquedas%2F&amp;theme=light&amp;widgetsVersion=ed20a2b%3A1601588405575&amp;width=550px"></iframe></figure>\n\n\n\n<p>Por su parte, el ministro de Agricultura, Ganadería y Alimentación, José Ángel López, indicó que Eta afectó las cosechas de al menos 6.000 familias y calculó que hay alrededor de 3.100 hectáreas de plantaciones dañadas.</p>\n\n\n\n<p>Pero tanto los&nbsp;<strong>muertos</strong>, los desaparecidos y los daños en viviendas y hortalizas son apenas un estimado dada la inaccesibilidad de algunas zonas donde ni siquiera ha podido llegar la ayuda en helicóptero por la nubosidad y lluvia provocadas por Eta.En el norteño departamento de Peten y en Quiché, además “recién se había sembrado en octubre y noviembre la segunda siembra de maíz y frijol y algunas de estas nuevas siembres se perdieron”, dijo López.</p>\n\n\n\n<p>Giammattei insistió en los recuerdos que le han producido los&nbsp;<strong>efectos</strong>&nbsp;de Eta a la catástrofe del huracán categoría cinco&nbsp;<strong>Mitch</strong>, que hace 22 años devastó la región centroamericana con sus vientos de más de 250 kilómetros.</p>\n<!-- AddThis Advanced Settings generic via filter on the_content --><!-- AddThis Share Buttons generic via filter on the_content -->',
    },
    excerpt: {
      rendered:
        '<p>Unas&nbsp;150 personas murieron&nbsp;o están desaparecidas en una aldea indígena del norte de&nbsp;Guatemala&nbsp;tras un deslave provocado por el devastador paso del&nbsp;ciclón Eta&nbsp;por Centroamérica, informó este viernes el gobierno de ese país. Un deslizamiento de tierra sepultó cerca de 150 viviendas de la aldea Quejá, en el municipio norteño de San Cristóbal Verapaz, y se teme que [&hellip;]<!-- AddThis Advanced Settings generic via filter on get_the_excerpt --><!-- AddThis Share Buttons generic via filter on get_the_excerpt --></p>\n',
    },
    author: 3,
    jetpack_featured_media_url:
      'https://www.gentetuya.com/wp-content/uploads/2020/11/f9b8a55c6e20ad233d5ca9652ba65271.jpg',
  },
  {
    id: 73743,
    date: '2020-11-08T15:15:43',
    modified: '2020-11-08T15:15:45',
    status: 'publish',
    link:
      'https://www.gentetuya.com/kamala-harris-vicepresidenta-electa-de-eeuu-sere-la-primera-mujer-en-este-puesto-pero-no-la-ultima/',
    title: {
      rendered:
        'Kamala Harris, vicepresidenta electa de EEUU: “Seré la primera mujer en este puesto, pero no la última”',
    },
    content: {
      rendered:
        '\n<p>La primera vicepresidenta electa de Estados Unidos, según proyecciones de los medios,&nbsp;<strong>Kamala Harris ha señalado este sábado en su discurso de agradecimiento a los votantes que será “la primera mujer en el puesto, pero no la última”.</strong></p>\n\n\n\n<p>Harris ha agradecido a las mujeres que lucharon por sus Derechos y el voto antes que ella y prepararon el camino.</p>\n\n\n\n<p><strong>Asimismo, también ha hecho mención a las cifras récord de participación y los desafíos en el cargo como la pandemia.</strong></p>\n\n\n\n<p><strong>“Hoy empieza el trabajo de verdad”</strong>, ha concluido antes de dar paso al presidente electo, Joe Biden.</p>\n\n\n\n<p>Harris, quien fue la primera en tomar la palabra en el acto en el que Joe Biden dio sus primeras palabras como presidente electo, declaró que&nbsp;<strong>“la democracia no es un estado, sino un acto. La democracia es tan fuerte como nuestra capacidad de luchar por ella”.&nbsp;</strong>Además remarcó que “proteger la democracia necesita sacrificio, pero hay alegría en eso porque nosotros tenemos el poder de construir nuestro futuro. Con su voto han elegido la unidad, la decencia y la verdad”.</p>\n\n\n\n<p><strong>la demócrata consideró que la elección de Joe Biden a la Casa Blanca marca “un nuevo día para Estados Unidos”</strong>. “Cuando se sometió a votación nuestra democracia en esta elección, con el alma de Estados Unidos en juego mientras el mundo miraba, se abrió un nuevo día para Estados Unidos”, afirmó.<img alt="Kamala Harris y Joe Biden " height="3708" src="https://www.infobae.com/new-resizer/41xKdH-wWsvXzmLqyMD53_-NdN4=/420x280/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/GDNQRKETC3Q4U2NX3KNJ3GSDMI.jpg" width="5562">Kamala Harris y Joe Biden</p>\n\n\n\n<p>La futura vicepresidenta hizo una mención especial a sus familiares quienes fueron inmigrantes que llegaron a Estados Unidos en búsqueda de un mejor futuro. “Recuerdo a mi madre y a las generaciones de mujeres negras, asiáticas, latinas, indígenas y las mujeres que pelearon a lo largo de la historia de nuestro país y pavimentaron el camino para llegar a esta noche.&nbsp;<strong>Seré la primera mujer en mi cargo, pero no la última”</strong>.</p>\n\n\n\n<p>Varios cientos de personas se concentraron este sábado a los pies del escenario donde el presidente electo de EEUU, Joe Biden, brindó su<strong>&nbsp;discurso de victoria&nbsp;</strong>acompañado por su esposa Jill Biden, la vicepresidenta electa Kamala Harris y por Doug Emhoff, cónyuge de la senadora.</p>\n\n\n\n<p>Muchos seguidores llegaron al&nbsp;<strong>aparcamiento del Chase Center, en Wilmington</strong>, donde el ex vicepresidente del gobierno de Barack Obama se dirigió por fin a unos simpatizantes que ya se habían acercado allí varias noches con la esperanza de escuchar el discurso en el que reconocería su victoria y marcaría el inicio del fin de la Presidencia del republicano Donald Trump</p>\n\n\n\n<p>Este tipo de concentración se puso de moda en la campaña demócrata para mantener la distancia social durante la pandemia y en esta ocasión los organizadores colocaron dos grandes pantallas para el que fue el discurso más esperado desde que cerraron los colegios electorales la noche de martes.</p>\n\n\n\n<p><strong>Biden, un político tradicional que lleva persiguiendo la Presidencia desde la década de 1980, finalmente verá su sueño cumplido en enero, tras superar este sábado la barrera de los 270 delegados en el Colegio Electoral.</strong></p>\n<!-- AddThis Advanced Settings generic via filter on the_content --><!-- AddThis Share Buttons generic via filter on the_content -->',
    },
    excerpt: {
      rendered:
        '<p>La primera vicepresidenta electa de Estados Unidos, según proyecciones de los medios,&nbsp;Kamala Harris ha señalado este sábado en su discurso de agradecimiento a los votantes que será “la primera mujer en el puesto, pero no la última”. Harris ha agradecido a las mujeres que lucharon por sus Derechos y el voto antes que ella y [&hellip;]<!-- AddThis Advanced Settings generic via filter on get_the_excerpt --><!-- AddThis Share Buttons generic via filter on get_the_excerpt --></p>\n',
    },
    author: 3,
    jetpack_featured_media_url:
      'https://www.gentetuya.com/wp-content/uploads/2020/11/JTT3HHJJOQIOBUTN77C3Q6NALY.jpg',
  },
  {
    id: 73740,
    date: '2020-11-08T15:14:53',
    modified: '2020-11-08T15:14:55',
    status: 'publish',
    link:
      'https://www.gentetuya.com/luis-arce-juro-como-nuevo-presidente-de-bolivia-en-el-retorno-del-mas-al-poder/',
    title: {
      rendered:
        'Luis Arce juró como nuevo presidente de Bolivia en el retorno del MAS al poder',
    },
    content: {
      rendered:
        '\n<p>El economista de izquierda&nbsp;<strong>Luis Arce</strong>, delfín del ex mandatario&nbsp;<strong>Evo Morales,</strong>&nbsp;<strong>asumió este domingo la presidencia de Bolivia&nbsp;</strong>en un acto realizado en el Congreso bicameral de La Paz, tras ganar las elecciones generales el pasado mes con un contundente 55% de los votos.</p>\n\n\n\n<p>El vicepresidente aymara <strong>David Choquehuanca</strong>, investido previamente en el cargo, <strong>fue el encargado de tomar juramento al nuevo mandatario ante la presencia de los nuevos parlamentarios e invitados especiales como el rey Felipe VI de España y los presidentes de Argentina, Colombia y Paraguay.</strong>El nuevo vicepresidente David Choquehuanca durante su juramentación en la plaza. (ABI / AFP)</p>\n\n\n\n<p>La asunción de Arce, ex ministro de Economía de Morales (2006-2019),&nbsp;<strong>marca el retorno al poder del Movimiento Al Socialismo</strong>&nbsp;tras la renuncia del exmandatario en junio de 2019 en medio de una fuerte convulsión social.<img alt="El presidente electo de Bolivia Luis Arce llega a la ceremonia de investidura en La Paz, Bolivia (REUTERS/David Mercado)" height="2839" src="https://www.infobae.com/new-resizer/irWpf7tvzAKN7hhhaE1y4ESxkrs=/420x280/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/IVDA7SJOLSMXPDMYQBGIOS4WMU.jpg" width="4259">El presidente electo de Bolivia Luis Arce llega a la ceremonia de investidura en La Paz, Bolivia (REUTERS/David Mercado)</p>\n\n\n\n<p><em>Noticia en desarrollo&#8230;</em></p>\n<!-- AddThis Advanced Settings generic via filter on the_content --><!-- AddThis Share Buttons generic via filter on the_content -->',
    },
    excerpt: {
      rendered:
        '<p>El economista de izquierda&nbsp;Luis Arce, delfín del ex mandatario&nbsp;Evo Morales,&nbsp;asumió este domingo la presidencia de Bolivia&nbsp;en un acto realizado en el Congreso bicameral de La Paz, tras ganar las elecciones generales el pasado mes con un contundente 55% de los votos. El vicepresidente aymara David Choquehuanca, investido previamente en el cargo, fue el encargado de tomar juramento [&hellip;]<!-- AddThis Advanced Settings generic via filter on get_the_excerpt --><!-- AddThis Share Buttons generic via filter on get_the_excerpt --></p>\n',
    },
    author: 3,
    jetpack_featured_media_url:
      'https://www.gentetuya.com/wp-content/uploads/2020/11/2VZQV72EMNDKLJH6B4VNJBN6MA.jpg',
  },
  {
    id: 73533,
    date: '2020-11-07T22:01:09',
    modified: '2020-11-07T22:01:12',
    status: 'publish',
    link:
      'https://www.gentetuya.com/el-coe-elevo-a-nueve-las-provincias-en-alerta-verde-por-la-influencia-directa-de-la-tormenta-tropical-eta-sobre-el-territorio-nacional/',
    title: {
      rendered:
        'El COE elevó a nueve las provincias en alerta verde por la influencia directa de la tormenta tropical Eta sobre el territorio nacional.',
    },
    content: {
      rendered:
        '\n<p>El Centro de Operaciones de Emergencias (COE) elevó a nueve las provincias en alerta verde por la influencia directa de la tormenta tropical Eta sobre el territorio nacional.</p>\n\n\n\n<p>Mediante un tuit la entidad informó que Eta producirá aguaceros moderados, tormentas eléctricas y ráfagas de viento.</p>\n\n\n\n<p>Las provincias en alerta verte son:<strong>&nbsp;Santiago, La Vega, Azua, Barahona, Peravia, Monseñor Nouel, Santo Domingo, el Distrito Nacional y San Pedro de Macorís.</strong></p>\n\n\n\n<figure><iframe allowfullscreen="true" class="" src="https://platform.twitter.com/embed/index.html?dnt=false&amp;embedId=twitter-widget-0&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1325126359065169922&amp;lang=es&amp;origin=https%3A%2F%2Fwww.diariolibre.com%2Factualidad%2Fcoe-pone-en-alerta-verde-a-nueve-provincias-por-lluvias-vinculadas-a-tormenta-eta-JG22538661&amp;theme=light&amp;widgetsVersion=ed20a2b%3A1601588405575&amp;width=550px"></iframe></figure>\n<!-- AddThis Advanced Settings generic via filter on the_content --><!-- AddThis Share Buttons generic via filter on the_content -->',
    },
    excerpt: {
      rendered:
        '<p>El Centro de Operaciones de Emergencias (COE) elevó a nueve las provincias en alerta verde por la influencia directa de la tormenta tropical Eta sobre el territorio nacional. Mediante un tuit la entidad informó que Eta producirá aguaceros moderados, tormentas eléctricas y ráfagas de viento. Las provincias en alerta verte son:&nbsp;Santiago, La Vega, Azua, Barahona, [&hellip;]<!-- AddThis Advanced Settings generic via filter on get_the_excerpt --><!-- AddThis Share Buttons generic via filter on get_the_excerpt --></p>\n',
    },
    author: 3,
    jetpack_featured_media_url:
      'https://www.gentetuya.com/wp-content/uploads/2020/11/eta_15139062_20201107170609.jpg',
  },
  {
    id: 73530,
    date: '2020-11-07T21:58:20',
    modified: '2020-11-07T21:58:22',
    status: 'publish',
    link:
      'https://www.gentetuya.com/el-expresidente-de-estados-unidos-barack-obama-felicita-a-joe-biden-pero-admite-eeuu-esta-profundamente-dividido/',
    title: {
      rendered:
        'El expresidente de Estados Unidos Barack Obama felicita a Joe Biden pero admite EEUU est\u00e1 profundamente dividido',
    },
    content: {
      rendered:
        '\n<p>El expresidente de Estados Unidos Barack Obama (2009-2017) felicit\u00f3 este s\u00e1bado al que fuera su vicepresidente, Joe Biden, ahora futuro jefe de Estado del pa\u00eds, y a su compa\u00f1era de f\u00f3rmula, Kamala Harris, por su &#8216;hist\u00f3rica y decisiva victoria&#8217; en las elecciones.</p>\n\n\n\n<p>&#8216;No podr\u00eda estar m\u00e1s orgulloso de felicitar a nuestro pr\u00f3ximo presidente, Joe Biden, y nuestra futura primera dama, Jill Biden&#8217;, dijo Obama en un comunicado, en el que congratul\u00f3 a Harris por su &#8216;revolucionaria&#8217; elecci\u00f3n como primera vicepresidenta de EE.UU., un puesto nunca ocupado antes por una mujer.</p>\n\n\n\n<p>El exmandatario destac\u00f3 el r\u00e9cord de participaci\u00f3n de estas elecciones, que ha convertido a Biden en el candidato presidencial con m\u00e1s votos en la historia de EE.UU., con m\u00e1s de 74 millones de sufragios.</p>\n\n\n\n<p>Biden ha superado el r\u00e9cord de 69.5 millones de votos que el propio Obama marc\u00f3 durante su primera campa\u00f1a presidencial, en 2008.</p>\n\n\n\n<p>\u00abEn estas elecciones, en unas circunstancias que nunca hab\u00edamos vivido, los estadounidenses participaron en n\u00fameros r\u00e9cord. Y una vez que todos los votos sean contados, el presidente electo Biden y la vicepresidenta electa Harris habr\u00e1n ganado una hist\u00f3rica y decisiva victoria\u00bb, manifest\u00f3 Obama.</p>\n\n\n\n<p>Adem\u00e1s, Obama pidi\u00f3 a todos los estadounidenses, los que han votado por Biden y los que no, que le den una oportunidad una vez que llegue a la Casa Blanca el pr\u00f3ximo 20 de enero, porque, asegur\u00f3, el presidente electo ejercer\u00e1 el cargo teniendo en cuenta en su \u00abcoraz\u00f3n\u00bb los intereses de todos y cada uno de ellos.</p>\n\n\n\n<p>\u00abLos resultados de las elecciones -a\u00f1adi\u00f3- muestran que nuestro pa\u00eds a\u00fan est\u00e1 profundamente y amargamente dividido\u00bb, matiz\u00f3 el exmandatario.</p>\n\n\n\n<p>&#8216;Depende no solo de Joe y de Kamala, sino de cada uno de nosotros; debemos hacer nuestra parte para salir de nuestra zona de confort, para escuchar a otros y bajar la temperatura y buscar algo en com\u00fan para movernos hacia adelante, recordando que somos una naci\u00f3n bajo la gracia de Dios&#8217;.</p>\n\n\n\n<p>Biden super\u00f3 la cifra m\u00e1gica de 270 compromisarios que necesitaba en el Colegio Electoral poco antes de las 11.30 hora local de la costa este (16.30 GMT), cuando ampli\u00f3 su ventaja en Pensilvania a m\u00e1s de 30.000 votos sobre el presidente estadounidense, Donald Trump.</p>\n\n\n\n<p>El actual mandatario estadounidense no pod\u00eda lograr la reelecci\u00f3n de ninguna forma sin imponerse en Pensilvania, por lo que la proyecci\u00f3n de las cadenas de que Biden ganar\u00e1 ese estado clave sell\u00f3 su destino.</p>\n\n\n\n<p>Cuando Biden llegue a la Casa Blanca, tomar\u00e1 las riendas de una naci\u00f3n polarizada a niveles hist\u00f3ricos, con fuertes heridas raciales y donde la pandemia ha provocado la muerte de m\u00e1s de 236.000 personas.&nbsp;</p>\n<!-- AddThis Advanced Settings generic via filter on the_content --><!-- AddThis Share Buttons generic via filter on the_content -->',
    },
    excerpt: {
      rendered:
        '<p>El expresidente de Estados Unidos Barack Obama (2009-2017) felicit\u00f3 este s\u00e1bado al que fuera su vicepresidente, Joe Biden, ahora futuro jefe de Estado del pa\u00eds, y a su compa\u00f1era de f\u00f3rmula, Kamala Harris, por su &#8216;hist\u00f3rica y decisiva victoria&#8217; en las elecciones. &#8216;No podr\u00eda estar m\u00e1s orgulloso de felicitar a nuestro pr\u00f3ximo presidente, Joe Biden, [&hellip;]<!-- AddThis Advanced Settings generic via filter on get_the_excerpt --><!-- AddThis Share Buttons generic via filter on get_the_excerpt --></p>\n',
    },
    author: 3,
    jetpack_featured_media_url:
      'https://www.gentetuya.com/wp-content/uploads/2020/11/ap20308859988808_15138981_20201107164727.jpg',
  },
  {
    id: 73491,
    date: '2020-11-07T19:20:58',
    modified: '2020-11-07T19:21:00',
    status: 'publish',
    link:
      'https://www.gentetuya.com/en-todo-estados-unidos-hubo-celebraciones-y-oraciones-despues-de-que-el-candidato-democrata-joe-biden-ganara-la-presidencia/',
    title: {
      rendered:
        'En todo Estados Unidos hubo celebraciones y oraciones despu\u00e9s de que el candidato dem\u00f3crata Joe Biden ganara la presidencia.',
    },
    content: {
      rendered:
        '\n<p></p>\n\n\n\n<p>En la ciudad de Nueva York se registraron celebraciones espont\u00e1neas. La gente sali\u00f3 corriendo de sus viviendas golpeando cacerolas. Bailaron y se felicitaron entre extra\u00f1os en medio de los bocinazos de los autos.</p>\n\n\n\n<p>Otras personas entraron en la Plaza Black Lives Matter cerca de la Casa Blanca, agitando pancartas y tomando fotos con el tel\u00e9fono.</p>\n\n\n\n<p>En Lansing, Michigan, los partidarios de Donald Trump y los manifestantes de Black Lives Matter llenaron la escalinata del Capitolio.</p>\n\n\n\n<p>Recibe todos los d\u00edas las incidencias de los dominicanos en grandes ligas.</p>\n\n\n\n<p>Introduce tu email<br>La letra de \u201cAmazing Grace\u201d comenz\u00f3 a resonar entre la multitud. Los partidarios de Trump pusieron sus manos sobre un manifestante y rezaron.</p>\n\n\n\n<p>No reconoce derrota<br>El presidente Donald Trump no reconoci\u00f3 su derrota ante Joe Biden y prometi\u00f3 emprender impugnaciones jur\u00eddicas para tratar de anular el resultado de la contienda por la Casa Blanca.</p>\n\n\n\n<p>Trump dijo en una declaraci\u00f3n que \u201cnuestra campa\u00f1a comenzar\u00e1 a presentar argumentos en la corte para garantizar que las leyes electorales sean respetadas y que el ganador leg\u00edtimo asuma la presidencia\u201d.</p>\n\n\n\n<p>Trump estaba en su campo de golf de Virginia el s\u00e1bado cuando la elecci\u00f3n presidencial fue declarada a favor de Biden. El candidato dem\u00f3crata asegur\u00f3 su victoria con un triunfo en Pensilvania, su estado natal.</p>\n\n\n\n<p>En las \u00faltimas semanas, Trump ha afirmado \u2014 sin pruebas \u2014 que hubo fraude generalizado y delitos electorales.</p>\n\n\n\n<p>Sus comentarios han sido rechazados por funcionarios electorales y legisladores de ambos partidos, y calificados como peligrosos intentos de socavar la confianza del p\u00fablico en el voto.</p>\n\n\n\n<p><br>El candidato presidencial dem\u00f3crata Joe Biden ha ganado en Nevada, aumentando el margen de su victoria en el Colegio Electoral sobre el presidente Donald Trump.</p>\n\n\n\n<p>Biden gan\u00f3 Nevada el s\u00e1bado alrededor del mediod\u00eda, poco despu\u00e9s de que asegurara la presidencia al ganar en Pensilvania.</p>\n\n\n\n<p>Trump hab\u00eda hecho una fuerte apuesta en Nevada, celebrando varios m\u00edtines all\u00ed en el tramo final de la campa\u00f1a. La dem\u00f3crata Hillary Clinton gan\u00f3 por escaso margen en Nevada en 2016, y los republicanos vieron una oportunidad para ampliar su mapa electoral.</p>\n\n\n\n<p>La pandemia ha golpeado la econom\u00eda de Nevada, la cual depende en gran medida del turismo, lo que obstaculiz\u00f3 la capacidad de Trump de hacer avances en el estado.</p>\n\n\n\n<p>Nevada tambi\u00e9n alberga una gran poblaci\u00f3n hispana, un bloque de votantes que t\u00edpicamente se inclina hacia los dem\u00f3cratas.</p>\n\n\n\n<p>El \u00faltimo candidato presidencial republicano que gan\u00f3 Nevada fue George W. Bush en 2004.</p>\n<!-- AddThis Advanced Settings generic via filter on the_content --><!-- AddThis Share Buttons generic via filter on the_content -->',
    },
    excerpt: {
      rendered:
        '<p>En la ciudad de Nueva York se registraron celebraciones espont\u00e1neas. La gente sali\u00f3 corriendo de sus viviendas golpeando cacerolas. Bailaron y se felicitaron entre extra\u00f1os en medio de los bocinazos de los autos. Otras personas entraron en la Plaza Black Lives Matter cerca de la Casa Blanca, agitando pancartas y tomando fotos con el tel\u00e9fono. [&hellip;]<!-- AddThis Advanced Settings generic via filter on get_the_excerpt --><!-- AddThis Share Buttons generic via filter on get_the_excerpt --></p>\n',
    },
    author: 3,
    jetpack_featured_media_url:
      'https://www.gentetuya.com/wp-content/uploads/2020/11/ap20312665184174_15138501_20201107150437.jpg',
  },
  {
    id: 73488,
    date: '2020-11-07T19:19:17',
    modified: '2020-11-07T19:19:19',
    status: 'publish',
    link:
      'https://www.gentetuya.com/donald-trump-la-eleccion-esta-lejos-de-haber-terminado/',
    title: {
      rendered:
        'Donald Trump: \u201cLa elecci\u00f3n est\u00e1 lejos de haber terminado\u201d',
    },
    content: {
      rendered:
        '\n<p>El presidente Donald Trump asegur\u00f3 este s\u00e1bado que \u201cla elecci\u00f3n est\u00e1 lejos de haber finalizado\u201d y critic\u00f3 que el candidato dem\u00f3crata, Joe Biden, se haya \u201capresurado\u201d a reclamar \u201cfalsamente\u201d la victoria en las elecciones presidenciales de 2020 en EEUU.</p>\n\n\n\n<p><strong>\u201cTodos sabemos por qu\u00e9 Joe Biden se apresura a hacerse pasar falsamente por el ganador, y por qu\u00e9 sus aliados medi\u00e1ticos se esfuerzan tanto en ayudarle: no quieren que la verdad sea expuesta. El simple hecho es que esta elecci\u00f3n est\u00e1 lejos de haber terminado\u201d,</strong>&nbsp;indic\u00f3 Trump en un comunicado emitido por su campa\u00f1a.</p>\n\n\n\n<p>El mandatario, que se encuentra jugando a golf en su club de Sterling (Virginia), agreg\u00f3 que \u201cJoe Biden no ha sido certificado como ganador de ning\u00fan estado, y a\u00fan menos en los estados en re\u00f1ida disputa que se encaminan a recuentos obligatorios, o en los que nuestra campa\u00f1a ha presentado demandas legales sobre la validez y legalidad que podr\u00eda determinar el vencedor final\u201d.</p>\n\n\n\n<p><strong>\u201cA partir del lunes, nuestra campa\u00f1a empezar\u00e1 a defender nuestro caso en los tribunales para asegurar que las leyes electorales son completamente cumplidas y el ganador apropiado es proclamado\u201d,&nbsp;</strong>subray\u00f3.</p>\n\n\n\n<p><mark><strong>A continuaci\u00f3n, el comunicado completo de Trump:</strong></mark></p>\n\n\n\n<p><em>\u201cTodos sabemos por qu\u00e9 Joe Biden se apresura a hacerse pasar falsamente por el ganador, y por qu\u00e9 sus aliados medi\u00e1ticos se esfuerzan tanto en ayudarle: no quieren que la verdad sea expuesta. El simple hecho es que esta elecci\u00f3n est\u00e1 lejos de haber terminado. Joe Biden no ha sido certificado como ganador de ning\u00fan estado, y a\u00fan menos en los estados en re\u00f1ida disputa que se encaminan a recuentos obligatorios, o en los que nuestra campa\u00f1a ha presentado demandas legales sobre la validez y legalidad que podr\u00eda determinar el vencedor final. En Pensilvania, por ejemplo, no se permiti\u00f3 a nuestros observadores legales un acceso significativo para observar el proceso de conteo. Los votos legales deciden qui\u00e9n es el presidente, no los medios de comunicaci\u00f3n\u201d.</em></p>\n\n\n\n<p><em>\u201cA partir del lunes, nuestra campa\u00f1a comenzar\u00e1 a procesar nuestro caso en la corte para asegurar que las leyes electorales se respeten plenamente y que el ganador leg\u00edtimo se siente. El pueblo americano tiene derecho a una elecci\u00f3n honesta: eso significa contar todos los votos legales, y no contar los votos ilegales. Esta es la \u00fanica manera de asegurar que el p\u00fablico tenga plena confianza en nuestra elecci\u00f3n. Sigue siendo chocante que la campa\u00f1a de Biden se niegue a estar de acuerdo con este principio b\u00e1sico y quiera que se cuenten los votos aunque sean fraudulentos, fabricados o emitidos por votantes inelegibles o fallecidos. S\u00f3lo una parte involucrada en el delito mantendr\u00eda ilegalmente a los observadores fuera de la sala de conteo &#8211; y luego luchar\u00eda en la corte para bloquear su acceso\u201d</em></p>\n\n\n\n<p><em>\u201cEntonces, \u00bfqu\u00e9 est\u00e1 escondiendo Biden? No descansar\u00e9 hasta que el pueblo americano tenga el conteo de votos honesto que se merece y que la democracia exige\u201d.</em><img alt="El comunicado de Trump este s\u00e1bado" height="2122" src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/VQRLP5QEANHATC2XWSUUXREJAA.jpg" width="828">El comunicado de Trump este s\u00e1bado</p>\n\n\n\n<p>El ex vicepresidente se convirti\u00f3 este s\u00e1bado en el presidente electo de Estados Unidos despu\u00e9s de haber conquistado el estado clave de Pensilvania, indicaron las proyecciones de las cadenas&nbsp;<em>CNN, CBS</em>&nbsp;y<em>&nbsp;NBC</em>, entre otros medios.</p>\n\n\n\n<p><strong>Biden, el candidato presidencial que m\u00e1s votos ha ganado en la historia de EEUU, super\u00f3 la cifra de 270 compromisarios que necesitaba en el Colegio Electoral tras confirmarse que ganar\u00e1 en Pensilvania.</strong></p>\n\n\n\n<p>Su compa\u00f1era de f\u00f3rmula, Kamala Harris, hizo tambi\u00e9n historia al convertirse en la primera mujer elegida como vicepresidenta de EEUU, adem\u00e1s de la primera mujer de raza negra que llegar\u00e1 a ese cargo, cuando&nbsp;<strong>ambos asuman la Casa Blanca el 20 de enero.</strong></p>\n\n\n\n<p>La proyecci\u00f3n lleg\u00f3 despu\u00e9s de casi cuatro d\u00edas de ag\u00f3nica espera mientras los estados contaban el r\u00e9cord de papeletas enviadas por correo en las elecciones con m\u00e1s participaci\u00f3n de la historia del pa\u00eds.</p>\n\n\n\n<p>Las principales cadenas de televisi\u00f3n hicieron la proyecci\u00f3n poco antes de las 11:30 am ET cuando Biden ampli\u00f3 su ventaja en Pensilvania a m\u00e1s de 30.000 votos sobre Trump.</p>\n\n\n\n<p>Poco antes,&nbsp;<strong>el mandatario hab\u00eda proclamado en Twitter que hab\u00eda ganado la reelecci\u00f3n \u201cpor mucho\u201d.</strong></p>\n<!-- AddThis Advanced Settings generic via filter on the_content --><!-- AddThis Share Buttons generic via filter on the_content -->',
    },
    excerpt: {
      rendered:
        '<p>El presidente Donald Trump asegur\u00f3 este s\u00e1bado que \u201cla elecci\u00f3n est\u00e1 lejos de haber finalizado\u201d y critic\u00f3 que el candidato dem\u00f3crata, Joe Biden, se haya \u201capresurado\u201d a reclamar \u201cfalsamente\u201d la victoria en las elecciones presidenciales de 2020 en EEUU. \u201cTodos sabemos por qu\u00e9 Joe Biden se apresura a hacerse pasar falsamente por el ganador, y [&hellip;]<!-- AddThis Advanced Settings generic via filter on get_the_excerpt --><!-- AddThis Share Buttons generic via filter on get_the_excerpt --></p>\n',
    },
    author: 3,
    jetpack_featured_media_url:
      'https://www.gentetuya.com/wp-content/uploads/2020/11/CP2BJ64SSRCD3IQFNIMCRI5TLY.jpg',
  },
  {
    id: 73473,
    date: '2020-11-07T19:18:26',
    modified: '2020-11-07T19:18:27',
    status: 'publish',
    link: 'https://www.gentetuya.com/joe-biden-es-tiempo-de-unir-y-sanar/',
    title: {
      rendered: 'Joe Biden: \u201cEs tiempo de unir y sanar\u201d',
    },
    content: {
      rendered:
        '\n<p>El presidente electo de Estados Unidos, Joe Biden, se declar\u00f3 este s\u00e1bado \u201chonrado\u201d de que le hayan elegido \u201cpara liderar\u201d el pa\u00eds, despu\u00e9s de que las proyecciones de los principales medios de comunicaci\u00f3n le dieran la victoria.</p>\n\n\n\n<p>\u201cEstados Unidos, estoy honrado de que me hayan elegido para liderar nuestro gran pa\u00eds\u201d, escribi\u00f3 Biden en Twitter poco despu\u00e9s de que llegaran las proyecciones de todas las grandes cadenas de televisi\u00f3n.</p>\n\n\n\n<p><strong>\u201cEl trabajo que nos queda por delante ser\u00e1 duro, pero les prometo esto: ser\u00e9 un presidente para todos los estadounidenses, tanto si votaron por m\u00ed como si no. Estar\u00e9 a la altura de la fe que han depositado en m\u00ed\u201d</strong>, a\u00f1adi\u00f3.</p>\n\n\n\n<p>Biden acompa\u00f1\u00f3 su breve mensaje en Twitter con un video que mostraba im\u00e1genes de decenas de estadounidenses y paisajes rurales y urbanos del pa\u00eds, al ritmo de la canci\u00f3n \u201cAmerica the beautiful\u201d interpretada por Ray Charles.</p>\n\n\n\n<p>El s\u00e1bado, el equipo de&nbsp;<strong>Biden</strong>&nbsp;anunci\u00f3 que hablar\u00e1 el mismo d\u00eda 20:00 (01:00 GMT domingo) desde su residencia en Wilmington, Delaware.&nbsp;<strong>\u201cEl presidente electo Joe&nbsp;Biden&nbsp;va a dirigirse al pa\u00eds\u201d</strong>&nbsp;y estar\u00e1 acompa\u00f1ado por su esposa Jill&nbsp;Biden, la vicepresidenta electa Kamala Harris y por Doug Emhoff, c\u00f3nyuge de la senadora.</p>\n\n\n\n<p>Tambi\u00e9n divulg\u00f3 un comunicado donde afirm\u00f3 que<strong>&nbsp;\u201ces tiempo de unir y sanar\u00bb en la poblaci\u00f3n de EEUU.</strong>&nbsp;\u201cMe siento honrado por la confianza que el pueblo americano ha depositado en m\u00ed y en la vicepresidente electa Harris. Frente a obst\u00e1culos sin precedentes, un n\u00famero r\u00e9cord de estadounidenses vot\u00f3. Con la campa\u00f1a terminada, es hora de dejar atr\u00e1s la ira y la dura ret\u00f3rica y unirnos como naci\u00f3n\u201d, se\u00f1al\u00f3.<img alt="El comunicado de Biden" height="1245" src="https://www.infobae.com/new-resizer/Eb4mgoRCJutZbEzw8e4G5n1eMxc=/420x560/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/5WQKHPZHZRBI7CCNMS64YVFJCY.jpeg" width="1080">El comunicado de Biden</p>\n\n\n\n<p><strong>El dem\u00f3crata es el candidato presidencial que m\u00e1s votos ha ganado en la historia de EEUU, con m\u00e1s de 74 millones, en unas elecciones con un r\u00e9cord de participaci\u00f3n.</strong></p>\n\n\n\n<p>Biden super\u00f3 la cifra m\u00e1gica de 270 compromisarios que necesitaba en el Colegio Electoral poco antes de las 11:30 hora local de la costa este (16:30 GMT), cuando Biden ampli\u00f3 su ventaja en Pensilvania a m\u00e1s de 30.000 votos sobre el presidente estadounidense, Donald Trump.</p>\n\n\n\n<p>El actual mandatario estadounidense no pod\u00eda lograr la reelecci\u00f3n de ninguna forma sin imponerse en Pensilvania, por lo que la proyecci\u00f3n de las cadenas de que Biden ganar\u00e1 ese estado clave sell\u00f3 su destino.</p>\n\n\n\n<p><strong>Trump clam\u00f3 en un comunicado que \u201cla elecci\u00f3n est\u00e1 lejos de haber finalizado\u201d, pero es altamente improbable que ninguna de las demandas que ha presentado en varios estados clave pueda invalidar los votos suficientes en ning\u00fan territorio.</strong></p>\n\n\n\n<p>Joe Biden asumir\u00e1 en la Casa Blanca el 20 de enero.</p>\n<!-- AddThis Advanced Settings generic via filter on the_content --><!-- AddThis Share Buttons generic via filter on the_content -->',
    },
    excerpt: {
      rendered:
        '<p>El presidente electo de Estados Unidos, Joe Biden, se declar\u00f3 este s\u00e1bado \u201chonrado\u201d de que le hayan elegido \u201cpara liderar\u201d el pa\u00eds, despu\u00e9s de que las proyecciones de los principales medios de comunicaci\u00f3n le dieran la victoria. \u201cEstados Unidos, estoy honrado de que me hayan elegido para liderar nuestro gran pa\u00eds\u201d, escribi\u00f3 Biden en Twitter [&hellip;]<!-- AddThis Advanced Settings generic via filter on get_the_excerpt --><!-- AddThis Share Buttons generic via filter on get_the_excerpt --></p>\n',
    },
    author: 3,
    jetpack_featured_media_url:
      'https://www.gentetuya.com/wp-content/uploads/2020/11/M7UFQSTCYJKQ2SESASMTQ7TYFA.jpg',
  },
  {
    id: 73458,
    date: '2020-11-07T16:36:27',
    modified: '2020-11-07T16:36:28',
    status: 'publish',
    link:
      'https://www.gentetuya.com/joe-biden-alcanzo-los-electores-necesarios-y-sera-el-presidente-de-los-estados-unidos/',
    title: {
      rendered:
        'Joe Biden alcanz\u00f3 los electores necesarios y ser\u00e1 el presidente de los Estados Unidos',
    },
    content: {
      rendered:
        '\n<p>El candidato dem\u00f3crata obtuvo el triunfo decisivo en el estado de Pensilvania que le otorga al menos 284 votos en el Colegio Electoral. Sin embargo, el presidente Donald Trump a\u00fan no reconoci\u00f3 el resultado y buscar\u00e1 revertirlo en la justicia. La controversia podr\u00eda llegar hasta la Corte Suprema y demorar hasta diciembre</p>\n\n\n\n<p>Tras m\u00e1s de tres d\u00edas de un complejo recuento de votos,&nbsp;<strong>Joe Biden</strong>&nbsp;logr\u00f3 la victoria en el estado de Pensilvania que le otorga un m\u00ednimo de 284 votos electorales, superando los 270 necesarios para consagrarse como&nbsp;<strong>presidente electo de Estados Unidos.&nbsp;</strong>El resultado de Pensilvania fue confirmado por la agencia&nbsp;<em>AP&nbsp;</em>y los principales medios de comunicaci\u00f3n de Estados Unidos, pero el presidente Donald Trump est\u00e1 lejos de reconocer la derrota. Por el contrario<a href="https://www.infobae.com/america/eeuu/2020/11/05/elecciones-en-estados-unidos-donald-trump-denunciara-fraude-en-todos-los-recientes-estados-ganados-por-joe-biden/" target="_blank" rel="noreferrer noopener">, ha denunciado un fraude en los estados m\u00e1s disputados e inici\u00f3 en ellos demandas judiciales.</a>&nbsp;La disputa podr\u00eda escalar hasta la Corte Suprema de los Estados Unidos.</p>\n\n\n\n<p>Se trat\u00f3 de una elecci\u00f3n cerrada y mucho m\u00e1s pareja de lo que hab\u00edan previstos las encuestas. Biden se alz\u00f3 con victorias en estados decisivos con muy pocos votos de diferencia. Desde el comienzo de la campa\u00f1a,&nbsp;<strong>Trump hab\u00eda planteado objeciones sobre el sistema de votos por correo</strong>, que existe hace d\u00e9cadas en Estados Unidos pero que esta vez, ante las limitaciones para el movimiento que impone la pandemia de coronavirus, alcanz\u00f3<strong>&nbsp;un r\u00e9cord de m\u00e1s de 100 millones de sufragios anticipados por esa v\u00eda.</strong>&nbsp;Todos los analistas anticipaban que ese sistema era fundamentalmente elegido por los votantes dem\u00f3cratas como finalmente sucedi\u00f3. Por eso, al comienzo del conteo de votos presenciales,&nbsp;<strong>Trump apareci\u00f3 liderando en algunos estados que luego termin\u00f3 perdiendo cuando se sumaron los votos recibidos por correo.</strong></p>\n\n\n\n<p>Ahora se abre un comp\u00e1s de espera para que las cortes estatales y, eventualmente, la Corte Suprema, certifiquen el resultado electoral.</p>\n\n\n\n<p>De ser as\u00ed,&nbsp;<strong>el pr\u00f3ximo 20 de enero Joseph Robinette Biden asumir\u00e1 con 78 a\u00f1os como el segundo presidente cat\u00f3lico en la historia de Estados Unidos, despu\u00e9s de John F. Kennedy.</strong></p>\n\n\n\n<p><strong>Junto a \u00e9l, asumir\u00e1 la primera mujer vicepresidente, la abogada afroamericana, ex fiscal general de California y actual senador Kamala Harris.</strong><img alt="Kamala Harris, que ser\u00e1 la primera mujer vicepresidente de Estados Unidos, junto a Joe Biden, en el acto en que fue presentada la f\u00f3rmula dem\u00f3crata" height="3193" src="https://www.infobae.com/new-resizer/3TGdSABMmEFq6pYWm1P1_AeMnVc=/420x280/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/YYYINY4UWZFRJWTQ3Y5FQQZYOQ.jpg" width="4720">Kamala Harris, que ser\u00e1 la primera mujer vicepresidente de Estados Unidos, junto a Joe Biden, en el acto en que fue presentada la f\u00f3rmula dem\u00f3crata</p>\n\n\n\n<p>Mucho se ha especulado con que, por su edad, el ex vice de Barack Obama<strong>&nbsp;aspirar\u00eda a un solo mandato como presidente, para despu\u00e9s abrir paso a Harris.</strong></p>\n\n\n\n<p>Pero primero Biden prometi\u00f3 durante su campa\u00f1a que tratar\u00e1 de sanar las heridas y<strong>&nbsp;recomponer cierto consenso social en una sociedad muy dividiva por el estilo de liderazgo de Trump</strong>. Tambi\u00e9n hacia el exterior, expuso su intenci\u00f3n de retomar&nbsp;<strong>una diplomacia m\u00e1s cl\u00e1sica</strong>&nbsp;y recomponer relaciones con organismos multilaterales con los que el presidente republicano tom\u00f3 distancia.</p>\n\n\n\n<p>Biden no ser\u00e1 un extra\u00f1o en la Casa Blanca, mucho menos en Washington DC: el dem\u00f3crata fue vicepresidente de Obama durante sus dos t\u00e9rminos, 2008-12 y 2012-16, y desde 1972, cuando lleg\u00f3 al Senado para representar a Delaware, ha sido parte del paisaje de la ciudad.<img alt="Biden, durante su per\u00edodo como vicepresidente de Barack Obama, en la Casa Blanca\n" height="362" src="https://www.infobae.com/new-resizer/Q---dQ9i8aA0GlZcfP626zz2lkc=/420x280/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/NMKQH2O2IRF43IK4X7THV5D3JM.jpg" width="578">Biden, durante su per\u00edodo como vicepresidente de Barack Obama, en la Casa Blanca</p>\n\n\n\n<p>Biden llega a la presidencia&nbsp;<strong>despu\u00e9s de tres intentos infructuosos&nbsp;</strong>en las primarias dem\u00f3cratas: 1984, 1988 y el mismo 2008 en que se sum\u00f3 a la f\u00f3rmula de Obama para ayudar a compensar la imagen del candidato, un senador joven y en\u00e9rgico de Illinois con escasa experiencia pol\u00edtica.</p>\n\n\n\n<p>En cualquier caso, aquel 2008 Biden hizo un aporte extra a la candidatura de Obama, quien pareci\u00f3 devolverle el favor durante la \u00faltima campa\u00f1a \u2014\u00bbel mejor vicepresidente que hubo en los Estados Unidos\u00bb, lo llam\u00f3\u2014 : le llev\u00f3 un poco de calle, un tono y una personalidad que conectara con el trabajador de salario m\u00ednimo que hac\u00eda falta convencer de que votara. Biden creci\u00f3 en una ciudad obrera, Scranton, en el noreste de Pensilvania, donde su padre trabajaba en dos puestos: limpiaba calderas y vend\u00eda autos usados.</p>\n\n\n\n<p>En 1972, cuando iba a comenzar el primero de sus seis t\u00e9rminos por Delaware en el Senado,&nbsp;<strong>su esposa, Neilia Hunter, y su hija beb\u00e9, Naomi, murieron en un accidente de autom\u00f3vil, mientras que sus dos hijos varones, Beau y Hunter, resultaron heridos de gravedad.&nbsp;</strong>Una foto hist\u00f3rica ha recorrido los medios en las \u00faltimas semanas:&nbsp;<strong>a los 29 a\u00f1os, el senador m\u00e1s joven que se hubiera elegido jur\u00f3 su banca en el hospital donde cuidaba a los peque\u00f1os sobrevivientes de lo que hab\u00eda sido su familia</strong>.<img alt="Joe Biden junto a su esposa Jill durante la campa\u00f1a electoral" height="2987" src="https://www.infobae.com/new-resizer/ph0r0FN13_2y0lnZgq4hFvLgpK4=/420x280/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/M65TTAVFUACDS6WBRMZECC5NHQ.jpg" width="4552">Joe Biden junto a su esposa Jill durante la campa\u00f1a electoral</p>\n\n\n\n<p>Desde entonces se lo conoci\u00f3 como el senador con m\u00e1s horas-tren de la c\u00e1mara:&nbsp;<strong>todos los d\u00edas viajaba de ida y de vuelta entre Wilmington y Washington DC para poder estar con sus hijos</strong>, llevarlos a la escuela a la ma\u00f1ana y acostarlos en sus camas a la noche. Durante cinco a\u00f1os los cri\u00f3 solo, con la ayuda de su hermana Valerie y otros familiares; al cabo de ese tiempo, y luego de un noviazgo no muy largo, se cas\u00f3 con su actual esposa,<strong>&nbsp;Jill Biden, una profesora de educaci\u00f3n terciaria, con quien tuvo otra hija, Ashley, en 1981.</strong></p>\n\n\n\n<p><strong>Trump se convierte as\u00ed en el segundo presidente republicano en las \u00faltimas tres d\u00e9cadas en gobernar el pa\u00eds por un solo mandato</strong>. El anterior fue George H. W. Bush que perdi\u00f3 en su postulaci\u00f3n a la reelecci\u00f3n en 1993 contra Bill Clinton.</p>\n<!-- AddThis Advanced Settings generic via filter on the_content --><!-- AddThis Share Buttons generic via filter on the_content -->',
    },
    excerpt: {
      rendered:
        '<p>El candidato dem\u00f3crata obtuvo el triunfo decisivo en el estado de Pensilvania que le otorga al menos 284 votos en el Colegio Electoral. Sin embargo, el presidente Donald Trump a\u00fan no reconoci\u00f3 el resultado y buscar\u00e1 revertirlo en la justicia. La controversia podr\u00eda llegar hasta la Corte Suprema y demorar hasta diciembre Tras m\u00e1s de [&hellip;]<!-- AddThis Advanced Settings generic via filter on get_the_excerpt --><!-- AddThis Share Buttons generic via filter on get_the_excerpt --></p>\n',
    },
    author: 3,
    jetpack_featured_media_url:
      'https://www.gentetuya.com/wp-content/uploads/2020/11/WLEGZKMWRKWAOCCTYK2JSXAWVY.jpg',
  },
];

const ListItem = React.memo(({item, index}) => {
  const isFirstItem = index === 0;
  return (
    <>
      {isFirstItem ? (
        <Image
          style={styles.featuredImage}
          source={{uri: item.jetpack_featured_media_url}}
        />
      ) : null}
      <View style={styles.list}>
        <View style={styles.listBody}>
          <Text
            style={[styles.listHeader, isFirstItem && styles.fontWeightBold]}>
            {item.title.rendered}
          </Text>
          <Text style={styles.listDate}>{dateToHumans(item.date)}</Text>
        </View>
        {!isFirstItem ? (
          <Image
            style={styles.image}
            source={{uri: item.jetpack_featured_media_url}}
          />
        ) : null}
      </View>
    </>
  );
});

function HomeScreen() {
  const [data, setData] = useState(DATA);
  const [isLoadingPosts, setLoadingPosts] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  // React.useEffect(() => {
  //   fetch(URL)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((e) => console.log(e));
  // }, []);

  const onEndReached = () => {
    if (isLoadingPosts) {
      return;
    }

    setLoadingPosts(true);

    setTimeout(() => {
      setData([
        ...data,
        {
          id: Date.now(),
          date: Date.now(),
          title: {
            rendered:
              'El ex presidente George W. Bush felicitó a Joe Biden por su triunfo en las elecciones y destacó los logros de Donald Trump',
          },
          jetpack_featured_media_url:
            'https://www.gentetuya.com/wp-content/uploads/2020/11/Screenshot_20201108-161229_Chrome.jpg',
        },
      ]);
      setLoadingPosts(false);
      console.log('onEndReached');
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => console.log('Refresh...')}
          />
        }
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(props) => <ListItem {...props} />}
        ListFooterComponent={() =>
          isLoadingPosts ? (
            <ActivityIndicator style={styles.pb} color="#333" />
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  list: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  listHeader: {
    fontWeight: '500',
    paddingBottom: 7,
    fontSize: 16,
  },
  fontWeightBold: {
    fontWeight: '700',
  },
  listDate: {
    fontSize: 12,
    color: '#444',
  },
  listBody: {
    flex: 1,
    marginRight: 7,
    justifyContent: 'space-between',
  },
  image: {
    flex: 0.3,
    borderRadius: 7,
  },
  featuredImage: {
    width: '100%',
    height: 150,
    borderRadius: 7,
  },
  pb: {
    paddingBottom: 7,
  },
});

export default HomeScreen;

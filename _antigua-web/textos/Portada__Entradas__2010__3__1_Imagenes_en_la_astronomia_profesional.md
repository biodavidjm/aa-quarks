# Imágenes en la astronomía profesional

Fuente: `Portada/Entradas/2010/3/1_Imagenes_en_la_astronomia_profesional.html`

## Texto HTML directo

¿Quién no ha visto la famosa imagen del Telescopio Espacial Hubble de la nube de gas molecular “Cabeza de Caballo” (Barnard 33)? Ó ¿Quién no ha visto el gas detectado en 21 cm. por los grandes radiotelescopios entre el sistema de galaxias M 81 y M 82? Y es que la astronomía es una ciencia fundamentalmente observacional, basada en eso, en observaciones y, en gran medida, en “fotografías”, algunas de las cuales son realmente espectaculares. Pero no fotografías como las que podemos tener en nuestra casa de reuniones familiares o de viajes, sino, más bien, recolecciones de luz a diversas longitudes de onda de lo que conocemos como el

, cuya región más conocida es el rango visible. En astrofísica las imágenes astronómicas son información, además son prácticamente nuestra única fuente de información, ya que un laboratorio de astrofísica, en el que poder “palpar” una estrella y experimentar con ella (modificar condiciones, características, propiedades, etc.), es algo completamente irrealizable.

Estamos acostumbrados a las impresionantes imágenes en color (falsos colores que se llaman, más información acerca de este concepto en inglés en

http://hubblesite.org/gallery/behind_the_pictures/)

del Telescopio Espacial Hubble, pero hasta la obtención y publicación de dichas imágenes hay muchas horas de ordenador procesando imágenes, y no es una única toma ni muchísimo menos. Y no sólo eso, las imágenes en astronomía se toman con cámaras CCD (Charge-Coupled Device, dispositivo de carga acoplada). Estos dispositivos consisten en una superficie sólida sensible a la luz, dotada de unos circuitos que permiten leer y almacenar electrónicamente las imágenes proyectadas sobre ella; en otras palabras, se tratan de dispositivos electrónicos que lo que hacen es transformar una señal luminosa en una electrónica basándose en el

Por lo tanto, las imágenes astronómicas son una distribución de fotones ordenada en el plano, las zonas más intensas corresponderán a  zonas a las que han llegado una mayor cantidad de fotones, con lo que con una cámara CCD obtenemos imágenes sin color, pero jugando con filtros podemos dotar a nuestras imágenes de colores. A lo largo de este artículo las imágenes serán expuestas en blanco y negro para mayor similitud con las imágenes que obtenemos cuando ponemos nuestro ojo en el ocular de nuestro telescopio, pero conviene tener muy en cuenta lo dicho anteriormente.

Imagen 1: Nebulosa Cabeza de caballo (HST)

Imagen 2: M81, M82 y NGC 2976 observadas en el visible (izquierda) y en 21 cm. (radio),

se aprecian los puentes de gas entre estas galaxias en interacción.

Generalmente, una imagen “normal” es una suma de imágenes con diversos filtros (regiones concretas del espectro electromagnético), con diversos tiempos de exposición (tiempo durante el que la cámara está recogiendo luz), etc. cada una de las cuales nos da informaciones muy variadas del objeto observado que debemos de interpretar convenientemente.

La fotografía astronómica, es decir, la plasmación objetiva de objetos astronómicos, supuso en su día un auge increíble en astronomía. La fotografía permitía la obtención de imágenes por la noche, y el correspondiente análisis al día siguiente; permitía “olvidar” el trabajo a pie de telescopio de los astrónomos, para pasar a un trabajo al frente de la pantalla de un ordenador; y lo más importante, dejaba a un lado los famosos canales construidos por extraños seres inteligentes en Marte para transportar agua (debido a la imaginación del astrónomo Percival Lowell), para dar paso a imágenes que cotejar con otros compañeros, de manera que ganamos objetividad.

A continuación, vamos a mostrar escuetamente, sin profundizar en exceso, el trabajo diario de un astrónomo profesional, desde la labor en el observatorio, hasta el procesado de imágenes para la obtención definitiva de la/s “instantánea/s” con información astrofísica real.

Concretamente, quiero agradecer desde aquí la colaboración de Simon Verley, astrofísico de la Universidad de Granada, por su información, por su tiempo, y como no, por sus imágenes, desde lo que le daba el telescopio hasta las finales obtenidas, pasando por todos y cada uno de los pasos de reducción y procesado de imágenes que a continuación iremos mostrando y desglosando, sin su ayuda este artículo nunca se hubiese hecho realidad. El programa utilizado fue uno de lo más conocidos en el mundo astrofísico profesional, IRAF (Image Reducing and Analysis Facility). La galaxia elegida a modo de ejemplo ha sido la NGC 6118 las imágenes fueron realizadas el día 23 de Julio de 2003 con el telescopio “Jakobus Kapteyn Telescope” de 1 m. de diámetro (consultar

www.ing.iac.es/Astronomy/telescopes/jkt/ )

. Para más información acerca de la galaxia consultar

Antes de nada, decir que los astrónomos no disponen de todo el tiempo del mundo para realizar sus observaciones, son muchos los astrónomos que necesitan de los observatorios astronómicos para sus observaciones y pocos los observatorios con condiciones excepcionales, así es que, deben de planificar muy bien las noches de observación de las que disponen para sacarles el máximo provecho.

Antes de realizar las tomas a nuestro objeto astronómico, la galaxia NGC 6118 en nuestro caso, deberemos de conocer el dispositivo de almacenamiento de luz, la cámara CCD así como los filtros utilizados, para ello debemos de tomar lo que conocemos como las imágenes de “BIAS” (o tomas oscuras) y los “FLAT FIELDS” (o tomas planas). Los “BIAS” son imágenes tomadas con la CCD “cerrada”, con el objetivo de establecer el nivel cero de la cámara, con la cámara cerrada no debería de recogerse nada de luz, sin embargo, sí que se recoge cierta cantidad debido a electrones que saltan debido a la agitación térmica y no a la incidencia de fotones, se trata de encontrar así el punto cero, a fin de quitar este nivel de ruido térmico. Los “FLAT FIELDS” son tomas que se hacen a través del telescopio, con la cámara acoplada así como con los filtros que usaremos; la idea es realizar imágenes de zonas uniformemente iluminadas (se suele usar el cielo antes de que anochezca y aparezcan las primeras estrellas, por lo que se suele hacer por la tarde al anochecer y por la mañana al amanecer), para ver la respuesta de la CCD, que puede ser más sensible en unas zonas que en otras, así como detectamos las posibles imperfecciones de los filtros utilizados durante la observación, así como alguna mota de polvo en el espejo principal o secundario del telescopio.

A continuación tomaremos las imágenes correspondientes a la galaxia observada, con diversos tiempos de exposición, algunos de ellos realmente grandes, ya que el seguimiento del telescopio nos lo permite sin movimiento alguno de la imagen. El tiempo de exposición podrá ser tanto mayor cuanto menor sea el ancho del filtro (luz que transmite), anchos grandes no permiten excesivos tiempos de exposición ya que podría provocar “colapsos” o saturaciones en la CCD. Aquí habrá terminado el trabajo en el observatorio, a partir de ahora comienza el trabajo frente al ordenador. Así, las imágenes con las que contamos para la reducción de esta galaxia son:

Filtro estrecho H-α: 4 imágenes de la galaxia (1200 s.)

Filtro ancho R-Gunn: 4 imágenes de la galaxia (300 s.)

Con el objetivo de poder comparar las imágenes que nos da el telescopio (imágenes iniciales) con las imágenes finales que vamos a obtener tras todo el proceso de reducción, se muestran a continuación dos imágenes iniciales de la galaxia.

Imagen 3: Imágenes iniciales de la galaxia con el filtro R-Gunn (izquierda) y con el filtro H-α (derecha).

En la imagen en R-Gunn se aprecian algunos puntos brillantes en la zona opaca del filtro debido a rayos

cósmicos que han atravesado dicho soporte (ver  más adelante).

El primer paso será la combinación de las imágenes BIAS para crear lo que conocemos como el SUPERBIAS, con el objetivo de aglomerar toda la información de los BIAS en una sola imagen más homogénea que cada uno de los Bias por separado. Así tendremos el valor cero, “el punto de partida” de nuestras imágenes, es decir, a todas deberemos de restar este “ruido” inicial que nos mete la cámara CCD. Haremos exactamente lo mismo para las imágenes de FLAT, creando así el SUPERFLAT en ambos filtros. Decir que a lo largo de una noche podemos tomar imágenes de muchas galaxias u otros objetos astronómicos, pero sólo hay que crear un único SUPERBIAS para toda la noche, a la vez que un único SUPERFLAT para cada filtro, así las imágenes de Flat y de Bias se suelen tomar al comienzo de la observación y al final de la misma.

Imagen 4: Imagen del SUPERBIAS obtenido en la noche del 23 de Julio de 2003.

Como vemos, la imagen no es completamente negra.

Imagen 5: Imagen del SUPERFLAT con el filtro R-Gunn (izquierda, filtro circular) y con el filtro H-α (derecha, filtro cuadrado)

obtenidos en la noche del 23 de Julio de 2003. Apreciamos puntos y trazos negros debido a zonas no operativas

(píxeles “rotos”) de la CCD; zonas más y menos iluminadas debido a la desigual respuesta de una zona y otra de la CCD,

así como a la distinta transmisión de luz de los filtros; y también apreciamos pequeños anillos debido a motas de polvo en

el espejo del telescopio (si son comunes a ambas imágenes) o en los filtros (si aparecen en una imagen y no en la otra).

El siguiente paso será la sustracción del SUPERBIAS, es decir, quitarle a todas y a cada una de las imágenes de la galaxia, así como a los flats, ese ruido de fondo que introduce la CCD. Así como la división por el SUPERFLAT, que viene a ser una especie de “normalización” de manera que tengamos en cuenta los posibles fallos en los filtros, además de la respuesta desigual a la luz de unas partes y otras de la cámara CCD. Con este último paso, lo que conseguimos es asegurarnos de que realmente lo que nos da la CCD es una imagen lo más real posible a lo que de veras nos muestra el objeto (la galaxia en nuestro caso).

Además, sabemos que constantemente somos bombardeados por grandes cantidades de partículas (neutrinos, partículas α, protones, núcleos varios, etc.) provenientes del Universo (explosiones de Super Novas, viento solar, etc.) que, al entrar en contacto con la atmósfera terrestre desencadenan una gran cantidad de reacciones creando cascadas de partículas. Estas partículas también son detectadas por nuestra CCD, de manera que deberemos también hacer un tratamiento conveniente que nos elimine estos Rayos Cósmicos. Este paso lo deberemos de realizar sobre todas las imágenes de nuestra galaxia.

Imagen 6: Rayo Cósmico captado en la imagen H-α. Vemos la forma alargada del rastro dejado por la partícula,

en otras ocasiones no es más que un punto la señal dejada por la partícula.

Pero no sólo los Rayos Cósmicos afectan a nuestras imágenes finales y deberemos de tenerlos en cuenta, sino que también debemos de tener en cuenta la contaminación lumínica, reflejada en la atmósfera y que nos afecta, además de otros aspectos mediante la estimación del fondo del cielo, algo que no es objeto astronómico, y que por tanto también debemos de eliminar, pasando a la eliminación o sustracción del fondo del cielo. Paso que de nuevo realizamos sobre todas las imágenes de la galaxia.

Tras todo esto, deberemos de tener en cuenta el distinto tiempo de exposición de las imágenes en cada filtro, de manera que deberemos de dividir por el tiempo de exposición. Pero es que, aún con todos estos pasos dados aún nos pueden quedar algunos píxeles malos que deberemos de corregir manualmente en cada imagen con la ayuda de IRAF.

Así, tenemos ya cuatro imágenes de la galaxia en cada filtro perfectamente tratadas. Aparentemente, el siguiente paso no debe de ser otro que la combinación o suma de las 4 para obtener nuestra imagen final, pero no es así. Si atendemos a la imagen 5, vemos líneas directamente negras. En estas zonas, si me llega luz de la galaxia estudiada no obtendré información alguna, ya que son píxeles inutilizables de la CCD. Si las 4 imágenes las tomase perfectamente centradas, nunca podría obtener información de esa zona concreta de la galaxia. Para solventar esta dificultad lo que hacemos no es más que tomar las 4 imágenes descentradas, o mejor dicho, centradas en puntos distintos de la galaxia, así en una imagen perderemos una información, en otra imagen otra, pero al “sumar” las 4 imágenes tendré la galaxia al completo, con el máximo de información posible. Por lo tanto, el paso previo antes de la combinación final en cada filtro será el correcto centrado de las imágenes a partir de una serie de estrellas de referencia en las 4 imágenes.

Imagen 7: Imagen final en el filtro R-Gunn. Lejos de la galaxia (zona central de la imagen) vemos puntos negros,

líneas, etc. esto es debido a que algunos pasos no los realizamos en toda la imagen, sino sólo en la región de la galaxia.

Imagen 8: Imagen final en el filtro H-α. Podemos apreciar un ligero rastro vertical dejado por un satélite

que pasó durante el tiempo de exposición por el campo de observación en una de las imágenes con H-α.

De estas imágenes ya podemos obtener información astrofísica real. Podemos decir que la imagen con el filtro R-Gunn nos muestra los brazos espirales de la galaxia así como las estrellas viejas de la misma. Mientras que la imagen con el filtro H-α nos muestra las estrellas más jóvenes de la galaxia, las zonas por lo tanto de formación estelar. Además nos puede resultar conveniente visualizar una comparativa entre la nueva imagen obtenida y la inicial dada por el telescopio, la diferencia es evidente.

Imagen 9: Comparativa inicial y final en R-Gunn, vemos en lo recuadrado la desaparición de zonas negras y

de un rayo cósmico, así como el mayor contraste en la zona de los brazos espirales de la galaxia.

¿Cuál es el problema ahora? Que además de visualizar la galaxia, también estamos capturando las estrellas de nuestra propia galaxia (las estrellas de fondo que se ven). En el filtro R-Gunn, por así decirlo, no hay solución; sin embargo, en el filtro H-α sí que la hay, comienza la fase de escalar el continuo a la imagen en H-α y sustracción. Podemos decir que el filtro R-Gunn es un filtro ancho, capta mucha luz, mientras que el filtro H-α es mucho más restrictivo, el problema es que hay solapamiento de ambas regiones del espectro estudiado (ver tabla 1), si en la imagen del filtro de hidrógeno quitamos la contribución del rojo, seremos capaces de observar solamente la luz emitida en H-α, es decir, sólo las estrellas jóvenes y las zonas de formación estelar, de manera que desaparecerán las estrellas de nuestra galaxia y estrellas viejas de la galaxia estudiada, y quedarán sólo las zonas de formación estelar remarcando así la estructura espiral de la galaxia, ya que estas zonas de formación estelar las encontraremos en los brazos espirales.

Tabla 1: Características de los filtros utilizados.

Imagen 10: Imagen final en H-α menos el continuo (R-Gunn), vemos, al compararla con la imagen 8 comohan desaparecido

las estrellas de nuestra galaxia quedando sólo los brazos espirales de la galaxia estudiada (ver imagen 11).

Imagen 11: Comparativa imágenes finales en H-α, izquierda tal cual, derecha sustrayendo el R-Gunn.

Y así es como hacen ciencia los astrónomos profesionales, así es como encuentran la estructura de esta galaxia y las zonas en las que se están formando las estrellas más jóvenes. Si nuestro objetivo hubiese sido otro habríamos escogido otros filtros u otras combinaciones de filtros, otros objetos a observar y otros telescopios. A modo de ejemplo os mostramos una imagen de la galaxia M51 en varias regiones del espectro, en cada una de estas regiones seremos capaces de obtener distintas informaciones.

Imagen 12: Composición de imágenes de la galaxia M51.

Rayos X: Gas muy caliente, estrellas binarias de rayos X, procesos violentos y energéticos en general.

Ultravioleta: Estrellas brillantes de alta masa, como son estrellas que se han debido de formar recientemente por la “corta” vida de las estrellas masivas nos da información de la formación estelar reciente.

Visible: Estrellas en general (viejas y parecidas al sol), gas caliente, gas por reflexión de la luz de estrellas, etc.

Infrarrojo Cercano: Estrellas de baja masa, que son las más difíciles de observar, por lo que estimamos la masa estelar total de la galaxia estudiada.

Infrarrojo Lejano y Microondas: Medio interestelar denso: gas molecular y polvo interestelar.

Radio (cm.): Hidrógeno atómico, rayos cósmicos, campos magnéticos, gas caliente, etc.

De nuevo agradecer a Simon Verley la atención prestada, imágenes, consejos, experiencias y dedicación a esta causa, así como la corrección a este texto.

“Manual Práctico de Astronomía con CCD” David Galadí-Enríquez e Ignasi Ribas Canudas, Ediciones Omega.

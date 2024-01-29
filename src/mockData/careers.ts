import VideoGames from "../assets/videojuegos-icono.png";
import InformaticDegree from "../assets/Informatica-licenciatura-icono.png";
import IAIcon from "../assets/Inteligencia-artificial-icono.png";
import NetworkIcon from "../assets/redes-icono.png";
import ProgIcon from "../assets/programacion-icono.png";
import Service1 from "../assets/services-image.jpg";
import Service2 from "../assets/services-image-02.jpg";
import Service3 from "../assets/services-image-03.jpg";

export const CAREER_LIST = [
  {
    name: "Tecnicatura Universitaria en Programación de Videojuegos",
    id: "tec_uni_prog_videojuegos",
    icon: VideoGames,
    primaryInformation:
      "Tiene por objetivo formar técnicas/os capaces de ser parte activa en proyectos de desarrollo de videojuegos, específicamente aplicando herramientas de diseño como motores de programación, recursos multimediales, diferentes lenguajes y tecnologías de interacción.",
    checks: [
      "Motores de videojuegos",
      "Diseño lúdico",
      "Arte multimedial",
      "Diseñar, codificar",
      "Probar, medir y mantener programas",
      "Trabajar en equipo",
    ],
    secondaryInformation:
      "Los/las profesionales Podrán a su vez ser parte de la industria de los videojuegos, pudiendo identificar las diferentes modalidades y propuestas mediante la selección de propuestas de software y hardware, atendiendo las cuestiones de calidad.",
    image: Service2,
  },
  {
    name: "Tecnicatura Universitaria en Inteligencia Artificial",
    id: "tec_uni_ia",
    icon: IAIcon,
    primaryInformation:
      "La carrera tiene por objetivo formar técnicas/os universitarias/os para la resolución de problemas computacionales utilizando conocimientos y conceptos de inteligencia artificial, mediante la aplicación de herramientas y uso de diferentes lenguajes de programación.",
    checks: [
      "Aprendizaje automático",
      "Redes Neuronales",
      "Procesamiento de Datos",
      "Recomendadores",
      "Clasificadores",
      "Imágenes",
    ],
    secondaryInformation:
      "Las/os técnicas/os podrán predecir y/o detectar patrones agregando valor en áreas como visión artificial, procesamientos del lenguaje natural y aprendizaje automático, a través del análisis y procesamiento de datos de diferentes fuentes, utilizando criterios prácticos y aplicando y evaluando algoritmos adecuados.",
    image: Service3,
  },
  {
    name: "Tecnicatura Universitaria en Programación",
    id: "tec_uni_prog",
    icon: ProgIcon,
    primaryInformation:
      "Tiene por objetivo formar técnicos/as capaces de elucidar e implementar soluciones en un amplio espectro de problemas realizando tareas de diseño, programación y desarrollo de software.",
    checks: [
      "Bases de datos",
      "Back-end",
      "Front-end",
      "Diseñar, codificar",
      "Probar, medir y mantener programas",
      "Implantación de proyectos de software",
    ],
    secondaryInformation:
      "Los/las profesionales serán capaces de Comprender adecuadamente la pertinencia de construir software de acuerdo a varios parámetros de calidad y alorar la conveniencia de utilizar estándares abiertos y software libre en los entornos operativos y herramientas de desarrollo.",
    image: Service2,
  },
  {
    name: "Tecnicatura Universitaria en Redes y Operaciones",
    id: "tec_uni_redes_op",
    icon: NetworkIcon,
    primaryInformation:
      "La carrera tiene por objetivo formar técnicos/as capaces de elucidar e implementar soluciones en un amplio espectro de problemas asociados a la conectividad, servicios de apoyo al desarrollo y despliegue de aplicaciones, y configuración de arquitecturas para la integración continua de sistemas informáticos.",
    checks: [
      "DevOps",
      "Redes Avanzadas",
      "Servicios en la nube",
      "Contenedores",
      "Conectividad",
      "Integración continua",
    ],
    secondaryInformation:
      "Las/los profesionales tendrán sólidas bases para formar parte de equipos de Gestión Informática. Serán capaces de comprender adecuadamente la pertinencia de realizar las tareas bajo diferentes parámetros de calidad, entre los que destacamos: claridad, mantenimiento, robustez frente a fallos, uso eficiente de recursos y de la energía. Dispondrán de parámetros para valorar y tener en cuenta los conceptos de estándares abiertos y software libre en los entornos operativos.",
    image: Service3,
  },
  {
    name: "Licenciatura en Informática",
    id: "lic_informatica",
    icon: InformaticDegree,
    primaryInformation:
      "La Licenciada o Licenciado en Informática cuenta con una base conceptual sólida que le permite resolver problemas y liderar proyectos de desarrollo de software y aplicaciones de distinta índole y magnitud, tanto en el rol de líderes de equipos o en consultoría. Además, puede intervenir en procedimientos periciales y capacitar en diferentes niveles educativos. Así mismo, integrar y dirigir proyectos de investigación.",
    checks: [
      "Arquitectura de Software",
      "Inteligencia Artificial",
      "Data Info",
      "Ingeniería de Software",
      "Computación de alto desempeño",
      "Sistemas en tiempo real - IoT",
    ],
    secondaryInformation:
      "Esta carrera de grado tiene entre sus activiades reservadas la de especificar, proyectar y desarrollar sistemas de información, sistemas de comunicación de datos y software cuya utilización pueda afectar la seguridad, salud, bienes o derechos.",
    image: Service1,
  },
];

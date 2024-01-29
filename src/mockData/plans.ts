import Programacion from "../assets/desarrolladores.jpg";
import RedesOperaciones from "../assets/planes-redes-operaciones.jpg";
import Licenciatura from "../assets/licenciatura.jpg";
import VideoJuegos from "../assets/tecnicatura-videojuego-nueva.png";
import PlanillaComparativa from "../assets/planilla-comparativa.jpg";
import TecProgramacionPDF from "../assets/2022-Tecnicatura-Universitaria-en-Programacion-unahur.pdf";
import IAPDF from "../assets/2023-Tecnicatura-Universitaria-Inteligencia-Artificial.pdf";
import RedesOperacionesPDF from "../assets/2022-Tecnicatura-Universitaria-en-Redes-y-Operaciones-Informaticas-unahur.pdf";
import LicProgramacionPDF from "../assets/licenciatura-informatica-unahur.pdf";
import VideoJuegosProgramacionPDF from "../assets/2022-Plan-Tecnicatura-Universitaria-en-Programacion-de-Videojuegos.pdf";

export const PLANS = [
  {
    title: "Tecnicatura Universitaria en Programación",
    description:
      "Focalizada en desarrollar el pensamiento computacional y los conocimientos para las necesidades de programación de la actualidad.",
    image: Programacion,
    href: TecProgramacionPDF,
  },
  {
    title: "Tecnicatura Universitaria en Redes y Operaciones",
    description:
      "Orientada a formar profesionales DevOps que forman parte del ecosistema del desarrollo de software.",
    image: RedesOperaciones,
    href: RedesOperacionesPDF,
  },
  {
    title: "Licenciatura en informática",
    description:
      "Equivalencias con las Tecnicaturas: acá te mostramos cómo se obtienen materias de la Licenciatura cursando las tecnicaturas.",
    image: Licenciatura,
    href: LicProgramacionPDF,
  },
  {
    title: "Tecnicatura Universitaria en Inteligencia Artificial",
    description: "Falta llenar",
    image: Licenciatura,
    href: IAPDF,
  },
  {
    title: "Tecnicatura Universitaria en Programación de Videojuegos",
    description:
      "Si te gustan los videojuegos, podés integrarte abordando las problemáticas del diseño y desarrollo.",
    image: VideoJuegos,
    href: VideoJuegosProgramacionPDF,
  },
  {
    title: "Planilla Comparativa",
    description:
      "Esta planilla de cálculo te permite ver cómo aplican las materias que tenés aprobadas en cada plan",
    image: PlanillaComparativa,
    href: "https://docs.google.com/spreadsheets/d/16tph2RkNO_DqJxjJCxGYNibGpx-nu11lvAT6qntFRwg/copy",
  },
];

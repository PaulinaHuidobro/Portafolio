"use client"
import React from "react";
import {Accordion, AccordionItem, Link} from "@nextui-org/react";
import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function ProyectosPage() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
    <div>
      <h1 className={title()}>Conoce los proyectos que he realizado</h1>
    </div>
      <Accordion>
        <AccordionItem key="1" aria-label="Accordion 1" title="Proyecto Landin">
         <div>
          <p> ¡Bienvenido a mi proyecto de página web! Esta página ha sido desarrollada utilizando HTML y CSS, 
           con especial énfasis en la implementación de media queries para asegurar su adaptabilidad a diferentes
           dispositivos y tamaños de pantalla.
          </p>
          <br></br>
         
    <div className="flex gap-4">
      <Link isExternal href="https://github.com/PaulinaHuidobro/Proyecto1?classId=405531ac-bb20-43b2-8b62-bc2b4611dac6&assignmentId=b1173944-526e-4d0c-800a-02b5b7274062&submissionId=b758ea63-9e38-dc4d-5d68-b91d9e61a4ad">
        Link a github
      </Link>
      <Link
        isExternal
        href="https://proyecto1-gamma-weld.vercel.app/"
        showAnchorIcon
      >
        Link Vercel
      </Link>
    </div>

      
         </div>

        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="CRUD">
        <div>
          <p> Este proyecto es una aplicación web desarrollada en Java que permite 
            gestionar datos de manera eficiente a través de operaciones CRUD 
            (Crear, Leer, Actualizar, Eliminar). La aplicación está diseñada 
            para interactuar con una base de datos, proporcionando a los usuarios
             una interfaz intuitiva para realizar diversas operaciones sobre los registros almacenados..
          </p>
          <br></br>
         
    <div className="flex gap-4">
      <Link isExternal href="https://github.com/PaulinaHuidobro/crud_Proyecto2">
        Link a github
      </Link>
      <Link
        isExternal
        href="https://crud-proyecto2.vercel.app/"
        showAnchorIcon
      >
        Link Vercel
        </Link>
        </div>
      </div>

      </AccordionItem>
        
        <AccordionItem key="3" aria-label="Accordion 3" title=" Dashboar utilizando una API">
        <div>
          <p> Este proyecto consiste en la creación de un tablero de datos para una página web 
            que ofrece pronósticos del clima en tiempo real. La aplicación se conecta a una API 
            que proporciona datos meteorológicos actualizados, lo que permite que las gráficas 
            mostradas reflejen la información más reciente y precisa.
            Colaboración en Equipo: El proyecto fue desarrollado en colaboración 
            con mi compañera Monserrat Carrasco, 
            lo que permitió un complemento efectivo en el proceso de desarrollo.

          </p>
          <br></br>
         
    <div className="flex gap-4">
      <Link isExternal href="https://mcarrascot.github.io/Dashboard/?classId=405531ac-bb20-43b2-8b62-bc2b4611dac6&assignmentId=52c93875-254f-4f35-a6b3-9f85fa1b5f64&submissionId=6061bb12-fa26-9063-b94a-a869c7acc354">
        Link a github
      </Link>
      <Link
        isExternal
        href="https://proyecto1-gamma-weld.vercel.app/"
        showAnchorIcon
      >
        Link Vercel
        </Link>
        </div>
      </div>

        </AccordionItem>

        <AccordionItem key="4" aria-label="Accordion 4" title="Restaurant Vegano">
        <div>
        <p> Este proyecto presenta la página web de un restaurante vegano. La página permite a los usuarios explorar
           el menú del restaurante, con descripciones detalladas de cada plato, y leer nuestro blog, donde compartimos 
           información especial y actualizaciones sobre el restaurante. Además, los usuarios pueden hacer reservas en 
            línea a través de un formulario integrado.
          </p>

          <br></br>
          <div className="flex gap-4">
      <Link isExternal href="https://github.com/PaulinaHuidobro/Proyecto_restaurante_vegano/tree/master">
        Link a github
      </Link>
      <Link
        isExternal
        href="https://proyecto-restaurante-vegano.vercel.app/"
        showAnchorIcon
      >
        Link Vercel
      </Link>
    </div>
        </div>

        </AccordionItem>
      </Accordion>

      </>
  
    
    
  );
}

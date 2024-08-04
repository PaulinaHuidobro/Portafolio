"use client";
import React from "react";
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";

export default function PricingPage() { 
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <div className="flex items-center justify-center min-h-[40vh] p-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className={title()}>Sobre mí</h1>
        <br />
        <Card className="max-w-[900px] min-w-[600px] min-h-[400px] text-center">
        <CardHeader className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-5">
              <Avatar
                isBordered
                radius="full"
                size="lg"
                src="https://nextui.org/avatars/avatar-1.png"
                className="w-32 h-32" // Ajusta el tamaño de la imagen aquí
              />
              <div className="flex flex-col items-center gap-4">
                <h4 className="text-small font-semibold leading-none text-default-500">Paulina Huidobro Duarte</h4>
                <h5 className="text-small tracking-tight text-default-400">@pauliHuidobro</h5>
              </div>
            
            </div>
            <Button
              className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
              color="primary"
              radius="full"
              size="sm"
              variant={isFollowed ? "bordered" : "solid"}
              onPress={() => setIsFollowed(!isFollowed)}
            >
              {isFollowed ? "Unfollow" : "Follow"}
            </Button>
          </CardHeader>
          <CardBody className="px-4 py-2 text-lg text-default-400">
            <p>
            Soy Paulina Huidobro, una profesora de tecnología con 12 años de experiencia en la educación,
             enseñando a niños y jóvenes en el área de la tecnología. Actualmente, me encuentro en proceso 
             de formación como desarrolladora web, especializándome en herramientas como HTML5, CSS, JavaScript,
              React, Bootstrap y MongoDB.

             Mi interés en la programación surgió cuando se me presentó el desafío de enseñar desarrollo web 
             a estudiantes de cuarto medio. Este desafío me llevó a inscribirme en un boot camp en la Universidad
              del Desarrollo (UDD), donde adquirí un conocimiento profundo y práctico de las herramientas fundamentales 
              que todo programador debe dominar.

            Durante esta experiencia, descubrí la capacidad del código para resolver problemas 
            complejos y crear soluciones innovadoras. Esta pasión por la programación me impulsa a seguir 
            aprendiendo y explorando nuevas tecnologías, con el objetivo de desarrollar aplicaciones que sean 
            tanto funcionales como estéticamente atractivas.

            </p>
            <span className="pt-2">
              #FrontendPaulina
              <span className="py-2" aria-label="computer" role="img">
                💻
              </span>
            </span>
          </CardBody>
          <CardFooter className="gap-3">
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">4</p>
              <p className="text-default-400 text-small">Following</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">97.1K</p>
              <p className="text-default-400 text-small">Followers</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

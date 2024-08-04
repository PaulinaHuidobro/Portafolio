import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-2">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title({ color: "violet" })}>Portafolio&nbsp;</h1>

        <div className="max-w-lg text-center flex flex-col items-center justify-center">
        <img 
          src="https://img.freepik.com/fotos-premium/hermosa-mujer-auriculares-estilo-acuarela_911712-10929.jpg?w=360" 
          alt="Paulina Huidobro Duarte" 
          className="mt-4 w-32 h-40 rounded-lg items-center" 
          
        />
        </div>
        <h2 className={subtitle({ class: "mt-5" })}>
          <b>Paulina Huidobro Duarte</b>
        </h2>
         <div className=" text-justify " >
            <p>
              Iniciando en el mundo de la programación, en donde he comenzado a explorar este fascinante campo, descubriendo una verdadera pasión por él. He participado en diversos proyectos que me han permitido adquirir experiencia práctica y trabajar con una amplia gama de tecnologías, incluyendo HTML5, Bootstrap, JavaScript, MongoDB, Node.js, React y Next UI. Mi objetivo es seguir creciendo y aportando valor a través de soluciones innovadoras y eficientes.
            </p>
          </div>
      
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Mi Curriculum
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}

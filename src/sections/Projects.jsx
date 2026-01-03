


import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import menutacosImg from "../assets/projects/menutacos.jpeg";
import transportpmImg from "../assets/projects/transportpm.jpeg";
import portfolioImg from "../assets/projects/porfolio.jpeg";
import colemanedImg from "../assets/projects/colemaned.jpeg";

const techIconMap = {
    html: "devicon-html5-plain colored fs-1",
    css: "devicon-css3-plain colored fs-1",
    js: "devicon-javascript-plain colored fs-1",
    react: "devicon-react-original colored fs-1",
    tailwind: "devicon-tailwindcss-plain colored fs-1",
    node: "devicon-nodejs-plain colored fs-1",
    express: "devicon-express-original fs-1",
    mongodb: "devicon-mongodb-plain colored fs-1",
    mysql: "devicon-mysql-plain colored fs-1",
    php: "devicon-php-plain colored fs-1",
    python: "devicon-python-plain colored fs-1",
    wordpress: "devicon-wordpress-plain colored fs-1",
    java: "devicon-java-plain colored fs-1",
    firebase: "devicon-firebase-plain colored fs-1",
    phyzer: "devicon-plain fs-1",
    sqlserver: "devicon-microsoftsqlserver-plain colored fs-1",
    springboot: "devicon-spring-plain colored fs-1",
    vue: "devicon-vuejs-plain colored fs-1",
    vscode: "devicon-vscode-plain colored fs-1",
    typescript: "devicon-typescript-plain colored fs-1",
    bootstrap: "devicon-bootstrap-plain colored fs-1",
};

// ⚠️ ORDEN: de MÁS NUEVO (arriba) a MÁS VIEJO (abajo)
const projectsConfig = [
    {
        key: "project1", // Carta del snack / MenuTacos (el más nuevo)
        image: menutacosImg,
        live: "https://gelaaas99.github.io/MenuTacos/",
        github: "https://gelaaas99.github.io/MenuTacos/",
    },
    {
        key: "project2", // TransportPM
        image: transportpmImg,
        live: "#",   // cambia cuando tengas la URL real
        // github: "#",
    },
    {
        key: "project3", // Portfolio personal
        image: portfolioImg,
        live: "#",   // URL final de tu portfolio
        github: "https://gelaaas99.github.io/porfolio/", // repo si quieres
    },
    {
        key: "project4", // Coleman Ediciones (el más viejo, abajo)
        image: colemanedImg,
        live: "https://www.colemaned.com/",
        // github: "#",
    },
];

function Projects() {
    const { t } = useTranslation();

    // AOS por CDN (window.AOS)
    useEffect(() => {
        if (typeof window !== "undefined" && window.AOS) {
            window.AOS.init({
                duration: 800,
                once: true,
                easing: "ease-out",
            });
        }
    }, []);

    return (
        <section id="projects" className="py-5">
            <div className="container">
                <h2 className="text-center mb-5">{t("projects.title")}</h2>

                <div className="d-flex flex-column gap-5">
                    {projectsConfig.map((proj, index) => {
                        const techKeys = t(`projects.${proj.key}.tech`, {
                            returnObjects: true,
                        });

                        const isEven = index % 2 === 0; // 0,2,... → fila par visual

                        // --------- COLUMNA TEXTO ---------
                        const textCol = (
                            <div
                                className={`col-12 col-md-6 d-flex ${isEven
                                        ? "order-1 order-md-2" // móvil: 1º, escritorio: derecha
                                        : "order-1 order-md-1" // móvil: 1º, escritorio: izquierda
                                    }`}
                            >
                                <article className="card card-custom flex-fill h-100">
                                    <div className="card-body d-flex flex-column gap-3">
                                        <div>
                                            <h3 className="h4 fw-bold mb-2">
                                                {t(`projects.${proj.key}.title`)}
                                            </h3>
                                            <p className="mb-0">
                                                {t(`projects.${proj.key}.description`)}
                                            </p>
                                        </div>

                                        {Array.isArray(techKeys) && techKeys.length > 0 && (
                                            <div>
                                                <p className="small text-uppercase text-info mb-2">
                                                    {t("projects.techLabel")}
                                                </p>
                                                <div className="d-flex flex-wrap gap-2">
                                                    {techKeys.map((key) => {
                                                        const normalizedKey = String(key).toLowerCase();
                                                        const iconClass = techIconMap[normalizedKey];
                                                        if (!iconClass) return null;

                                                        return (
                                                            <span
                                                                key={key}
                                                                className="d-inline-flex align-items-center justify-content-center rounded-pill px-2 py-1 me-1 mb-1"
                                                                style={{ backgroundColor: "rgba(0,0,0,0.03)" }}
                                                            >
                                                                <i
                                                                    className={iconClass}
                                                                    title={t(`projects.techNames.${normalizedKey}`)}
                                                                />
                                                                <span className="visually-hidden">
                                                                    {t(`projects.techNames.${normalizedKey}`)}
                                                                </span>
                                                            </span>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}

                                        <div className="mt-auto">
                                            {proj.github && proj.github !== "#" && (
                                                <a
                                                    href={proj.github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn btn-outline-primary btn-sm"
                                                >
                                                    {t("projects.view")}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            </div>
                        );

                        // --------- COLUMNA IMAGEN (ENLACE CLICKABLE) ---------
                        const imageCol = (
                            <div
                                className={`col-12 col-md-6 d-flex ${isEven
                                        ? "order-2 order-md-1" // móvil: 2º, escritorio: izquierda
                                        : "order-2 order-md-2" // móvil: 2º, escritorio: derecha
                                    }`}
                                data-aos={isEven ? "fade-right" : "fade-left"}
                            >
                                <article className="flex-fill h-100">
                                    <div className="card-body d-flex justify-content-center align-items-center">
                                        <a
                                            href={
                                                proj.live && proj.live !== "#"
                                                    ? proj.live
                                                    : proj.github || "#"
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                            className="d-block w-100 d-flex justify-content-center"
                                        >
                                            <img
                                                src={proj.image}
                                                alt={t(`projects.${proj.key}.title`)}
                                                className="img-fluid rounded-4 project-image"
                                            />
                                        </a>
                                    </div>
                                </article>
                            </div>
                        );

                        return (
                            <div
                                key={proj.key}
                                className="row align-items-stretch g-4"
                            >
                                {/* En el DOM SIEMPRE texto luego imagen.
                                El orden real en escritorio lo controlan las clases order-* */}
                                {textCol}
                                {imageCol}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );

}

export default Projects;







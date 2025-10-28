import { getTranslations } from "next-intl/server";
import styles from "@/styles/Architecture.module.css";
import type { Locale } from "@/lib/i18n";
import Link from "next/link";
import Image from "next/image";
import Animated from "@/components/Animated";

export default async function ArchitecturePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "architecture" });
  const tp = await getTranslations({ locale, namespace: "projects" });

  const shiraProjects = [
    {
      slug: "FREDEROSCAR",
      image: "/Photos/F-RENDER-OSCAR/F- RENDER OSCAR_Photo - 1.jpg",
    },
    { slug: "suite", image: "/Photos/Suite/suite1.jpg" },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.bubble1}></div>
      <div className={styles.bubble2}></div>
      <div className={styles.bubble3}></div>
      <div className={styles.bubble4}></div>
      <div className={styles.bubble5}></div>
      <div className={styles.bubble6}></div>
      <div className={styles.bubble7}></div>
      <div className={styles.bubble8}></div>

      <Animated animation="fade-down">
        <h1 className={styles.title}>{t("title")}</h1>
      </Animated>

      <Animated animation="zoom-in" delay={200} duration={10}>
        <p className={styles.intro}>{t("intro")}</p>
      </Animated>

      <div className={styles.visionSection}>
        <div className={styles.shiraVision}>
          <Animated animation="fade-right" duration={1200}>
            <div className={styles.imageContainer}>
              <Image
                src="/Photos/shiraPhoto.jpg"
                alt="Architect Shira Uzan"
                height={500}
                width={500}
                className={styles.imageShira}
              />
            </div>
          </Animated>

          <Animated animation="fade-left" delay={300}>
            <div className={styles.visionContent}>
              <div className={styles.divider}></div>
              <p className={styles.visionText}>
                Shira Uzan is a licensed architect with over a decade of
                experience in residential and commercial design. She specializes
                in creating innovative spaces that blend functionality with
                aesthetic excellence. Her approach emphasizes sustainable design
                principles and client collaboration, ensuring each project
                reflects the unique vision and needs of those who will inhabit
                the space.
              </p>
            </div>
          </Animated>
        </div>
      </div>

      <div className={styles.topContainer}>
        <Animated animation="fade-up" delay={100}>
          <div className={styles.serviceCard}>
            <h2>{t("design.title")}</h2>
            <p>{t("design.desc")}</p>
          </div>
        </Animated>

        <Animated animation="fade-up" delay={300}>
          <div className={styles.serviceCard}>
            <h2>{t("construction.title")}</h2>
            <p>{t("construction.desc")}</p>
          </div>
        </Animated>

        <Animated
          animation="fade-up"
          delay={500}
          className={styles.imageWrapper}
        >
          <Image
            src="/Photos/Architecture/house_wallpaper.jpg"
            alt="house wallpaper"
            fill
            className={styles.photo}
            priority
          />
        </Animated>
      </div>

      <Animated animation="fade-up">
        <h2 className={styles.portfolioTitle}>{t("portfolio")}</h2>
      </Animated>

      <div className={styles.projectsGrid}>
        {shiraProjects.map((project, index) => (
          <Animated
            key={project.slug}
            animation="flip-left"
            delay={index * 200}
          >
            <Link
              href={`/${locale}/projects/${project.slug}`}
              className={styles.projectCard}
            >
              <Image
                src={project.image}
                alt={tp(`${project.slug}.title`)}
                width={600}
                height={400}
              />
              <div className={styles.projectInfo}>
                <h3>{tp(`${project.slug}.title`)}</h3>
              </div>
            </Link>
          </Animated>
        ))}
      </div>

      <div className={styles.cta}>
        <Link href={`/${locale}/contact`} className={styles.ctaButton}>
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}

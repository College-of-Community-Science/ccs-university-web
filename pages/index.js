import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import parse, { domToReact, attributesToProps } from "html-react-parser";

import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { AiOutlineLoading } from "react-icons/ai";
import { HiNewspaper } from "react-icons/hi2";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Home.module.scss";

import campusImg from "@/assets/images/campus.jpg";
import facultyImage from "@/assets/images/facultyImage.png";
import facultyImage1 from "@/assets/images/facultyImage1.jpg";
import research1 from "@/assets/images/research1.jpg";
import research2 from "@/assets/images/research2.jpg";
import research3 from "@/assets/images/research3.jpg";
import ScrollMessage from "@/components/ScrollMessage/ScrollMessage";
import Modal from "@/components/Modal/Modal";
import { getBlogPosts, getRibbonLinks } from "@/utils/ApiUtils";

export default function Home() {
  const [courseCarouselLevel, setCourseCarouselLevel] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [newsData, setNewsData] = useState(null);

  const ButtonGroup = ({ next, previous, goToSlide, resetState, ...rest }) => {
    useEffect(() => {
      if (resetState) goToSlide(0);
    }, [resetState]);
    return (
      <div className={styles.carouselBtnGroup}>
        <button onClick={() => previous()}>
          <SlArrowLeft />
        </button>
        <button onClick={() => next()}>
          <SlArrowRight />
        </button>
      </div>
    );
  };

  const carouselSettings = {
    ssr: true,
    draggable: true,
    partialVisible: true,
    showDots: false,
    slidesToSlide: 1,
    swipeable: false,
    containerClass: styles.carouselContainer,
    sliderClass: styles.carouselSlider,
    responsive: {
      desktop: {
        breakpoint: { max: 3000, min: 1250 },
        items: 2.5,
        slidesToSlide: 1,
        partialVisibilityGutter: 40,
      },
      smallDesktop: {
        breakpoint: { max: 1250, min: 920 },
        items: 2,
        slidesToSlide: 1,
      },
      tablet: {
        breakpoint: { max: 920, min: 680 },
        items: 1.5,
        slidesToSlide: 1,
      },
      mobile: {
        breakpoint: { max: 680, min: 0 },
        items: 1,
        slidesToSlide: 1,
      },
    },
  };

  const bachelorCourseData = [
    {
      title: "Community Science (Hons)",
    },
    {
      title: "Food Nutrition and Dietetics (Hons)",
    },
  ];
  const masterCourseData = [
    {
      title: "Food & Nutrition (FN)",
    },
    {
      title: "Extension Education and Communication Management (EECM)",
    },
    {
      title: "Resource Management & Consumer Science (RMCS)",
    },
    {
      title: "Human Development & Family Studies (HDFS)",
    },
    {
      title: "Textile & Apparel Design (TAD)",
    },
  ];

  async function getNews() {
    try {
      const data = await getBlogPosts();
      console.log(data);
      setNewsData(data.items || []);
    } catch (e) {
      setNewsData([]);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <Head>
        <title>College of Community Science</title>
        <meta name="description" content="विद्या ददाति विनयम" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.introCarousel}>
        <div className={styles.heroImage}>
          <Image src={campusImg} alt="university campus" />
        </div>
        <div className={styles.infoContainer}>
          <span>
            <h1>
              College of <br /> Community Science
            </h1>
            <p>विद्या ददाति विनयम</p>
          </span>
          <p>
            College of Community Science Bikaner is an important constituent
            College of Swami Keshwanand Rajasthan Agricultural University,
            Bikaner. It is progressing leaps and bounds since its establishment
            in 1988.
          </p>
        </div>
        <ScrollMessage onClickMethod={() => setShowModal(true)} />
      </section>

      {/* Faculty Section */}
      <section className={styles.facultySection}>
        <div className={styles.header}>
          <p>FACULTY</p>
          <h2>OUR SKILLED FACULTY HELPS STUDENTS IN MANY DISCIPLINES</h2>
        </div>
        <div className={styles.infoGrid}>
          <Image
            src={facultyImage}
            alt="faculty image"
            width="1rem"
            height={"2rem"}
            data-aos="fade-up"
          />
          <div data-aos="fade-up" data-aos-delay="250">
            <h1>Faculty of Community Science</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              cumque aliquam nisi debitis consectetur. Corrupti suscipit
              necessitatibus rem eligendi blanditiis?
            </p>
            <Link href="#">Learn More</Link>
          </div>

          <div data-aos="fade-up">
            <h1>Faculty of Food, Nutrition & Dietetics</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              cumque aliquam nisi debitis consectetur. Corrupti suscipit
              necessitatibus rem eligendi blanditiis?
            </p>
            <Link href="#">Learn More</Link>
          </div>
          <Image
            src={facultyImage1}
            alt="faculty image"
            data-aos="fade-up"
            data-aos-delay="250"
          />
        </div>

        <Link href="#" className={styles.moreBtn}>
          SEE ALL FACULTY <FiArrowUpRight />
        </Link>
      </section>

      {/* News Section */}
      <section className={styles.newsSection}>
        <div className={styles.header}>
          <p>NEWS & ARTICLES</p>
          <h2>RECENT AND UPCOMING EVENTS</h2>
        </div>

        {!newsData ? (
          <div className={styles.newsLoading}>
            <AiOutlineLoading />
            LOADING NEWS
          </div>
        ) : null}

        {newsData && newsData.length ? (
          <div className={styles.newsContainer}>
            {newsData?.slice(0, 3).map((article, i) => (
              <div
                className={styles.newsCard}
                data-aos="fade-left"
                data-aos-delay={250 * i}
                key={article.id}
              >
                <p className={styles.date}>
                  {new Date(article.updated).toLocaleString("en-IN", {
                    dateStyle: "full",
                  })}
                </p>

                <h1>
                  <a href={article.url} target="_Blank" rel="noreferrer">
                    {article.title}
                  </a>
                </h1>

                <div className={styles.content}>
                  {parse(article.content, {
                    replace: (domNode) => {
                      if (domNode.tagName === "img") return <></>;
                      if (domNode.tagName === "br") return <> </>;
                      if (
                        domNode.tagName === "a" &&
                        !domNode.childNodes.filter((e) => e.name === "img")
                      ) {
                        return (
                          <a
                            {...attributesToProps(domNode.attribs)}
                            target="_Blank"
                            rel="noreferrer"
                          >
                            {domToReact(domNode.childNodes)}
                          </a>
                        );
                      }
                    },
                  })}
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.labels}>
                    {article.labels?.map((label) => (
                      <span key={label}>{label}</span>
                    ))}
                  </div>
                  <Link href={article.url} target="_Blank" rel="noreferrer">
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {newsData && newsData.length === 0 ? (
          <div className={styles.newsError}>
            <HiNewspaper />
            NO CURRENT NEWS
          </div>
        ) : null}

        <Link
          href="https://news.ccsbikaner.in/"
          target="_Blank"
          className={styles.moreBtn}
        >
          SEE ALL NEWS
          <FiArrowUpRight />
        </Link>
      </section>

      {/* Research Section */}
      <section className={styles.researchSection}>
        <div className={styles.header}>
          <h2>
            OUR RECENT RESEARCH & <br /> PUBLICATIONS
          </h2>
          <p>RESEARCH</p>
        </div>

        {/* <div className={styles.researchSliderContainer}> */}
        <Carousel
          {...carouselSettings}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup resetState={courseCarouselLevel} />}
        >
          <div className={styles.researchCard} data-aos="fade-left">
            <Image src={research1} alt="research image" />
            <h1>Food & Nutrition Research Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              laborum ex accusamus commodi possimus voluptas itaque id facere
              assumenda, architecto cupiditate aperiam magni sint alias.
            </p>
          </div>
          <div
            className={styles.researchCard}
            data-aos="fade-left"
            data-aos-delay="250"
          >
            <Image src={research2} alt="research image" />
            <h1>Human Development & Family Studies</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              laborum ex accusamus commodi possimus voluptas itaque id facere
              assumenda, architecto cupiditate aperiam magni sint alias.
            </p>
          </div>
          <div
            className={styles.researchCard}
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <Image src={research3} alt="research image" />
            <h1>Extension Education & Communication Management</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              laborum ex accusamus commodi possimus voluptas itaque id facere
              assumenda, architecto cupiditate aperiam magni sint alias.
            </p>
          </div>
          <div
            className={styles.researchCard}
            data-aos="fade-left"
            data-aos-delay="750"
          >
            <Image src={research1} alt="research image" />
            <h1>Food & Nutrition Research Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              laborum ex accusamus commodi possimus voluptas itaque id facere
              assumenda, architecto cupiditate aperiam magni sint alias.
            </p>
          </div>
          <div className={styles.researchCard}>
            <Image src={research2} alt="research image" />
            <h1>Human Development & Family Studies</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              laborum ex accusamus commodi possimus voluptas itaque id facere
              assumenda, architecto cupiditate aperiam magni sint alias.
            </p>
          </div>
          <div className={styles.researchCard}>
            <Image src={research3} alt="research image" />
            <h1>Extension Education & Communication Management</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              laborum ex accusamus commodi possimus voluptas itaque id facere
              assumenda, architecto cupiditate aperiam magni sint alias.
            </p>
          </div>
        </Carousel>
        {/* </div> */}

        <Link href="#" className={styles.moreBtn}>
          SEE ALL RESEARCH <FiArrowUpRight />
        </Link>
      </section>

      {/* Academic Section */}
      <section className={styles.academicSection}>
        <div className={styles.header}>
          <p>ACADEMICS</p>
          <h2>ACADEMIC PROGRAMS</h2>
        </div>

        <div className={styles.courseContainer}>
          <ul className={styles.courseTabs}>
            <li
              className={courseCarouselLevel === 0 ? styles.selected : ""}
              onClick={() => setCourseCarouselLevel(0)}
            >
              /Bachelor
            </li>
            <li
              className={courseCarouselLevel === 1 ? styles.selected : ""}
              onClick={() => setCourseCarouselLevel(1)}
            >
              /Master
            </li>
            <li
              className={courseCarouselLevel === 2 ? styles.selected : ""}
              onClick={() => setCourseCarouselLevel(2)}
            >
              /Ph.D
            </li>
          </ul>

          {courseCarouselLevel == 0 && (
            <Carousel
              {...carouselSettings}
              arrows={false}
              renderButtonGroupOutside={true}
              customButtonGroup={
                <ButtonGroup resetState={courseCarouselLevel} />
              }
            >
              {bachelorCourseData.map((item, i) => {
                return (
                  <div
                    className={styles.courseCard}
                    key={i}
                    data-aos="fade-left"
                    data-aos-delay={250 * i}
                  >
                    <h1>{item.title}</h1>
                    <div className={styles.cardFooter}>
                      <span>B.Sc</span>
                      <Link href="#">
                        <FiArrowRight />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          )}
          {courseCarouselLevel == 1 && (
            <Carousel
              {...carouselSettings}
              arrows={false}
              renderButtonGroupOutside={true}
              customButtonGroup={
                <ButtonGroup resetState={courseCarouselLevel} />
              }
            >
              {masterCourseData.map((item, i) => {
                return (
                  <div
                    className={styles.courseCard}
                    key={i}
                    data-aos="fade-left"
                    data-aos-delay={250 * i}
                  >
                    <h1>{item.title}</h1>
                    <div className={styles.cardFooter}>
                      <span>M.Sc</span>
                      <Link href="#">
                        <FiArrowRight />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          )}
          {courseCarouselLevel === 2 && (
            <Carousel
              {...carouselSettings}
              arrows={false}
              renderButtonGroupOutside={true}
              customButtonGroup={
                <ButtonGroup resetState={courseCarouselLevel} />
              }
            >
              {masterCourseData.map((item, i) => {
                return (
                  <div
                    className={styles.courseCard}
                    key={i}
                    data-aos="fade-left"
                    data-aos-delay={250 * i}
                  >
                    <h1>{item.title}</h1>
                    <div className={styles.cardFooter}>
                      <span>Ph.D</span>
                      <Link href="#">
                        <FiArrowRight />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          )}
        </div>
      </section>

      <Modal show={showModal} setShow={setShowModal} />
    </>
  );
}

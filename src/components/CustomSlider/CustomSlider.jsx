import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './CustomSlider.module.css';
import filterWithImages from '../../utils/filterWithImages';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.nextArrow}`}
      style={{ ...style }}
      onClick={onClick}
    >
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.prevArrow}`}
      style={{ ...style }}
      onClick={onClick}
    >
    </div>
  );
}

export default function CustomSlider({ items, title }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  const titleWithImages = filterWithImages(items);

  return (
    <div className={styles.sliderContainer}>
      <h2>{title}</h2>
      <Slider {...settings}>
        {titleWithImages.map((item) => {
          const { id, thumbnail, title } = item;

          return (
            <div key={id} className={styles.slide}>
              <img
                src={`${thumbnail.path}/portrait_incredible.${thumbnail.extension}`}
                alt={title}
              />
              <h5>{title}</h5>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

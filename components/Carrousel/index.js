import { Carousel, Image } from 'react-bootstrap'

export default function Carrousel({ listImage = [] }) {
  return (
    <Carousel>
      {listImage.map((item, index) => (
        <Carousel.Item key={index}>
          <Image src={item.src} alt={item.alt} className="d-block w-100" />
          {item.caption && (
            <Carousel.Caption>
              <h3>{item.caption.title}</h3>
              <p>{item.caption.subtitle}</p>
            </Carousel.Caption>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

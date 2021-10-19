import Head from 'next/head'
import Link from 'next/link'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Carrousel from '../components/Carrousel'
import { faFileSignature, faCalendarAlt, faTheaterMasks, faLandmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <>
      <Head>
        <title>Site MLZ</title>
        <meta name="description" content="SiteMLZ Creado en react" />
        <link rel="icon" href="/images/principal/lomasnew.ico" />
      </Head>
      <Container className="pt-10">
        <Carrousel
          listImage={[
            { src: '/images/slider/hospital-oo.png', alt: '1' },
            { src: '/images/slider/docentesanadar.png', alt: '2' }
          ]}
        />
        <Container>
          <Row className="d-flex justify-content-around mt-4">
            <Link href="/tramites" passHref>
              <Col
                md={2}
                className="section-link d-flex flex-column align-items-center"
              >
                <div className="border-icon__rounded padding-tramites">
                  <FontAwesomeIcon
                  className="icon-actions"
                    color="white"
                    icon={faFileSignature}
                  />
                </div>
                <span className="text-center font-bold mt-3">
                  Tramites y <br /> Solicitudes
                </span>
              </Col>
            </Link>
            <Link href="/seccionturnos" passHref>
              <Col
                md={2}
                className="section-link d-flex flex-column align-items-center"
              >
                <div className="border-icon__rounded d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    className="icon-actions"
                    color="white"
                    icon={faCalendarAlt}
                  />
                </div>
                <span className="text-center font-bold mt-3">
                  Turnos
                </span>
              </Col>
            </Link>
            <Link href="/tramites" passHref>
              <Col
                md={2}
                className="section-link d-flex flex-column align-items-center"
              >
                <div className="border-icon__rounded d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    className="icon-actions"
                    color="white"
                    icon={faTheaterMasks}
                  />
                </div>
                <span className="text-center font-bold mt-3">
                  Cultura
                </span>
              </Col>
            </Link>
            <Link href="/tramites" passHref>
              <Col
                md={2}
                className="section-link d-flex flex-column align-items-center"
              >
                <div className="border-icon__rounded d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    className="icon-actions"
                    color="white"
                    icon={faLandmark}
                  />
                </div>
                <span className="text-center font-bold mt-3">
                  Municipio
                </span>
              </Col>
            </Link>
          </Row>
        </Container>
      </Container>
    </>
  )
}

import React, { useEffect, useState } from "react";
import { db, collection, getDocs } from "./firebase";
import { Row, Col, Card, Skeleton, Typography, Button } from "antd";
import {
  PhoneOutlined,
  WhatsAppOutlined,
  CarOutlined,
  CalendarOutlined,
  ToolOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Header from "./components/Header";
import { Helmet } from "react-helmet-async";

<Helmet>
  <title>Kırklareli Araç Kiralama - En Uygun Fiyatlarla Araba Kirala</title>
  <meta name="description" content="Kırklareli araç kiralama hizmetleri ile uygun fiyatlı ve konforlu arabalar kiralayın. Geniş araç filomuzla 7/24 hizmetinizdeyiz." />
  <meta name="keywords" content="Kırklareli araç kiralama, Kırklareli araba kiralama, Uygun fiyatlı araç kiralama, Günlük araç kiralama, Kırklareli oto kiralama" />
  <meta name="author" content="Senin Firman" />
  <meta property="og:title" content="Kırklareli Araç Kiralama - En Uygun Fiyatlarla Araba Kirala" />
  <meta property="og:description" content="Kırklareli'de araba kiralama mı arıyorsunuz? Ekonomik ve lüks araç seçenekleriyle en iyi fiyat garantisi sunuyoruz!" />
  <meta property="og:image" content="URL_TO_YOUR_COVER_IMAGE" />
  <meta property="og:url" content="https://seninsiten.com" />
  <meta name="robots" content="index, follow" />
</Helmet>


const { Meta } = Card;

const CarGallery = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCars = async () => {
      const carsCollection = collection(db, "cars");
      try {
        const querySnapshot = await getDocs(carsCollection);
        const carsList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCars(carsList);
      } catch (error) {
        console.error("Error fetching cars data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  useEffect(() => {
    if (cars.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cars]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cars.length) % cars.length);
  };

  if (loading) {
    return <Skeleton active />;
  }

  return (
    <div style={{ padding: "0px" }}>
      <Header />

      {/* Slider Alanı */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "20px",
          position: "relative",
          width: "100%",
        }}
      >
        {/* Sol Ok Butonu */}
        <LeftOutlined
          onClick={handlePrev}
          style={{
            position: "absolute",
            left: "10%",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "30px",
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "10px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        />

        {/* Resim */}
        {cars.length > 0 && (
          <img
            alt={cars[currentIndex].model}
            src={cars[currentIndex].imageUrl}
            style={{
              height: "400px",
              width: "auto",
              maxWidth: "90%",
              objectFit: "cover",
              borderRadius: "10px",
              transition: "opacity 1s ease-in-out",
              opacity: 0.9,
            }}
          />
        )}

        {/* Sağ Ok Butonu */}
        <RightOutlined
          onClick={handleNext}
          style={{
            position: "absolute",
            right: "10%",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "30px",
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "11px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        />
      </div>

      {/* Slider Altındaki Çizgi ve Başlık */}
      <div
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: "#ccc",
          marginBottom: "20px",
        }}
      ></div>
      <h1 style={{ textAlign: "center", fontSize: "32px" }}>
        Kırklareli Araç Kiralama - Günlük & Aylık Kiralama
      </h1>

      {/* Araba Kartları */}
      <div style={{ display: "flex", justifyContent: "center", padding: "20px 0" }}>
        <div style={{ maxWidth: "1200px", width: "100%", padding: "0 20px" }}>
          {/* İçeriğe sağdan ve soldan boşluk */}
          <Row gutter={[24, 24]} justify="center">
            {cars.map((car) => (
              <Col xs={24} sm={12} md={8} lg={8} key={car.id}>
                <Card
                  hoverable
                  style={{ width: "100%", textAlign: "center" }}
                  cover={
                    <img
                      alt={car.model}
                      src={car.imageUrl}
                      style={{
                        height: "180px",
                        objectFit: "cover",
                        borderTopLeftRadius: "8px",
                        borderTopRightRadius: "8px",
                      }}
                    />
                  }
                >
                  <Meta
                    title={car.model}
                    description={
                      <div>
                        <p>
                          <CarOutlined /> <strong>Fuel:</strong> {car.fuel}
                        </p>
                        <p>
                          <ToolOutlined /> <strong>Transmission:</strong> {car.transmission}
                        </p>
                        <p>
                          <CalendarOutlined /> <strong>Year:</strong> {car.year}
                        </p>
                        <p>
                          <CalendarOutlined /> <strong>Adet:</strong> {car.quantity}
                        </p>
                      </div>
                    }
                  />

                  {/* WhatsApp ve Telefon Butonları */}
                  <div style={{ marginTop: "10px" }}>
                    <Button
                      type="primary"
                      icon={<PhoneOutlined />}
                      href={`tel:05522523997`}
                      style={{ marginRight: "10px" }}
                    >
                      Ara
                    </Button>

                    <Button
                      type="default"
                      icon={<WhatsAppOutlined />}
                      href={`https://wa.me/905522523997`}
                      target="_blank"
                      style={{ backgroundColor: "#25D366", color: "white" }}
                    >
                      WhatsApp
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default CarGallery;

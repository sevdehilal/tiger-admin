import React, { useEffect, useState } from "react";
import { db, collection, getDocs } from "./firebase";
import { Row, Col, Card, Skeleton, Typography, Button } from "antd";
import FooterComponent from "./components/FooterComponent";
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
  <meta name="author" content="Tiger Oto,Tiger Rent A Car" />
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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "20px",
          position: "relative",
          width: "100%",
          height: "450px", // Arka planın görünmesi için yüksekliği artır
          backgroundImage: `url("")`, // Buraya arka plan resmi URL'sini ekleyin
          backgroundSize: "cover", // Resmin tamamı görünsün
          backgroundPosition: "center", // Resmi ortala
          backgroundRepeat: "no-repeat",
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
            height: "400px", // Adjust this based on the desired image height
            width: "100%", // Ensure the image spans the width of the container
            objectFit: "contain", // Ensure the image fits within the container
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
          padding: "10px",
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
          backgroundColor: "#d3d3d3",
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
                style={{ width: "100%", textAlign: "center", position: "relative" }}
                cover={
                  <div style={{ position: "relative" }}>
                    <img
                      alt={car.model}
                      src={car.imageUrl}
                      style={{
                        height: "180px",
                        objectFit: "cover",
                        borderTopLeftRadius: "8px",
                        borderTopRightRadius: "8px",
                        width: "100%",
                      }}
                    />
                    {/* Araç Sayısı Etiketi */}
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        backgroundColor: "#FFA500",
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "20px",
                        fontWeight: "bold",
                        fontSize: "14px",
                        boxShadow: "0px 2px 5px rgba(0,0,0,0.3)",
                      }}
                    >
                      {car.quantity} Adet
                    </div>
                  </div>
                }
              >
            
            <Meta
                  title={
                    <Typography.Title level={3} style={{ marginBottom: "8px" }}>
                      {car.model}
                    </Typography.Title>
                  }
                    description={
                      <div>
                        <p>
                          <CarOutlined style={{ color: '#FFA500' }} /> <strong></strong> {car.fuel}
                        </p>
                        <p>
                          <ToolOutlined style={{ color: '#FFA500' }} /> <strong></strong> {car.transmission}
                        </p>
                        <p>
                          <CalendarOutlined style={{ color: '#FFA500' }} /> <strong></strong> {car.year}
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
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default CarGallery;

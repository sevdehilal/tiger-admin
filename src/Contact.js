import React from "react";
import { PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Header from "./components/Header";
import FooterComponent from "./components/FooterComponent";

const Contact = () => {
  const phoneNumber = "05522523997";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Sayfanın en az ekran boyutunda olması için
      }}
    >
      <Header />

      {/* İçerik Alanı */}
      <div style={{ flex: 1, textAlign: "center", marginTop: "200px" }}>
        <h2>İletişim Sayfası</h2>
        <p>Bizimle aşağıdaki seçeneklerden iletişime geçebilirsiniz.</p>

        {/* Telefon ile arama butonu */}
        <Button
          type="primary"
          icon={<PhoneOutlined />}
          size="large"
          style={{ marginRight: "10px" }}
          href={`tel:${phoneNumber}`}
        >
          Telefon ile Ara
        </Button>

        {/* WhatsApp butonu */}
        <Button
          type="default"
          icon={<WhatsAppOutlined />}
          size="large"
          href={`https://wa.me/90${phoneNumber}`}
          target="_blank"
          style={{ backgroundColor: "#25D366", color: "white" }}
        >
          WhatsApp'tan Mesaj Gönder
        </Button>
      </div>

      {/* Footer En Alta Sabitlendi */}
      <FooterComponent />
    </div>
  );
};

export default Contact;

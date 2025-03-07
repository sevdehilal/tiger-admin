import React from "react";
import { PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Header from "./components/Header";

const Contact = () => {
  const phoneNumber = "05522523997";

  return (
    
    <div style={{ textAlign: "center", marginTop: "0px" }}>
        <Header />
      

      <div style={{ marginTop: "200px" }}>
        {/* Telefon ile arama butonu */}
        <h2>İletişim Sayfası</h2>
      <p>Bizimle aşağıdaki seçeneklerden iletişime geçebilirsiniz.</p>
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
    </div>
  );
};

export default Contact;

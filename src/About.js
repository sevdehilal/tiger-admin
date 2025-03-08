import React from 'react';
import { Helmet } from "react-helmet-async";
import { Typography, Layout, Space } from 'antd';
import Header from "./components/Header";
import FooterComponent from './components/FooterComponent';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const About = () => {
  return (
    <Layout style={{ backgroundColor: '#fff', padding: '0px' }}>
      {/* SEO için meta etiketleri */}
      <Header />
      <Helmet>
        <title>Tiger Rent A Car | Hakkımızda</title>
        <meta 
          name="description" 
          content="Tiger Rent A Car olarak en kaliteli ve güvenilir araç kiralama hizmetini sunuyoruz. Uygun fiyatlarla konforlu ve güvenli bir araç kiralama deneyimi yaşayın." 
        />
        <meta name="keywords" content="araç kiralama, rent a car, uygun fiyatlı araç kiralama, güvenilir araç kiralama, oto kiralama" />
        <meta name="author" content="Tiger Rent A Car" />
      </Helmet>

      <Content style={{ maxWidth: '800px', margin: 'auto' }}>
        <Title level={1}>Tiger Rent A Car | Hakkımızda</Title>
        <Paragraph>
          Tiger Rent A Car olarak, siz değerli müşterilerimize en kaliteli ve güvenilir araç kiralama hizmetini sunmak için buradayız. 
          Yılların verdiği deneyim ve müşteri memnuniyeti odaklı hizmet anlayışımızla, seyahatlerinizi konforlu, güvenli ve keyifli hale getirmeyi amaçlıyoruz.
        </Paragraph>

        <Space direction="vertical" size="large">
          <div>
            <Title level={2}>Müşteri Memnuniyeti Önceliğimiz</Title>
            <Paragraph>
              Her aracımız düzenli bakım ve kontrollerden geçirilerek, güvenliğiniz ve rahatınız düşünülerek sizlere teslim edilmektedir. 
              Kiralama sürecinizin her aşamasında, hızlı ve sorunsuz bir hizmet sunmaya özen gösteriyoruz.
            </Paragraph>
          </div>

          <div>
            <Title level={2}>Şeffaf ve Güvenilir Hizmet</Title>
            <Paragraph>
              Şeffaf fiyat politikamız sayesinde sürpriz veya gizli ücretlendirmelere yer vermiyoruz. Amacımız, her bütçeye uygun kaliteli araçları, 
              kolay ve hızlı bir şekilde müşterilerimize sunarak, sorunsuz bir araç kiralama deneyimi yaşatmak.
            </Paragraph>
          </div>

          <div>
            <Title level={2}>Esnek Kiralama Seçenekleri</Title>
            <Paragraph>
              İster kısa süreli ister uzun süreli kiralama taleplerinizde, iş seyahatlerinizde, tatillerinizde veya özel günlerinizde en iyi seçenekleri sunmaktan mutluluk duyarız.
            </Paragraph>
          </div>

          <div>
            <Title level={2}>Bize Ulaşın</Title>
            <Paragraph>
              Kaliteli, güvenilir ve müşteri dostu bir araç kiralama deneyimi için bizimle hemen iletişime geçebilirsiniz. Tiger Rent A Car olarak, yolda daima yanınızdayız!
            </Paragraph>
          </div>
        </Space>
      </Content>
      <FooterComponent></FooterComponent>
    </Layout>
  );
};

export default About;

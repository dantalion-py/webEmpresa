import React from 'react';
import './styles/Sobre_nosotros.css';

const SobreNosotros = () => {
  // Array de miembros del equipo con información adicional
  const teamMembers = [
    {
      name: 'Emerson Vera',
      role: 'CEO & Fundador',
      description: 'Líder visionario con más de 10 años de experiencia en el desarrollo de software y estrategias digitales.',
      image: 'https://cdn.discordapp.com/attachments/1233288974177407026/1314457835848994876/WhatsApp_Image_2024-12-02_at_5.05.32_PM.jpeg?ex=6753d7c1&is=67528641&hm=07bb3e00c38f5882fbdf2a2d704ef8a604d053b71279fbe2a9b3f9b064c93221&'
    },
    {
      name: 'Johan Beltran',
      role: 'CTO',
      description: 'Experto en tecnología, encargado de liderar la innovación y la implementación de nuevas soluciones técnicas.',
      image: 'https://media.discordapp.net/attachments/1233288974177407026/1314460657663479808/7082437.jpg?ex=6753da62&is=675288e2&hm=7ed038c8a72f2f1d9d58d9cc9837f2b14ce7c98de2facc43c3f5505afc489a35&=&format=webp&width=468&height=468'
    },
    {
      name: 'Carla Flores',
      role: 'Líder de Desarrollo',
      description: 'Apasionada por la programación y la optimización de procesos, lidera nuestro equipo de desarrolladores.',
      image: 'https://cdn.discordapp.com/attachments/1233288974177407026/1314457836209569882/WhatsApp_Image_2024-12-04_at_3.36.04_PM.jpeg?ex=6753d7c1&is=67528641&hm=293a4210a72f47b89447efb284e62cc45dde8c22fc306b412489933b0dfc4cae&'
    },
    {
      name: 'Jose Mejia',
      role: 'Director de Marketing',
      description: 'Experto en marketing digital, encargado de impulsar nuestra presencia online y de conectar nuestra marca con los clientes.',
      image: 'https://media.discordapp.net/attachments/1233288974177407026/1314457836528468038/WhatsApp_Image_2024-12-04_at_5.08.23_PM.jpeg?ex=6753d7c1&is=67528641&hm=497f7e56351a0918b257436ce91d07143f2352080b7cfb5a8185fde741a1444a&=&format=webp&width=351&height=468'
    },
    {
      name: 'Marcelo Bazoalto',
      role: 'Product Manager',
      description: 'Apasionado por el desarrollo de productos, lidera el proceso de ideación y ejecución de nuevas funcionalidades.',
      image: 'https://media.discordapp.net/attachments/1233288974177407026/1314457837023264829/WhatsApp_Image_2024-12-04_at_9.48.52_PM.jpeg?ex=6753d7c1&is=67528641&hm=7591279ed744044323673c2bb4fb0172c5a7b9a1d5bb833ff913637ed1cda251&=&format=webp&width=536&height=468'
    },
    {
      name: 'Ruven Sanchez',
      role: 'Diseñador UX/UI',
      description: 'Especialista en la creación de experiencias digitales excepcionales, trabajando para que nuestros productos sean intuitivos y atractivos.',
      image: 'https://media.discordapp.net/attachments/1233288974177407026/1315854249388937256/IMG_20241208_203532.jpg?ex=6758ec44&is=67579ac4&hm=58ea54349e2b7917a5665ebea620e7e39c99b9b326e92cb827b0de7c8a6f22b3&=&format=webp&width=315&height=468'
    },
    {
      name: 'Israel Flores',
      role: 'Desarrollador Backend',
      description: 'Con una profunda pasión por la tecnología, se encarga de la infraestructura y el desarrollo de la lógica que hace funcionar nuestros productos.',
      image: 'https://cdn.discordapp.com/attachments/1233288974177407026/1315855178972528761/wallhaven-2krgog_1920x1080.png?ex=6758ed22&is=67579ba2&hm=14b6193945a0a2de9c456bde5f1e317274fabe93a447ee1898d586b2b604afb0&'
    }
    
  ];

  return (
    <div className="aboutus-container">
      {/* Header Section */}
      <header className="aboutus-header">
        <h1 className="aboutus-title">Sobre Nosotros</h1>
        <p className="aboutus-subtitle">
          Creemos en el poder de la tecnología para cambiar vidas y transformar ideas en realidad.
        </p>
      </header>

      {/* Mission Section */}
      <section className="aboutus-mission">
        <h2 className="section-title">Nuestra Misión</h2>
        <p className="section-description">
          En BikiniBottom, nuestra misión es crear soluciones innovadoras que permitan a las personas y
          equipos alcanzar su máximo potencial. Nos comprometemos a desarrollar herramientas que
          simplifiquen procesos y fomenten la colaboración.
        </p>
      </section>

      {/* Team Section */}
      <section className="aboutus-team">
        <h2 className="section-title">Conoce a Nuestro Equipo</h2>
        <div className="team-grid">
          {/* Iteramos sobre el array de miembros */}
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img
                src={member.image}
                alt={member.name}
                className="team-member-image"
              />
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
              <p className="team-member-description">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="aboutus-footer">
        <p>© 2024 BikiniBottom. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default SobreNosotros;

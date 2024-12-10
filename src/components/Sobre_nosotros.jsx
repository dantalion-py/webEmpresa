import React from 'react';
import './styles/Sobre_nosotros.css';

// Componente para mostrar los detalles de un miembro del equipo
const TeamMemberCard = ({ name, role, description, image }) => (
  <div className="team-member">
    <img src={image} alt={name} className="team-member-image" />
    <h3 className="team-member-name">{name}</h3>
    <p className="team-member-role">{role}</p>
    <p className="team-member-description">{description}</p>
  </div>
);

const SobreNosotros = () => {
  const teamMembers = [
    {
      name: 'Emerson Vera',
      role: 'CEO & Fundador',
      description: 'Líder visionario con más de 10 años de experiencia en el desarrollo de software y estrategias digitales.',
      image: '/images/8.jpeg',
    },
    {
      name: 'Johan Beltran',
      role: 'CTO',
      description: 'Experto en tecnología, encargado de liderar la innovación y la implementación de nuevas soluciones técnicas.',
      image: '/images/5.jpg',
    },
    {
      name: 'Carla Flores',
      role: 'Líder de Desarrollo',
      description: 'Apasionada por la programación y la optimización de procesos, lidera nuestro equipo de desarrolladores.',
      image: '/images/9.jpeg',
    },
    {
      name: 'Jose Mejia',
      role: 'Director de Marketing',
      description: 'Experto en marketing digital, encargado de impulsar nuestra presencia online y de conectar nuestra marca con los clientes.',
      image: '/images/10.jpeg',
    },
    {
      name: 'Marcelo Bazoalto',
      role: 'Product Manager',
      description: 'Apasionado por el desarrollo de productos, lidera el proceso de ideación y ejecución de nuevas funcionalidades.',
      image: '/images/11.jpeg',
    },
    {
      name: 'Ruven Sanchez',
      role: 'Diseñador UX/UI',
      description: 'Especialista en la creación de experiencias digitales excepcionales, trabajando para que nuestros productos sean intuitivos y atractivos.',
      image: '/images/6.jpg',
    },
    {
      name: 'Israel Flores',
      role: 'Desarrollador Backend',
      description: 'Con una profunda pasión por la tecnología, se encarga de la infraestructura y el desarrollo de la lógica que hace funcionar nuestros productos.',
      image: '/images/7.png',
    },
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
          {teamMembers.map((member) => (
            <TeamMemberCard 
              key={member.name} 
              name={member.name} 
              role={member.role} 
              description={member.description} 
              image={member.image} 
            />
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

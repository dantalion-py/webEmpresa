import React from 'react';
import './styles/Productos.css';

const ProductoCard = ({ name, description, image }) => (
  <div className="producto-card">
    <img src={image} alt={name} className="producto-image" />
    <h3 className="producto-name">{name}</h3>
    <p className="producto-description">{description}</p>
    <button className="producto-button">Ver Más</button>
  </div>
);

const Productos = () => {
  const productos = [
    {
      name: 'Dashboard Union',
      description: 'Gestión unificada y potente para optimizar tus proyectos y operaciones.',
      image: '/images/2.png',
    },
    {
      name: 'AmazingAstr',
      description: 'Eficiencia y rendimiento en una herramienta innovadora y confiable.',
      image: '/images/3.png',
    },
    {
      name: 'YourLife',
      description: 'Tu compañera ideal para monitorear y mejorar tu rutina de ejercicios desde cualquier lugar.',
      image: '/images/4.png',
    },
  ];

  return (
    <div className="productos-container">
      <header className="productos-header">
        <h1 className="productos-title">Nuestros Productos</h1>
        <p className="productos-subtitle">Soluciones innovadoras para tu negocio</p>
      </header>

      <section className="productos-list">
        {productos.map(({ name, description, image }) => (
          <ProductoCard 
            key={name} 
            name={name} 
            description={description} 
            image={image} 
          />
        ))}
      </section>

      <footer className="productos-footer">
        <p>© 2024 BikiniBottom. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Productos;

import React from 'react';
import './styles/Productos.css';

const Productos = () => {
  const productos = [
    {
      name: 'Producto 1',
      description: 'Descripción del producto 1. Es una solución potente para tus necesidades de software.',
      image: 'https://media.discordapp.net/attachments/1233288974177407026/1314463708679766027/2024-12-06_01-26.png?ex=6753dd39&is=67528bb9&hm=898d6532af1d7b473602e052fd04e02d4a87938f2d38044c5ce2e1508c170407&=&format=webp&quality=lossless',
    },
    {
      name: 'Producto 2',
      description: 'Descripción del producto 2. Eficiencia y rendimiento a tu alcance.',
      image: 'https://media.discordapp.net/attachments/1233288974177407026/1314463709007052810/2024-12-06_01-28.png?ex=6753dd39&is=67528bb9&hm=ffd4e3a0691e0313d66d7efe9e540cc138107b8f10df6ffb0b2e48e502c38755&=&format=webp&quality=lossless&width=845&height=468',
    },
    {
      name: 'Producto 3',
      description: 'Descripción del producto 3. Ideal para equipos de desarrollo colaborativos.',
      image: 'https://media.discordapp.net/attachments/1233288974177407026/1314464069100765236/2024-12-06_01-30.png?ex=6753dd8f&is=67528c0f&hm=ccec5a9abd52118c99e058ed04c89d62774a23daf79b65d5fdde83ec2006f2ef&=&format=webp&quality=lossless&width=550&height=303',
    },
  ];

  return (
    <div className="productos-container">
      <header className="productos-header">
        <h1 className="productos-title">Nuestros Productos</h1>
        <p className="productos-subtitle">Soluciones innovadoras para tu negocio</p>
      </header>

      <section className="productos-list">
        {productos.map((producto, index) => (
          <div key={index} className="producto-card">
            <img src={producto.image} alt={producto.name} className="producto-image" />
            <h3 className="producto-name">{producto.name}</h3>
            <p className="producto-description">{producto.description}</p>
            <button className="producto-button">Ver Más</button>
          </div>
        ))}
      </section>

      <footer className="productos-footer">
        <p>© 2024 DevPanel. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Productos;

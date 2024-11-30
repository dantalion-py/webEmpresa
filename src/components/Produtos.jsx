import React from 'react';
import './styles/Productos.css';

const Productos = () => {
  return (
    <div className="productos-container">
      <header className="productos-header">
        <h1 className="productos-title">Nuestros Productos</h1>
        <p className="productos-subtitle">Soluciones innovadoras para tu negocio</p>
      </header>

      <section className="productos-list">
        <div className="producto-card">
          <img src="https://via.placeholder.com/300x200" alt="Producto 1" className="producto-image"/>
          <h3 className="producto-name">Producto 1</h3>
          <p className="producto-description">Descripción del producto 1. Es una solución potente para tus necesidades de software.</p>
          <button className="producto-button">Ver Más</button>
        </div>

        <div className="producto-card">
          <img src="https://via.placeholder.com/300x200" alt="Producto 2" className="producto-image"/>
          <h3 className="producto-name">Producto 2</h3>
          <p className="producto-description">Descripción del producto 2. Eficiencia y rendimiento a tu alcance.</p>
          <button className="producto-button">Ver Más</button>
        </div>

        <div className="producto-card">
          <img src="https://via.placeholder.com/300x200" alt="Producto 3" className="producto-image"/>
          <h3 className="producto-name">Producto 3</h3>
          <p className="producto-description">Descripción del producto 3. Ideal para equipos de desarrollo colaborativos.</p>
          <button className="producto-button">Ver Más</button>
        </div>
      </section>

      <footer className="productos-footer">
        <p>© 2024 DevPanel. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Productos;

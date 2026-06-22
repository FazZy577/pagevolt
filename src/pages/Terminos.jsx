import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/LegalPages.css';

export default function Terminos() {
  return (
    <div className="legal-page">
      <Navbar />
      <div className="legal-container">
        <div className="legal-content">
          <h1>Términos y Condiciones</h1>
          <p className="legal-updated">Última actualización: 14 de junio de 2026</p>

          <section>
            <h2>1. Descripción del Servicio</h2>
            <p>
              Voltix es un servicio de diseño y desarrollo de páginas web enfocado en
              negocios locales. Ofrecemos soluciones web profesionales, optimizadas para
              conversión y adaptadas a las necesidades específicas de cada cliente.
            </p>
            <p>Nuestros servicios incluyen:</p>
            <ul>
              <li>Diseño web personalizado y responsive</li>
              <li>Optimización SEO básica</li>
              <li>Integración de sistemas de pago (cuando aplique)</li>
              <li>Hosting y dominio (según el plan contratado)</li>
              <li>Mantenimiento técnico (según el plan contratado)</li>
            </ul>
          </section>

          <section>
            <h2>2. Condiciones de Pago</h2>
            <p>
              El pago del proyecto se estructura de la siguiente manera:
            </p>
            <ul>
              <li><strong>Primer pago (50%):</strong> Se debe abonar antes de comenzar el desarrollo del proyecto. Este pago confirma la reserva del servicio.</li>
              <li><strong>Segundo pago (50%):</strong> Se debe abonar al aprobar el diseño final y antes de la entrega del proyecto completado.</li>
            </ul>
            <p>
              Todos los pagos se procesan de forma segura a través de Stripe. Aceptamos
              tarjetas de crédito, débito, Apple Pay y Google Pay.
            </p>
            <p>
              <strong>Importante:</strong> El proyecto no será entregado hasta que se complete
              el pago total del 100%.
            </p>
          </section>

          <section>
            <h2>3. Proceso de Desarrollo</h2>
            <p>El desarrollo de tu proyecto sigue estas fases:</p>
            <ol>
              <li><strong>Consulta inicial:</strong> Recopilación de requisitos y objetivos</li>
              <li><strong>Primer pago (50%):</strong> Confirmación del proyecto</li>
              <li><strong>Diseño y desarrollo:</strong> Creación de la página web</li>
              <li><strong>Revisiones:</strong> Hasta 3 revisiones incluidas (ver sección 4)</li>
              <li><strong>Aprobación final:</strong> Cliente aprueba el diseño</li>
              <li><strong>Segundo pago (50%):</strong> Pago del 50% restante</li>
              <li><strong>Entrega:</strong> Publicación y entrega de la web</li>
            </ol>
          </section>

          <section>
            <h2>4. Política de Revisiones</h2>
            <p>
              Cada proyecto incluye hasta <strong>3 revisiones gratuitas</strong> durante
              la fase de diseño. Las revisiones adicionales se cobrarán según tarifa horaria.
            </p>
            <p>Una revisión se considera:</p>
            <ul>
              <li>Cambios en textos, colores o imágenes</li>
              <li>Ajustes en la disposición de elementos existentes</li>
              <li>Modificaciones menores en el diseño aprobado</li>
            </ul>
            <p>No se consideran revisiones (y no se contabilizan en el límite):</p>
            <ul>
              <li>Corrección de errores técnicos o bugs</li>
              <li>Ajustes de responsive que no funcionen correctamente</li>
            </ul>
          </section>

          <section>
            <h2>5. Derechos de Propiedad Intelectual</h2>
            <p className="legal-highlight">
              <strong>⚠️ CLÁUSULA IMPORTANTE:</strong> Queda terminantemente prohibida cualquier
              modificación, copia, redistribución o uso del diseño web entregado sin consentimiento
              expreso y por escrito de Voltix. El incumplimiento de esta cláusula podrá derivar
              en acciones legales, incluyendo reclamación de daños y perjuicios.
            </p>
            <p>
              Voltix se reserva todos los derechos sobre los diseños hasta el pago completo
              del proyecto (100%). Una vez completado el pago total:
            </p>
            <ul>
              <li>El cliente obtiene los derechos de uso del diseño para su negocio</li>
              <li>Voltix retiene el derecho a mostrar el proyecto en su portfolio</li>
              <li>El cliente NO puede revender, redistribuir o ceder el diseño a terceros sin autorización escrita</li>
              <li>El cliente NO puede modificar el código fuente sin consentimiento de Voltix</li>
            </ul>
            <p>
              Para solicitar permisos especiales de uso, modificación o redistribución, contacta
              con nosotros a través de Instagram: <strong>@_pagevolt_</strong>
            </p>
          </section>

          <section>
            <h2>6. Cancelación y Reembolsos</h2>
            <p>
              <strong>Cancelación por el cliente:</strong>
            </p>
            <ul>
              <li>Si se cancela antes de iniciar el desarrollo: reembolso del 100% del primer pago</li>
              <li>Si se cancela durante el desarrollo: NO hay reembolso del primer pago (50%)</li>
              <li>Si se cancela después de la aprobación del diseño: NO hay reembolso</li>
            </ul>
            <p>
              <strong>Cancelación por Voltix:</strong> En caso de que no podamos completar
              el proyecto por causas ajenas a nuestra voluntad, se reembolsará el 100% de los
              pagos realizados.
            </p>
          </section>

          <section>
            <h2>7. Plazos de Entrega</h2>
            <p>
              Los plazos de entrega estimados se comunicarán al inicio del proyecto y dependen
              de la complejidad del mismo. Los plazos se cuentan desde la recepción del primer
              pago (50%) y toda la información necesaria del cliente.
            </p>
            <p>
              Los retrasos causados por falta de respuesta del cliente, provisión tardía de
              contenidos o cambios en los requisitos no se contabilizan en el plazo de entrega.
            </p>
          </section>

          <section>
            <h2>8. Responsabilidades del Cliente</h2>
            <p>El cliente se compromete a:</p>
            <ul>
              <li>Proporcionar toda la información necesaria de forma oportuna</li>
              <li>Entregar contenidos (textos, imágenes) con los derechos de uso correspondientes</li>
              <li>Responder a las solicitudes de feedback en un plazo razonable (máximo 7 días)</li>
              <li>Realizar los pagos según lo acordado</li>
              <li>No utilizar el diseño para fines ilegales o que infrinjan derechos de terceros</li>
            </ul>
          </section>

          <section>
            <h2>9. Limitación de Responsabilidad</h2>
            <p>
              Voltix no se hace responsable de:
            </p>
            <ul>
              <li>Pérdidas económicas derivadas del uso o mal uso de la página web entregada</li>
              <li>Contenidos proporcionados por el cliente que infrinjan derechos de terceros</li>
              <li>Problemas técnicos de terceros (hosting, dominio) fuera de nuestro control</li>
              <li>Cambios en algoritmos de buscadores que afecten al posicionamiento SEO</li>
            </ul>
          </section>

          <section>
            <h2>10. Mantenimiento y Soporte</h2>
            <p>
              El mantenimiento posterior a la entrega del proyecto se ofrece según el plan
              contratado. Los servicios de mantenimiento pueden incluir:
            </p>
            <ul>
              <li>Actualizaciones de seguridad</li>
              <li>Corrección de errores técnicos</li>
              <li>Actualizaciones de contenido (según plan)</li>
              <li>Soporte técnico prioritario</li>
            </ul>
            <p>
              Los servicios de mantenimiento se facturan por separado y no están incluidos
              en el precio del proyecto inicial, salvo que se especifique lo contrario.
            </p>
          </section>

          <section>
            <h2>11. Modificación de los Términos</h2>
            <p>
              Voltix se reserva el derecho de modificar estos términos y condiciones en
              cualquier momento. Las modificaciones entrarán en vigor para proyectos iniciados
              después de la fecha de actualización.
            </p>
            <p>
              Los proyectos en curso se regirán por los términos vigentes al momento de la
              confirmación del proyecto (primer pago).
            </p>
          </section>

          <section>
            <h2>12. Ley Aplicable y Jurisdicción</h2>
            <p>
              Estos términos y condiciones se rigen por la <strong>legislación española</strong>.
              Para la resolución de cualquier controversia, las partes se someten a los juzgados
              y tribunales españoles que correspondan según la legislación vigente.
            </p>
          </section>

          <section>
            <h2>13. Contacto</h2>
            <p>
              Para cualquier consulta sobre estos términos y condiciones:
            </p>
            <ul>
              <li>Instagram: <a href="https://ig.me/m/_pagevolt_" target="_blank" rel="noopener noreferrer">@_pagevolt_</a></li>
              <li>Sitio web: pagevolt.es</li>
            </ul>
          </section>

          <section>
            <h2>14. Aceptación de los Términos</h2>
            <p>
              Al realizar el primer pago (50%), el cliente confirma que ha leído, comprendido
              y acepta estos términos y condiciones en su totalidad.
            </p>
          </section>

          <div className="legal-back">
            <Link to="/" className="btn btn-primary">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

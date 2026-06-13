import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [codes, setCodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('all'); // 'all', 'pending', 'paid', 'cancelled'
  const navigate = useNavigate();

  const ADMIN_PASSWORD = 'pagevolt2026'; // Change this in production

  useEffect(() => {
    const auth = localStorage.getItem('pagevolt_admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      loadCodes();
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('pagevolt_admin_auth', 'true');
      setIsAuthenticated(true);
      setError('');
      loadCodes();
    } else {
      setError('Contraseña incorrecta');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('pagevolt_admin_auth');
    setIsAuthenticated(false);
    setCodes([]);
  };

  const loadCodes = async () => {
    setLoading(true);
    try {
      const response = await fetch('/data/payment-codes.json');
      const data = await response.json();
      setCodes(data.codes || []);
    } catch (err) {
      console.error('Error loading codes:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredCodes = codes.filter(code => {
    if (filter === 'all') return true;
    return code.status === filter;
  });

  const stats = {
    total: codes.length,
    pending: codes.filter(c => c.status === 'pending').length,
    paid: codes.filter(c => c.status === 'paid').length,
    cancelled: codes.filter(c => c.status === 'cancelled').length,
    totalRevenue: codes
      .filter(c => c.status === 'paid')
      .reduce((sum, c) => sum + c.amount, 0)
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status) => {
    const styles = {
      pending: { bg: 'rgba(234, 179, 8, 0.1)', color: '#eab308', text: 'Pendiente' },
      paid: { bg: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', text: 'Pagado' },
      cancelled: { bg: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', text: 'Cancelado' }
    };
    const style = styles[status] || styles.pending;

    return (
      <span
        className="admin-status-badge"
        style={{
          background: style.bg,
          color: style.color
        }}
      >
        {style.text}
      </span>
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-page">
        <div className="admin-login-container">
          <motion.div
            className="admin-login-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="admin-logo">
              <h1>Page<span>Volt</span></h1>
              <p>Panel de administración</p>
            </div>

            <form onSubmit={handleLogin} className="admin-login-form">
              <div className="admin-input-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Introduce tu contraseña"
                  className="admin-input"
                  autoFocus
                />
              </div>

              {error && (
                <div className="admin-error">
                  <span>⚠</span>
                  {error}
                </div>
              )}

              <button type="submit" className="btn btn-primary">
                Acceder
              </button>
            </form>

            <button
              onClick={() => navigate('/')}
              className="admin-back-link"
            >
              ← Volver al inicio
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-container">
        <motion.div
          className="admin-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="admin-header">
            <div>
              <h1>Panel de administración</h1>
              <p>Gestión de códigos de pago</p>
            </div>
            <div className="admin-header-actions">
              <button onClick={loadCodes} className="btn btn-secondary" disabled={loading}>
                {loading ? 'Cargando...' : '↻ Recargar'}
              </button>
              <button onClick={handleLogout} className="btn btn-secondary">
                Cerrar sesión
              </button>
            </div>
          </div>

          <div className="admin-stats">
            <div className="admin-stat-card">
              <div className="admin-stat-icon">📊</div>
              <div className="admin-stat-info">
                <span className="admin-stat-label">Total códigos</span>
                <span className="admin-stat-value">{stats.total}</span>
              </div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-icon">⏳</div>
              <div className="admin-stat-info">
                <span className="admin-stat-label">Pendientes</span>
                <span className="admin-stat-value">{stats.pending}</span>
              </div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-icon">✓</div>
              <div className="admin-stat-info">
                <span className="admin-stat-label">Pagados</span>
                <span className="admin-stat-value">{stats.paid}</span>
              </div>
            </div>
            <div className="admin-stat-card admin-stat-highlight">
              <div className="admin-stat-icon">💰</div>
              <div className="admin-stat-info">
                <span className="admin-stat-label">Ingresos totales</span>
                <span className="admin-stat-value">€{stats.totalRevenue.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="admin-filters">
            <button
              onClick={() => setFilter('all')}
              className={`admin-filter-btn ${filter === 'all' ? 'active' : ''}`}
            >
              Todos ({stats.total})
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`admin-filter-btn ${filter === 'pending' ? 'active' : ''}`}
            >
              Pendientes ({stats.pending})
            </button>
            <button
              onClick={() => setFilter('paid')}
              className={`admin-filter-btn ${filter === 'paid' ? 'active' : ''}`}
            >
              Pagados ({stats.paid})
            </button>
            <button
              onClick={() => setFilter('cancelled')}
              className={`admin-filter-btn ${filter === 'cancelled' ? 'active' : ''}`}
            >
              Cancelados ({stats.cancelled})
            </button>
          </div>

          <div className="admin-table-container">
            {filteredCodes.length === 0 ? (
              <div className="admin-empty">
                <p>No hay códigos {filter !== 'all' ? `con estado "${filter}"` : ''}</p>
              </div>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Código</th>
                    <th>Cliente</th>
                    <th>Descripción</th>
                    <th>Tipo</th>
                    <th>Cantidad</th>
                    <th>Estado</th>
                    <th>Fecha creación</th>
                    <th>Fecha pago</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCodes.map((code) => (
                    <tr key={code.code}>
                      <td>
                        <code className="admin-code">{code.code}</code>
                      </td>
                      <td>{code.clientName}</td>
                      <td className="admin-cell-description">{code.description}</td>
                      <td>
                        <span className="admin-payment-type">
                          {code.paymentType}
                        </span>
                      </td>
                      <td>
                        <span className="admin-amount">€{code.amount}</span>
                      </td>
                      <td>{getStatusBadge(code.status)}</td>
                      <td>{formatDate(code.createdAt)}</td>
                      <td>
                        {code.paidAt ? formatDate(code.paidAt) : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="admin-instructions">
            <h3>💡 Instrucciones</h3>
            <ul>
              <li>
                <strong>Generar código:</strong> Ejecuta{' '}
                <code>npm run generate-code</code> en la terminal
              </li>
              <li>
                <strong>Enviar al cliente:</strong> Copia el código generado y envíaselo por Instagram
              </li>
              <li>
                <strong>Link de pago:</strong> Los clientes acceden a{' '}
                <code>tudominio.com/pago</code>
              </li>
              <li>
                <strong>Webhook:</strong> Los pagos se marcan automáticamente como "Pagado" vía webhook de Stripe
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

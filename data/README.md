# Payment Codes - Instrucciones

Este archivo contiene los códigos de pago únicos para tus clientes.

## Cómo añadir un nuevo código

Cada vez que tengas un nuevo cliente, añade una entrada al array `codes`:

```json
{
  "code": "PV-XXXXX-XXXXX",
  "clientName": "Nombre del Café/Bar",
  "amount": 49.50,
  "paymentType": "Primer pago (50%)" o "Segundo pago (50%)",
  "totalProject": 99,
  "status": "pending",
  "createdAt": "2026-06-13T19:19:32.544Z",
  "description": "Web Esencial - Nombre del negocio",
  "email": "email@cliente.com"
}
```

## Campos

- **code**: Código único (formato: PV-XXXXX-XXXXX)
- **clientName**: Nombre del negocio del cliente
- **amount**: Cantidad a pagar en este pago (50% del total)
- **paymentType**: "Primer pago (50%)" o "Segundo pago (50%)"
- **totalProject**: Precio total del proyecto
- **status**: "pending" (pendiente), "paid" (pagado), "cancelled" (cancelado)
- **createdAt**: Fecha de creación (formato ISO)
- **description**: Descripción del proyecto
- **email**: Email del cliente para enviar recibo

## Ejemplo de flujo

1. Cliente contacta por Instagram
2. Le das precio: €99 (Web Esencial)
3. Creas código para primer 50%: `PV-CAFE1-FIRST`
4. Cliente paga usando ese código
5. Haces la web, la aprueba
6. Creas segundo código: `PV-CAFE1-SECOND`
7. Cliente paga el resto

## Estados

- **pending**: El cliente aún no ha pagado
- **paid**: Pago completado
- **cancelled**: Proyecto cancelado

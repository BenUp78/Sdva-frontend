// Componente para proteger rutas privadas
export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>; // TODO: Implementar lógica de autenticación
};

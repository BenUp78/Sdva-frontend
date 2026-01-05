"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const TempleDashboard = () => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("usuarios");
  const [currentPage, setCurrentPage] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Datos de ejemplo para la tabla
  const users = Array(10).fill({
    id: "0123456789",
    nombre: "John Doe",
    correo: "manhhachkt08@gmail.com",
    departamento: "Marketing",
    telefono: "0123456789",
    flujo: "Flujo",
  });

  const departments = ["Marketing", "Design", "Product"];

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        position: "relative",
      }}
    >
      {/* Overlay para móvil */}
      {isMobile && sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 998,
          }}
        />
      )}

      {/* Sidebar */}
      <aside
        style={{
          width: isMobile ? "280px" : "250px",
          backgroundColor: "#ffffff",
          borderRight: "1px solid #e0e0e0",
          padding: "20px",
          position: isMobile ? "fixed" : "fixed",
          height: "100vh",
          overflowY: "auto",
          zIndex: 999,
          transform:
            isMobile && !sidebarOpen ? "translateX(-100%)" : "translateX(0)",
          transition: "transform 0.3s ease-in-out",
          boxShadow:
            isMobile && sidebarOpen ? "2px 0 8px rgba(0,0,0,0.1)" : "none",
        }}
      >
        {/* Logo en Sidebar */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1a237e",
            marginBottom: "30px",
            paddingBottom: "20px",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <span style={{ fontSize: "28px", marginRight: "8px" }}>W</span>
          WORKLA
        </div>

        {/* Menú de navegación */}
        <nav>
          {[
            { id: "inicio", label: "Inicio", icon: "🏠" },
            { id: "usuarios", label: "Gestión de usuarios", icon: "👥" },
            { id: "servidores", label: "Análisis de servidores", icon: "🖥️" },
            {
              id: "preferencias",
              label: "Análisis de preferencias y recomendaciones",
              icon: "📊",
            },
            { id: "reportes", label: "Reportes", icon: "📄" },
          ].map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              style={{
                padding: "12px 16px",
                marginBottom: "8px",
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor:
                  activeMenu === item.id ? "#f5f5f5" : "transparent",
                borderLeft:
                  activeMenu === item.id
                    ? "4px solid #1a237e"
                    : "4px solid transparent",
                color: activeMenu === item.id ? "#1a237e" : "#666",
                fontWeight: activeMenu === item.id ? "600" : "400",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}

          {/* Logout */}
          <div
            onClick={() => router.push("/")}
            style={{
              padding: "12px 16px",
              marginTop: "20px",
              borderRadius: "8px",
              cursor: "pointer",
              color: "#d32f2f",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span>🚪</span>
            <span>Logout</span>
          </div>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main
        style={{
          marginLeft: isMobile ? "0" : "250px",
          flex: 1,
          backgroundColor: "#ffffff",
          width: isMobile ? "100%" : "calc(100% - 250px)",
        }}
      >
        {/* Header */}
        <header
          style={{
            padding: isMobile ? "12px 16px" : "16px 32px",
            borderBottom: "1px solid #e0e0e0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#ffffff",
            position: "sticky",
            top: 0,
            zIndex: 100,
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {/* Botón hamburguesa y Logo en Header */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {isMobile && (
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "24px",
                  cursor: "pointer",
                  padding: "4px",
                }}
              >
                ☰
              </button>
            )}
            <div
              style={{
                fontSize: isMobile ? "18px" : "20px",
                fontWeight: "600",
                color: "#1a237e",
              }}
            >
              <span
                style={{
                  fontSize: isMobile ? "20px" : "24px",
                  marginRight: "6px",
                }}
              >
                W
              </span>
              WORKLA
            </div>
          </div>

          {/* Links centrales - Oculto en móvil */}
          {!isMobile && (
            <div style={{ display: "flex", gap: "24px" }}>
              {[1, 2, 3, 4].map((i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    color: "#999",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  Lorem
                </a>
              ))}
            </div>
          )}

          {/* Perfil de usuario */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: isMobile ? "8px" : "12px",
            }}
          >
            {!isMobile && (
              <span style={{ fontSize: "20px", cursor: "pointer" }}>🔔</span>
            )}
            <div
              style={{
                width: isMobile ? "32px" : "40px",
                height: isMobile ? "32px" : "40px",
                borderRadius: "50%",
                backgroundColor: "#e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? "16px" : "18px",
              }}
            >
              👤
            </div>
            {!isMobile && (
              <>
                <div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#333",
                    }}
                  >
                    Niklas Schmidt
                  </div>
                  <div style={{ fontSize: "12px", color: "#999" }}>
                    Stylist Artist
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    cursor: "pointer",
                  }}
                >
                  ▼
                </span>
              </>
            )}
          </div>
        </header>

        {/* Contenido de la página */}
        <div style={{ padding: isMobile ? "16px" : "32px" }}>
          {/* Título */}
          <h1
            style={{
              fontSize: isMobile ? "22px" : "28px",
              fontWeight: "700",
              color: "#333",
              marginBottom: "24px",
            }}
          >
            Gestión de usuarios
          </h1>

          {/* Barra de búsqueda y botón agregar */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: isMobile ? "stretch" : "center",
              marginBottom: "24px",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "12px",
                flex: 1,
                maxWidth: isMobile ? "100%" : "500px",
              }}
            >
              <div style={{ position: "relative", flex: 1 }}>
                <input
                  type="text"
                  placeholder="Buscar"
                  style={{
                    width: "100%",
                    padding: "12px 16px 12px 40px",
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    fontSize: "14px",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    left: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#999",
                  }}
                >
                  🔍
                </span>
              </div>
              {!isMobile && (
                <button
                  style={{
                    padding: "12px 24px",
                    backgroundColor: "#1a237e",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  Buscar
                </button>
              )}
            </div>
            <button
              style={{
                padding: "12px 24px",
                backgroundColor: "#1a237e",
                color: "#ffffff",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                width: isMobile ? "100%" : "auto",
              }}
            >
              <span>➕</span>
              <span>{isMobile ? "Agregar" : "Agregar usuario"}</span>
            </button>
          </div>

          {/* Tabla de usuarios */}
          <div
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              overflow: isMobile ? "auto" : "hidden",
            }}
          >
            <div
              style={{
                overflowX: "auto",
                width: "100%",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  minWidth: isMobile ? "800px" : "100%",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#f5f5f5" }}>
                    {[
                      "ID",
                      "Nombre",
                      "Correo",
                      "Departamento",
                      "Teléfono",
                      "Flujo",
                      "",
                      "",
                    ].map((header) => (
                      <th
                        key={header}
                        style={{
                          padding: isMobile ? "12px 8px" : "16px",
                          textAlign: "left",
                          fontSize: isMobile ? "12px" : "14px",
                          fontWeight: "600",
                          color: "#333",
                          borderBottom: "1px solid #e0e0e0",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr
                      key={index}
                      style={{
                        borderBottom:
                          index < users.length - 1
                            ? "1px solid #e0e0e0"
                            : "none",
                      }}
                    >
                      <td
                        style={{
                          padding: isMobile ? "12px 8px" : "16px",
                          fontSize: isMobile ? "12px" : "14px",
                          color: "#666",
                        }}
                      >
                        {user.id}
                      </td>
                      <td
                        style={{
                          padding: isMobile ? "12px 8px" : "16px",
                          fontSize: isMobile ? "12px" : "14px",
                          color: "#666",
                        }}
                      >
                        {user.nombre}
                      </td>
                      <td
                        style={{
                          padding: isMobile ? "12px 8px" : "16px",
                          fontSize: isMobile ? "12px" : "14px",
                          color: "#666",
                        }}
                      >
                        {user.correo}
                      </td>
                      <td style={{ padding: isMobile ? "12px 8px" : "16px" }}>
                        <span
                          style={{
                            padding: "6px 12px",
                            borderRadius: "16px",
                            fontSize: isMobile ? "10px" : "12px",
                            fontWeight: "500",
                            backgroundColor:
                              user.departamento === "Marketing"
                                ? "#e3f2fd"
                                : user.departamento === "Design"
                                ? "#f3e5f5"
                                : "#e1f5fe",
                            color:
                              user.departamento === "Marketing"
                                ? "#1976d2"
                                : user.departamento === "Design"
                                ? "#7b1fa2"
                                : "#0277bd",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {departments[index % departments.length]}
                        </span>
                      </td>
                      <td
                        style={{
                          padding: isMobile ? "12px 8px" : "16px",
                          fontSize: isMobile ? "12px" : "14px",
                          color: "#666",
                        }}
                      >
                        {user.telefono}
                      </td>
                      <td
                        style={{
                          padding: isMobile ? "12px 8px" : "16px",
                          fontSize: isMobile ? "12px" : "14px",
                          color: "#666",
                        }}
                      >
                        {user.flujo}
                      </td>
                      <td style={{ padding: isMobile ? "12px 8px" : "16px" }}>
                        <span
                          style={{
                            cursor: "pointer",
                            fontSize: isMobile ? "16px" : "18px",
                            color: "#666",
                          }}
                        >
                          ✏️
                        </span>
                      </td>
                      <td style={{ padding: isMobile ? "12px 8px" : "16px" }}>
                        <span
                          style={{
                            cursor: "pointer",
                            fontSize: isMobile ? "16px" : "18px",
                            color: "#d32f2f",
                          }}
                        >
                          🗑️
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Paginación */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: isMobile ? "4px" : "8px",
              marginTop: "24px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                padding: isMobile ? "6px 12px" : "8px 16px",
                border: "1px solid #e0e0e0",
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: isMobile ? "12px" : "14px",
              }}
            >
              {isMobile ? "←" : "Back"}
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                style={{
                  padding: isMobile ? "6px 10px" : "8px 16px",
                  border: "1px solid #e0e0e0",
                  backgroundColor: currentPage === page ? "#1a237e" : "#ffffff",
                  color: currentPage === page ? "#ffffff" : "#666",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: isMobile ? "12px" : "14px",
                  fontWeight: currentPage === page ? "600" : "400",
                  minWidth: isMobile ? "32px" : "auto",
                }}
              >
                {page}
              </button>
            ))}
            <button
              style={{
                padding: isMobile ? "6px 12px" : "8px 16px",
                border: "1px solid #e0e0e0",
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: isMobile ? "12px" : "14px",
              }}
            >
              {isMobile ? "→" : "Next"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

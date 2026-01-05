"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const TempleLanding = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirigir al dashboard al hacer click en "Crear cuenta"
    router.push("/dashboard");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        padding: "20px",
      }}
    >
      <div
        className="card shadow-sm"
        style={{
          width: "100%",
          maxWidth: "450px",
          borderRadius: "12px",
          border: "none",
          padding: "40px",
        }}
      >
        {/* Logo WORKLA */}
        <div className="text-center mb-4">
          <div
            style={{
              fontSize: "28px",
              fontWeight: "600",
              color: "#1a237e",
              marginBottom: "30px",
            }}
          >
            <span style={{ fontSize: "32px", marginRight: "8px" }}>W</span>
            WORKLA
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          {/* Nombre y apellido */}
          <div className="mb-3">
            <label
              htmlFor="nombre"
              className="form-label"
              style={{
                color: "#333",
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "8px",
              }}
            >
              Nombre y apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              placeholder="John Doe"
              value={formData.nombre}
              onChange={handleChange}
              required
              style={{
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                padding: "12px 16px",
                fontSize: "14px",
              }}
            />
          </div>

          {/* Correo */}
          <div className="mb-3">
            <label
              htmlFor="correo"
              className="form-label"
              style={{
                color: "#333",
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "8px",
              }}
            >
              Correo
            </label>
            <input
              type="email"
              className="form-control"
              id="correo"
              name="correo"
              placeholder="johndoe@mail.com"
              value={formData.correo}
              onChange={handleChange}
              required
              style={{
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                padding: "12px 16px",
                fontSize: "14px",
              }}
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label"
              style={{
                color: "#333",
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "8px",
              }}
            >
              contraseña
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                padding: "12px 16px",
                fontSize: "14px",
              }}
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="form-label"
              style={{
                color: "#333",
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "8px",
              }}
            >
              Confirmar contraseña
            </label>
            <div className="position-relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                style={{
                  borderRadius: "8px",
                  border: "1px solid #e0e0e0",
                  padding: "12px 16px",
                  paddingRight: "45px",
                  fontSize: "14px",
                }}
              />
              <button
                type="button"
                className="btn btn-link position-absolute"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  padding: "0",
                  border: "none",
                  background: "none",
                  color: "#666",
                  textDecoration: "none",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {showConfirmPassword ? (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </>
                  ) : (
                    <>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Link de inicio de sesión */}
          <div className="text-center mb-4">
            <span style={{ color: "#666", fontSize: "14px" }}>
              ¿Tiene cuenta?{" "}
              <Link
                href="/signin"
                style={{
                  color: "#42a5f5",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                Iniciar sesión
              </Link>
            </span>
          </div>

          {/* Botón Crear cuenta */}
          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: "#1a237e",
              color: "#ffffff",
              borderRadius: "8px",
              padding: "12px",
              fontSize: "16px",
              fontWeight: "500",
              border: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#283593";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#1a237e";
            }}
          >
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

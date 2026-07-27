"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState, SubmitEvent, FocusEvent } from "react";

export default function Register() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    confirmEmail: "",
    name: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    confirmEmail: "",
    name: "",
    password: "",
  });

  const handleBlur = ({ target }: FocusEvent<HTMLInputElement>) => {
    const { id, value } = target;
    let errorMessage = "";

    // Regex para validar formato de e-mail basico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value.trim()) {
      errorMessage = "Este campo é obrigatório.";
    } else {
      if (id === "email" && !emailRegex.test(value)) {
        errorMessage = "Digite um e-mail válido.";
      } else if (id === "confirmEmail" && value !== form.email) {
        errorMessage = "Os e-mails informados não coincidem.";
      } else if (id === "password" && value.length < 3) {
        errorMessage = "A senha deve ter pelo menos 3 caracteres.";
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: errorMessage,
    }));
  };

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    if (
      errors.name || errors.email || errors.confirmEmail || errors.password ||
      !form.name || !form.email || !form.confirmEmail || !form.password
    ) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    console.log(form.email, form.confirmEmail, form.name, form.password);
    router.push("/");
  }

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = target;
    setForm({
      ...form,
      [id]: value,
    });
  };
  return (
    <main>
      <div className="container-fluid d-flex min-vh-100">
        <div className="row min-vw-100">
          <div className="col-12 col-md-4 bg-light d-flex justify-content-center align-items-center">
            <h2>Bem vindo à WA Loja!</h2>
          </div>
          <div className="col-12 col-md-8 d-flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nome
                </label>
                <input
                  type="text"
                  className={`form-control form-control-lg ${errors.name ? "is-invalid" : ""}`}
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-describedby="name"
                  required
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control form-control-lg ${errors.email ? "is-invalid" : ""}`}
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="email"
                  aria-describedby="email"
                  required
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="confirmEmail" className="form-label">
                  Confirmar email
                </label>
                <input
                  type="email"
                  className={`form-control form-control-lg ${errors.confirmEmail ? "is-invalid" : ""}`}
                  id="confirmEmail"
                  value={form.confirmEmail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-describedby="confirmEmail"
                  required
                />
                {errors.confirmEmail && <div className="invalid-feedback">{errors.confirmEmail}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Senha
                </label>
                <input
                  type="password"
                  className={`form-control form-control-lg ${errors.password ? "is-invalid" : ""}`}
                  value={form.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="password"
                  required
                />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>

              <div className="d-grid col-12">
                <button type="submit" className="btn btn-success">
                  Confirmar cadastro
                </button>
              </div>

              <div className="text-center mt-3">
                <Link href="/login" className="btn btn-link">
                  já possuo cadastro
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, SubmitEvent, useState, FocusEvent } from "react";

export default function Login() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    if (errors.email || errors.password || !form.email || !form.password) {
      alert("Preencha todos os campos corretamente.");
      return;
    }
    console.log(form.email, form.password);
    router.push('/');
  }

  const handleBlur = ({ target }: FocusEvent<HTMLInputElement>) => {
    const { id, value } = target;
    let errorMessage = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value.trim()) {
      errorMessage = "Este campo é obrigatório.";
    } else if (id === "email" && !emailRegex.test(value)) {
      errorMessage = "Digite um e-mail válido.";
    }

    setErrors((prev) => ({
      ...prev,
      [id]: errorMessage,
    }));
  };

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
          </div>{" "}
          <div className="col-12 col-md-8 d-flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-describedby="email"
                  required
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Senha
                </label>
                <input
                  type="password"
                  className={`form-control form-control-lg ${errors.password ? 'is-invalid' : ''}`}
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
                  Entrar
                </button>
              </div>

              <div className="text-center mt-3">
                <Link href="/register" className="btn btn-link">
                  não tenho cadastro
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

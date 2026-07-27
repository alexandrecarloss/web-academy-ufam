"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface FormularioLogin {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormularioLogin>();

  const onSubmit = (data: FormularioLogin) => {
    console.log(data);
    router.push("/");
  };

  return (
    <main>
      <div className="container-fluid d-flex min-vh-100">
        <div className="row min-vw-100">
          <div className="col-12 col-md-4 bg-light d-flex justify-content-center align-items-center">
            <h2>Bem vindo à WA Loja!</h2>
          </div>
          <div className="col-12 col-md-8 d-flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control form-control-lg ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  id="email"
                  {...register("email", {
                    required: "Este campo é obrigatório.",
                  })}
                />
                {errors.email && (
                  <span className="invalid-feedback d-block">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Senha
                </label>
                <input
                  type="password"
                  className={`form-control form-control-lg ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  id="password"
                  {...register("password", {
                    required: "Este campo é obrigatório.",
                    minLength: {
                      value: 6,
                      message: "A senha deve ter pelo menos 6 caracteres.",
                    },
                  })}
                />
                {errors.password && (
                  <span className="invalid-feedback d-block">
                    {errors.password.message}
                  </span>
                )}
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
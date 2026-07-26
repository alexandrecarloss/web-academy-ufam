"use client";
import { useParams, usePathname, useSearchParams } from "next/navigation";

export default function Exemplo() {
  const params = useParams();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  // cursos/react/hook?name=Carlos+Alexandre&age=23
  return (
    <div>
      <h1>Curso: {params.curso}</h1>
      <h2>Aula: {params.aula}</h2>
      <h2>A rota atual é {pathName}</h2>
      <h2>Os parâmetros de busca são: {searchParams}</h2>
      <h2>Name: {searchParams.get('name')}</h2>
      <h2>Age: {searchParams.get('age')}</h2>
    </div>
  );
}
import React from "react";

export function MeusLivros() {
  // Lista de livros do usuário — depois você pode puxar do backend
  const livros = [
    {
      id: 1,
      titulo: "A História de Israel",
      capa: "https://m.media-amazon.com/images/I/71L4LTnCM5L._SL1360_.jpg",
    },
    {
      id: 2,
      titulo: "Profecias do Fim dos Tempos",
      capa: "https://m.media-amazon.com/images/I/71u+BRQqB-L._SL1500_.jpg",
    },
    {
      id: 3,
      titulo: "A Batalha Espiritual",
      capa: "https://m.media-amazon.com/images/I/81IKiDkEe8L._SL1500_.jpg",
    },
  ];

  return (
    <div className="pt-24 container mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
        Meus Livros
      </h1>

      {livros.length === 0 ? (
        <p className="text-muted-foreground">Você ainda não possui livros.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {livros.map((livro) => (
            <div
              key={livro.id}
              className="bg-card rounded-lg shadow-md p-3 hover:scale-105 transition cursor-pointer"
            >
              <img
                src={livro.capa}
                alt={livro.titulo}
                className="w-full h-56 object-cover rounded-md"
              />
              <h2 className="text-foreground font-semibold mt-3 text-sm">
                {livro.titulo}
              </h2>

              <button className="mt-3 w-full bg-primary text-white py-1.5 rounded-md hover:opacity-80 text-sm">
                Ler / Abrir
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
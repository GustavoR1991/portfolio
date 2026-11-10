export type Pastel = "lilac" | "peach" | "butter" | "sky" | "rose";

// Nomes completos, para o Tailwind encontrar as classes
export const pastelBg: Record<Pastel, string> = {
  lilac: "bg-lilac",
  peach: "bg-peach",
  butter: "bg-butter",
  sky: "bg-sky",
  rose: "bg-rose",
};

// Ordem usada para colorir listas (cartões, timeline...)
export const pastelOrder: Pastel[] = [
  "lilac",
  "peach",
  "sky",
  "butter",
  "rose",
];

// Pega uma cor pela posição na lista, voltando ao início quando acaba
export function pastelAt(index: number): Pastel {
  return pastelOrder[index % pastelOrder.length];
}

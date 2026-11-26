# Ceia de Natal 2026 — Família Calasans

Site estático de encomendas (React + TypeScript + Vite), pronto para GitHub Pages. Sem backend, sem serviços pagos.
Observação: o CSS é próprio (arquivo `src/styles.css`), sem Tailwind/Lucide, para manter o projeto leve.

## Rodar localmente
```bash
npm install
npm test        # testes dos cálculos
npm run dev     # http://localhost:5173
npm run build   # gera /dist
```

## Publicar no GitHub Pages
1. Crie um repositório no GitHub e envie estes arquivos para a branch `main`.
2. Em **Settings → Pages → Build and deployment**, escolha **Source: GitHub Actions**.
3. O workflow `.github/workflows/deploy.yml` roda testes, faz o build e publica. O endereço será `https://<usuario>.github.io/<repositorio>/`.
O `vite.config.ts` usa `base: './'` (caminhos relativos), então funciona dentro do caminho do repositório.

## Atualizar preços, produtos e textos
- **Preços, kits, composição, trocas de proteína, disponibilidade:** `src/data/catalog.ts` (valores em reais dentro de `m(...)`).
- **Datas, horários, prazo, sinal (%), taxas de entrega, contatos, textos:** `src/data/settings.ts`.
- Taxas de entrega: preencha `deliveryFees` por bairro (minúsculas, em centavos). Bairro sem taxa cadastrada = "a confirmar".
- Todas as telas e cálculos leem desses arquivos.

## Fotografias
Coloque os arquivos em `public/images/` com estes nomes (JPG): `hero-ceia`, `institucional`, `kit-essencial`, `kit-especial`, `kit-celebracao-maminha`, `kit-celebracao-cupim`, `acompanhamentos`, `sobremesas`.
Enquanto o arquivo não existir, o site mostra um espaço reservado. Para trocar o nome de uma foto, edite o campo `image` no catálogo.
As fotos incluídas são ilustrativas (não são do restaurante); o rodapé informa isso. Faltam fotos de banoffee, manjar de coco e dos acompanhamentos (exceto batatas rústicas): nesses itens aparece o espaço reservado. Para trocar qualquer foto, substitua o arquivo em `public/images/` mantendo o nome.

## Regras comerciais implementadas
- Kits de 2/4/6 pessoas; Celebração com cupim é versão alternativa (troca maminha↔cupim = diferença entre os preços dos kits, sem somar proteínas).
- Troca para outras proteínas e retirada de itens **não têm preço cadastrado**: o valor do kit não muda e aparece "Esta alteração precisa ser confirmada pela nossa equipe."; o total fica "provisório".
- Itens acrescentados no personalizador são cobrados pelo preço de 500 g do produto avulso (preço já cadastrado).
- Entrega: sem taxa cadastrada, aparece "a confirmar" e o total não é definitivo. Sinal = 50% do total; saldo = total − sinal (centavos inteiros, sem erro de ponto flutuante).
- Após `deadline`, os botões de compra ficam desativados e a mensagem de encerramento é exibida.

## Limitações da versão estática
Sem banco de dados, painel, autenticação, estoque compartilhado, reserva automática de horários ou confirmação de Pix. O carrinho fica no `localStorage` do navegador. Pedidos chegam por WhatsApp (`wa.me`) e e-mail (`mailto:`); a equipe confirma manualmente. Como não há backend, a validação roda no navegador e a equipe deve conferir valores ao receber a mensagem.

## Testes
`npm test` cobre: kits 2/4/6, Celebração maminha/cupim, troca de proteína, retirada/adição de itens, produtos avulsos, sinal/saldo, taxa pendente e entradas inválidas. Testes de interface (responsividade, abertura do WhatsApp/e-mail, publicação no Pages) precisam ser feitos por você em aparelhos reais após o deploy.

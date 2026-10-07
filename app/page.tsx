import s from "./page.module.css";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=558531112067&text&type=phone_number&app_absent=0&utm_source=ig";

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="24"
      viewBox="0 0 50 50"
      aria-hidden="true"
    >
      <path
        fill="#212121"
        d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"
      />
      <path
        fill="#212121"
        d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"
      />
      <path fill="#212121" d="M16 24h17v2H16z" />
    </svg>
  );
}

const lentesTerms = [
  { term: "Cor", desc: "Do branco mais claro a tons naturais, escolhidos na escala." },
  { term: "Formato", desc: "Bordas, pontas e curvas que combinam com o seu perfil." },
  { term: "Proporção", desc: "Tamanho e largura dos dentes em equilíbrio com o rosto." },
  { term: "Naturalidade", desc: "Brilho e textura para o sorriso não parecer artificial." },
];

const cities = [
  { uf: "Ceará", name: "Fortaleza" },
  { uf: "São Paulo", name: "São Paulo" },
];

export default function Home() {
  return (
    <>
      <main id="topo">
        <section className={s.hero}>
          <div className={s.wrap}>
            <p className={s.eyebrow}>Dentista · Fortaleza | São Paulo</p>
            <h1>
              Devolvo sua autoestima através do <em>sorriso.</em>
            </h1>
            <p className={s.lead}>
              Lentes dentais feitas com olhar perfeccionista, do planejamento ao
              último detalhe. Mais de 4.500 assinadas por mim.
            </p>
            <div className={s.actions}>
              <a
                className={`${s.btn} ${s.primary}`}
                href={WHATSAPP}
                target="_blank"
                rel="noopener"
              >
                Agendar avaliação <ArrowIcon />
              </a>
              <a className={s.btn} href="#mentorias">
                Conhecer as mentorias <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className={`${s.section} ${s.band}`} aria-label="Números">
          <div className={`${s.wrap} ${s.bandGrid}`}>
            <div>
              <p className={s.bigNum}>
                4.500<span aria-hidden="true">+</span>
                <span className={s.srOnly}> ou mais</span>
              </p>
              <p className={s.bigLabel}>lentes assinadas por mim</p>
              <p className={s.sig} aria-hidden="true">
                Lucas Nóbrega
              </p>
            </div>
            <div>
              <dl className={s.mini}>
                <div>
                  <dt>Cidades</dt>
                  <dd>Fortaleza e São Paulo</dd>
                </div>
                <div>
                  <dt>Seguidores</dt>
                  <dd>10,3 mil</dd>
                </div>
                <div>
                  <dt>Publicações</dt>
                  <dd>1.111</dd>
                </div>
              </dl>
              <p className={s.source}>
                Perfil @drlucasnobrega no Instagram, outubro de 2026.
              </p>
            </div>
          </div>
        </section>

        <section id="sobre" className={s.section}>
          <div className={`${s.wrap} ${s.split}`}>
            <div>
              <p className={s.eyebrow}>Sobre</p>
              <p className={s.bigWord}>Perfeccionista.</p>
            </div>
            <div className={s.prose}>
              <p>
                Sorrir bem muda a forma como a pessoa se mostra. Meu trabalho é
                cuidar de cada detalhe para que o resultado pareça seu: formato,
                proporção, cor e textura.
              </p>
              <p>
                Mais de 4.500 lentes passaram pelas minhas mãos, e eu assino
                cada uma delas. Atendo em Fortaleza e em São Paulo.
              </p>
              <p className={s.muted}>
                Sou Lucas Nóbrega, dentista. Acompanhe o dia a dia do consultório
                no Instagram.
              </p>
            </div>
          </div>
        </section>

        <section id="lentes" className={`${s.section} ${s.noTopPad}`}>
          <div className={`${s.wrap} ${s.split}`}>
            <div>
              <p className={s.eyebrow}>Lentes dentais</p>
              <h2>Lâminas finas, desenhadas para o seu rosto.</h2>
              <p className={s.note}>
                Nem todo caso pede lentes. A indicação sai da avaliação clínica,
                com exame e conversa sobre o que você deseja.
              </p>
            </div>
            <div>
              <p className={s.prose}>
                Lentes dentais são lâminas muito finas, de cerâmica ou resina,
                fixadas na face visível dos dentes. Elas permitem trabalhar
                quatro pontos do sorriso:
              </p>
              <dl className={s.terms}>
                {lentesTerms.map((t) => (
                  <div key={t.term}>
                    <dt>{t.term}</dt>
                    <dd>{t.desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="atendimento" className={`${s.section} ${s.noTopPad}`}>
          <div className={s.wrap}>
            <p className={s.eyebrow}>Atendimento</p>
            <h2>Duas cidades, o mesmo cuidado.</h2>
            <p className={s.sectionSub}>
              Para consultar datas e endereço em cada cidade, chame pelo
              Instagram.
            </p>
            <div className={s.cities}>
              {cities.map((c) => (
                <article className={s.city} key={c.name}>
                  <p className={s.uf}>{c.uf}</p>
                  <h3>{c.name}</h3>
                  <p className={s.muted}>
                    Atendimento presencial com agendamento prévio.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="mentorias" className={`${s.section} ${s.mentoria}`}>
          <div className={`${s.wrap} ${s.split}`}>
            <div>
              <p className={s.eyebrow}>Mentorias</p>
              <h2>Aprenda lentes com quem já fez mais de 4.500.</h2>
            </div>
            <div className={s.prose}>
              <p>
                Além do consultório, compartilho com outros profissionais o que
                aprendi em anos de prática com lentes dentais.
              </p>
              <p className={s.muted}>
                Para saber como funcionam as mentorias e as próximas turmas, fale
                comigo pelo Instagram.
              </p>
              <div className={`${s.actions} ${s.actionsTight}`}>
                <a
                  className={`${s.btn} ${s.primary}`}
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener"
                >
                  Falar sobre mentorias
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={s.footer}>
        <div className={s.wrap}>
          <span>Dr. Lucas Nóbrega · Dentista · Fortaleza | SP</span>
          <span>© 2026</span>
          <span>
            Site desenvolvido por{" "}
            <b>
              <i>Jackson Reis</i>
            </b>
          </span>
        </div>
      </footer>
    </>
  );
}

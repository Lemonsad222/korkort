import { signSrc } from '../signAssets'
import type { Lang } from '../types'
import { t } from '../i18n'
import { SIGNS, SIGN_CLASSES } from '../data/signs'
import { buildPath } from '../router'
import Link from './Link'
import LangSwitch from './LangSwitch'

export default function SignGallery({ lang }: { lang: Lang }) {
  return (
    <div className="page">
      <header className="top">
        <Link className="link" href={buildPath(lang, { name: 'home' })}>← {t(lang, 'back')}</Link>
        <LangSwitch lang={lang} route={{ name: 'signs' }} />
      </header>
      <h1>{t(lang, 'signsTitle')}</h1>
      {SIGN_CLASSES.map((cls) => (
        <section key={cls.code} className="signsection">
          <h2>{cls[lang] ?? cls.en}</h2>
          <div className="signgrid">
            {SIGNS.filter((s) => s.code.startsWith(cls.code)).map((s) => (
              <div key={s.code} className="signcard">
                <img src={signSrc(`${s.code}.svg`)} alt="" loading="lazy" />
                <strong>{s[lang] ?? s.en}</strong>
                {s.d && <span>{s.d[lang] ?? s.d.en}</span>}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

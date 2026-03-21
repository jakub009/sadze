import allianzLogo from "../poistovna/Allianz.svg.png";
import colonnadeLogo from "../poistovna/Colonnade-KFS_logo.png";
import csobLogo from "../poistovna/CSOB_logo.jpg";
import generaliLogo from "../poistovna/generali.jpg";
import komunalnaLogo from "../poistovna/komunalna.png";
import kooperativaLogo from "../poistovna/kooperativa_logo-1.jpg";
import premiumLogo from "../poistovna/premium.png";
import unionLogo from "../poistovna/union.png";
import uniqaLogo from "../poistovna/uniqa.png";
import wustenrotLogo from "../poistovna/wustenrot.jpg";

export type Insurer = {
  id: string;
  name: string;
  logo: string;
  href: string;
};

export const insurers: Insurer[] = [
  {
    id: "allianz",
    name: "Allianz",
    logo: allianzLogo,
    href: "https://www.allianz.sk/sk_SK/hlasenia-poistnych-udalosti.html#nahlasit-pu",
  },
  {
    id: "colonnade",
    name: "Colonnade",
    logo: colonnadeLogo,
    href: "https://skody.colonnade.sk/1BpUhrIUK2aDUaWCaqNa6ReC0GpOzSnvl7iYknS5VEro1cKv7b04hr1f7HkKXfb2z/basic-information",
  },
  {
    id: "csob",
    name: "ČSOB",
    logo: csobLogo,
    href: "https://www.csob.sk/nahlasenie-poistnej-udalosti",
  },
  {
    id: "generali",
    name: "Generali",
    logo: generaliLogo,
    href: "https://www.generali.sk/poistna-udalost/archiv-dokumentov/majetok/",
  },
  {
    id: "komunalna",
    name: "Komunálna poisťovňa",
    logo: komunalnaLogo,
    href: "https://webcalc.koop.sk/kpas/hlasenia",
  },
  {
    id: "kooperativa",
    name: "Kooperativa",
    logo: kooperativaLogo,
    href: "https://webcalc.koop.sk/koop/hlasenia",
  },
  {
    id: "premium",
    name: "Premium",
    logo: premiumLogo,
    href: "https://likvidacia.premium-ic.sk/claims/portal/home",
  },
  {
    id: "union",
    name: "Union",
    logo: unionLogo,
    href: "https://eform.union.sk/lpu/lpu_form_template",
  },
  {
    id: "uniqa",
    name: "UNIQA",
    logo: uniqaLogo,
    href: "https://skody.uniqa.sk/majetok-zodpovednost/",
  },
  {
    id: "wustenrot",
    name: "Wüstenrot",
    logo: wustenrotLogo,
    href: "https://www.wuestenrot.sk/poistna-udalost/byvanie/",
  },
];

import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema(
  {
    nazev: { type: String, required: true },
    ico: { type: Number, required: true },
    sektor: {
      typ: { type: String, required: true },
      skolne: { type: Number, required: true },
    },
    obor: {
      kod: { type: String, required: true },
      nazev: { type: String, required: true },
      delka: { type: Number, required: true },
      forma: { type: String, required: true },
      druh: { type: String, required: true },
    },
    adresa: {
      kraj: { type: String, required: true },
      okres: { type: String, required: true },
      orp: { type: String, required: true },
      obec: { type: String, required: true },
      psc: { type: String, required: true },
      ulice: { type: String, required: true },
      typ_cisla_domovniho: { type: String, required: true },
      cislo_domovni: { type: String, required: true },
      cislo_orientacni: { type: String, default: null },
    },
    web: { type: String, required: true },
    ozp: { type: Boolean, required: true },
    prohlidka: { type: Boolean, required: true },
    geo: [{ type: Number, required: true }],
    prijimaci_zkouska: { type: String, required: true },
    prijimaci_zkouska_pocty: {
      nabidnuto: { type: Number, required: true },
      prihlasky: { type: Number, required: true },
      prijati: { type: Number, required: true },
    },
  },
  { versionKey: false }
);

export const School =
  mongoose.models.School ?? mongoose.model("School", schoolSchema);

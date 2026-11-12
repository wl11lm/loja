// ===== EDITE APENAS ESTA PARTE =====
const CONFIG = {
  NOME_LOJA: "Itens à venda",
  WHATSAPP: "5588992901505",          // 55 + DDD + número, sem espaços. Ex.: 5588999999999
  SUPABASE_URL: "https://sudrmmmmyymnuqnveikk.supabase.co",
  SUPABASE_KEY: "sb_publishable_c8vj97lW1AozQ0pyM2rCcA_95bhX5Yy",
};
// ===== daqui para baixo não precisa mexer =====
const db = supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_KEY);
const $ = id => document.getElementById(id);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Cloudflare Pages Serverless Edge Function: GET /api/pulse
export async function onRequestGet(context) {
  const cf = (context && context.request && context.request.cf) ? context.request.cf : {};
  const payload = {
    ok: true,
    colo: cf.colo || "EDGE",
    country: cf.country || "MY",
    httpProtocol: cf.httpProtocol || "HTTP/3",
    tlsVersion: cf.tlsVersion || "TLSv1.3",
    ts: Date.now()
  };
  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store, max-age=0"
    }
  });
}

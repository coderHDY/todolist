// 壁纸：https://bing.img.run/m.php
// const BASE_URL = 'https://hdy.gh520.xyz';

const commonReq = async (url, params) => {
  try {
    const ans = await fetch(url, params);
    if (ans.status < 400) {
      const data = await ans[ans.headers.get("content-type").includes("application/json") ? "json" : "text"]();
      return data;
    } else {
      console.warn(ans);
      return ans;
    }
  } catch (e) {
    console.warn(e);
    return null;
  }
}

const get = async (url, params) => {
  if (!params) return await commonReq(url, { method: "GET" });
  if (url.includes("?")) {
    url += `&${Object.entries(params).map(([key, val]) => `${key}=${encodeURIComponent(val)}`).join("&")}`
  } else {
    url += `?${Object.entries(params).map(([key, val]) => `${key}=${encodeURIComponent(val)}`).join("&")}`
  }
  return await commonReq(url, { method: "GET" });
}

const post = async (url, params) => {
  const body = JSON.stringify(params);
  return await commonReq(url, { method: "POST", body });
}

export {
  get,
  post,
}

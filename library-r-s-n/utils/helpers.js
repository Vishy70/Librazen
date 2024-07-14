export const getURL = (path = "") => {
  let url =
    //If site is publicly hosted
    process?.env?.NEXT_PUBLIC_SITE_URL &&
    process.env.NEXT_PUBLIC_SITE_URL.trim() !== ""
      ? process.env.NEXT_PUBLIC_SITE_URL
      : //If site is hosted on Vercel
      process?.env?.NEXT_PUBLIC_VERCEL_URL &&
        process.env.NEXT_PUBLIC_VERCEL_URL.trim() !== ""
      ? process.env.NEXT_PUBLIC_VERCEL_URL
      : //Local hosting
        "http://localhost:3000/";

  url = url.replace(/\/+$/, ""); //trim + remove trailing /
  url = url.includes("http") ? url : `https://${url}`; //If no http, the publicly available, so use https

  path = path.replace(/^\/+/, ""); //trim + remove leading /

  let returnPath = path ? `${url}/${path}` : url;
  return returnPath.endsWith('/') ? returnPath : `${returnPath}/`
};

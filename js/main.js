// build a new URL with parameters p0-p6, fbclid and fbpaid
function buildURL(p0, p1, p2, p3, p4, p5, p6, fbclid, fbpid) {
  if (!p0) {
    return null;
  }
  tracker_token = p0;
  if (p1 || p2) {
    campaign = p1 + "(" + p2 + ")";
  } else {
    campaign = "";
  }
  if (p3 || p4) {
    adgroup = p3 + "(" + p4 + ")";
  } else {
    adgroup = "";
  }
  if (p5 || p6) {
    creative = p5 + "(" + p6 + ")";
  } else {
    creative = "";
  }
  if (!fbclid) {
    fbclid = "";
  }
  if (!fbpid) {
    fbpid = "";
  }
  // build a tracker URL
  let params = {
    campaign,
    adgroup,
    creative,
    fbclid,
    fb_pixel_id: "847990737515736",
    fb_access_token:
      "EAAM1xfjA7ZCQBO9wxnOFWZCDyvcN9p9mzPQRNLc1MwP5zKtcJjCqMvGGNC9Xgeyx5VdHLEVw4GEcE5zZAlePhylB1kVFn17Yc2msibrqM9OqfwssswJp7ZAHNr0XZBxFVZAq8RzQZBmjCMZC6dAiG0fLiZAhUPfEcZCHGiKtKghwFLLxb6nkuxgDeiFULu3hhCJN2YQAZDZD",
    redirect: "https://download.indusbet888.in/indusbet/indusbet-C04.apk",
  };

  if (fbpid) {
    params.fbpid = fbpid;
  }
  let newURL =
    "https://app.adjust.com/" +
    tracker_token +
    "?" +
    Object.keys(params)
      .map((key) => key + "=" + encodeURIComponent(params[key]))
      .join("&");
  return newURL;
}

//get fbpid from Cookie written by Facebook Pixel
function getFbPid() {
  let fbPid = document.cookie.match(/(^|;) ?_fbp=([^;]*)(;|$)/);
  if (fbPid) {
    return fbPid[2];
  } else {
    return null;
  }
}

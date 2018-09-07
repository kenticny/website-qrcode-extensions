let _qrcode;

function getCurrentSiteUrl() {
  return new Promise((f) => {
    chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    }, (tabs) => {
      var url = tabs[0].url;
      return f(url)
    });
  })
}

function generateQRCode(url) {
  if (!_qrcode || !(_qrcode instanceof QRCode)) {
    _qrcode = new QRCode(document.getElementById("qrcode"))
  }
  _qrcode.makeCode(url);
}

getCurrentSiteUrl().then(url => {
  $('.website_url').text(url)
  generateQRCode(url)
})
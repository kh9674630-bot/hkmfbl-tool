(function(){
  var key = 'hkmfbl_cookie';
  if (typeof localStorage !== 'undefined' && localStorage.getItem(key)) return;
  var banner = document.createElement('div');
  banner.id = 'hkmfbl-cookie-banner';
  banner.innerHTML = '<div style="position:fixed;bottom:0;left:0;right:0;z-index:9999;background:#fff;border-top:1px solid #e2e8f0;box-shadow:0 -2px 8px rgba(0,0,0,.1);padding:16px 24px;font-size:14px;color:#475569;font-family:system-ui,sans-serif;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;"><span>本网站使用 Cookie 来改善您的浏览体验。您可以接受所有 Cookie，拒绝非必要 Cookie，或管理您的偏好设置。详见 <a href="/privacy" style="color:#2563eb;text-decoration:underline;">隐私政策</a>。</span><div style="display:flex;gap:8px;flex-shrink:0;"><button id="hkmfbl-accept" style="padding:6px 16px;background:#2563eb;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:13px;font-weight:500;">接受全部</button><button id="hkmfbl-reject" style="padding:6px 16px;background:#fff;color:#475569;border:1px solid #cbd5e1;border-radius:8px;cursor:pointer;font-size:13px;font-weight:500;">拒绝非必要</button><button id="hkmfbl-manage" style="padding:6px 16px;background:transparent;color:#64748b;border:none;cursor:pointer;font-size:13px;text-decoration:underline;">管理偏好</button></div></div>';
  document.body.appendChild(banner);
  function acceptCookie() {
    if (typeof localStorage !== 'undefined') localStorage.setItem(key, 'accepted');
    banner.style.display = 'none';
  }
  var acceptBtn = document.getElementById('hkmfbl-accept');
  var rejectBtn = document.getElementById('hkmfbl-reject');
  var manageBtn = document.getElementById('hkmfbl-manage');
  if (acceptBtn) acceptBtn.addEventListener('click', acceptCookie);
  if (rejectBtn) rejectBtn.addEventListener('click', acceptCookie);
  if (manageBtn) manageBtn.addEventListener('click', function() {
    if (typeof localStorage !== 'undefined') localStorage.setItem(key, 'managed');
    banner.style.display = 'none';
  });
})();
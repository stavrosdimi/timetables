function goHome(){
  const p = window.location.pathname;

  // Handle any first-level section folder: courses, cohorts, staff, timetables
  if (/(?:\/)(courses|cohorts|staff|timetables)\//.test(p)) {
    // Replace /{section}/... with /index.html at the site root
    const to = p.replace(/\/(courses|cohorts|staff|timetables)\/.*/, "/index.html");
    try {
      // Build absolute URL preserving current origin (works for http/https and most file:// contexts)
      const u = new URL(window.location.href);
      u.pathname = to;
      window.location.href = u.href;
    } catch (e) {
      // Fallback for strict file:// environments
      window.location.href = "../index.html";
    }
  } else {
    // Already at root (or root-level page)
    window.location.href = "index.html";
  }
}

function goBack(){
  // Try history first; if not possible, go Home
  if (document.referrer && document.referrer !== window.location.href){
    history.back();
  } else if (history.length > 1){
    history.back();
  } else {
    goHome();
  }
}

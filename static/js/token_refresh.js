// ✅ Auto-refresh access token silently
// Refresh the token every 5 minutes
const AUTO_REFRESH_INTERVAL = 5 * 60 * 1000;

setInterval(() => {
  fetch("/auth/refresh", {
    method: "POST",
    credentials: "include"
  })
    .then((res) => {
      if (res.ok) {
        console.log("🔁 Hospital token refreshed");
      } else {
        console.warn("⚠️ Refresh failed, redirecting to login...");
        window.location.href = "/auth/login";
      }
    })
    .catch((err) => {
      console.error("❌ Refresh error:", err);
      window.location.href = "/auth/login";
    });
}, AUTO_REFRESH_INTERVAL);

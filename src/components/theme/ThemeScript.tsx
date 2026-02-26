export default function ThemeScript() {
  const code = `
    (function () {
      try {
        var url = new URL(window.location.href);
        var qp = url.searchParams.get("theme");
        var saved = localStorage.getItem("fixy-theme");
        var theme = qp || saved || "fixy-blue";
        document.documentElement.setAttribute("data-theme", theme);
        if (qp) localStorage.setItem("fixy-theme", qp);
      } catch (e) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
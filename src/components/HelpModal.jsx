import { useState } from "react";

const sections = [
  {
    title: "Viewing Meetings",
    content:
      "Meetings load automatically for the current date. No login required. Data is pulled live from the UN Journal.",
  },
  {
    title: "Adding a Manual Meeting",
    content:
      "Tap '+ Add Meeting', fill in the organizer type, room, time, and status (Open / Closed / Walkthrough), then save. It appears immediately for all guides.",
  },
  {
    title: "Adding a Note",
    content:
      "Tap the note icon next to any meeting to attach context — such as the Security Council topic or a special guest. All guides see it instantly.",
  },
  {
    title: "Cancelling a Meeting",
    content:
      "Tap the cancel option next to a meeting. It will appear with a strikethrough. Tap Restore to undo.",
  },
  {
    title: "Adjourning a Meeting",
    content:
      "If a meeting ends earlier than scheduled, tap Adjourn to signal to other guides that it's no longer in session.",
  },
  {
    title: "Deleting a Manual Meeting",
    content:
      "Manual meetings (ones you added) can be permanently removed using the delete button next to them.",
  },
  {
    title: "International Observances",
    content:
      "The banner at the top shows today's UN observance. Tap it for the official UN page. On Fridays, the weekend observances are shown in advance. On Mondays, the past weekend's observances appear.",
  },
];

const faqs = [
  {
    q: "The app says 'using old data'",
    a: "Tap the 🌐 globe icon to force a fresh fetch from the UN Journal API.",
  },
  {
    q: "Meetings aren't loading",
    a: "Check your internet connection and refresh the page. The app requires connectivity to fetch live data.",
  },
  {
    q: "Data doesn't match the official Journal",
    a: "The app uses the same source as the Journal. A discrepancy usually means a very recent update — wait a moment, refresh, or tap the globe icon.",
  },
  {
    q: "Will colleagues see my changes?",
    a: "Yes. All manual meetings, notes, cancellations, and adjournments are shared across all users in real time.",
  },
  {
    q: "Do I need an account?",
    a: "No. Just open the URL or tap the home screen icon.",
  },
];

export default function HelpModal() {
  const [open, setOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* Trigger button — position this inside your header/navbar */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Help"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "1.1rem",
          fontWeight: "700",
          color: "#4a90d9",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          lineHeight: 1,
        }}
      >
        ?
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            zIndex: 1000,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          {/* Modal panel */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: "16px 16px 0 0",
              width: "100%",
              maxWidth: "600px",
              maxHeight: "88vh",
              overflowY: "auto",
              padding: "24px 20px 40px",
              boxSizing: "border-box",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  color: "#1a2a4a",
                }}
              >
                UN Daily Briefing — Help
              </h2>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                style={{
                  background: "#f0f4f8",
                  border: "none",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  fontSize: "1rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#444",
                }}
              >
                ✕
              </button>
            </div>

            {/* How to Use */}
            <h3
              style={{
                fontSize: "0.75rem",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#4a90d9",
                margin: "0 0 12px",
              }}
            >
              How to Use
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
              {sections.map((s) => (
                <div
                  key={s.title}
                  style={{
                    background: "#f7f9fc",
                    borderRadius: "10px",
                    padding: "12px 14px",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 4px",
                      fontWeight: "600",
                      fontSize: "0.9rem",
                      color: "#1a2a4a",
                    }}
                  >
                    {s.title}
                  </p>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "#555", lineHeight: "1.5" }}>
                    {s.content}
                  </p>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <h3
              style={{
                fontSize: "0.75rem",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#4a90d9",
                margin: "0 0 12px",
              }}
            >
              Troubleshooting & FAQ
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {faqs.map((f, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid #e5eaf0",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: "100%",
                      background: openFaq === i ? "#eef3fb" : "#fff",
                      border: "none",
                      padding: "12px 14px",
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.88rem",
                      fontWeight: "600",
                      color: "#1a2a4a",
                    }}
                  >
                    {f.q}
                    <span style={{ color: "#4a90d9", marginLeft: "8px", flexShrink: 0 }}>
                      {openFaq === i ? "▲" : "▼"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <p
                      style={{
                        margin: 0,
                        padding: "0 14px 12px",
                        fontSize: "0.85rem",
                        color: "#555",
                        lineHeight: "1.5",
                        background: "#eef3fb",
                      }}
                    >
                      {f.a}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <p
              style={{
                marginTop: "24px",
                fontSize: "0.8rem",
                color: "#888",
                textAlign: "center",
              }}
            >
              Questions or issues? Contact <strong>Cedric</strong>.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

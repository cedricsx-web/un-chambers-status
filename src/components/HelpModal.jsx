import { useState } from "react";

const SECTIONS = [
  {
    title: "Chamber Status",
    content: "Each chamber card shows a colored status bar at the top. GREEN = OPEN (no active meeting). RED = CLOSED (meeting in progress). YELLOW = WT (Walk-Through allowed). ORANGE = WT 3rd or WT 4th floor (GA Hall only). Tap the status bar to cycle through statuses. Status is shared live across all guides.",
  },
  {
    title: "Viewing Meetings",
    content: "Meetings load automatically for the current date from the UN Journal. Tap the globe icon in the header to manually refresh the journal. Data updates every morning around 8-9 AM New York time.",
  },
  {
    title: "Adding a Meeting",
    content: "Tap the + button next to All Meetings Today. Fill in organizer type, name, title, room, time and status. The meeting appears immediately in the list and in the correct chamber card for all guides.",
  },
  {
    title: "Adding a Note",
    content: "Tap the pencil icon next to any meeting to add context: Security Council topic, special guest, subject of debate. Notes appear under the meeting title in both the list and the chamber card, visible to all guides.",
  },
  {
    title: "Editing or Clearing a Note",
    content: "Tap the pencil icon again to edit an existing note. In the chamber card, tap the X next to the note to clear it instantly.",
  },
  {
    title: "Cancelling a Meeting",
    content: "In the chamber card, tap the three-dot menu next to a meeting and choose Cancel. The meeting disappears from the chamber. In the meetings list it appears with a strikethrough. Tap the restore button to undo.",
  },
  {
    title: "Adjourning a Meeting",
    content: "When a meeting ends earlier than scheduled, tap the three-dot menu in the chamber card and choose Adjourned. The meeting shows a strikethrough with an ADJOURNED badge. The chamber status automatically switches to OPEN. Tap the restore arrow to undo.",
  },
  {
    title: "Removing an Added Meeting",
    content: "Manually added meetings can be permanently deleted via the three-dot menu in the chamber card (Remove) or the X button in the meetings list.",
  },
  {
    title: "International Observances",
    content: "The banner below the header shows today's UN international day with a link to the official UN page. On Fridays the upcoming weekend observances are shown. On Mondays the past weekend observances appear.",
  },
  {
    title: "Security Council Details",
    content: "The SC chamber card shows a PRESS button that links directly to press.un.org for the latest Security Council coverage.",
  },
  {
    title: "Refresh & Data",
    content: "Tap the globe icon (top left) to trigger a fresh journal fetch. The app updates automatically every 30 seconds for statuses, notes, cancellations and added meetings so all guides stay in sync.",
  },
  {
    title: "Troubleshooting",
    content: "If the app shows old data, tap the globe icon to refresh. If issues persist, contact Cedric.",
  },
];

export default function HelpModal() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <button
        onClick={function(){setOpen(true);}}
        style={{
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#fff",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          fontSize: "14px",
          fontWeight: "700",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontFamily: "inherit",
        }}
      >?</button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            onClick={function(){setOpen(false);setExpanded(null);}}
            style={{
              position: "fixed", inset: 0,
              background: "rgba(0,0,0,0.6)",
              zIndex: 1000,
            }}
          />

          {/* Modal */}
          <div style={{
            position: "fixed",
            bottom: 0, left: 0, right: 0,
            background: "linear-gradient(180deg,#0d2044,#0a1628)",
            borderRadius: "20px 20px 0 0",
            border: "1px solid rgba(255,255,255,0.12)",
            zIndex: 1001,
            maxHeight: "80vh",
            overflowY: "auto",
            padding: "20px 20px calc(env(safe-area-inset-bottom,0px) + 20px)",
          }}>
            {/* Handle */}
            <div style={{width:"40px",height:"4px",borderRadius:"2px",background:"rgba(255,255,255,0.2)",margin:"0 auto 16px"}}/>

            {/* Header */}
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"18px"}}>
              <div>
                <div style={{fontSize:"10px",letterSpacing:"2px",color:"rgba(255,255,255,0.4)",textTransform:"uppercase"}}>Help</div>
                <div style={{fontSize:"18px",fontWeight:"800",color:"#fff",fontFamily:"'Playfair Display',serif"}}>UN Chambers Status</div>
              </div>
              <button
                onClick={function(){setOpen(false);setExpanded(null);}}
                style={{background:"rgba(255,255,255,0.1)",border:"none",color:"rgba(255,255,255,0.6)",borderRadius:"50%",width:"30px",height:"30px",fontSize:"16px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"inherit"}}
              >&#x2715;</button>
            </div>

            {/* Sections */}
            <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
              {SECTIONS.map(function(s,i){return (
                <div
                  key={i}
                  onClick={function(){setExpanded(expanded===i?null:i);}}
                  style={{
                    background: expanded===i ? "rgba(0,150,214,0.12)" : "rgba(255,255,255,0.04)",
                    border: "1px solid " + (expanded===i ? "rgba(0,150,214,0.3)" : "rgba(255,255,255,0.08)"),
                    borderRadius: "10px",
                    padding: "12px 14px",
                    cursor: "pointer",
                  }}
                >
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span style={{fontSize:"13px",fontWeight:"700",color: expanded===i ? "#00A0DC" : "rgba(255,255,255,0.85)"}}>{s.title}</span>
                    <span style={{fontSize:"11px",color:"rgba(255,255,255,0.3)",flexShrink:0,marginLeft:"8px"}}>{expanded===i ? "&#9650;" : "&#9660;"}</span>
                  </div>
                  {expanded===i && (
                    <p style={{margin:"10px 0 0",fontSize:"13px",color:"rgba(255,255,255,0.7)",lineHeight:"1.6"}}>{s.content}</p>
                  )}
                </div>
              );})}
            </div>

            <p style={{textAlign:"center",fontSize:"11px",color:"rgba(255,255,255,0.25)",marginTop:"20px"}}>
              UN Chambers Status - UNHQ Guides
            </p>
          </div>
        </>
      )}
    </>
  );
}

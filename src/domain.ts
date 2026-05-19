export const domain = {
  "kind": "calendar",
  "title": "Compliance Calendar Lite",
  "purpose": "A purpose-built calendar interface for a minimalist calendar for recurring nonprofit and small-business administrative deadlines.",
  "inputTitle": "Product-specific inputs",
  "previewTitle": "Generated working outputs",
  "tableTitle": "Recurring deadlines",
  "metricLabels": [
    "Deadline Coverage",
    "Overdue Risk",
    "Evidence Discipline"
  ],
  "fields": [
    {
      "id": "organization-client",
      "label": "Organization / client",
      "type": "text",
      "sample": "Eastside Youth Arts Collective",
      "placeholder": "Enter organization / client"
    },
    {
      "id": "primary-goal",
      "label": "Primary goal",
      "type": "text",
      "sample": "recurring deadlines tracked before due date",
      "placeholder": "Enter primary goal"
    },
    {
      "id": "owner-reviewer",
      "label": "Owner / reviewer",
      "type": "text",
      "sample": "Volta project lead",
      "placeholder": "Enter owner / reviewer"
    },
    {
      "id": "evidence-source",
      "label": "Evidence source",
      "type": "text",
      "sample": "Owner interview + public audit",
      "placeholder": "Enter evidence source"
    },
    {
      "id": "start-date",
      "label": "Start date",
      "type": "date",
      "sample": "2026-03-10",
      "placeholder": "Enter start date"
    },
    {
      "id": "deadline-date",
      "label": "Deadline date",
      "type": "date",
      "sample": "2026-04-15",
      "placeholder": "Enter deadline date"
    },
    {
      "id": "cadence-days",
      "label": "Cadence days",
      "type": "number",
      "sample": 7,
      "placeholder": "Enter cadence days"
    },
    {
      "id": "review-buffer-days",
      "label": "Review buffer days",
      "type": "number",
      "sample": 3,
      "placeholder": "Enter review buffer days"
    }
  ],
  "rows": [
    "Deadline type entered",
    "Jurisdiction noted",
    "Owner assigned",
    "Frequency selected",
    "Next due date generated",
    "Evidence requirement set",
    "Completion log started",
    "ICS calendar exported"
  ],
  "artifacts": [
    "ICS compliance calendar",
    "Owner task CSV",
    "Evidence log"
  ],
  "checks": [
    "Every deadline needs owner/evidence type",
    "Completed items need date",
    "Legal disclaimer included"
  ],
  "sampleClient": "Eastside Youth Arts Collective"
};

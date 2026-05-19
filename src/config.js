export const config = {
    "number": 20,
    "slug": "compliance-calendar-lite",
    "title": "Compliance Calendar Lite",
    "category": "Finance & Grants",
    "tagline": "A minimalist calendar for recurring nonprofit and small-business administrative deadlines.",
    "persona": "Operations students supporting nonprofits and community organizations.",
    "gap": "Compliance misses are rarely due to complexity alone. They are due to no shared system.",
    "niche": "Volunteer-led nonprofits and small owner-operators.",
    "metric": "recurring deadlines tracked before due date",
    "modules": [
        "Deadline templates",
        "Responsible owner field",
        "Evidence upload guides",
        "Escalation reminders"
    ],
    "theme": {
        "accent": "#16a34a",
        "accent2": "#86efac",
        "emoji": "\ud83d\udcb8",
        "metricLabel": "Funding readiness",
        "workflow": [
            "Collect verified facts",
            "Map requirements to evidence",
            "Score readiness",
            "Export funder-ready packet"
        ],
        "privacy": "Financial and grant materials can be sensitive. Keep exports local and label confidential notes."
    },
    "statuses": [
        "not-started",
        "blocked",
        "in-progress",
        "ready",
        "approved"
    ],
    "criteria": [
        {
            "id": "deadline-templates",
            "label": "Deadline templates",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify deadline templates with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "responsible-owner-field",
            "label": "Responsible owner field",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify responsible owner field with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "evidence-upload-guides",
            "label": "Evidence upload guides",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify evidence upload guides with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "escalation-reminders",
            "label": "Escalation reminders",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify escalation reminders with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "evidence-quality",
            "label": "Evidence quality",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
        },
        {
            "id": "owner-handoff",
            "label": "Owner handoff",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Make the output understandable and maintainable by a nontechnical owner."
        },
        {
            "id": "mission-alignment",
            "label": "Mission alignment",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Show how this advances digital equity, student growth, or pro bono delivery."
        },
        {
            "id": "qa-safety",
            "label": "QA and safety",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
        }
    ],
    "templates": {
        "actions": [
            "Run a real Volta scenario for Compliance Calendar Lite and capture baseline evidence.",
            "Complete the deadline templates workflow with owner-safe notes.",
            "Resolve all blocked rubric items and add evidence for every ready item.",
            "Export the handoff packet and review it with a mentor before client use."
        ]
    },
    "sample": {
        "clientName": "Eastside Youth Arts Collective",
        "chapter": "NYC",
        "studentLead": "Volta Student Lead",
        "notes": "Grant and finance readiness project for a small community nonprofit. Compliance Calendar Lite sample.",
        "evidencePrefix": "Compliance Calendar Lite",
        "evidence": [
            "Discovery call notes captured with owner confirmation.",
            "Public digital footprint reviewed and summarized.",
            "Mentor QA comments attached before handoff."
        ]
    }
};
//# sourceMappingURL=config.js.map